/**
 * FINANCIAL DATA PROCESSING
 * 
 * Real-world examples demonstrating JavaScript array methods for financial operations:
 * - Transaction analysis
 * - Budget calculations
 * - Investment portfolio management
 * - Expense categorization
 */

// ===== SAMPLE DATA GENERATION =====

/**
 * Generate sample transaction data
 */
function generateTransactions() {
    const categories = ['Food & Dining', 'Transportation', 'Shopping', 'Entertainment', 'Bills & Utilities', 
                       'Healthcare', 'Travel', 'Business', 'Investment', 'Transfer'];
    const merchants = ['Amazon', 'Walmart', 'Starbucks', 'Shell', 'Netflix', 'Electric Company', 
                      'Water Works', 'Restaurant ABC', 'Gas Station', 'Pharmacy'];
    const paymentMethods = ['credit_card', 'debit_card', 'bank_transfer', 'cash', 'mobile_payment'];
    
    const transactions = [];
    
    for (let i = 1; i <= 200; i++) {
        const isIncome = Math.random() > 0.8; // 20% chance of income
        const amount = isIncome ? 
            parseFloat((Math.random() * 5000 + 1000).toFixed(2)) : // Income: $1000-$6000
            parseFloat((Math.random() * 500 + 5).toFixed(2)) * -1;   // Expense: -$5 to -$505
        
        transactions.push({
            id: i,
            date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000), // Last 90 days
            amount: amount,
            description: isIncome ? 
                `Salary/Income ${i}` : 
                `${merchants[Math.floor(Math.random() * merchants.length)]} Purchase`,
            category: isIncome ? 'Income' : categories[Math.floor(Math.random() * categories.length)],
            merchant: isIncome ? 'Employer' : merchants[Math.floor(Math.random() * merchants.length)],
            paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
            isRecurring: Math.random() > 0.7, // 30% chance of recurring
            status: ['completed', 'pending', 'failed'][Math.floor(Math.random() * 3)],
            metadata: {
                location: ['New York', 'California', 'Texas', 'Online'][Math.floor(Math.random() * 4)],
                cardLast4: Math.floor(Math.random() * 9000) + 1000,
                isAuthorized: Math.random() > 0.05 // 95% authorized
            }
        });
    }
    
    return transactions.sort((a, b) => b.date - a.date); // Sort by date descending
}

/**
 * Generate investment portfolio data
 */
function generatePortfolio() {
    const stocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology' },
        { symbol: 'MSFT', name: 'Microsoft Corp.', sector: 'Technology' },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer Discretionary' },
        { symbol: 'TSLA', name: 'Tesla Inc.', sector: 'Consumer Discretionary' },
        { symbol: 'JPM', name: 'JPMorgan Chase', sector: 'Financial' },
        { symbol: 'V', name: 'Visa Inc.', sector: 'Financial' },
        { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare' },
        { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Consumer Staples' },
        { symbol: 'PG', name: 'Procter & Gamble', sector: 'Consumer Staples' }
    ];
    
    return stocks.map(stock => {
        const shares = Math.floor(Math.random() * 100) + 1;
        const purchasePrice = parseFloat((Math.random() * 200 + 50).toFixed(2));
        const currentPrice = parseFloat((purchasePrice * (0.8 + Math.random() * 0.4)).toFixed(2)); // ±20% change
        
        return {
            ...stock,
            shares: shares,
            purchasePrice: purchasePrice,
            currentPrice: currentPrice,
            purchaseDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000), // Last year
            marketValue: parseFloat((shares * currentPrice).toFixed(2)),
            totalCost: parseFloat((shares * purchasePrice).toFixed(2)),
            gainLoss: parseFloat((shares * (currentPrice - purchasePrice)).toFixed(2)),
            gainLossPercent: parseFloat((((currentPrice - purchasePrice) / purchasePrice) * 100).toFixed(2))
        };
    });
}

/**
 * Generate budget data
 */
function generateBudgetData() {
    return {
        categories: [
            { name: 'Food & Dining', budget: 800, spent: 0 },
            { name: 'Transportation', budget: 400, spent: 0 },
            { name: 'Shopping', budget: 300, spent: 0 },
            { name: 'Entertainment', budget: 200, spent: 0 },
            { name: 'Bills & Utilities', budget: 600, spent: 0 },
            { name: 'Healthcare', budget: 250, spent: 0 },
            { name: 'Travel', budget: 500, spent: 0 },
            { name: 'Business', budget: 150, spent: 0 }
        ],
        period: 'monthly',
        startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
    };
}

