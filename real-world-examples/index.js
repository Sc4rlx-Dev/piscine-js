/**
 * REAL-WORLD JAVASCRIPT ARRAY METHODS EXAMPLES
 * 
 * This file demonstrates how to run all examples and provides an overview
 * of the comprehensive array method examples available.
 */

console.log('🚀 REAL-WORLD JAVASCRIPT ARRAY METHODS EXAMPLES\n');
console.log('This collection demonstrates practical use cases for JavaScript array methods');
console.log('in real-world scenarios across different domains.\n');

console.log('📁 Available Examples:');
console.log('1. 🛒 E-commerce Product Processing');
console.log('2. 👥 User Management System');
console.log('3. 💰 Financial Data Processing');
console.log('4. 📱 Social Media Analytics');
console.log('5. 🎓 Educational System');
console.log();

console.log('📋 Array Methods Demonstrated:');
console.log('• map() - Data transformation and restructuring');
console.log('• filter() - Data filtering and subset extraction');
console.log('• reduce() - Data aggregation and calculations');
console.log('• every() and some() - Data validation');
console.log('• forEach() - Side effects and iteration');
console.log('• Method chaining - Complex data processing pipelines');
console.log();

console.log('🎯 Real-World Patterns Covered:');
console.log('• Data normalization and standardization');
console.log('• Grouping and categorization');
console.log('• Statistical calculations and analytics');
console.log('• Business rule validation');
console.log('• Performance optimization techniques');
console.log('• Error handling and edge cases');
console.log();

