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
    slug: 'emergency-fund-size-guide',
    title: 'How Big Should Your Emergency Fund Really Be?',
    category: 'Saving',
    section: 'saving',
    excerpt:
      'Three months or twelve? The right number depends on how replaceable your income is, not on a slogan. Work out a target you can actually reach.',
    isoDate: '2026-10-24',
    author: 'Planning Desk',
    featured: true,
    imageAlt: 'A bright pink umbrella beaded with rain water, held up against a blurred wet city street',
    content: [
      p('An emergency fund is the only part of your money whose job is to stay boring. It is not there to grow, beat inflation or impress anyone. It exists so that a lost job, a broken appliance or a sudden hospital bill does not force you to sell investments at the wrong moment.'),
      h2('Start With Months, Not Amounts'),
      p('The familiar advice is three to six months of expenses. That range assumes a steady salary and often a second earner. If your income is commission-based, freelance or tied to one employer in a volatile industry, the honest number is closer to nine or twelve months.'),
      callout('The One-Question Test', 'How many months would it take to replace this income if it stopped tomorrow? That answer, not a rule of thumb, sets your target.'),
      h2('Expenses, Not Income'),
      p('A fund sized on income is usually too large and never finished. Size it on essentials only: housing, food, utilities, transport, insurance and committed minimum payments. Everything you would happily cut in a crisis does not belong in the number.'),
      h3('What Counts as Essential'),
      ul(
        'Housing costs and the utilities that keep the home liveable.',
        'Food at a realistic grocery level, not restaurant spending.',
        'Transport needed for work, insurance premiums and school fees.',
        'Committed minimum payments, so nothing falls into default.',
      ),
      h2('Where the Money Should Sit'),
      p('Split the fund in two. Keep one month in an instant-access account for small shocks, and the rest in a separate account or short-term deposit that earns something and takes a day or two to reach. The separation is the point: money that is visible at the checkout counter gets spent.'),
      h2('Building It Without Stalling'),
      ol(
        'Set a first milestone of one month of essentials, however long it takes.',
        'Automate a transfer on payday, even a small fixed amount.',
        'Redirect windfalls — bonuses, refunds, gifts — straight into the fund.',
        'Review the target once a year as rent, family size or income changes.',
      ),
      callout('After You Use It', 'A fund you have spent is not a failure, it is the system working. Rebuild it before resuming extra investing or upgrading anything.'),
      h2('When You Already Have Too Much'),
      p('Cash beyond your target does not protect you further; it quietly loses purchasing power. Once the fund covers your months, send new savings towards long-term goals instead of stacking more idle balance.'),
    ],
  },

  {
    id: 2,
    slug: 'compounding-quiet-engine',
    title: 'Compounding: The Quiet Engine Behind Long-Term Wealth',
    category: 'Investing',
    section: 'investing',
    excerpt:
      'The same total contribution produces very different results depending on when it arrives. A plain look at time, returns and the cost of interrupting the curve.',
    isoDate: '2026-10-21',
    author: 'Markets Team',
    imageAlt: 'A glass hourglass with sand streaming through its narrow middle against a dark background',
    content: [
      p('Compounding is usually described as earning interest on interest. The description is accurate and oddly unexciting, which is why so few people give it enough time to work. The real story is about order: identical contributions produce very different outcomes depending on when they start.'),
      h2('The Rule That Fits on a Napkin'),
      p('Divide 72 by the annual return you expect and you get the number of years it takes to double. At 8% that is roughly nine years; at 4%, eighteen. The rule is approximate, but it makes the trade-off visible: return and time are both ingredients, and time is the one you control.'),
      callout('Two Investors', 'One contributes 5,000 a year for ten years and then stops. The other starts ten years later and contributes 5,000 a year for thirty years. At a steady 7%, the early investor can still finish ahead: time did most of the work.'),
      h2('Why Fees Punch Above Their Weight'),
      p('A 1.5% annual charge sounds trivial next to a 7% return, but it removes more than a fifth of the growth every year, and that shortfall compounds too. Over three decades the gap between a 0.2% and a 1.5% cost often runs into six figures on an ordinary portfolio.'),
      h2('What Interrupts the Curve'),
      ul(
        'Withdrawing during a fall, which locks in the loss and removes the recovery.',
        'Pausing contributions in nervous months, which removes the cheap purchases.',
        'Switching strategy every year, which resets the clock without resetting the cost.',
        'Holding everything in cash, where the curve barely bends at all.',
      ),
      h2('Making It Automatic'),
      p('The practical version of compounding is a standing instruction. Decide the amount once, set the transfer for the day after payday, and let the decision happen twelve times a year without your involvement. Behaviour, not arithmetic, is where most plans fail.'),
      h2('A Realistic Expectation'),
      p('Compounding rewards decades, not quarters. The first few years look flat because contributions dominate; the later years look dramatic because returns do. Judging the strategy in year three is like judging a marathon at the second kilometre.'),
    ],
  },

  {
    id: 3,
    slug: 'monthly-vs-lump-sum-investing',
    title: 'Monthly Investing vs One-Time Entry: Which Suits You?',
    category: 'Investing',
    section: 'investing',
    excerpt:
      'When a bonus or matured deposit lands, do you invest it at once or drip it in? Both have a logic — the deciding factor is how you behave when prices fall.',
    isoDate: '2026-10-18',
    author: 'Markets Team',
    imageAlt: 'A large white wall calendar with several red pushpins marking days across the month',
    content: [
      p('When a meaningful sum arrives — a bonus, an inheritance or a matured deposit — the first question is whether to invest it immediately or spread entries over months. Both approaches have a defensible logic, and the right answer depends less on forecasting than on how you behave when prices fall.'),
      h2('What Each Approach Assumes'),
      p('Investing a lump sum assumes markets rise more often than they fall over long periods, which history supports. Drip-feeding assumes you would rather trade some expected return for a smoother entry, which is a statement about temperament rather than mathematics.'),
      h2('The Case for One Decision'),
      ul(
        'Your money is exposed to growth from day one instead of sitting idle.',
        'There is one decision, one set of charges and nothing left to postpone.',
        'Time in the market is longer, which matters more than entry timing.',
      ),
      h2('The Case for Spreading Entries'),
      ul(
        'A sharp fall early on hurts less because only part of the money was invested.',
        'Regular purchases smooth the average price across a full cycle.',
        'It suits people who would otherwise abandon the plan after a bad month.',
      ),
      callout('The Cost of Waiting', 'Cash held back for a better entry earns nothing while markets move. Spreading entries over twelve months can be sensible; waiting years for the right moment rarely is.'),
      h2('A Practical Compromise'),
      p('Invest the amount you would not regret seeing fall by a third tomorrow, and schedule the remainder over three to six months. That keeps most of the money working while giving you a structure to follow if prices drop.'),
      h2('Then Leave It Alone'),
      p('Once the money is invested, the entry method stops mattering. What decides the outcome is the number of years it stays invested, the cost you pay to hold it and whether you keep adding to it.'),
    ],
  },

  {
    id: 4,
    slug: 'idle-cash-and-inflation',
    title: 'Why Idle Cash Slowly Loses Its Value',
    category: 'Economy',
    section: 'finance',
    excerpt:
      'The number on a savings statement never moves down, which is exactly why inflation is easy to miss. Measuring your real return once a year changes how you hold cash.',
    isoDate: '2026-10-15',
    author: 'Economy Desk',
    imageAlt: 'A brightly lit supermarket aisle with stocked shelves of packaged food stretching into the distance',
    content: [
      p('Cash feels safe because its number never changes. Its purchasing power does. A balance that buys a certain basket of goods this year buys a smaller one a few years later, and the gap is easy to ignore precisely because nothing on the statement moves.'),
      h2('Nominal Versus Real'),
      p('The rate on a savings account is nominal. Subtract inflation and you get the real return, which is what actually changes your standard of living. A 4% deposit during 6% inflation loses about 2% a year in real terms, no matter how reassuring the statement looks.'),
      callout('Quick Arithmetic', 'If prices rise 6% and your account pays 4%, a balance of 100,000 buys roughly what 98,000 bought a year earlier.'),
      h2('How Inflation Reaches You'),
      ul(
        'Food and fuel, which you buy every week and notice immediately.',
        'Rent and school fees, which reset annually and often jump sharply.',
        'Services such as repairs and insurance, which tend to rise faster than goods.',
        'Items you buy rarely, where the increase arrives as one unpleasant surprise.',
      ),
      h2('Three Jobs for Your Money'),
      p('Not all cash should be invested. Think in layers: a transaction layer for this month, a safety layer for emergencies, and a growth layer for everything beyond five years. Inflation only becomes a serious problem when the growth layer is empty.'),
      h3('A Sensible Split'),
      ol(
        'Keep one month of expenses in an instant-access account.',
        'Hold three to twelve months of essentials in short-term deposits that can be broken without penalty.',
        'Invest the rest according to the number of years until you need it.',
      ),
      h2('When Holding Cash Is Right'),
      p('If you need the money within two years, are saving for a house deposit or expect a large expense, cash is the correct answer. Volatility on money you must spend soon is a risk, not an opportunity.'),
      h2('The Quiet Erosion'),
      p('Inflation rarely announces itself. It shows up as the feeling that the same salary stretches less far each year. Comparing your savings rate with the published inflation figure once a year is the simplest way to catch that drift before it becomes a habit.'),
    ],
  },

  {
    id: 5,
    slug: 'gold-property-cash-compared',
    title: 'Gold, Property and Cash: Comparing the Safe Havens',
    category: 'Investing',
    section: 'investing',
    excerpt:
      'Each of the three protects against something different. Treating them as interchangeable is where most comparisons — and most portfolios — go wrong.',
    isoDate: '2026-10-12',
    author: 'Markets Team',
    imageAlt: 'Close-up of stacked gold bullion bars with stamped weight markings lit in warm light',
    content: [
      p('Every portfolio needs something that holds up when everything else looks fragile. Gold, property and cash are the three most common choices, and each protects against a different threat. Treating them as interchangeable is where most comparisons go wrong.'),
      h2('What Gold Actually Does'),
      p('Gold pays no income and costs money to store, so its return depends on what someone else will pay later. Its value is partly monetary and partly psychological: it tends to attract buyers when currencies weaken or confidence falls. A small allocation can steady a portfolio; a large one simply adds a different kind of volatility.'),
      h2('Property as a Store of Value'),
      p('Bricks produce rent and tend to track inflation over long periods, but they are expensive to buy, slow to sell and demand maintenance. Physical property concentrates a large share of your net worth in one address and one local market, which is precisely the risk diversification is meant to reduce.'),
      callout('Liquidity Matters', 'Property can take months to sell at a fair price. Gold and cash can be converted in days. That difference decides which asset you can actually use during an emergency.'),
      h2('The Role of Cash'),
      p('Cash protects against uncertainty, not inflation. It is the only asset that is always accepted, never falls in nominal terms and never needs a buyer. Its cost is the real return you give up, which is small over a month and substantial over a decade.'),
      h2('Comparing Them Honestly'),
      ul(
        'Income: property produces rent, gold produces nothing, cash produces interest.',
        'Costs: property carries taxes, repairs and transaction fees; gold carries storage and spreads.',
        'Liquidity: cash is instant, gold takes days, property takes months.',
        'Inflation: property and gold have historically kept pace over long horizons; cash has not.',
      ),
      h2('Sizing the Safety Sleeve'),
      p('A common structure is a cash buffer for near-term needs, a modest gold position for currency and confidence shocks, and property or property funds only if you want the income and can tolerate the illiquidity. None of the three replaces productive assets that grow earnings over time.'),
    ],
  },

  {
    id: 6,
    slug: 'money-biases-that-cost-you',
    title: 'Five Money Biases That Quietly Cost You',
    category: 'Behaviour',
    section: 'finance',
    excerpt:
      'Anchoring, loss aversion, present bias, mental accounting and herd behaviour. None of them feel like mistakes while you are making them.',
    isoDate: '2026-10-09',
    author: 'Finance Desk',
    imageAlt: 'A hand fanning out a spread of hundred-dollar banknotes against a plain background',
    content: [
      p('Most financial mistakes are not caused by missing information. They are caused by shortcuts the brain takes to avoid effort. Recognising the shortcut is often enough to interrupt it.'),
      h2('1. Anchoring on the First Number'),
      p('The first price you see becomes the reference for every later judgement. A salary offer, a shop discount or last year\'s rent all feel like the truth rather than a starting point. The fix is to collect three independent references before you decide anything.'),
      h2('2. Loss Aversion'),
      p('Losing 10,000 hurts roughly twice as much as gaining 10,000 feels good. That asymmetry explains why people sell investments after a fall and hold poor performers for years. Setting the rule in advance — rebalance on a date, not on a feeling — removes the decision from the moment.'),
      callout('A Useful Question', 'Would I buy this today at this price, knowing what I know now? If the answer is no, the reason to keep it is usually habit rather than conviction.'),
      h2('3. Present Bias'),
      p('A reward available today wins against a larger reward next year, even when the arithmetic is obvious. Automation is the practical antidote: a transfer that happens before you see the balance beats a resolution to save more.'),
      h2('4. Mental Accounting'),
      p('Money is treated differently depending on where it came from or which account holds it. A tax refund becomes spending money, while the same amount of salary would have been saved. The cure is to decide what each unit of money is for before it arrives.'),
      h2('5. Herd Behaviour'),
      ul(
        'Buying because prices have risen and others are buying.',
        'Selling because headlines describe panic.',
        'Adopting a strategy because a colleague mentioned it at lunch.',
      ),
      h2('Designing Around Your Own Behaviour'),
      p('Rules beat willpower. Decide contributions in advance, review once a quarter rather than daily, and write down why you bought something so that future-you can check whether the reason still holds. The goal is not to become rational; it is to make the irrational decision harder to take.'),
    ],
  },

  {
    id: 7,
    slug: 'budget-rule-that-survives',
    title: 'The Budget Rule That Survives a Real Month',
    category: 'Budgeting',
    section: 'finance',
    excerpt:
      'Most budgets fail in the second week, not because the numbers were wrong but because the plan assumed a month behaves like a spreadsheet.',
    isoDate: '2026-10-06',
    author: 'Planning Desk',
    imageAlt: 'A close-up of a hand writing a numbered list in a notepad with a black pen on a dark surface',
    content: [
      p('Most budgets fail in the second week, not because the numbers were wrong but because the plan assumed a month behaves like a spreadsheet. Real months contain birthdays, repairs and three unexpected taxi rides. A budget that survives them is built with slack, not precision.'),
      h2('The 50/30/20 Rule as a Starting Point'),
      p('Half to needs, thirty percent to wants and a fifth to saving is a reasonable default for a steady salary. Treat it as a diagnostic rather than a doctrine: if housing alone eats 45%, the ratio tells you where the pressure is instead of demanding an impossible adjustment.'),
      h2('Audit the Month You Actually Had'),
      p('Before setting any target, export the last three months of transactions and sort them into four piles: fixed commitments, variable essentials, discretionary spending and anything irregular. The irregular pile is usually the one people forget — and the one that breaks the plan.'),
      callout('The Slack Line', 'Add a line called "unplanned" worth about a tenth of discretionary spending. Spending from a named line feels like the plan working; spending from a hidden gap feels like failure.'),
      h2('Make the Fixed Costs Boring'),
      ul(
        'Renegotiate or cancel one recurring charge each month.',
        'Move subscriptions to a single card so they stay visible in one place.',
        'Review insurance and utility tariffs annually rather than at renewal.',
        'Automate savings for the day after payday, before discretionary spending begins.',
      ),
      h2('A Weekly Ten-Minute Review'),
      p('Once a week, check the balance, note anything unusual and adjust the following week rather than the following month. Small corrections weekly prevent the all-or-nothing collapse that happens when people discover a large overspend at the end.'),
      h2('When Income Varies'),
      ol(
        'Budget on your lowest realistic month, not the average.',
        'Hold a buffer that absorbs the difference between good and bad months.',
        'Fund fixed commitments first, then savings, then discretionary spending.',
        'Recalculate the baseline every quarter as income patterns become clearer.',
      ),
    ],
  },

  {
    id: 8,
    slug: 'year-end-tax-checklist',
    title: 'A Year-End Tax Checklist Before the Deadline',
    category: 'Taxes',
    section: 'finance',
    excerpt:
      'Deadlines reward preparation and punish improvisation. Work through the paperwork, the contribution cut-off and the records before the filing window closes.',
    isoDate: '2026-10-03',
    author: 'Finance Desk',
    imageAlt: 'An individual income tax return form on a green blanket beside a calculator, a pen and an open laptop',
    content: [
      p('Tax deadlines reward preparation and punish improvisation. Filing late usually costs more than filing an imperfect estimate, and most penalties are avoidable with a checklist completed a few weeks earlier.'),
      h2('Gather the Paperwork First'),
      ul(
        'Income statements from every employer, platform and client.',
        'Interest and dividend certificates from banks and brokers.',
        'Records of deductible contributions and insurance premiums.',
        'Receipts for expenses you intend to claim, grouped by category.',
      ),
      callout('One Folder Rule', 'Keep a single digital folder for the tax year and drop documents into it as they arrive. Reconstructing a year of paperwork over one weekend is the most expensive way to prepare.'),
      h2('Check Contributions Before the Cut-Off'),
      p('Many retirement and savings schemes accept contributions up to a specific date and still count them against the current year. Confirm the deadline with the provider rather than assuming the calendar year applies, then contribute before it passes.'),
      h2('Capital Gains and Investment Sales'),
      p('Selling investments may create a taxable gain even if you reinvested the proceeds. Keep a record of purchase dates and costs, and check whether holding periods change the rate that applies to the gain.'),
      h2('If You Are Self-Employed'),
      ol(
        'Separate business and personal accounts so nothing needs untangling later.',
        'Track home-office, equipment and travel costs as they happen.',
        'Set aside a fixed percentage of each payment for tax as it arrives.',
        'Make advance payments on schedule to avoid a year-end shock.',
      ),
      h2('After Filing'),
      p('Store the return and supporting documents for the period your jurisdiction requires, note what you owed or received, and adjust the following year\'s set-aside accordingly. The most useful tax planning happens the day after filing, while the numbers are still fresh.'),
    ],
  },

  {
    id: 9,
    slug: 'hidden-bank-charges',
    title: 'Where Bank Charges Hide and How to Stop Them',
    category: 'Banking',
    section: 'banking',
    excerpt:
      'Individually they look small. Collectively they can quietly cost more than a decent savings rate earns — and most are reversible once you find them.',
    isoDate: '2026-09-30',
    author: 'Banking Desk',
    imageAlt: 'A hand sliding a bank card into a white card reader showing a small payment total on its screen',
    content: [
      p('Bank charges are rarely large individually. They are numerous, automatic and described in language designed to be skimmed. Over a year they can quietly cost more than a decent savings rate earns.'),
      h2('The Charges Worth Auditing'),
      ul(
        'Monthly maintenance fees on accounts that no longer match your usage.',
        'Minimum-balance penalties triggered by a single low week.',
        'Out-of-network cash withdrawals, plus the fee your own bank adds on top.',
        'Card replacement, statement copies and SMS alert charges.',
        'Foreign exchange markups hidden inside the conversion rate.',
      ),
      h2('Read One Statement Properly'),
      p('Pick a statement, print it and highlight every line that is not a purchase. Most people find at least one recurring charge they cannot explain. That exercise takes ten minutes and pays for itself immediately.'),
      callout('The Silent Fee', 'A 2.5% currency markup on a year of overseas spending of 200,000 is 5,000 that never appears as a separate line item.'),
      h2('Fixing It'),
      ol(
        'Downgrade to an account whose conditions you actually meet.',
        'Switch to a card or account with no annual fee if the benefits go unused.',
        'Set an alert for balances that fall below a threshold.',
        'Ask for a refund on a first-time fee — banks routinely reverse them.',
      ),
      h2('When to Change Banks'),
      p('If two audits in a row show the same unexplained deduction, the relationship is not worth repairing. Moving an account takes an afternoon, and standing instructions can be transferred in one visit.'),
      h2('A Yearly Habit'),
      p('Once a year, re-read the fee schedule and compare it with two alternatives. Pricing changes quietly, and loyalty to a product is rarely repaid with better terms.'),
    ],
  },

  {
    id: 10,
    slug: 'what-moves-your-credit-score',
    title: 'What Actually Moves Your Credit Score',
    category: 'Credit',
    section: 'banking',
    excerpt:
      'A score is a summary of how you have handled borrowed money. Knowing which behaviours feed it is far more useful than chasing points.',
    isoDate: '2026-09-27',
    author: 'Banking Desk',
    imageAlt: 'A hand holding a smartphone showing a calculator app above a paper folder on a marble surface',
    content: [
      p('A credit score is a summary of how you have handled borrowed money, compressed into a number a lender can read in seconds. Understanding which behaviours feed it is more useful than chasing points.'),
      h2('What Carries the Most Weight'),
      ul(
        'Payment history: whether you pay on time, every time.',
        'Amounts owed relative to limits, usually called utilisation.',
        'Length of your credit history and the average age of accounts.',
        'Mix of credit types and the number of new applications.',
      ),
      h2('Utilisation Is the Lever You Control'),
      p('Using most of an available limit signals pressure, even if you clear the balance every month. Keeping reported usage under roughly a third of the limit, and ideally under a tenth, is the fastest legitimate way to improve a score.'),
      callout('Timing Matters', 'Balances are usually reported on a fixed date each month, not on your payment date. Paying before the reporting date keeps the reported figure low.'),
      h2('The Habits That Work'),
      ol(
        'Automate at least the minimum payment to avoid a single late mark.',
        'Keep old accounts open when they cost nothing and carry no balance.',
        'Space out applications instead of approaching several providers in one week.',
        'Check your report regularly and dispute errors in writing.',
      ),
      h2('What Does Not Help'),
      p('Closing unused accounts, paying a few days early or checking your own report does not raise a score. Repeated applications, missed payments and maxed limits do the opposite, and the damage outlasts the event by months or years.'),
      h2('A Realistic Timeline'),
      p('Late payments and defaults stay visible for years, while utilisation changes can appear within a couple of reporting cycles. Anyone promising a fast repair is describing a dispute process, not a reset button.'),
    ],
  },

  {
    id: 11,
    slug: 'pricing-your-side-business',
    title: 'Pricing Your Side Business Without Guessing',
    category: 'Business',
    section: 'business',
    excerpt:
      'Underpricing usually comes from counting only materials. A workable price has to cover your time, your tools, the platform cut and the tax you will owe.',
    isoDate: '2026-09-24',
    author: 'Economy Desk',
    imageAlt: 'A person working on a laptop at a table, photographed from behind in soft daylight',
    content: [
      p('Underpricing is the most common mistake in a side business, and it is usually caused by counting only materials. A price has to cover your time, the tools you replace, the platform cut and the tax you will owe.'),
      h2('Find Your Floor'),
      p('Add direct costs, a share of fixed costs, the platform commission and the hours worked multiplied by a rate you would accept for someone else. That total is your floor. Anything below it is a hobby funded by your savings.'),
      callout('The Hidden Hour', 'Quoting, invoicing, revisions and admin are work. If a project takes eight delivery hours and six admin hours, the rate applies to fourteen.'),
      h2('Price the Outcome, Not the Clock'),
      p('Customers compare what they receive, not how long it took you. A fixed price for a clearly defined result is easier to sell and more profitable than an hourly rate that punishes you for getting faster.'),
      h2('Build the Costs In'),
      ul(
        'Set aside a fixed share of each payment for tax before spending anything.',
        'Include payment processing and marketplace fees in the quote.',
        'Charge a deposit for work that needs materials or reserved time.',
        'Add a line for revisions so scope creep carries a price.',
      ),
      h2('Test the Next Price Up'),
      p('Raise prices on new enquiries only, by a modest step, and watch conversion for a month. Losing one client in five while earning a third more is a profitable trade. Existing clients can be moved at renewal.'),
      h2('Review Quarterly'),
      p('Costs change, demand swings and your skill improves. A price set two years ago is almost always too low. Put a review date in the calendar and treat it as part of running the business rather than an awkward conversation.'),
    ],
  },

  {
    id: 12,
    slug: 'salary-negotiation-returns',
    title: 'Salary Negotiation: The Best-Paid Hour of Your Year',
    category: 'Income',
    section: 'finance',
    excerpt:
      'A raise does not stay the size it started. It compounds through future increments, retirement contributions and every negotiation that follows.',
    isoDate: '2026-09-21',
    author: 'Finance Desk',
    imageAlt: 'Two colleagues in office clothing smiling and high-fiving across a desk in a bright workplace',
    content: [
      p('A salary negotiation is the highest-return hour most people will ever spend. A raise compounds through future increases, retirement contributions and every later negotiation that begins from a higher base.'),
      h2('Come With Evidence, Not Feelings'),
      p('Employers respond to comparables. Collect three data points: what the role pays in your market, what you have delivered over the past year and what the next level of responsibility looks like. The conversation changes when the number is supported.'),
      h2('Know the Whole Package'),
      ul(
        'Base salary, which anchors every future increase.',
        'Bonus and commission structure, including how targets are set.',
        'Retirement contributions and insurance, which are real money.',
        'Flexibility, leave and training budget, which stay negotiable when salary is capped.',
      ),
      callout('Timing', 'The best moment to ask is after a delivered result and before next year\'s budget is fixed. Asking during a review that has already been written is a much harder conversation.'),
      h2('Say the Number First'),
      p('Whoever names a figure sets the range. Research a target you would accept, state it as a range with your target at the bottom, and explain briefly why the evidence supports it. Silence after the number is normal; filling it usually means conceding.'),
      h2('Handle the No'),
      ol(
        'Ask what would need to be true for the number to work next cycle.',
        'Request a written development plan with dates instead of a vague promise.',
        'Negotiate non-salary items if the budget is genuinely fixed.',
        'Set a review date and confirm it in writing.',
      ),
      h2('The Compounding Effect'),
      p('A 10% rise at thirty is not 10% once. It carries into every later increment and into the balance used to calculate retirement contributions. Few other financial decisions return as much for an hour of preparation.'),
    ],
  },

  {
    id: 13,
    slug: 'retirement-income-paycheck',
    title: 'Turning Savings Into a Monthly Retirement Paycheck',
    category: 'Retirement',
    section: 'finance',
    excerpt:
      'Accumulating the corpus is half the job. The other half is drawing from it without being wrecked by a bad market in the first two years.',
    isoDate: '2026-09-18',
    author: 'Planning Desk',
    imageAlt: 'An older couple at home, one seated in an armchair with a phone while the other leans in beside her',
    content: [
      p('Saving for retirement is only half the job. The harder half is converting a pile of assets into a reliable monthly income that lasts as long as you do, without being destroyed by a bad market at the wrong moment.'),
      h2('Start With a Withdrawal Rate'),
      p('A widely used starting point is withdrawing 3–4% of the portfolio in the first year, then adjusting for inflation. On a portfolio of 10,000,000 that is 300,000–400,000 a year. The rate is a planning assumption, not a guarantee.'),
      callout('Sequence Risk', 'A sharp fall in the first two years of drawing income does more damage than the same fall later, because you are selling units to fund living costs. Holding two years of spending in cash blunts that risk.'),
      h2('The Bucket Structure'),
      ul(
        'Bucket one: one to two years of spending in cash and short deposits.',
        'Bucket two: three to seven years of spending in bonds or fixed income.',
        'Bucket three: the remainder in growth assets for the long horizon.',
      ),
      p('In a good year, top up bucket one from bucket three. In a bad year, spend from bucket one and leave the growth assets alone. The structure exists to prevent a forced sale at the worst moment.'),
      h2('Guaranteed Income Has a Price'),
      p('Pensions and annuity-style products convert capital into a predictable payment for life. They remove longevity risk — the chance of outliving your savings — but they are inflexible and usually irreversible. Using part of the portfolio for guaranteed income and keeping the rest invested is a common compromise.'),
      h2('Do Not Forget Inflation and Health'),
      ol(
        'Increase withdrawals each year by inflation, or plan for a falling real income.',
        'Reserve a separate fund for medical costs, which rise faster than general prices.',
        'Recheck the plan annually and after any large market move.',
        'Keep an emergency fund outside the retirement portfolio.',
      ),
      h2('The Point of the Exercise'),
      p('The goal is not the largest possible balance. It is a payment you can rely on, a reserve for bad years and the freedom to stop worrying about headlines.'),
    ],
  },

  {
    id: 14,
    slug: 'sinking-funds-planned-costs',
    title: 'Sinking Funds: Saving for Costs You Can Predict',
    category: 'Saving',
    section: 'saving',
    excerpt:
      'Most budget shocks are not shocks — insurance renewals, school fees and servicing arrive on a schedule. Small monthly transfers absorb them quietly.',
    isoDate: '2026-09-15',
    author: 'Planning Desk',
    imageAlt: 'A person holding a clear glass jar filled with folded banknotes and loose coins',
    content: [
      p('Most budget shocks are not shocks. School fees, insurance renewals, vehicle servicing, festivals and annual subscriptions arrive on a schedule. A sinking fund turns those predictable costs into a small monthly transfer instead of one unpleasant surprise.'),
      h2('What Makes a Cost Predictable'),
      p('If you can name it and roughly date it, it belongs in a sinking fund. A repair you cannot foresee belongs in an emergency fund. Separating the two keeps both honest: the emergency fund stays untouched for real emergencies.'),
      h2('Building the List'),
      ol(
        'Write down every annual or occasional cost you expect in the next twelve months.',
        'Divide each amount by the months remaining before it is due.',
        'Add the monthly amounts to your regular savings plan.',
        'Name each fund so the money has an obvious job.',
      ),
      callout('The Test', 'If a bill arrives and the money is already set aside, it was never an emergency. It was a planning item.'),
      h2('Where to Keep the Money'),
      p('Separate accounts or sub-accounts work better than mental accounting. A single "bills" account with a running balance is enough for most households; the important part is that the money is not visible in the account you spend from.'),
      h2('Good Candidates'),
      ul(
        'Insurance premiums paid annually rather than monthly.',
        'Vehicle servicing, tyres and registration.',
        'School fees, books and uniforms.',
        'Festivals, gifts and travel you already know about.',
        'Replacing appliances on a realistic lifespan.',
      ),
      h2('Automate and Adjust'),
      p('Set one transfer per payday that covers all the funds, then revisit the list every six months. Costs change, some items disappear and new ones arrive. A fifteen-minute review twice a year keeps the system accurate and keeps surprises where they belong — in the emergency fund.'),
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
 * scripts/fetch-photos.ps1 and are used under the Unsplash Licence (free for
 * commercial use, no attribution required). Copyright stays with each
 * photographer, so the Terms page never describes photographs as our own work.
 *
 * imageAlt below describes what each photograph actually shows.
 */
const IMAGES = {
  'emergency-fund-size-guide': '/images/photos/emergency-fund-size-guide.jpg',
  'compounding-quiet-engine': '/images/photos/compounding-quiet-engine.jpg',
  'monthly-vs-lump-sum-investing': '/images/photos/monthly-vs-lump-sum-investing.jpg',
  'idle-cash-and-inflation': '/images/photos/idle-cash-and-inflation.jpg',
  'gold-property-cash-compared': '/images/photos/gold-property-cash-compared.jpg',
  'money-biases-that-cost-you': '/images/photos/money-biases-that-cost-you.jpg',
  'budget-rule-that-survives': '/images/photos/budget-rule-that-survives.jpg',
  'year-end-tax-checklist': '/images/photos/year-end-tax-checklist.jpg',
  'hidden-bank-charges': '/images/photos/hidden-bank-charges.jpg',
  'what-moves-your-credit-score': '/images/photos/what-moves-your-credit-score.jpg',
  'pricing-your-side-business': '/images/photos/pricing-your-side-business.jpg',
  'salary-negotiation-returns': '/images/photos/salary-negotiation-returns.jpg',
  'retirement-income-paycheck': '/images/photos/retirement-income-paycheck.jpg',
  'sinking-funds-planned-costs': '/images/photos/sinking-funds-planned-costs.jpg',
};

/** Final article objects: derived fields (image paths, date, read time) are computed once. */
export const BLOGS = RAW_BLOGS.map((blog) => ({
  ...blog,
  image: IMAGES[blog.slug],
  ogImage: IMAGES[blog.slug],
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