// ===== DEMONSTRATION EXAMPLES =====

console.log('=== FINANCIAL DATA PROCESSING EXAMPLES ===\n');

// Generate sample data
const transactions = generateTransactions();
const portfolio = generatePortfolio();
const budgetData = generateBudgetData();

console.log(`Generated ${transactions.length} transactions, ${portfolio.length} investments\n`);

// ===== 1. TRANSACTION ANALYSIS =====

console.log('1. TRANSACTION ANALYSIS\n');

/**
 * Example 1A: Filter and categorize transactions using filter() and map()
 * Real-world use case: Expense tracking and categorization
 */
console.log('1A. Transaction Filtering and Categorization:');

// Filter completed transactions from last 30 days
const recentTransactions = transactions.filter(transaction => {
    const daysSince = (Date.now() - transaction.date.getTime()) / (1000 * 60 * 60 * 24);
    return daysSince <= 30 && transaction.status === 'completed';
});

// Separate income and expenses
const incomeTransactions = recentTransactions.filter(t => t.amount > 0);
const expenseTransactions = recentTransactions.filter(t => t.amount < 0);

console.log(`Recent Transactions (30 days): ${recentTransactions.length}`);
console.log(`Income Transactions: ${incomeTransactions.length}`);
console.log(`Expense Transactions: ${expenseTransactions.length}`);

// Transform transactions for reporting
const transactionSummary = recentTransactions.map(transaction => ({
    id: transaction.id,
    date: transaction.date.toLocaleDateString(),
    amount: transaction.amount,
    type: transaction.amount > 0 ? 'Income' : 'Expense',
    category: transaction.category,
    merchant: transaction.merchant,
    formattedAmount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(Math.abs(transaction.amount))
}));

console.log('Sample transformed transactions:');
console.log(transactionSummary.slice(0, 3));
console.log();

/**
 * Example 1B: Analyze spending patterns by category using reduce()
 * Real-world use case: Expense analysis and budgeting insights
 */
console.log('1B. Spending Analysis by Category:');

const categoryAnalysis = expenseTransactions.reduce((analysis, transaction) => {
    const category = transaction.category;
    
    if (!analysis[category]) {
        analysis[category] = {
            totalSpent: 0,
            transactionCount: 0,
            averageAmount: 0,
            merchants: new Set(),
            largestTransaction: 0
        };
    }
    
    const amount = Math.abs(transaction.amount);
    analysis[category].totalSpent += amount;
    analysis[category].transactionCount++;
    analysis[category].merchants.add(transaction.merchant);
    
    if (amount > analysis[category].largestTransaction) {
        analysis[category].largestTransaction = amount;
    }
    
    return analysis;
}, {});

// Calculate averages and convert Set to Array
Object.keys(categoryAnalysis).forEach(category => {
    const data = categoryAnalysis[category];
    data.averageAmount = parseFloat((data.totalSpent / data.transactionCount).toFixed(2));
    data.merchantCount = data.merchants.size;
    data.merchants = Array.from(data.merchants);
});

// Sort by total spent
const sortedCategories = Object.entries(categoryAnalysis)
    .sort(([,a], [,b]) => b.totalSpent - a.totalSpent);

console.log('Spending by Category (sorted by total):');
sortedCategories.slice(0, 5).forEach(([category, data]) => {
    console.log(`${category}: $${data.totalSpent.toFixed(2)} (${data.transactionCount} transactions, avg: $${data.averageAmount})`);
});
console.log();

/**
 * Example 1C: Find recurring transactions and suspicious activity using filter() and some()
 * Real-world use case: Fraud detection and subscription management
 */
console.log('1C. Recurring Transactions and Anomaly Detection:');

// Find recurring transactions
const recurringTransactions = transactions.filter(t => t.isRecurring && t.status === 'completed');

