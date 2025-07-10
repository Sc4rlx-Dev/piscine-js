/**
 * E-COMMERCE PRODUCT PROCESSING
 * 
 * Real-world examples demonstrating JavaScript array methods for e-commerce operations:
 * - Product catalog filtering and sorting
 * - Price calculations and discounts
 * - Inventory management
 * - Customer order processing
 */

// ===== SAMPLE DATA GENERATION =====

/**
 * Generate sample product catalog data
 */
function generateProductCatalog() {
    const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'];
    const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Generic'];
    const products = [];
    
    for (let i = 1; i <= 50; i++) {
        products.push({
            id: i,
            name: `Product ${i}`,
            category: categories[Math.floor(Math.random() * categories.length)],
            brand: brands[Math.floor(Math.random() * brands.length)],
            price: parseFloat((Math.random() * 500 + 10).toFixed(2)),
            originalPrice: parseFloat((Math.random() * 600 + 50).toFixed(2)),
            stock: Math.floor(Math.random() * 100),
            rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0 to 5.0
            reviews: Math.floor(Math.random() * 1000),
            tags: ['popular', 'new', 'sale', 'premium'].filter(() => Math.random() > 0.7),
            specifications: {
                weight: parseFloat((Math.random() * 5 + 0.1).toFixed(2)),
                dimensions: {
                    length: Math.floor(Math.random() * 50 + 5),
                    width: Math.floor(Math.random() * 30 + 5),
                    height: Math.floor(Math.random() * 20 + 2)
                }
            },
            isActive: Math.random() > 0.1 // 90% active products
        });
    }
    
    return products;
}

/**
 * Generate sample customer orders
 */
function generateCustomerOrders() {
    const orders = [];
    const statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    
    for (let i = 1; i <= 20; i++) {
        const itemCount = Math.floor(Math.random() * 5) + 1;
        const items = [];
        
        for (let j = 0; j < itemCount; j++) {
            items.push({
                productId: Math.floor(Math.random() * 50) + 1,
                quantity: Math.floor(Math.random() * 3) + 1,
                unitPrice: parseFloat((Math.random() * 200 + 10).toFixed(2))
            });
        }
        
        orders.push({
            id: i,
            customerId: Math.floor(Math.random() * 100) + 1,
            items: items,
            status: statuses[Math.floor(Math.random() * statuses.length)],
            orderDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Last 30 days
            shippingAddress: {
                country: ['US', 'CA', 'UK', 'DE', 'FR'][Math.floor(Math.random() * 5)],
                state: ['CA', 'NY', 'TX', 'FL'][Math.floor(Math.random() * 4)]
            },
            totalAmount: 0 // Will be calculated
        });
    }
    
    return orders;
}

// ===== DEMONSTRATION EXAMPLES =====

console.log('=== E-COMMERCE PRODUCT PROCESSING EXAMPLES ===\n');

// Generate sample data
const products = generateProductCatalog();
const orders = generateCustomerOrders();

console.log(`Generated ${products.length} products and ${orders.length} orders\n`);

// ===== 1. PRODUCT CATALOG FILTERING =====

console.log('1. PRODUCT CATALOG FILTERING\n');

/**
 * Example 1A: Filter products by multiple criteria using filter()
 * Real-world use case: Customer searching with multiple filters
 */
console.log('1A. Advanced Product Search Filtering:');

function searchProducts(products, criteria) {
    return products.filter(product => {
        // Check if product is active
        if (!product.isActive) return false;
        
        // Filter by category if specified
        if (criteria.category && product.category !== criteria.category) return false;
        
        // Filter by price range
        if (criteria.minPrice && product.price < criteria.minPrice) return false;
        if (criteria.maxPrice && product.price > criteria.maxPrice) return false;
        
        // Filter by minimum rating
        if (criteria.minRating && product.rating < criteria.minRating) return false;
        
        // Filter by stock availability
        if (criteria.inStock && product.stock === 0) return false;
        
        // Filter by brand
        if (criteria.brand && product.brand !== criteria.brand) return false;
        
        // Filter by tags (product must have at least one of the specified tags)
        if (criteria.tags && criteria.tags.length > 0) {
            const hasMatchingTag = criteria.tags.some(tag => product.tags.includes(tag));
            if (!hasMatchingTag) return false;
        }
        
        return true;
    });
}

