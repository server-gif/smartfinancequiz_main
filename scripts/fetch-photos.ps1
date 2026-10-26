<#
.SYNOPSIS
  Downloads the 14 article photographs into public\images\photos\.

.DESCRIPTION
  SmartFinanceQuiz article images are real photographs used under the Unsplash
  Licence: free for commercial use, no attribution required
  (https://unsplash.com/license). Copyright stays with each photographer, so the
  Terms page deliberately does not describe photographs as SmartFinanceQuiz work.

  Files are self-hosted rather than hot-linked, so a removed or renamed upstream
  file can never break the live site.

  This script is idempotent: an existing valid file is skipped, so re-running it
  only fetches what is missing.

.PARAMETER Force
  Re-download every photo even if a valid copy already exists.

.PARAMETER PicsumFallback
  For any photo whose Unsplash id no longer resolves, fetch a generic real
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

# slug => Unsplash file id. This table is the single source of truth; src/data
# and src/config never name a third-party image URL themselves.
$photos = [ordered]@{
  'emergency-fund-size-guide'                 = 'photo-1523772721666-22ad3c3b6f90'
  'compounding-quiet-engine'                  = 'photo-1518281361980-b26bfd556770'
  'monthly-vs-lump-sum-investing'             = 'photo-1633526543814-9718c8922b7a'
  'idle-cash-and-inflation'                   = 'photo-1604719312566-8912e9227c6a'
  'gold-property-cash-compared'               = 'photo-1610375461246-83df859d849d'
  'money-biases-that-cost-you'                = 'photo-1553729459-efe14ef6055d'
  'budget-rule-that-survives'                 = 'photo-1484480974693-6ca0a78fb36b'
  'year-end-tax-checklist'                    = 'photo-1772588627757-32365608b421'
  'hidden-bank-charges'                       = 'photo-1556742031-c6961e8560b0'
  'what-moves-your-credit-score'              = 'photo-1554224155-8d04cb21cd6c'
  'pricing-your-side-business'                = 'photo-1664575602276-acd073f104c1'
  'salary-negotiation-returns'                = 'photo-1600880292203-757bb62b4baf'
  'retirement-income-paycheck'                = 'photo-1658632302217-984d432b4d38'
  'sinking-funds-planned-costs'               = 'photo-1538388933536-31c33d2703a0'
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

  $url = "https://images.unsplash.com/$id?fm=jpg&q=80&w=1200&h=675&fit=crop"

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
    Write-Host "OK    $slug  <-  unsplash/$id" -ForegroundColor Green
    $ok++
  } else {
    $failed += $slug
  }
}

Write-Host ''
Write-Host "Downloaded: $ok   Skipped: $skipped   Missing: $($failed.Count)" -ForegroundColor Cyan

if ($failed.Count -gt 0) {
  Write-Host 'These articles have no photo yet. Pick any free image on unsplash.com and' -ForegroundColor Yellow
  Write-Host "save it as public\images\photos\<slug>.jpg, or re-run with -PicsumFallback:" -ForegroundColor Yellow
  $failed | ForEach-Object { Write-Host "  $_" -ForegroundColor Yellow }
  Write-Host 'Until then each article shows its own illustration as a fallback.' -ForegroundColor Yellow
  exit 1
}

Write-Host 'All article photos are in place.' -ForegroundColor Green