// Group recurring transactions by merchant and amount
const subscriptionAnalysis = recurringTransactions.reduce((subs, transaction) => {
    const key = `${transaction.merchant}_${Math.abs(transaction.amount)}`;
    
    if (!subs[key]) {
        subs[key] = {
            merchant: transaction.merchant,
            amount: Math.abs(transaction.amount),
            frequency: 0,
            category: transaction.category,
            lastTransaction: transaction.date
        };
    }
    
    subs[key].frequency++;
    if (transaction.date > subs[key].lastTransaction) {
        subs[key].lastTransaction = transaction.date;
    }
    
    return subs;
}, {});

console.log('Recurring Subscriptions/Payments:');
Object.values(subscriptionAnalysis)
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5)
    .forEach(sub => {
        console.log(`${sub.merchant}: $${sub.amount.toFixed(2)} (${sub.frequency}x, last: ${sub.lastTransaction.toLocaleDateString()})`);
    });

// Detect suspicious transactions (high amounts, failed, or unusual patterns)
const suspiciousTransactions = transactions.filter(transaction => {
    const isHighAmount = Math.abs(transaction.amount) > 1000;
    const isFailed = transaction.status === 'failed';
    const isUnauthorized = !transaction.metadata.isAuthorized;
    
    return isHighAmount || isFailed || isUnauthorized;
});

console.log(`\nSuspicious Transactions Found: ${suspiciousTransactions.length}`);
if (suspiciousTransactions.length > 0) {
    console.log('Sample suspicious transactions:');
    suspiciousTransactions.slice(0, 3).forEach(t => {
        console.log(`${t.description}: $${t.amount} (${t.status}, authorized: ${t.metadata.isAuthorized})`);
    });
}
console.log();

// ===== 2. BUDGET CALCULATIONS =====

console.log('2. BUDGET CALCULATIONS\n');

/**
 * Example 2A: Calculate budget performance using map() and reduce()
 * Real-world use case: Budget tracking and variance analysis
 */
console.log('2A. Budget Performance Analysis:');

// Calculate actual spending for each budget category
const currentMonthTransactions = transactions.filter(transaction => {
    return transaction.date >= budgetData.startDate && 
           transaction.date <= budgetData.endDate && 
           transaction.amount < 0 && 
           transaction.status === 'completed';
});

// Update budget with actual spending
const budgetPerformance = budgetData.categories.map(budgetCategory => {
    const categorySpending = currentMonthTransactions
        .filter(transaction => transaction.category === budgetCategory.name)
        .reduce((total, transaction) => total + Math.abs(transaction.amount), 0);
    
    const variance = budgetCategory.budget - categorySpending;
    const utilizationPercent = Math.round((categorySpending / budgetCategory.budget) * 100);
    
    return {
        ...budgetCategory,
        spent: parseFloat(categorySpending.toFixed(2)),
        remaining: parseFloat(variance.toFixed(2)),
        utilizationPercent: utilizationPercent,
        status: utilizationPercent > 100 ? 'Over Budget' : 
               utilizationPercent > 80 ? 'Near Limit' : 'On Track'
    };
});

console.log('Budget Performance (Current Month):');
budgetPerformance.forEach(category => {
    console.log(`${category.name}: $${category.spent}/$${category.budget} (${category.utilizationPercent}%) - ${category.status}`);
});

const totalBudget = budgetPerformance.reduce((sum, cat) => sum + cat.budget, 0);
const totalSpent = budgetPerformance.reduce((sum, cat) => sum + cat.spent, 0);
const overallUtilization = Math.round((totalSpent / totalBudget) * 100);

console.log(`\nOverall Budget Utilization: $${totalSpent.toFixed(2)}/$${totalBudget.toFixed(2)} (${overallUtilization}%)`);
console.log();

/**
 * Example 2B: Forecast future spending using reduce() and trends
 * Real-world use case: Financial planning and budget forecasting
 */
console.log('2B. Spending Trend Analysis and Forecasting:');

// Analyze spending trends over the last 3 months
const monthlySpendingTrends = transactions
    .filter(t => t.amount < 0 && t.status === 'completed')
    .reduce((trends, transaction) => {
        const monthKey = `${transaction.date.getFullYear()}-${String(transaction.date.getMonth() + 1).padStart(2, '0')}`;
        
        if (!trends[monthKey]) {
            trends[monthKey] = {
                month: monthKey,
                totalSpent: 0,
                transactionCount: 0,
                categoryBreakdown: {}
            };
        }
        
        const amount = Math.abs(transaction.amount);
        trends[monthKey].totalSpent += amount;
        trends[monthKey].transactionCount++;
        
        if (!trends[monthKey].categoryBreakdown[transaction.category]) {
            trends[monthKey].categoryBreakdown[transaction.category] = 0;
        }
        trends[monthKey].categoryBreakdown[transaction.category] += amount;
        
        return trends;
    }, {});

