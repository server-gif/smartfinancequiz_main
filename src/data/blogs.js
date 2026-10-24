/**
 * Article data. UI components receive these objects through props —
 * add, remove or edit articles here without touching any component.
 *
 * Content blocks: { type: 'p'|'h2'|'h3', text } | { type: 'ul'|'ol', items } | { type: 'callout', title, text }
 * All content is general and educational; it is not personalised financial advice.
 */

const p = (text) => ({ type: 'p', text });
const h2 = (text) => ({ type: 'h2', text });
const h3 = (text) => ({ type: 'h3', text });
const ul = (...items) => ({ type: 'ul', items });
const ol = (...items) => ({ type: 'ol', items });
const callout = (title, text) => ({ type: 'callout', title, text });

const RAW_BLOGS = [
  {
    id: 1,
    slug: 'retirement-savings-roadmap',
    title: 'Your Retirement Savings Roadmap by Decade',
    category: 'Financial Planning',
    section: 'finance',
    excerpt:
      'Whether you are 25 or 55, it is never too early or too late to structure a retirement plan. A decade-by-decade guide to building a secure future.',
    isoDate: '2026-10-20',
    author: 'Planning Desk',
    featured: true,
    imageAlt: 'An elderly couple walking along a sunlit beach path, holding hands with a calm ocean horizon ahead',
    content: [
      p('Retirement might feel distant when you are young, yet every decade brings unique opportunities and challenges. The earlier you design a deliberate savings strategy, the less monthly effort is required to reach a comfortable endpoint.'),
      h2('Your Twenties: The Foundation Phase'),
      p('This decade is about habit formation, not necessarily large contributions. Opening a retirement account, understanding employer-matching schemes and automating even a small percentage of salary creates momentum that outperforms later catch-up attempts.'),
      h3('Key Actions in This Phase'),
      ol(
        'Register with the national pension scheme or workplace retirement plan immediately upon first employment.',
        'Aim to contribute at least enough to capture the full employer match.',
        'Keep investment allocations aggressive — equities should dominate since the time horizon exceeds three decades.',
        'Resist withdrawing from retirement accounts for short-term needs.',
      ),
      h2('Your Thirties: Acceleration Mode'),
      p('Income typically rises during this decade while expenses also grow — housing costs, children, lifestyle upgrades. The strategy is to increase contribution percentages with every salary bump rather than inflating spending to match earnings.'),
      callout('Benchmark', 'By age 35, a commonly referenced target is saving one times your annual salary. Reaching it requires roughly 15% contributions from age 25 assuming a 7% average annual return.'),
      h2('Your Forties: Peak Earning Years'),
      p('Often the decade with the highest disposable income. Max out available contribution limits, begin debt elimination and introduce more balanced allocations — perhaps 60% equities and 40% fixed income — to protect what has accumulated.'),
      h2('Your Fifties: Final Stretch'),
      p('Catch-up contributions become available in many schemes for those over 50. Prioritise clearing all non-mortgage liabilities, building a one-to-two year cash buffer and consulting a fee-only planner to optimise withdrawal sequencing.'),
      h2('Shifting Mindset'),
      ul(
        'Retirement is not a single event — it is a transition from earning to drawing down.',
        'Healthcare costs and inflation erode purchasing power, so factor them explicitly.',
        'The goal is not a specific number but a reliable monthly income stream that outlives you.',
      ),
    ],
  },

  {
    id: 2,
    slug: 'real-estate-vs-stocks-first-investment',
    title: 'Real Estate vs Stocks: Where Should Your First Major Investment Go?',
    category: 'Investing',
    section: 'investing',
    excerpt:
      'Two of the most popular wealth-building vehicles compared on liquidity, leverage, returns and effort required — so you can choose with clear eyes.',
    isoDate: '2026-10-17',
    author: 'Markets Team',
    imageAlt: 'Aerial drone view of a residential neighbourhood with tree-lined streets, a set of keys superimposed in the foreground',
    content: [
      p('When someone has accumulated a meaningful sum and wants to deploy it into a tangible wealth-building asset, the conversation almost always narrows to real estate or the stock market. Both have created fortunes, but they demand very different resources beyond money.'),
      h2('The Case for Stocks'),
      p('Equity markets offer near-instant liquidity, minimal ongoing effort and fractional ownership — you can start with a small amount. Historically broad indices have returned around 9–11% annually over multi-decade windows, including dividends reinvested.'),
      ul(
        'No maintenance, tenants or property management.',
        'Selling takes minutes and costs almost nothing.',
        'Diversification across hundreds of companies in a single transaction.',
        'Lower entry threshold — no down payment needed.',
      ),
      h2('The Case for Real Estate'),
      p('Property offers leverage (a bank lends 70–80% of the asset value), tangible control, potential rental income and tax benefits in many jurisdictions. Appreciation tends to be slower per year but magnified by borrowed capital.'),
      h3('Hidden Demands'),
      p('Beyond the down payment, ownership means dealing with structural repairs, legal compliance, tenant turnover, vacancy risk and transaction costs that can eat 6–8% per purchase-and-sale round trip.'),
      callout('Liquidity Gap', 'A stock position can be converted to cash the same day. A property typically takes three to six months to sell at fair value, and emergency exits often require steep discounts.'),
      h2('Blending Both'),
      p('You do not have to choose exclusively. Real Estate Investment Trusts (REITs) let you hold property exposure inside a stock-like wrapper. Meanwhile a diversified equity portfolio covers sectors that benefit from construction, materials and finance.'),
      h2('Questions to Answer First'),
      ol(
        'What is your true time horizon before needing this capital back?',
        'How much ongoing effort can you realistically commit?',
        'Are you comfortable with concentrated single-asset risk?',
        'Can you handle an illiquid position for at least five years?',
      ),
    ],
  },

  {
    id: 3,
    slug: 'education-debt-repayment-plan',
    title: 'A Practical Framework for Eliminating Education Debt',
    category: 'Debt Management',
    section: 'saving',
    excerpt:
      'Graduate with a repayment strategy, not just a degree. A step-by-step plan to shrink or clear study-related debt without derailing your financial life.',
    isoDate: '2026-10-14',
    author: 'Finance Desk',
    imageAlt: 'A stack of textbooks beside a graduation cap, with a red diagonal line crossing out a large debt figure on a notepad',
    content: [
      p('Education-related borrowing can follow a graduate for a decade or more, silently consuming a portion of every paycheck. However, debt of any size responds to structured repayment — and the sooner a system is adopted, the shorter the total cost.'),
      h2('Start With Full Transparency'),
      p('List every outstanding obligation: original amount, current balance, interest rate, minimum payment, lender name and whether the rate is fixed or variable. Many graduates underestimate their total burden because they never see it in one view.'),
      callout('Snapshot Tip', 'Log into your servicer portal and export the amortisation schedule. If it is not available, use a free repayment calculator online — just search "debt amortisation calculator".'),
      h2('Choosing a Repayment Method'),
      h3('Avalanche Strategy'),
      p('Direct all extra payments towards the balance with the highest interest rate while maintaining minimums on the rest. Mathematically the cheapest approach because it eliminates the most expensive compounding first.'),
      h3('Snowball Strategy'),
      p('Attack the smallest balance first. The psychological win of closing an entire account often keeps momentum when a higher-rate balance would take months to show progress.'),
      h2('Income-Driven Options'),
      ul(
        'Extended repayment spreads payments over 20–25 years, lowering monthly burden but increasing total interest.',
        'Graduated plans start low and rise every two years — suited to careers with predictable salary jumps.',
        'Consolidation merges multiple obligations into one payment, simplifying management but potentially losing borrower protections.',
      ),
      h2('Freeing Up Additional Cash'),
      ol(
        'Negotiate salary after the first and third year — a 10% raise applied entirely to debt shortens the timeline significantly.',
        'Take a short-term side engagement and channel 100% of that income into the principal.',
        'Pause discretionary subscriptions until the highest-rate balance is retired.',
        'Apply tax refunds or bonuses as one-time principal cuts.',
      ),
      h2('Protecting the Rest of Your Finances'),
      p('While aggressively repaying, maintain at least a one-month cash buffer and contribute enough to any employer retirement match. Ignoring these creates vulnerability that could force you back into borrowing.'),
    ],
  },

  {
    id: 4,
    slug: 'passive-income-streams-reality-check',
    title: 'Passive Income: Which Streams Actually Deliver in Year One?',
    category: 'Wealth Building',
    section: 'finance',
    excerpt:
      'Not all income streams labelled passive require the same capital or effort. A candid comparison of dividends, rentals, royalties and digital assets.',
    isoDate: '2026-10-11',
    author: 'Planning Desk',
    imageAlt: 'A laptop on a wooden table beside a coffee cup, showing a dashboard with recurring revenue charts, soft morning window light',
    content: [
      p('The phrase passive income attracts attention because the idea of money arriving without hourly effort is compelling. In reality, every stream demands upfront capital, labour or both before it produces meaningful returns. The question is not whether it works, but when.'),
      h2('Dividend Portfolios'),
      p('Investing in companies that distribute profits gives a genuinely low-maintenance cash flow. A portfolio yielding 3–4% on 1,000,000 produces 30,000–40,000 annually before tax. The catch: reaching a portfolio large enough to generate livable income requires substantial capital.'),
      callout('Reinvestment', 'In early years, reinvesting dividends rather than spending them accelerates growth dramatically. A 4% yield on a growing base compounds faster than one being drawn down.'),
      h2('Rental Properties'),
      p('True property ownership is semi-passive at best. Even with a management company handling tenants, you remain exposed to capital expenditures, regulatory changes and market downturns that compress yields.'),
      h2('Royalties and Intellectual Property'),
      ul(
        'Writing a book, composing music or patenting an invention generates royalty income that can last years.',
        'The creative effort is front-loaded, but revenue typically takes 12–24 months to stabilise.',
        'Markets for digital courses and ebooks have lowered barriers — though discoverability is the new bottleneck.',
      ),
      h2('Digital Asset Income'),
      p('Operating a niche website, YouTube channel or app can generate advertising and subscription revenue. However, the word passive is misleading — content requires regular refresh, community interaction and adaptation to platform algorithm changes.'),
      h2('Peer-to-Peer Lending'),
      p('Online platforms connect savers with borrowers, historically yielding 8–14%. Default risk, platform insolvency and limited liquidity mean capital is genuinely at stake. Diversifying across hundreds of small advances reduces but does not eliminate exposure.'),
      h2('Realistic Timeline'),
      ol(
        'Months 1–6: heavy investment of time or capital; minimal income.',
        'Months 6–12: first small revenue arrives; inconsistency is normal.',
        'Year 2+: streams stabilise if you maintain quality and adapt.',
        'Year 5+: truly compounding returns if profits are reinvested.',
      ),
    ],
  },

  {
    id: 5,
    slug: 'etf-vs-mutual-fund-which-wins',
    title: 'ETFs vs Traditional Mutual Funds: The Honest Comparison',
    category: 'Investing',
    section: 'investing',
    excerpt:
      'Both wrap many securities into one purchase, yet their structure, cost, tax treatment and trading mechanics differ in ways that matter to your wallet.',
    isoDate: '2026-10-08',
    author: 'Markets Team',
    imageAlt: 'Two overlapping pie charts printed on paper, one labelled ETF and one MF, with a magnifying glass examining the difference between them',
    content: [
      p('Exchange-traded funds and mutual funds share the same fundamental idea: pool investor money and distribute it across a diversified basket. Where they diverge is in how they trade, how they are taxed and what they cost to hold.'),
      h2('Trading and Pricing'),
      p('An ETF trades on an exchange throughout the day at a fluctuating price, just like a share. A mutual fund is bought or redeemed once daily at the net asset value calculated after markets close.'),
      callout('Practical Impact', 'If you want to buy during lunch because news hit the market, only an ETF gives that flexibility. For long-term investors who contribute monthly, this distinction rarely matters.'),
      h2('Cost Structures Compared'),
      ul(
        'ETF expense ratios typically range from 0.03% to 0.50% for index-tracking products.',
        'Actively managed mutual funds often charge 0.8% to 2.0% annually.',
        'Some mutual funds impose sales loads (entry or exit) that ETFs generally avoid.',
        'ETF brokerage commissions exist in some markets but are declining toward zero.',
      ),
      h2('Tax Efficiency'),
      p('The in-kind creation and redemption mechanism of ETFs means fewer internal capital gains are triggered compared to mutual funds. In taxable accounts, this can save investors a noticeable percentage in annual tax bills.'),
      h2('Active vs. Passive Spectrum'),
      p('The ETF wrapper is most commonly associated with index-tracking, but actively managed ETFs now exist. Similarly, some traditional mutual funds track an index. The vehicle is separate from the strategy — judge each product on holdings, manager skill and cost, not the label.'),
      h2('Automatic Investing'),
      p('Many employer retirement plans and systematic investment platforms only offer mutual fund units. If you want a set-and-forget monthly deduction without manual trading, a fund may fit better despite slightly higher cost.'),
      h2('Making the Choice'),
      ol(
        'Define whether you will trade actively or contribute passively each month.',
        'Compare the total expense ratio including any hidden transaction costs.',
        'Assess your tax bracket and whether gains will be realised frequently.',
        'Check whether your existing brokerage platform supports fractional ETF purchases.',
      ),
    ],
  },

  {
    id: 6,
    slug: 'emi-structures-smart-borrowing',
    title: 'Understanding EMI Structures: Before You Sign',
    category: 'Banking',
    section: 'banking',
    excerpt:
      'A lump-sum credit facility with fixed monthly instalments can be useful or ruinous depending on rate, tenure and prepayment terms. Decode the agreement first.',
    isoDate: '2026-10-05',
    author: 'Banking Desk',
    imageAlt: 'A close-up of a hand holding a pen over a credit agreement document with highlighted clauses, a coffee mug and smartphone nearby',
    content: [
      p('Personal credit facilities are unsecured funding that arrives quickly and repays in equal monthly instalments (EMIs). No collateral means higher interest than a mortgage, but for consolidating expensive debt or handling a one-time emergency, a structured EMI can be rational.'),
      h2('How the EMI Is Calculated'),
      p('Each instalment contains two parts: interest on the outstanding principal and a small chunk of principal itself. Early EMIs are interest-heavy; later ones are principal-heavy. Knowing this ratio helps if you plan to prepay.'),
      callout('Formula', 'EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1). Where P is the borrowed amount, r is the monthly rate (annual ÷ 12) and n is the number of months. Online calculators do this instantly — plug in numbers before agreeing to a rate.'),
      h2('Reading the Fine Print'),
      ul(
        'Processing fee: usually 1–3% of the sanctioned amount, deducted before disbursement.',
        'Prepayment penalty: some lenders charge 2–5% for early closure.',
        'Float rate vs. fixed rate: a variable rate may start lower but can rise with policy changes.',
        'Insurance bundling: lenders sometimes push add-on coverage that inflates the effective cost.',
      ),
      h2('Choosing the Right Tenure'),
      p('A longer tenure reduces the monthly burden but increases total interest paid. A shorter tenure means higher EMIs yet saves substantially over the life. Use the formula to compare both and decide what cash-flow you can sustain without stress.'),
      h2('Credit Score Impact'),
      p('Applying triggers a hard inquiry that may temporarily lower your score by a few points. Once approved, timely EMI payments help your history. Defaulting or repeatedly restructuring can severely damage it.'),
      h2('Alternatives Worth Considering'),
      ol(
        'Balance-transfer credit card offers with zero interest for 6–12 months.',
        'Gold-secured advances or fixed-deposit-backed credit at lower rates.',
        'Employer-backed salary advance schemes.',
        'Drawing from a 401(k) or retirement plan (understand withdrawal penalties first).',
      ),
    ],
  },

  {
    id: 7,
    slug: 'freelancer-irregular-income-playbook',
    title: 'The Freelancer Playbook for Managing Unpredictable Pay',
    category: 'Personal Finance',
    section: 'finance',
    excerpt:
      'When income swings between feast and famine, standard budgeting advice fails. A system designed specifically for variable earners.',
    isoDate: '2026-10-02',
    author: 'Finance Desk',
    imageAlt: 'A freelancer working on a laptop at a co-working space, surrounded by colorful sticky notes showing different payment amounts on a timeline',
    content: [
      p('Most personal finance advice assumes a fixed salary arriving the same day each month. Freelancers, consultants and gig workers face the opposite reality: a big invoice one month followed by a dry spell the next. The solution is a smoothed system, not willpower.'),
      h2('Calculate Your Floor Number'),
      p('Add up bare-minimum expenses: housing, utilities, food, insurance, transport, debt payments. This is your survival number — the amount you need every single month regardless of revenue. Knowing it precisely reduces anxiety.'),
      h2('The Multiple-Account Structure'),
      ol(
        'Business income account: all client payments land here first.',
        'Tax reserve account: immediately transfer 25–30% of each invoice.',
        'Operating account: fixed monthly transfer to cover your floor number.',
        'Owner draw: any surplus after tax and operating transfers.',
      ),
      callout('Smoother Strategy', 'In high-income months, transfer extra into the operating account so it builds a buffer. In lean months you draw from that buffer rather than scrambling.'),
      h2('Tax Obligations Without an Employer'),
      p('No one withholds tax from freelance income. You become responsible for quarterly estimated payments, self-employment tax and, in some regions, sales tax or GST on services rendered.'),
      ul(
        'Set aside a fixed percentage of every payment the day it arrives.',
        'Track every business expense — home-office proportion, software, equipment, travel.',
        'File on time even if your estimate is wrong; penalties for non-filing exceed penalties for underpayment.',
      ),
      h2('Retirement When No One Matches'),
      p('Without an employer plan, voluntary contributions become essential. Open a tax-advantaged retirement account designed for self-employed individuals. Even irregular contributions beat none — automate whatever you can during good months.'),
      h2('Dealing With Client Payment Delays'),
      p('Late-paying clients disrupt the smoothing buffer. Mitigate by requiring 30–50% upfront on projects above a threshold, adding a clear late-payment clause in contracts and following up promptly on overdue invoices.'),
    ],
  },

  {
    id: 8,
    slug: 'cryptocurrency-explained-simply',
    title: 'Cryptocurrency Demystified: Tokens, Wallets and Volatility',
    category: 'Digital Assets',
    section: 'investing',
    excerpt:
      'Beyond the hype, understand what digital currencies actually are, how to store them and what risk profile suits allocation decisions.',
    isoDate: '2026-09-29',
    author: 'Markets Team',
    imageAlt: 'A physical representation of a Bitcoin coin on top of a modern tablet displaying a live price chart, blue ambient light from the screen',
    content: [
      p('Cryptocurrencies are digital entries recorded on a distributed ledger maintained by thousands of computers rather than a central bank. While the technology is genuinely novel, investing in them carries extreme volatility, regulatory uncertainty and custodial risk.'),
      h2('Core Concepts'),
      p('A blockchain is an append-only database: once a transaction is recorded, altering it would require redoing every subsequent block across the majority of the network simultaneously. This makes it transparent and hard to censor, but not immune to every attack.'),
      h3('Major Token Categories'),
      ul(
        'Store-of-value coins (Bitcoin): designed as digital scarcity.',
        'Platform tokens (Ethereum, Solana): fuel decentralised applications.',
        'Stablecoins: pegged to fiat currencies for low-volatility transactions.',
        'Utility and governance tokens: access or voting rights within a specific protocol.',
      ),
      h2('How to Store Crypto'),
      p('A wallet is software or hardware that holds your private keys — the cryptographic codes authorising transfers. Hot wallets (connected to the internet) are convenient for small balances; cold wallets (hardware devices) are recommended for significant holdings.'),
      callout('Golden Rule', 'Not your keys, not your coins. Leaving assets on an exchange means trusting a third party with custody. Exchanges have failed, been hacked and frozen withdrawals.'),
      h2('Managing Volatility'),
      p('It is normal for major tokens to swing 10–30% in a single week. Never allocate money you might need short-term. A common suggestion among advisors who acknowledge the asset class is a maximum of 1–5% of total investable capital.'),
      h2('Regulatory and Tax Landscape'),
      ol(
        'Many jurisdictions now require reporting crypto transactions on annual tax returns.',
        'Some countries ban trading outright; others impose capital gains tax on every sale or swap.',
        'Regulations evolve rapidly — what is permitted today could change before year-end.',
        'Keep a transaction log from day one; reconstructing history is painful.',
      ),
      h2('Due Diligence Before Buying'),
      p('Research the team, tokenomics, on-chain metrics and the problem the project claims to solve. Whitepapers that promise guaranteed returns or rely on referral rewards are red flags. Never invest based solely on social media hype.'),
    ],
  },

  {
    id: 9,
    slug: 'recession-proofing-your-household',
    title: 'Recession-Proofing Your Household Before the Next Downturn',
    category: 'Economy',
    section: 'business',
    excerpt:
      'Economic cycles are inevitable. Build a household fortress now — while employment feels secure — so you do not scramble when headlines worsen.',
    isoDate: '2026-09-26',
    author: 'Economy Desk',
    imageAlt: 'A family gathered around a kitchen table reviewing paperwork together, warm lighting, a notebook with a drawn shield icon on it',
    content: [
      p('Recessions do not announce themselves precisely, and by the time the word appears in every headline, the window for calm preparation narrows. Building resilience during stable periods means a downturn becomes survivable rather than catastrophic.'),
      h2('The Six-Month Cash Fortress'),
      p('Beyond a basic emergency fund, a recession buffer targets six months of essential outflows held in liquid, guaranteed instruments. This is not for investing — it is insurance against job loss or business revenue collapse.'),
      callout('Where to Park It', 'Short-term government treasury bills, high-yield savings accounts or liquid fixed deposits that allow early exit without significant penalty. Safety first, yield second.'),
      h2('Eliminating Variable-Rate Exposure'),
      p('When central banks cut rates to stimulate the economy, variable-rate borrowing payments decrease. But the initial phase of a downturn often sees rising rates before the cuts come. Refinance variable-rate debt into fixed arrangements while income is stable.'),
      h2('Skill Diversification'),
      ul(
        'Invest in professional certifications that broaden employability.',
        'Maintain a side skill that could generate freelance income if primary work slows.',
        'Keep your professional network warm even when not job hunting.',
        'Update your resume and portfolio every quarter, not after a layoff.',
      ),
      h2('Reducing Non-Essential Fixed Costs'),
      p('Review recurring commitments: vehicle instalments for cars you rarely use, premium subscriptions, gym memberships and second credit cards with annual fees. Each eliminated obligation lowers your monthly survival number.'),
      h2('Portfolio Rebalancing Ahead of Stress'),
      p('You do not need to exit equities before a downturn — historically, markets recover and staying invested beats reactive selling. However, rebalancing to your target allocation (trimming winners, topping up underweights) reduces concentration risk.'),
      h2('Community and Relationships'),
      p('Social capital matters during hardship. Neighbours who share resources, a family safety net and transparent communication with your landlord or creditors about potential difficulty all expand your options when finances tighten.'),
    ],
  },

  {
    id: 10,
    slug: 'health-insurance-right-coverage',
    title: 'Health Insurance: Selecting Coverage That Actually Protects',
    category: 'Insurance',
    section: 'finance',
    excerpt:
      'A policy that looks affordable can leave you exposed when a claim matters most. Understand deductibles, exclusions and network limits before buying.',
    isoDate: '2026-09-23',
    author: 'Planning Desk',
    imageAlt: 'A doctor holding a clipboard with insurance paperwork beside a hospital corridor, soft natural lighting through tall windows',
    content: [
      p('Health insurance transfers the financial risk of a medical event to an insurer. Without it, a single hospitalisation can wipe out years of savings. Yet a poorly chosen policy can create a false sense of security — you believe you are covered but discover gaps at the worst moment.'),
      h2('Key Policy Components'),
      ul(
        'Sum insured: the maximum the insurer pays per policy year.',
        'Deductible (excess): the amount you pay out-of-pocket before the insurer contributes.',
        'Co-pay: a fixed percentage or amount you pay per claim.',
        'Waiting period: the time before certain conditions (pre-existing illness, maternity) become eligible.',
        'Sub-limits: caps on specific treatments, room types or procedures within the overall sum insured.',
      ),
      h2('Assessing Your Real Need'),
      p('Consider your age, family medical history, whether dependants rely on your income, your employer-provided group coverage (and whether it disappears if you change jobs), and the cost of treatment in your city.'),
      callout('A Common Trap', 'Relying solely on employer group insurance leaves you vulnerable the moment you switch jobs, are laid off or retire. A personal policy ensures continuity regardless of employment status.'),
      h2('Network vs. Reimbursement'),
      p('Cashless hospital networks let you receive treatment with the insurer settling directly. Reimbursement policies require upfront payment followed by a claim. Wider networks mean more convenience; check whether your nearest hospitals are included.'),
      h2('Reading Exclusions Carefully'),
      ol(
        'Most policies exclude cosmetic surgery, experimental treatments and self-inflicted injuries.',
        'Pre-existing conditions typically carry a two-to-four year waiting period.',
        'Maternity coverage often has its own separate waiting window.',
        'Mental health treatment is included in some modern policies but not all.',
      ),
      h2('Family Floater vs. Individual Plans'),
      p('A floater covers the whole family under one sum insured, which is cheaper but means one large claim exhausts protection for everyone. Individual plans offer separate sums insured per person — more expensive but more resilient in a high-claim year.'),
      h2('Portability and Loyalty Discounts'),
      p('Regulations in many markets allow transferring your policy to a new insurer without losing accumulated benefits. Compare renewal premiums annually; some insurers reward no-claim history with reduced rates or enhanced coverage.'),
    ],
  },

  {
    id: 11,
    slug: 'online-payment-security-essentials',
    title: 'Protecting Your Money in a World of Digital Payments',
    category: 'Banking',
    section: 'banking',
    excerpt:
      'UPI, contactless cards, e-wallets — instant payment methods come with instant fraud risk. Practical safeguards that actually reduce exposure.',
    isoDate: '2026-09-20',
    author: 'Banking Desk',
    imageAlt: 'A person holding a credit card in one hand and a smartphone showing a payment app in the other, seated at a tidy desk with a laptop',
    content: [
      p('Digital payment methods — unified payment interfaces, near-field communication cards, e-wallets and peer-to-peer apps — have made transactions effortless. The same speed that benefits you also benefits a fraudster who gains access to your credentials.'),
      h2('Common Threat Vectors'),
      ul(
        'Phishing: fake messages pretending to be your bank, asking you to verify via a malicious link.',
        'SIM swap: a criminal transfers your phone number to their device, intercepting OTPs.',
        'Skimming: hidden card readers at legitimate-looking terminals capture magnetic stripe data.',
        'Malware: trojan apps on your phone overlay fake login screens on genuine banking apps.',
      ),
      h2('Layered Defenses'),
      p('No single measure is enough. Combine several so that compromising one still leaves other barriers standing.'),
      ol(
        'Enable transaction alerts via SMS or push notification for every debit.',
        'Set a per-transaction spending cap through your banking app.',
        'Use a separate virtual card or UPI ID for online shopping, keeping your primary account shielded.',
        'Prefer biometric authentication (fingerprint, face) over PINs alone.',
        'Never store card details in unvetted apps or websites.',
      ),
      callout('SIM Swap', 'Visit your mobile operator in person and set a port-out PIN or freeze. Without it, a social-engineering call can transfer your number within minutes.'),
      h2('If You Are Targeted'),
      p('Act within the first hour: freeze the account via your bank helpline, file a complaint on the national cybercrime portal and dispute the transaction in writing. Regulatory frameworks in many countries mandate compensation for unauthorised digital payment fraud reported within a defined window.'),
      h2('Protecting Vulnerable Family Members'),
      p('Elderly parents and young adults are disproportionately targeted. Have a conversation about common scams, enable spending limits on their accounts and install legitimate parental-control or security apps where appropriate.'),
      h2('Regular Account Hygiene'),
      ul(
        'Review bank statements weekly for unfamiliar charges.',
        'Remove unused payment apps and revoke old OAuth tokens.',
        'Update phone and app OS promptly — patches close exploitable gaps.',
        'Delete banking emails containing full account numbers once actioned.',
      ),
    ],
  },

  {
    id: 12,
    slug: 'fixed-income-options-compared',
    title: 'Fixed Income in a Shifting Rate World: Bonds, FDs and Annuities',
    category: 'Banking',
    section: 'banking',
    excerpt:
      'When rates fall, lock in yields; when rates rise, existing instruments lose relative value. A clear look at three go-to safety options.',
    isoDate: '2026-09-17',
    author: 'Banking Desk',
    imageAlt: 'Three overlapping envelopes on a wooden desk labelled FD, Bond and Annuity, with a rising interest-rate graph on a small monitor behind them',
    content: [
      p('Fixed income products promise a known return over a defined period. They anchor conservative portions of a portfolio, provide regular cash flow for retirees and serve as a haven during equity turbulence. But choosing among them depends on rate direction, tax treatment and liquidity needs.'),
      h2('Bank Fixed Deposits'),
      p('A lump-sum deposit held for a chosen tenure earns a predetermined rate. Principal is protected up to the deposit insurance cap in most countries. Tax on interest is usually added to your income slab, which can erode returns significantly in higher brackets.'),
      callout('Ladder Technique', 'Split money into four equal deposits with 1, 2, 3 and 4-year maturities. Each year one matures, giving liquidity without full penalty exposure.'),
      h2('Government and Corporate Bonds'),
      p('Bonds pay periodic coupons and return principal at maturity. Government bonds carry minimal default risk; corporate bonds add credit risk for higher yield. If interest rates rise, existing bonds with lower coupons lose market value — important if you may sell before maturity.'),
      h3('Secondary Market Trading'),
      p('Unlike FDs, bonds can be sold to other investors before maturity at prevailing market prices. This provides flexibility but also exposes you to price fluctuation tied to rate moves.'),
      h2('Annuity Products'),
      ul(
        'A lump-sum premium converts into guaranteed periodic payments for a fixed term or life.',
        'Ideal for eliminating longevity risk — the fear of outliving savings.',
        'Payout rates depend on age, prevailing yields and the insurer mortality assumptions.',
        'Surrender charges are steep in early years; treat an annuity as a permanent commitment.',
      ),
      h2('Comparing After-Tax Returns'),
      p('The headline rate matters less than what reaches your bank account. In many jurisdictions, sovereign bond interest or long-term capital gains on bond funds receive preferential tax treatment compared to FD interest. Run the numbers before assuming the highest-yielding option is the best one.'),
      h2('Building a Fixed Income Sleeve'),
      ol(
        'Decide what portion of total assets should be in safety (20–50% depending on age and risk comfort).',
        'Allocate across maturities so that some liquidity arrives at regular intervals.',
        'Prefer government-backed instruments for the emergency and short-term layer.',
        'Consider bond funds for hassle-free diversification if you cannot pick individual issues.',
        'Revisit allocation every six months as rates and personal goals shift.',
      ),
    ],
  },

  {
    id: 13,
    slug: 'estate-planning-starting-early',
    title: 'Estate Planning in Your Thirties: Why Early Is Easier',
    category: 'Wealth Protection',
    section: 'finance',
    excerpt:
      'You do not need to be wealthy or elderly to arrange succession. A simple will, beneficiary designations and a power of attorney save everyone pain later.',
    isoDate: '2026-09-14',
    author: 'Planning Desk',
    imageAlt: 'A hand placing a house key into a child\'s palm, with a neatly organized legal folder and a family photo frame on a light wooden shelf behind',
    content: [
      p('Estate planning is often postponed because it feels morbid or like something for the ultra-wealthy. In truth, anyone with dependants, shared property or meaningful accounts benefits from documenting their wishes — and doing it in your thirties is far simpler than untangling decades of assets later.'),
      h2('The Core Documents'),
      ul(
        'A last will and testament directing how assets distribute and who guardians minor children.',
        'A durable power of attorney for financial decisions if you become incapacitated.',
        'A healthcare directive (living will) specifying medical treatment preferences.',
        'Beneficiary designations on retirement accounts, insurance policies and bank accounts.',
      ),
      callout('Beneficiary Override', 'Even if your will names a different person, retirement accounts and insurance policies pay the registered beneficiary first. Update designations after marriage, divorce, births or deaths.'),
      h2('What Happens Without a Plan'),
      p('Intestacy laws apply a rigid default formula that may not reflect your wishes. Assets can be frozen while courts appoint administrators, guardianship disputes may go to litigation and unintended family members could inherit.'),
      h2('Inventorying Digital and Physical Assets'),
      p('Modern estates include crypto wallets, cloud storage, online businesses, loyalty points and social media accounts. Maintain a secure list of passwords, account numbers and access instructions. Without it, assets can become permanently inaccessible.'),
      h2('Trusts: When They Make Sense'),
      p('A living trust can avoid probate delays and keep distributions private. They add complexity and legal cost, so they are most valuable when you own property in multiple jurisdictions, have blended-family dynamics or want to stagger distributions over a child\'s adulthood.'),
      h2('Review Triggers'),
      ol(
        'Marriage, divorce or domestic partnership registration.',
        'Birth or adoption of a child or grandchild.',
        'Purchase or sale of significant real estate.',
        'Starting or selling a business.',
        'Relocating to a different state or country.',
        'Death of a named executor or guardian.',
      ),
      h2('Affordable First Steps'),
      p('Online will-making services suit simple estates. Consult an attorney for anything involving businesses, trusts or international assets. The key is not perfection — it is having a current, legally valid document rather than none at all.'),
    ],
  },

  {
    id: 14,
    slug: 'gig-economy-tax-and-growth',
    title: 'Thriving in the Gig Economy: Tax, Savings and Scaling',
    category: 'Business',
    section: 'business',
    excerpt:
      'Ride-share drivers, delivery partners and contract freelancers face unique financial challenges. A tailored playbook for self-assessment, deductions and long-term growth.',
    isoDate: '2026-09-11',
    author: 'Economy Desk',
    imageAlt: 'A food delivery courier in a bright red jacket checking his smartphone while riding a bicycle through a busy city street',
    content: [
      p('Gig work offers flexibility and low barriers to entry, but the absence of an employer withholding tax, contributing to a pension or providing benefits means every gig worker must run their micro-enterprise with discipline.'),
      h2('Understanding Your Tax Filing'),
      p('Income earned as a contractor, freelancer or platform worker is self-employment income. You are required to file an annual return and may need to make quarterly advance-tax payments to avoid penalties.'),
      callout('Thresholds', 'Many countries set a turnover threshold for mandatory GST or sales-tax registration. Exceeding it without registering triggers back-tax demands and fines.'),
      h2('Maximising Legitimate Deductions'),
      ul(
        'Vehicle fuel, maintenance and insurance (proportional to business use).',
        'Phone and internet costs attributable to work.',
        'Home-office portion of rent and utilities if you meet the requirements.',
        'Tools, equipment, uniforms and safety gear.',
        'Platform commission fees and transaction charges.',
        'Professional development courses directly related to your service.',
      ),
      h2('Separating Money From Mixed Accounts'),
      p('Opening a dedicated business bank account — even a basic one — makes tracking effortless, looks professional to clients and keeps personal spending visible when tax season arrives.'),
      h2('Dealing With Irregular Deposits'),
      p('Platforms pay on different schedules — weekly, fortnightly or after a 14-day hold. Build a one-to-two month operating buffer so that a delayed payment or a temporary account suspension does not mean missing your rent.'),
      h2('Scaling Beyond Hourly Work'),
      ol(
        'Raise rates incrementally as reviews and demand grow.',
        'Invest in equipment that improves quality or speed, increasing your effective earning per hour.',
        'Combine platforms to smooth demand gaps.',
        'Transition into training other gig workers or consulting once you have domain expertise.',
        'Consider registering a small business entity once annual income exceeds a certain threshold for liability protection.',
      ),
      h2('No Employer, No Safety Net'),
      p('Without employer-provided insurance, you must independently arrange accident cover, health insurance and start a retirement contribution. Many governments offer subsidised schemes for unorganised-sector workers — research local options.'),
    ],
  },
];