// Demonstrate complex filtering
const searchCriteria = {
    category: 'Electronics',
    minPrice: 50,
    maxPrice: 300,
    minRating: 4.0,
    inStock: true,
    tags: ['popular', 'new']
};

const filteredProducts = searchProducts(products, searchCriteria);
console.log(`Found ${filteredProducts.length} products matching criteria:`);
console.log('Sample results:', filteredProducts.slice(0, 3).map(p => ({
    name: p.name,
    price: p.price,
    rating: p.rating,
    stock: p.stock,
    tags: p.tags
})));
console.log();

/**
 * Example 1B: Filter out-of-stock products using filter()
 * Real-world use case: Show only available products
 */
console.log('1B. Available Products Only:');
const availableProducts = products.filter(product => product.stock > 0 && product.isActive);
console.log(`${availableProducts.length} out of ${products.length} products are available`);
console.log();

/**
 * Example 1C: Filter products with discounts using filter() and calculations
 * Real-world use case: Show sale/discount products
 */
console.log('1C. Products with Discounts:');
const discountedProducts = products.filter(product => {
    return product.price < product.originalPrice;
}).map(product => ({
    ...product,
    discountPercent: Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
}));

console.log(`${discountedProducts.length} products on sale:`);
console.log('Top discounted products:', discountedProducts
    .sort((a, b) => b.discountPercent - a.discountPercent)
    .slice(0, 3)
    .map(p => ({
        name: p.name,
        originalPrice: p.originalPrice,
        salePrice: p.price,
        discount: `${p.discountPercent}%`
    }))
);
console.log();

// ===== 2. PRODUCT SORTING AND TRANSFORMATION =====

console.log('2. PRODUCT SORTING AND TRANSFORMATION\n');

/**
 * Example 2A: Transform product data for display using map()
 * Real-world use case: Prepare data for frontend display
 */
console.log('2A. Product Display Transformation:');

function transformProductsForDisplay(products) {
    return products.map(product => ({
        id: product.id,
        displayName: `${product.brand} ${product.name}`,
        formattedPrice: `$${product.price.toFixed(2)}`,
        stockStatus: product.stock > 10 ? 'In Stock' : 
                    product.stock > 0 ? 'Low Stock' : 'Out of Stock',
        ratingDisplay: `${product.rating} ⭐ (${product.reviews} reviews)`,
        discountBadge: product.price < product.originalPrice ? 
            `${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF` : null,
        categories: [product.category],
        isNew: product.tags.includes('new'),
        isPremium: product.tags.includes('premium')
    }));
}

const displayProducts = transformProductsForDisplay(products.slice(0, 5));
console.log('Transformed products for display:');
console.log(displayProducts.slice(0, 2));
console.log();

/**
 * Example 2B: Calculate shipping weights using map()
 * Real-world use case: Logistics and shipping calculations
 */
console.log('2B. Shipping Weight Calculations:');

function calculateShippingInfo(products) {
    return products.map(product => ({
        id: product.id,
        name: product.name,
        weight: product.specifications.weight,
        volume: product.specifications.dimensions.length * 
                product.specifications.dimensions.width * 
                product.specifications.dimensions.height,
        shippingClass: product.specifications.weight > 3 ? 'Heavy' : 
                      product.specifications.weight > 1 ? 'Standard' : 'Light',
        estimatedShippingCost: product.specifications.weight * 2.50 + 5.00 // $2.50 per kg + $5 base
    }));
}

const shippingInfo = calculateShippingInfo(products.slice(0, 5));
console.log('Shipping calculations:');
console.log(shippingInfo.slice(0, 3));
console.log();

// ===== 3. INVENTORY MANAGEMENT =====

console.log('3. INVENTORY MANAGEMENT\n');

/**
 * Example 3A: Calculate total inventory value using reduce()
 * Real-world use case: Financial reporting and inventory valuation
 */