const monthlyTrendsArray = Object.values(monthlySpendingTrends)
    .sort((a, b) => a.month.localeCompare(b.month));

console.log('Monthly Spending Trends:');
monthlyTrendsArray.slice(-3).forEach(month => {
    console.log(`${month.month}: $${month.totalSpent.toFixed(2)} (${month.transactionCount} transactions)`);
});

// Calculate average monthly spending for forecasting
if (monthlyTrendsArray.length > 0) {
    const averageMonthlySpending = monthlyTrendsArray.reduce((sum, month) => sum + month.totalSpent, 0) / monthlyTrendsArray.length;
    console.log(`\nAverage Monthly Spending: $${averageMonthlySpending.toFixed(2)}`);
    console.log(`Projected Next Month: $${averageMonthlySpending.toFixed(2)}`);
}
console.log();

// ===== 3. INVESTMENT PORTFOLIO MANAGEMENT =====

console.log('3. INVESTMENT PORTFOLIO MANAGEMENT\n');

/**
 * Example 3A: Calculate portfolio performance using map() and reduce()
 * Real-world use case: Investment tracking and performance analysis
 */
console.log('3A. Portfolio Performance Analysis:');

// Calculate overall portfolio metrics
const portfolioMetrics = portfolio.reduce((metrics, holding) => {
    metrics.totalCost += holding.totalCost;
    metrics.totalValue += holding.marketValue;
    metrics.totalGainLoss += holding.gainLoss;
    
    // Track by sector
    if (!metrics.sectorBreakdown[holding.sector]) {
        metrics.sectorBreakdown[holding.sector] = {
            value: 0,
            cost: 0,
            gainLoss: 0,
            holdings: 0
        };
    }
    
    metrics.sectorBreakdown[holding.sector].value += holding.marketValue;
    metrics.sectorBreakdown[holding.sector].cost += holding.totalCost;
    metrics.sectorBreakdown[holding.sector].gainLoss += holding.gainLoss;
    metrics.sectorBreakdown[holding.sector].holdings++;
    
    return metrics;
}, {
    totalCost: 0,
    totalValue: 0,
    totalGainLoss: 0,
    sectorBreakdown: {}
});

const overallReturnPercent = ((portfolioMetrics.totalValue - portfolioMetrics.totalCost) / portfolioMetrics.totalCost) * 100;

console.log('Portfolio Overview:');
console.log(`Total Investment: $${portfolioMetrics.totalCost.toFixed(2)}`);
console.log(`Current Value: $${portfolioMetrics.totalValue.toFixed(2)}`);
console.log(`Total Gain/Loss: $${portfolioMetrics.totalGainLoss.toFixed(2)} (${overallReturnPercent.toFixed(2)}%)`);

console.log('\nSector Breakdown:');
Object.entries(portfolioMetrics.sectorBreakdown).forEach(([sector, data]) => {
    const sectorReturn = ((data.value - data.cost) / data.cost) * 100;
    const portfolioWeight = (data.value / portfolioMetrics.totalValue) * 100;
    console.log(`${sector}: $${data.value.toFixed(2)} (${sectorReturn.toFixed(2)}% return, ${portfolioWeight.toFixed(1)}% of portfolio)`);
});
console.log();

/**
 * Example 3B: Identify best and worst performers using sort() and filter()
 * Real-world use case: Investment decision making and rebalancing
 */
console.log('3B. Investment Performance Rankings:');

// Sort holdings by performance
const performanceRanking = portfolio
    .map(holding => ({
        ...holding,
        absoluteGain: Math.abs(holding.gainLoss),
        isGainer: holding.gainLoss > 0
    }))
    .sort((a, b) => b.gainLossPercent - a.gainLossPercent);

console.log('Top Performers:');
performanceRanking
    .filter(holding => holding.gainLoss > 0)
    .slice(0, 3)
    .forEach(holding => {
        console.log(`${holding.symbol}: +${holding.gainLossPercent}% (+$${holding.gainLoss.toFixed(2)})`);
    });