const wordCount = (blocks) =>
  blocks
    .flatMap((block) => (block.items ? block.items : [block.title, block.text]))
    .filter(Boolean)
    .join(' ')
    .split(/\s+/).length;

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

/**
 * Article photographs live in public/images/photos/ and are served from our own
 * origin — the site makes no third-party image request. They were fetched once by
 * scripts/fetch-photos.ps1 and are used under the Pexels Licence (free for
 * commercial use, no attribution required). Copyright stays with each
 * photographer, so the Terms page never describes photographs as our own work.
 *
 * imageAlt below describes what each photograph actually shows.
 */
const IMAGES = {
  'retirement-savings-roadmap': '/images/photos/retirement-savings-roadmap.jpg',
  'real-estate-vs-stocks-first-investment': '/images/photos/real-estate-vs-stocks-first-investment.jpg',
  'education-debt-repayment-plan': '/images/photos/education-debt-repayment-plan.jpg',
  'passive-income-streams-reality-check': '/images/photos/passive-income-streams-reality-check.jpg',
  'etf-vs-mutual-fund-which-wins': '/images/photos/etf-vs-mutual-fund-which-wins.jpg',
  'emi-structures-smart-borrowing': '/images/photos/emi-structures-smart-borrowing.jpg',
  'freelancer-irregular-income-playbook': '/images/photos/freelancer-irregular-income-playbook.jpg',
  'cryptocurrency-explained-simply': '/images/photos/cryptocurrency-explained-simply.jpg',
  'recession-proofing-your-household': '/images/photos/recession-proofing-your-household.jpg',
  'health-insurance-right-coverage': '/images/photos/health-insurance-right-coverage.jpg',
  'online-payment-security-essentials': '/images/photos/online-payment-security-essentials.jpg',
  'fixed-income-options-compared': '/images/photos/fixed-income-options-compared.jpg',
  'estate-planning-starting-early': '/images/photos/estate-planning-starting-early.jpg',
  'gig-economy-tax-and-growth': '/images/photos/gig-economy-tax-and-growth.jpg',
};

/** Final article objects: derived fields (image paths, date, read time) are computed once. */
export const BLOGS = RAW_BLOGS.map((blog) => ({
  ...blog,
  image: IMAGES[blog.slug],
  ogImage: `/images/og/${blog.slug}.png`,
  date: formatDate(blog.isoDate),
  readTime: Math.max(1, Math.round(wordCount(blog.content) / 160)),
})).sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export const getBlogBySlug = (slug) => BLOGS.find((blog) => blog.slug === slug);

export const getBlogsBySection = (section) => BLOGS.filter((blog) => blog.section === section);

export const getFeaturedBlog = () => BLOGS.find((blog) => blog.featured) ?? BLOGS[0];

/** Same-section articles first, then the most recent others. */
export const getRelatedBlogs = (blog, limit = 3) => {
  const others = BLOGS.filter((item) => item.id !== blog.id);
  const sameSection = others.filter((item) => item.section === blog.section);
  const rest = others.filter((item) => item.section !== blog.section);
  return [...sameSection, ...rest].slice(0, limit);
};