console.log('3A. Inventory Valuation:');

const inventoryStats = products.reduce((stats, product) => {
    if (!product.isActive) return stats;
    
    const itemValue = product.price * product.stock;
    
    return {
        totalProducts: stats.totalProducts + 1,
        totalItems: stats.totalItems + product.stock,
        totalValue: stats.totalValue + itemValue,
        categories: {
            ...stats.categories,
            [product.category]: (stats.categories[product.category] || 0) + itemValue
        },
        lowStockItems: product.stock < 10 ? stats.lowStockItems + 1 : stats.lowStockItems
    };
}, {
    totalProducts: 0,
    totalItems: 0,
    totalValue: 0,
    categories: {},
    lowStockItems: 0
});

console.log('Inventory Statistics:');
console.log(`Total Products: ${inventoryStats.totalProducts}`);
console.log(`Total Items in Stock: ${inventoryStats.totalItems}`);
console.log(`Total Inventory Value: $${inventoryStats.totalValue.toFixed(2)}`);
console.log(`Low Stock Items: ${inventoryStats.lowStockItems}`);
console.log('Value by Category:', inventoryStats.categories);
console.log();

/**
 * Example 3B: Group products by category using reduce()
 * Real-world use case: Category management and organization
 */
console.log('3B. Products Grouped by Category:');