console.log('\nWorst Performers:');
performanceRanking
    .filter(holding => holding.gainLoss < 0)
    .slice(-3)
    .forEach(holding => {
        console.log(`${holding.symbol}: ${holding.gainLossPercent}% ($${holding.gainLoss.toFixed(2)})`);
    });

// Risk analysis
const riskAnalysis = {
    highRiskHoldings: portfolio.filter(h => Math.abs(h.gainLossPercent) > 15).length,
    diversificationScore: Object.keys(portfolioMetrics.sectorBreakdown).length,
    largestHolding: portfolio.reduce((max, holding) => 
        holding.marketValue > max.marketValue ? holding : max
    ),
    concentrationRisk: Math.max(...portfolio.map(h => (h.marketValue / portfolioMetrics.totalValue) * 100))
};

console.log('\nRisk Analysis:');
console.log(`High Volatility Holdings (>15% change): ${riskAnalysis.highRiskHoldings}`);
console.log(`Sector Diversification: ${riskAnalysis.diversificationScore} sectors`);
console.log(`Largest Single Holding: ${riskAnalysis.largestHolding.symbol} (${riskAnalysis.concentrationRisk.toFixed(1)}% of portfolio)`);
console.log();

/**
 * Example 3C: Portfolio rebalancing recommendations using every() and some()
 * Real-world use case: Investment strategy and portfolio optimization
 */
console.log('3C. Portfolio Rebalancing Analysis:');

// Define target allocation (simplified example)
const targetAllocation = {
    'Technology': 40,
    'Financial': 20,
    'Healthcare': 15,
    'Consumer Discretionary': 15,
    'Consumer Staples': 10
};

const rebalancingAnalysis = Object.entries(targetAllocation).map(([sector, targetPercent]) => {
    const currentValue = portfolioMetrics.sectorBreakdown[sector]?.value || 0;
    const currentPercent = (currentValue / portfolioMetrics.totalValue) * 100;
    const deviation = currentPercent - targetPercent;
    
    return {
        sector,
        targetPercent,
        currentPercent: parseFloat(currentPercent.toFixed(2)),
        deviation: parseFloat(deviation.toFixed(2)),
        action: Math.abs(deviation) > 5 ? 
            (deviation > 0 ? 'SELL' : 'BUY') : 'HOLD',
        recommended: Math.abs(deviation) > 5
    };
});

console.log('Rebalancing Recommendations:');
rebalancingAnalysis.forEach(analysis => {
    console.log(`${analysis.sector}: ${analysis.currentPercent}% (target: ${analysis.targetPercent}%) - ${analysis.action}`);
});

const needsRebalancing = rebalancingAnalysis.some(analysis => analysis.recommended);
const isWellDiversified = rebalancingAnalysis.every(analysis => Math.abs(analysis.deviation) < 10);

console.log(`\nPortfolio Status:`);
console.log(`Needs Rebalancing: ${needsRebalancing ? 'Yes' : 'No'}`);
console.log(`Well Diversified: ${isWellDiversified ? 'Yes' : 'No'}`);
console.log();

// ===== 4. ADVANCED FINANCIAL CALCULATIONS =====

console.log('4. ADVANCED FINANCIAL CALCULATIONS\n');

/**
 * Example 4A: Cash flow analysis using reduce() and date filtering
 * Real-world use case: Financial planning and liquidity management
 */
console.log('4A. Cash Flow Analysis:');

function analyzeCashFlow(transactions, periodDays = 30) {
    const periodStart = new Date(Date.now() - periodDays * 24 * 60 * 60 * 1000);
    
    const cashFlowData = transactions
        .filter(t => t.date >= periodStart && t.status === 'completed')
        .reduce((analysis, transaction) => {
            const week = Math.floor((Date.now() - transaction.date.getTime()) / (7 * 24 * 60 * 60 * 1000));
            const weekKey = `Week ${Math.max(0, 4 - week)}`;
            
            if (!analysis[weekKey]) {
                analysis[weekKey] = { inflow: 0, outflow: 0, netFlow: 0 };
            }
            
            if (transaction.amount > 0) {
                analysis[weekKey].inflow += transaction.amount;
            } else {
                analysis[weekKey].outflow += Math.abs(transaction.amount);
            }
            
            analysis[weekKey].netFlow = analysis[weekKey].inflow - analysis[weekKey].outflow;
            
            return analysis;
        }, {});
    
    return cashFlowData;
}