// Function to run individual examples
function runExample(exampleName, description) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🔹 ${exampleName.toUpperCase()}`);
    console.log(`📄 ${description}`);
    console.log(`${'='.repeat(60)}\n`);
    
    try {
        require(`./${exampleName}.js`);
    } catch (error) {
        console.log(`❌ Error running ${exampleName}:`, error.message);
    }
    
    console.log(`\n${'='.repeat(60)}`);
    console.log(`✅ ${exampleName.toUpperCase()} COMPLETE`);
    console.log(`${'='.repeat(60)}\n`);
}

// Check if specific example is requested
const args = process.argv.slice(2);
const requestedExample = args[0];

const examples = {
    'e-commerce': {
        file: 'e-commerce-processing',
        description: 'Product catalog management, inventory tracking, and order processing'
    },
    'user-management': {
        file: 'user-management',
        description: 'User authentication, roles, permissions, and activity analytics'
    },
    'financial': {
        file: 'financial-processing',
        description: 'Transaction analysis, budget tracking, and investment portfolio management'
    },
    'social-media': {
        file: 'social-media-analytics',
        description: 'Post engagement, user interactions, content moderation, and trending analysis'
    },
    'educational': {
        file: 'educational-system',
        description: 'Grade calculations, student performance tracking, and enrollment management'
    }
};

if (requestedExample && examples[requestedExample]) {
    const example = examples[requestedExample];
    runExample(example.file, example.description);
} else if (requestedExample === 'all') {
    console.log('🏃‍♂️ Running all examples...\n');
    
    Object.entries(examples).forEach(([key, example]) => {
        runExample(example.file, example.description);
    });
    
    console.log('🎉 ALL EXAMPLES COMPLETED!');
    console.log('Check the output above to see comprehensive demonstrations');
    console.log('of JavaScript array methods in real-world scenarios.\n');
} else {
    console.log('💡 Usage Instructions:');
    console.log('Run this file to see this overview, or run specific examples:\n');
    
    console.log('📖 Available Commands:');
    console.log('node real-world-examples/index.js                    # Show this overview');
    console.log('node real-world-examples/index.js all               # Run all examples');
    console.log('node real-world-examples/index.js e-commerce        # E-commerce examples');
    console.log('node real-world-examples/index.js user-management   # User management examples');
    console.log('node real-world-examples/index.js financial         # Financial examples');
    console.log('node real-world-examples/index.js social-media      # Social media examples');
    console.log('node real-world-examples/index.js educational       # Educational examples');
    console.log();
    
    console.log('🎯 Individual Files:');
    Object.entries(examples).forEach(([key, example]) => {
        console.log(`node real-world-examples/${example.file}.js`);
    });
    console.log();
    
    console.log('📚 What You\'ll Learn:');
    console.log('• How to use array methods for complex data processing');
    console.log('• Real-world patterns and best practices');
    console.log('• Performance optimization techniques');
    console.log('• Error handling and edge case management');
    console.log('• Functional programming concepts');
    console.log('• Business logic implementation');
    console.log();
    
    console.log('🌟 Features:');
    console.log('• Realistic sample data generation');
    console.log('• Step-by-step explanations');
    console.log('• Comprehensive comments and documentation');
    console.log('• Practical utility functions');
    console.log('• Performance considerations');
    console.log('• Interactive console-friendly examples');
    console.log();
    
    console.log('🚀 Quick Start:');
    console.log('1. Choose an example that interests you');
    console.log('2. Run it to see the patterns in action');
    console.log('3. Modify the code to experiment');
    console.log('4. Adapt the patterns to your own projects');
    console.log();
    
    console.log('📖 For detailed documentation, see README.md in this directory.');
}

/**
 * EXAMPLE SUMMARIES
 */

function showExampleSummaries() {
    console.log('\n📋 EXAMPLE SUMMARIES:\n');
    
    console.log('🛒 E-COMMERCE PROCESSING:');
    console.log('  • Advanced product search and filtering');
    console.log('  • Inventory management and valuation');
    console.log('  • Order analytics and processing pipelines');
    console.log('  • Discount calculations and price optimization');
    console.log();
    
    console.log('👥 USER MANAGEMENT:');
    console.log('  • Role-based access control and permissions');
    console.log('  • User activity tracking and analytics');
    console.log('  • Engagement scoring and behavior analysis');
    console.log('  • Security validation and audit reporting');
    console.log();
    
    console.log('💰 FINANCIAL PROCESSING:');
    console.log('  • Transaction categorization and analysis');
    console.log('  • Budget tracking and variance reporting');
    console.log('  • Investment portfolio optimization');
    console.log('  • Financial health scoring and risk assessment');
    console.log();
    
    console.log('📱 SOCIAL MEDIA ANALYTICS:');
    console.log('  • Engagement metrics and viral content detection');
    console.log('  • User interaction network analysis');
    console.log('  • Content moderation and spam detection');
    console.log('  • Trending topics and content clustering');
    console.log();
    
    console.log('🎓 EDUCATIONAL SYSTEM:');
    console.log('  • Grade calculations and academic analytics');
    console.log('  • Student performance tracking and prediction');
    console.log('  • Course enrollment optimization');
    console.log('  • At-risk student identification and intervention');
    console.log();
}

// Show summaries if no specific example requested
if (!requestedExample) {
    showExampleSummaries();
}

/**
 * ARRAY METHODS QUICK REFERENCE
 */
function showArrayMethodsReference() {
    console.log('🔧 ARRAY METHODS QUICK REFERENCE:\n');
    
    console.log('📌 TRANSFORMATION:');
    console.log('• map() - Transform each element and return new array');
    console.log('• flatMap() - Map and flatten the result');
    console.log();
    
    console.log('📌 FILTERING:');
    console.log('• filter() - Select elements that match criteria');
    console.log('• find() - Get first element that matches');
    console.log('• findIndex() - Get index of first matching element');
    console.log();
    
    console.log('📌 AGGREGATION:');
    console.log('• reduce() - Aggregate elements into single value');
    console.log('• reduceRight() - Reduce from right to left');
    console.log();
    
    console.log('📌 VALIDATION:');
    console.log('• every() - Check if all elements match condition');
    console.log('• some() - Check if any element matches condition');
    console.log('• includes() - Check if array contains value');
    console.log();
    
    console.log('📌 ITERATION:');
    console.log('• forEach() - Execute function for each element');
    console.log('• for...of - Loop through array values');
    console.log();
    
    console.log('📌 ORDERING:');
    console.log('• sort() - Sort elements in place');
    console.log('• reverse() - Reverse array order');
    console.log();
    
    console.log('📌 COMBINATION:');
    console.log('• concat() - Combine arrays');
    console.log('• join() - Convert to string with separator');
    console.log();
}

// Export for potential use in other files
module.exports = {
    examples,
    runExample,
    showExampleSummaries,
    showArrayMethodsReference
};