const productsByCategory = products.reduce((groups, product) => {
    if (!groups[product.category]) {
        groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
}, {});

Object.keys(productsByCategory).forEach(category => {
    console.log(`${category}: ${productsByCategory[category].length} products`);
});
console.log();

/**
 * Example 3C: Check inventory health using every() and some()
 * Real-world use case: Inventory monitoring and alerts
 */
console.log('3C. Inventory Health Checks:');

const inventoryHealth = {
    allProductsActive: products.every(product => product.isActive !== undefined),
    hasOutOfStockProducts: products.some(product => product.stock === 0),
    allProductsHavePositivePrices: products.every(product => product.price > 0),
    hasHighValueProducts: products.some(product => product.price > 400),
    allProductsHaveReviews: products.every(product => product.reviews >= 0),
    hasNewProducts: products.some(product => product.tags.includes('new'))
};

console.log('Inventory Health Report:');
Object.entries(inventoryHealth).forEach(([check, result]) => {
    console.log(`${check}: ${result ? '✅' : '❌'}`);
});
console.log();

// ===== 4. ORDER PROCESSING =====

console.log('4. ORDER PROCESSING\n');

/**
 * Example 4A: Calculate order totals using forEach() and reduce()
 * Real-world use case: Order total calculations
 */
console.log('4A. Order Total Calculations:');

// First, calculate totals for each order using forEach for side effects
orders.forEach(order => {
    order.totalAmount = order.items.reduce((total, item) => {
        return total + (item.unitPrice * item.quantity);
    }, 0);
    
    // Add tax (8.5%)
    order.tax = order.totalAmount * 0.085;
    order.finalTotal = order.totalAmount + order.tax;
});

console.log('Sample order calculations:');
console.log(orders.slice(0, 3).map(order => ({
    id: order.id,
    itemCount: order.items.length,
    subtotal: order.totalAmount.toFixed(2),
    tax: order.tax.toFixed(2),
    total: order.finalTotal.toFixed(2),
    status: order.status
})));
console.log();

/**
 * Example 4B: Analyze order patterns using filter() and reduce()
 * Real-world use case: Business analytics and reporting
 */
console.log('4B. Order Analytics:');

const orderAnalytics = {
    // Filter by status and calculate statistics
    completedOrders: orders.filter(order => order.status === 'delivered'),
    pendingOrders: orders.filter(order => ['pending', 'processing'].includes(order.status)),
    
    // Calculate revenue from completed orders
    totalRevenue: orders
        .filter(order => order.status === 'delivered')
        .reduce((total, order) => total + order.finalTotal, 0),
    
    // Calculate average order value
    averageOrderValue: orders.length > 0 ? 
        orders.reduce((total, order) => total + order.finalTotal, 0) / orders.length : 0,
    
    // Find orders by country
    ordersByCountry: orders.reduce((countries, order) => {
        const country = order.shippingAddress.country;
        countries[country] = (countries[country] || 0) + 1;
        return countries;
    }, {})
};

console.log('Order Analytics:');
console.log(`Completed Orders: ${orderAnalytics.completedOrders.length}`);
console.log(`Pending Orders: ${orderAnalytics.pendingOrders.length}`);
console.log(`Total Revenue: $${orderAnalytics.totalRevenue.toFixed(2)}`);
console.log(`Average Order Value: $${orderAnalytics.averageOrderValue.toFixed(2)}`);
console.log('Orders by Country:', orderAnalytics.ordersByCountry);
console.log();

/**
 * Example 4C: Complex order processing pipeline using method chaining
 * Real-world use case: Advanced order processing and fulfillment
 */
console.log('4C. Advanced Order Processing Pipeline:');

const processedOrders = orders
    .filter(order => order.status === 'pending') // Only process pending orders
    .map(order => ({
        ...order,
        priority: order.finalTotal > 200 ? 'high' : 'normal', // Prioritize high-value orders
        estimatedShipDate: new Date(Date.now() + (order.finalTotal > 200 ? 1 : 3) * 24 * 60 * 60 * 1000),
        fulfillmentCenter: order.shippingAddress.country === 'US' ? 'US-East' : 'International'
    }))
    .sort((a, b) => {
        // Sort by priority (high first) then by order value (descending)
        if (a.priority !== b.priority) {
            return a.priority === 'high' ? -1 : 1;
        }
        return b.finalTotal - a.finalTotal;
    })
    .slice(0, 10); // Process top 10 orders

console.log('Processed Orders Queue:');
console.log(processedOrders.map(order => ({
    id: order.id,
    priority: order.priority,
    value: order.finalTotal.toFixed(2),
    fulfillmentCenter: order.fulfillmentCenter,
    estimatedShipDate: order.estimatedShipDate.toDateString()
})));
console.log();

// ===== 5. PERFORMANCE CONSIDERATIONS =====

console.log('5. PERFORMANCE CONSIDERATIONS\n');

/**
 * Example 5A: Efficient data processing with early returns
 * Real-world use case: Optimizing search performance
 */
console.log('5A. Optimized Product Search:');

function efficientProductSearch(products, searchTerm, maxResults = 10) {
    const results = [];
    
    // Use for loop instead of filter/map for early termination
    for (let i = 0; i < products.length && results.length < maxResults; i++) {
        const product = products[i];
        
        if (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
            
            results.push({
                id: product.id,
                name: product.name,
                relevanceScore: calculateRelevance(product, searchTerm)
            });
        }
    }
    
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

function calculateRelevance(product, searchTerm) {
    let score = 0;
    const term = searchTerm.toLowerCase();
    
    if (product.name.toLowerCase().includes(term)) score += 10;
    if (product.category.toLowerCase().includes(term)) score += 5;
    if (product.brand.toLowerCase().includes(term)) score += 3;
    
    return score;
}

const searchResults = efficientProductSearch(products, 'electronics');
console.log(`Search results for "electronics" (max 10):`, searchResults);
console.log();

// ===== UTILITY FUNCTIONS =====

/**
 * Utility function: Paginate products
 * Real-world use case: API pagination
 */
function paginateProducts(products, page = 1, pageSize = 10) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    return {
        data: products.slice(startIndex, endIndex),
        currentPage: page,
        pageSize: pageSize,
        totalItems: products.length,
        totalPages: Math.ceil(products.length / pageSize),
        hasNextPage: endIndex < products.length,
        hasPrevPage: page > 1
    };
}

/**
 * Utility function: Format currency
 */
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

console.log('=== UTILITY FUNCTIONS DEMO ===');
console.log('Pagination example:', paginateProducts(products, 2, 5));
console.log('Currency formatting:', formatCurrency(123.45));

console.log('\n=== E-COMMERCE EXAMPLES COMPLETE ===');