const cashFlow = analyzeCashFlow(transactions);
console.log('Weekly Cash Flow (Last 4 weeks):');
Object.entries(cashFlow).forEach(([week, data]) => {
    console.log(`${week}: Inflow $${data.inflow.toFixed(2)}, Outflow $${data.outflow.toFixed(2)}, Net: $${data.netFlow.toFixed(2)}`);
});
console.log();

/**
 * Example 4B: Financial health scoring using multiple metrics
 * Real-world use case: Credit scoring and financial assessment
 */
console.log('4B. Financial Health Score:');

function calculateFinancialHealthScore(transactions, portfolio, budget) {
    let score = 0;
    const metrics = {};
    
    // Income stability (0-25 points)
    const incomeTransactions = transactions.filter(t => t.amount > 0 && t.status === 'completed');
    metrics.monthlyIncome = incomeTransactions.reduce((sum, t) => sum + t.amount, 0) / 3; // Assuming 3 months
    metrics.incomeStability = incomeTransactions.length > 0 ? 25 : 0;
    score += metrics.incomeStability;
    
    // Expense management (0-25 points)
    const expenseTransactions = transactions.filter(t => t.amount < 0 && t.status === 'completed');
    metrics.monthlyExpenses = Math.abs(expenseTransactions.reduce((sum, t) => sum + t.amount, 0)) / 3;
    metrics.expenseRatio = metrics.monthlyIncome > 0 ? metrics.monthlyExpenses / metrics.monthlyIncome : 1;
    metrics.expenseScore = Math.max(0, 25 - (metrics.expenseRatio * 25));
    score += metrics.expenseScore;
    
    // Investment diversification (0-25 points)
    const sectors = new Set(portfolio.map(h => h.sector));
    metrics.diversificationScore = Math.min(25, sectors.size * 5);
    score += metrics.diversificationScore;
    
    // Budget adherence (0-25 points)
    const budgetAdherence = budgetPerformance.filter(cat => cat.utilizationPercent <= 100).length;
    metrics.budgetScore = (budgetAdherence / budgetPerformance.length) * 25;
    score += metrics.budgetScore;
    
    return {
        totalScore: Math.round(score),
        breakdown: metrics,
        grade: score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : score >= 40 ? 'Fair' : 'Poor'
    };
}

const healthScore = calculateFinancialHealthScore(transactions, portfolio, budgetPerformance);
console.log('Financial Health Assessment:');
console.log(`Overall Score: ${healthScore.totalScore}/100 (${healthScore.grade})`);
console.log(`Monthly Income: $${healthScore.breakdown.monthlyIncome.toFixed(2)}`);
console.log(`Monthly Expenses: $${healthScore.breakdown.monthlyExpenses.toFixed(2)}`);
console.log(`Expense Ratio: ${(healthScore.breakdown.expenseRatio * 100).toFixed(1)}%`);
console.log();

// ===== 5. UTILITY FUNCTIONS =====

console.log('5. UTILITY FUNCTIONS\n');

/**
 * Utility: Format currency with locale support
 */
function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2
    }).format(amount);
}

/**
 * Utility: Calculate compound interest
 */
function calculateCompoundInterest(principal, rate, time, compound = 12) {
    return principal * Math.pow((1 + rate / compound), compound * time);
}

/**
 * Utility: Export financial data to CSV format
 */
function exportToCSV(data, filename) {
    if (data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(','),
        ...data.map(row => headers.map(header => {
            const value = row[header];
            return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
        }).join(','))
    ].join('\n');
    
    return csvContent;
}

console.log('=== UTILITY FUNCTIONS DEMO ===');
console.log('Currency formatting:', formatCurrency(1234.56));
console.log('Compound interest (10k at 7% for 5 years):', formatCurrency(calculateCompoundInterest(10000, 0.07, 5)));

const sampleExport = exportToCSV(transactionSummary.slice(0, 3), 'transactions.csv');
console.log('CSV Export Sample:');
console.log(sampleExport.split('\n').slice(0, 3).join('\n') + '...');

console.log('\n=== FINANCIAL DATA PROCESSING COMPLETE ===');