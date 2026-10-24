<#
.SYNOPSIS
  Downloads the 14 article photographs into public\images\photos\.

.DESCRIPTION
  FinanceQuizApp article images are real photographs used under the Pexels Licence:
  free for commercial use, no attribution required (https://www.pexels.com/license/).
  Copyright stays with each photographer, so the Terms page deliberately does not
  describe photographs as FinanceQuizApp work.

  Files are self-hosted rather than hot-linked, so a removed or renamed upstream
  file can never break the live site.

  This script is idempotent: an existing valid file is skipped, so re-running it
  only fetches what is missing.

.PARAMETER Force
  Re-download every photo even if a valid copy already exists.

.PARAMETER PicsumFallback
  For any photo whose Pexels id no longer resolves, fetch a generic real
  photograph from picsum.photos instead. Keeps the site photographic, but the
  picture will not match the article topic, so use it only as a last resort.

.EXAMPLE
  npm run photos
  powershell -ExecutionPolicy Bypass -File .\scripts\fetch-photos.ps1 -Force
#>
[CmdletBinding()]
param(
  [switch]$Force,
  [switch]$PicsumFallback
)

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$dest = Join-Path $root 'public\images\photos'

# slug => Pexels photo id. This table is the single source of truth; src/data
# and src/config never name a third-party image URL themselves.
$photos = [ordered]@{
  'retirement-savings-roadmap'                = 7075061
  'real-estate-vs-stocks-first-investment'    = 210617
  'education-debt-repayment-plan'              = 6559598
  'passive-income-streams-reality-check'      = 3861958
  'etf-vs-mutual-fund-which-wins'            = 7943016
  'emi-structures-smart-borrowing'            = 4978884
  'freelancer-irregular-income-playbook'      = 3861972
  'cryptocurrency-explained-simply'           = 28906033
  'recession-proofing-your-household'         = 590020
  'health-insurance-right-coverage'           = 4075769
  'online-payment-security-essentials'        = 28841475
  'fixed-income-options-compared'             = 7664577
  'estate-planning-starting-early'            = 8290404
  'gig-economy-tax-and-growth'                = 4392042
}

New-Item -ItemType Directory -Force -Path $dest | Out-Null

# A real 1200px JPEG is tens of kilobytes; anything smaller is an error page
# saved with a .jpg name, which would render as a broken image.
function Test-ValidJpeg([string]$path) {
  if (-not (Test-Path $path)) { return $false }
  if ((Get-Item $path).Length -lt 20KB) { return $false }
  $magic = Get-Content -Path $path -Encoding Byte -TotalCount 2 -ErrorAction SilentlyContinue
  return ($magic.Count -eq 2 -and $magic[0] -eq 0xFF -and $magic[1] -eq 0xD8)
}

$ok = 0; $skipped = 0; $failed = @()

foreach ($slug in $photos.Keys) {
  $id = $photos[$slug]
  $out = Join-Path $dest "$slug.jpg"

  if (-not $Force -and (Test-ValidJpeg $out)) {
    Write-Host "SKIP  $slug (already present)" -ForegroundColor DarkGray
    $skipped++
    continue
  }

  $url = "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=1200"

  try {
    Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -TimeoutSec 60
  } catch {
    Write-Host "FAIL  $slug  ($($_.Exception.Message))" -ForegroundColor Red
    Remove-Item $out -ErrorAction SilentlyContinue
  }

  if (-not (Test-ValidJpeg $out) -and $PicsumFallback) {
    try {
      Invoke-WebRequest -Uri "https://picsum.photos/seed/$slug/1200/675" `
        -OutFile $out -UseBasicParsing -TimeoutSec 60
      Write-Host "WARN  $slug used a picsum.photos placeholder - not topic relevant" -ForegroundColor Yellow
    } catch {
      Remove-Item $out -ErrorAction SilentlyContinue
    }
  }

  if (Test-ValidJpeg $out) {
    Write-Host "OK    $slug  <-  pexels/$id" -ForegroundColor Green
    $ok++
  } else {
    $failed += $slug
  }
}

Write-Host ''
Write-Host "Downloaded: $ok   Skipped: $skipped   Missing: $($failed.Count)" -ForegroundColor Cyan

if ($failed.Count -gt 0) {
  Write-Host 'These articles have no photo yet. Pick any free image on pexels.com and' -ForegroundColor Yellow
  Write-Host "save it as public\images\photos\<slug>.jpg, or re-run with -PicsumFallback:" -ForegroundColor Yellow
  $failed | ForEach-Object { Write-Host "  $_" -ForegroundColor Yellow }
  Write-Host 'Until then each article shows its own illustration as a fallback.' -ForegroundColor Yellow
  exit 1
}

Write-Host 'All article photos are in place.' -ForegroundColor Green
