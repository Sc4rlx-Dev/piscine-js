/**
 * SOCIAL MEDIA ANALYTICS
 * 
 * Real-world examples demonstrating JavaScript array methods for social media operations:
 * - Post engagement metrics
 * - User interaction analysis
 * - Content filtering and moderation
 * - Trending topics identification
 */

// ===== SAMPLE DATA GENERATION =====

/**
 * Generate sample social media posts
 */
function generatePosts() {
    const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'influencer1', 'brand_account', 'content_creator'];
    const postTypes = ['text', 'image', 'video', 'link', 'poll'];
    const hashtags = ['#tech', '#lifestyle', '#food', '#travel', '#fitness', '#art', '#music', '#business', '#nature', '#sports'];
    const topics = ['Technology', 'Lifestyle', 'Food', 'Travel', 'Fitness', 'Art', 'Music', 'Business', 'Nature', 'Sports'];
    
    const posts = [];
    
    for (let i = 1; i <= 500; i++) {
        const engagementBase = Math.random() * 1000;
        const isViral = Math.random() > 0.95; // 5% chance of going viral
        const viralMultiplier = isViral ? Math.random() * 10 + 5 : 1;
        
        const likes = Math.floor(engagementBase * viralMultiplier * (0.5 + Math.random()));
        const shares = Math.floor(likes * (0.1 + Math.random() * 0.3));
        const comments = Math.floor(likes * (0.05 + Math.random() * 0.15));
        
        posts.push({
            id: i,
            userId: users[Math.floor(Math.random() * users.length)],
            content: `This is sample post content ${i}. Check out this amazing ${topics[Math.floor(Math.random() * topics.length)].toLowerCase()} content!`,
            type: postTypes[Math.floor(Math.random() * postTypes.length)],
            timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Last 30 days
            hashtags: hashtags.filter(() => Math.random() > 0.7), // Random hashtags
            mentions: users.filter(() => Math.random() > 0.8), // Random mentions
            engagement: {
                likes: likes,
                shares: shares,
                comments: comments,
                views: Math.floor(likes * (2 + Math.random() * 8)), // 2-10x likes
                saves: Math.floor(likes * (0.02 + Math.random() * 0.08)) // 2-10% of likes
            },
            metadata: {
                isSponsored: Math.random() > 0.9, // 10% sponsored content
                isVerified: ['influencer1', 'brand_account'].includes(users[Math.floor(Math.random() * users.length)]),
                location: ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Remote'][Math.floor(Math.random() * 5)],
                deviceType: ['mobile', 'desktop', 'tablet'][Math.floor(Math.random() * 3)],
                hasMedia: ['image', 'video'].includes(postTypes[Math.floor(Math.random() * postTypes.length)])
            },
            moderation: {
                isReported: Math.random() > 0.95, // 5% reported
                isFlagged: Math.random() > 0.98, // 2% flagged
                sentimentScore: Math.random() * 2 - 1, // -1 to 1 (negative to positive)
                contentWarnings: ['violence', 'adult', 'spam'].filter(() => Math.random() > 0.95)
            }
        });
    }
    
    return posts.sort((a, b) => b.timestamp - a.timestamp);
}

/**
 * Generate user interaction data
 */
function generateUserInteractions() {
    const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'influencer1', 'brand_account', 'content_creator'];
    const interactionTypes = ['like', 'comment', 'share', 'follow', 'unfollow', 'save', 'click', 'view'];
    const interactions = [];
    
    for (let i = 1; i <= 1000; i++) {
        interactions.push({
            id: i,
            userId: users[Math.floor(Math.random() * users.length)],
            targetUserId: users[Math.floor(Math.random() * users.length)],
            postId: Math.floor(Math.random() * 500) + 1,
            type: interactionTypes[Math.floor(Math.random() * interactionTypes.length)],
            timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000), // Last 7 days
            metadata: {
                sessionDuration: Math.floor(Math.random() * 300), // seconds
                deviceType: ['mobile', 'desktop', 'tablet'][Math.floor(Math.random() * 3)],
                referrer: ['direct', 'search', 'social', 'email'][Math.floor(Math.random() * 4)]
            }
        });
    }
    
    return interactions.sort((a, b) => b.timestamp - a.timestamp);
}

/**
 * Generate trending topics data
 */
function generateTrendingData() {
    const hashtags = ['#tech', '#lifestyle', '#food', '#travel', '#fitness', '#art', '#music', '#business', '#nature', '#sports'];
    
    return hashtags.map(hashtag => ({
        hashtag: hashtag,
        mentions: Math.floor(Math.random() * 10000) + 100,
        growth: Math.random() * 200 - 50, // -50% to +150% growth
        sentiment: Math.random() * 2 - 1, // -1 to 1
        topPosts: Math.floor(Math.random() * 20) + 5,
        uniqueUsers: Math.floor(Math.random() * 5000) + 50
    }));
}

// ===== DEMONSTRATION EXAMPLES =====

console.log('=== SOCIAL MEDIA ANALYTICS EXAMPLES ===\n');

// Generate sample data
const posts = generatePosts();
const interactions = generateUserInteractions();
const trending = generateTrendingData();

console.log(`Generated ${posts.length} posts, ${interactions.length} interactions, ${trending.length} trending topics\n`);

// ===== 1. POST ENGAGEMENT METRICS =====

console.log('1. POST ENGAGEMENT METRICS\n');

/**
 * Example 1A: Calculate engagement rates using map() and mathematical operations
 * Real-world use case: Content performance analysis and optimization
 */
console.log('1A. Engagement Rate Analysis:');

function calculateEngagementMetrics(posts) {
    return posts.map(post => {
        const totalEngagement = post.engagement.likes + post.engagement.shares + post.engagement.comments;
        const engagementRate = post.engagement.views > 0 ? 
            (totalEngagement / post.engagement.views) * 100 : 0;
        
        return {
            id: post.id,
            userId: post.userId,
            type: post.type,
            timestamp: post.timestamp,
            metrics: {
                ...post.engagement,
                totalEngagement: totalEngagement,
                engagementRate: parseFloat(engagementRate.toFixed(2)),
                sharesRate: parseFloat(((post.engagement.shares / post.engagement.views) * 100).toFixed(2)),
                commentsRate: parseFloat(((post.engagement.comments / post.engagement.views) * 100).toFixed(2)),
                savesRate: parseFloat(((post.engagement.saves / post.engagement.views) * 100).toFixed(2))
            },
            performance: engagementRate > 10 ? 'Excellent' : 
                        engagementRate > 5 ? 'Good' : 
                        engagementRate > 2 ? 'Average' : 'Poor'
        };
    });
}

const engagementAnalysis = calculateEngagementMetrics(posts);

// Find top performing posts
const topPosts = engagementAnalysis
    .sort((a, b) => b.metrics.engagementRate - a.metrics.engagementRate)
    .slice(0, 5);

console.log('Top Performing Posts by Engagement Rate:');
topPosts.forEach((post, index) => {
    console.log(`${index + 1}. Post ${post.id}: ${post.metrics.engagementRate}% engagement (${post.metrics.totalEngagement} total interactions)`);
});

// Calculate average engagement by post type
const avgEngagementByType = engagementAnalysis.reduce((acc, post) => {
    if (!acc[post.type]) {
        acc[post.type] = { total: 0, count: 0, totalViews: 0 };
    }
    acc[post.type].total += post.metrics.engagementRate;
    acc[post.type].count += 1;
    acc[post.type].totalViews += post.metrics.views;
    return acc;
}, {});

console.log('\nAverage Engagement by Post Type:');
Object.entries(avgEngagementByType).forEach(([type, data]) => {
    const avg = (data.total / data.count).toFixed(2);
    console.log(`${type}: ${avg}% average engagement (${data.count} posts, ${data.totalViews} total views)`);
});
console.log();

/**
 * Example 1B: Identify viral content using filter() and thresholds
 * Real-world use case: Viral content detection and trend analysis
 */
console.log('1B. Viral Content Identification:');

function identifyViralContent(posts, thresholds = {}) {
    const defaults = {
        minViews: 10000,
        minEngagementRate: 8,
        minShares: 100,
        viralMultiplier: 5 // 5x average performance
    };
    
    const criteria = { ...defaults, ...thresholds };
    
    // Calculate platform averages
    const avgMetrics = posts.reduce((acc, post) => {
        acc.views += post.engagement.views;
        acc.likes += post.engagement.likes;
        acc.shares += post.engagement.shares;
        acc.comments += post.engagement.comments;
        return acc;
    }, { views: 0, likes: 0, shares: 0, comments: 0 });
    
    Object.keys(avgMetrics).forEach(key => {
        avgMetrics[key] = avgMetrics[key] / posts.length;
    });
    
    return posts.filter(post => {
        const engagementRate = post.engagement.views > 0 ? 
            ((post.engagement.likes + post.engagement.shares + post.engagement.comments) / post.engagement.views) * 100 : 0;
        
        const isViralByViews = post.engagement.views >= criteria.minViews;
        const isViralByEngagement = engagementRate >= criteria.minEngagementRate;
        const isViralByShares = post.engagement.shares >= criteria.minShares;
        const isViralByPerformance = post.engagement.likes >= (avgMetrics.likes * criteria.viralMultiplier);
        
        return isViralByViews || isViralByEngagement || isViralByShares || isViralByPerformance;
    }).map(post => ({
        ...post,
        viralScore: Math.max(
            post.engagement.views / 1000,
            ((post.engagement.likes + post.engagement.shares + post.engagement.comments) / post.engagement.views) * 100,
            post.engagement.shares / 10
        )
    })).sort((a, b) => b.viralScore - a.viralScore);
}

const viralContent = identifyViralContent(posts);
console.log(`Viral Content Detected: ${viralContent.length} posts`);

if (viralContent.length > 0) {
    console.log('Top Viral Posts:');
    viralContent.slice(0, 3).forEach((post, index) => {
        console.log(`${index + 1}. Post ${post.id} by ${post.userId}:`);
        console.log(`   Views: ${post.engagement.views}, Likes: ${post.engagement.likes}, Shares: ${post.engagement.shares}`);
        console.log(`   Viral Score: ${post.viralScore.toFixed(2)}`);
    });
}
console.log();

/**
 * Example 1C: Track engagement trends over time using reduce() and grouping
 * Real-world use case: Performance tracking and content strategy optimization
 */
console.log('1C. Engagement Trends Over Time:');

function analyzeEngagementTrends(posts, periodDays = 7) {
    const now = Date.now();
    const msPerPeriod = periodDays * 24 * 60 * 60 * 1000;
    
    return posts.reduce((trends, post) => {
        const daysSincePost = Math.floor((now - post.timestamp.getTime()) / (24 * 60 * 60 * 1000));
        const period = Math.floor(daysSincePost / periodDays);
        const periodKey = `Period ${period} (${periodDays * period}-${periodDays * (period + 1)} days ago)`;
        
        if (!trends[periodKey]) {
            trends[periodKey] = {
                postCount: 0,
                totalViews: 0,
                totalLikes: 0,
                totalShares: 0,
                totalComments: 0,
                avgEngagementRate: 0
            };
        }
        
        const trend = trends[periodKey];
        trend.postCount++;
        trend.totalViews += post.engagement.views;
        trend.totalLikes += post.engagement.likes;
        trend.totalShares += post.engagement.shares;
        trend.totalComments += post.engagement.comments;
        
        return trends;
    }, {});
}

const engagementTrends = analyzeEngagementTrends(posts, 7);

// Calculate averages for each period
Object.keys(engagementTrends).forEach(period => {
    const data = engagementTrends[period];
    data.avgViews = Math.round(data.totalViews / data.postCount);
    data.avgLikes = Math.round(data.totalLikes / data.postCount);
    data.avgEngagementRate = data.totalViews > 0 ? 
        parseFloat((((data.totalLikes + data.totalShares + data.totalComments) / data.totalViews) * 100).toFixed(2)) : 0;
});

console.log('Weekly Engagement Trends:');
Object.entries(engagementTrends).slice(0, 4).forEach(([period, data]) => {
    console.log(`${period}:`);
    console.log(`  Posts: ${data.postCount}, Avg Views: ${data.avgViews}, Avg Likes: ${data.avgLikes}`);
    console.log(`  Avg Engagement Rate: ${data.avgEngagementRate}%`);
});
console.log();

// ===== 2. USER INTERACTION ANALYSIS =====

console.log('2. USER INTERACTION ANALYSIS\n');

/**
 * Example 2A: Analyze user behavior patterns using filter() and reduce()
 * Real-world use case: User segmentation and behavior analysis
 */
console.log('2A. User Behavior Pattern Analysis:');

function analyzeUserBehavior(interactions) {
    const userBehavior = interactions.reduce((analysis, interaction) => {
        if (!analysis[interaction.userId]) {
            analysis[interaction.userId] = {
                userId: interaction.userId,
                totalInteractions: 0,
                interactionTypes: {},
                sessionTime: 0,
                deviceUsage: {},
                activeHours: {},
                lastActivity: interaction.timestamp
            };
        }
        
        const user = analysis[interaction.userId];
        user.totalInteractions++;
        user.sessionTime += interaction.metadata.sessionDuration;
        
        // Track interaction types
        user.interactionTypes[interaction.type] = (user.interactionTypes[interaction.type] || 0) + 1;
        
        // Track device usage
        user.deviceUsage[interaction.metadata.deviceType] = (user.deviceUsage[interaction.metadata.deviceType] || 0) + 1;
        
        // Track active hours
        const hour = interaction.timestamp.getHours();
        user.activeHours[hour] = (user.activeHours[hour] || 0) + 1;
        
        // Update last activity
        if (interaction.timestamp > user.lastActivity) {
            user.lastActivity = interaction.timestamp;
        }
        
        return analysis;
    }, {});
    
    // Calculate derived metrics
    Object.values(userBehavior).forEach(user => {
        user.avgSessionTime = user.totalInteractions > 0 ? 
            Math.round(user.sessionTime / user.totalInteractions) : 0;
        user.engagementLevel = user.totalInteractions > 50 ? 'High' : 
                              user.totalInteractions > 20 ? 'Medium' : 'Low';
        user.primaryDevice = Object.keys(user.deviceUsage).reduce((a, b) => 
            user.deviceUsage[a] > user.deviceUsage[b] ? a : b);
        user.mostActiveHour = Object.keys(user.activeHours).reduce((a, b) => 
            user.activeHours[a] > user.activeHours[b] ? a : b);
    });
    
    return userBehavior;
}

const userBehaviorAnalysis = analyzeUserBehavior(interactions);
const sortedUsers = Object.values(userBehaviorAnalysis)
    .sort((a, b) => b.totalInteractions - a.totalInteractions);

console.log('Top Active Users:');
sortedUsers.slice(0, 5).forEach((user, index) => {
    console.log(`${index + 1}. ${user.userId}:`);
    console.log(`   Interactions: ${user.totalInteractions} (${user.engagementLevel} engagement)`);
    console.log(`   Primary Device: ${user.primaryDevice}, Most Active: ${user.mostActiveHour}:00`);
    console.log(`   Avg Session: ${user.avgSessionTime}s`);
});
console.log();

/**
 * Example 2B: Calculate user engagement scores using every() and some()
 * Real-world use case: User ranking and recommendation systems
 */
console.log('2B. User Engagement Scoring:');

function calculateUserEngagementScore(user, interactions) {
    let score = 0;
    
    // Interaction frequency (0-30 points)
    score += Math.min(30, user.totalInteractions);
    
    // Interaction diversity (0-20 points)
    const interactionTypeCount = Object.keys(user.interactionTypes).length;
    score += Math.min(20, interactionTypeCount * 3);
    
    // Session quality (0-25 points)
    const avgSessionScore = Math.min(25, user.avgSessionTime / 10);
    score += avgSessionScore;
    
    // Recency (0-15 points)
    const daysSinceLastActivity = (Date.now() - user.lastActivity.getTime()) / (1000 * 60 * 60 * 24);
    const recencyScore = Math.max(0, 15 - daysSinceLastActivity);
    score += recencyScore;
    
    // Consistency (0-10 points)
    const activeHourCount = Object.keys(user.activeHours).length;
    const consistencyScore = Math.min(10, activeHourCount / 2);
    score += consistencyScore;
    
    return Math.round(score);
}

const userScores = Object.values(userBehaviorAnalysis).map(user => ({
    ...user,
    engagementScore: calculateUserEngagementScore(user, interactions)
})).sort((a, b) => b.engagementScore - a.engagementScore);

console.log('User Engagement Scores (Top 5):');
userScores.slice(0, 5).forEach((user, index) => {
    console.log(`${index + 1}. ${user.userId}: ${user.engagementScore}/100`);
});

// Identify highly engaged users using every() and some()
const highlyEngagedUsers = userScores.filter(user => user.engagementScore >= 70);
const hasConsistentUsers = userScores.some(user => Object.keys(user.activeHours).length >= 12);
const allUsersActive = userScores.every(user => user.totalInteractions > 0);

console.log(`\nEngagement Insights:`);
console.log(`Highly Engaged Users (70+ score): ${highlyEngagedUsers.length}`);
console.log(`Has Consistent Users (12+ active hours): ${hasConsistentUsers}`);
console.log(`All Users Active: ${allUsersActive}`);
console.log();

/**
 * Example 2C: Identify user interaction networks using reduce() and relationship mapping
 * Real-world use case: Social network analysis and community detection
 */
console.log('2C. User Interaction Network Analysis:');

function analyzeInteractionNetwork(interactions) {
    const network = interactions
        .filter(interaction => interaction.targetUserId && interaction.targetUserId !== interaction.userId)
        .reduce((net, interaction) => {
            const key = `${interaction.userId}->${interaction.targetUserId}`;
            
            if (!net[key]) {
                net[key] = {
                    from: interaction.userId,
                    to: interaction.targetUserId,
                    interactions: 0,
                    types: {},
                    strength: 0
                };
            }
            
            net[key].interactions++;
            net[key].types[interaction.type] = (net[key].types[interaction.type] || 0) + 1;
            net[key].strength = net[key].interactions;
            
            return net;
        }, {});
    
    return Object.values(network).sort((a, b) => b.strength - a.strength);
}

const interactionNetwork = analyzeInteractionNetwork(interactions);
console.log('Strongest User Connections:');
interactionNetwork.slice(0, 5).forEach((connection, index) => {
    console.log(`${index + 1}. ${connection.from} → ${connection.to}: ${connection.strength} interactions`);
    console.log(`   Types:`, Object.entries(connection.types).map(([type, count]) => `${type}:${count}`).join(', '));
});
console.log();

// ===== 3. CONTENT FILTERING AND MODERATION =====

console.log('3. CONTENT FILTERING AND MODERATION\n');

/**
 * Example 3A: Content moderation using filter() and validation rules
 * Real-world use case: Automated content moderation and safety
 */
console.log('3A. Content Moderation Analysis:');

function moderateContent(posts) {
    const moderationResults = {
        flaggedPosts: [],
        reportedPosts: [],
        lowSentimentPosts: [],
        sponsoredContent: [],
        needsReview: []
    };
    
    posts.forEach(post => {
        // Check for flagged content
        if (post.moderation.isFlagged) {
            moderationResults.flaggedPosts.push(post);
        }
        
        // Check for reported content
        if (post.moderation.isReported) {
            moderationResults.reportedPosts.push(post);
        }
        
        // Check sentiment
        if (post.moderation.sentimentScore < -0.5) {
            moderationResults.lowSentimentPosts.push(post);
        }
        
        // Check sponsored content
        if (post.metadata.isSponsored) {
            moderationResults.sponsoredContent.push(post);
        }
        
        // Content that needs review
        if (post.moderation.contentWarnings.length > 0 || 
            (post.moderation.isReported && post.engagement.views > 1000)) {
            moderationResults.needsReview.push(post);
        }
    });
    
    return moderationResults;
}

const moderationResults = moderateContent(posts);

console.log('Content Moderation Summary:');
console.log(`Flagged Posts: ${moderationResults.flaggedPosts.length}`);
console.log(`Reported Posts: ${moderationResults.reportedPosts.length}`);
console.log(`Low Sentiment Posts: ${moderationResults.lowSentimentPosts.length}`);
console.log(`Sponsored Content: ${moderationResults.sponsoredContent.length}`);
console.log(`Posts Needing Review: ${moderationResults.needsReview.length}`);

if (moderationResults.needsReview.length > 0) {
    console.log('\nHigh Priority Review Items:');
    moderationResults.needsReview.slice(0, 3).forEach((post, index) => {
        console.log(`${index + 1}. Post ${post.id}: Warnings: [${post.moderation.contentWarnings.join(', ')}], Views: ${post.engagement.views}`);
    });
}
console.log();

/**
 * Example 3B: Spam detection using pattern analysis and filtering
 * Real-world use case: Anti-spam systems and quality control
 */
console.log('3B. Spam Detection Analysis:');

function detectSpam(posts) {
    return posts.filter(post => {
        let spamScore = 0;
        
        // Check for excessive hashtags
        if (post.hashtags.length > 5) spamScore += 2;
        
        // Check for excessive mentions
        if (post.mentions.length > 3) spamScore += 2;
        
        // Check for low engagement relative to views
        const engagementRate = post.engagement.views > 0 ? 
            (post.engagement.likes + post.engagement.comments) / post.engagement.views : 0;
        if (engagementRate < 0.01 && post.engagement.views > 100) spamScore += 3;
        
        // Check for content length (too short might be spam)
        if (post.content.length < 20) spamScore += 1;
        
        // Check for duplicate patterns (simplified)
        if (post.content.includes('Check out this amazing') || 
            post.content.includes('Click here') ||
            post.content.includes('You won\'t believe')) spamScore += 2;
        
        return spamScore >= 3;
    }).map(post => ({
        ...post,
        spamIndicators: {
            excessiveHashtags: post.hashtags.length > 5,
            excessiveMentions: post.mentions.length > 3,
            lowEngagement: (post.engagement.likes + post.engagement.comments) / post.engagement.views < 0.01,
            shortContent: post.content.length < 20
        }
    }));
}

const spamPosts = detectSpam(posts);
console.log(`Potential Spam Posts Detected: ${spamPosts.length}`);

if (spamPosts.length > 0) {
    console.log('Sample Spam Indicators:');
    spamPosts.slice(0, 3).forEach((post, index) => {
        console.log(`${index + 1}. Post ${post.id}:`);
        Object.entries(post.spamIndicators).forEach(([indicator, isTrue]) => {
            if (isTrue) console.log(`   - ${indicator}`);
        });
    });
}
console.log();

// ===== 4. TRENDING TOPICS IDENTIFICATION =====

console.log('4. TRENDING TOPICS IDENTIFICATION\n');

/**
 * Example 4A: Identify trending hashtags using reduce() and growth analysis
 * Real-world use case: Trend detection and content discovery
 */
console.log('4A. Trending Hashtags Analysis:');

function analyzeTrendingHashtags(posts, timeWindow = 24) {
    const now = Date.now();
    const windowMs = timeWindow * 60 * 60 * 1000;
    
    const recentPosts = posts.filter(post => 
        now - post.timestamp.getTime() <= windowMs
    );
    
    const hashtagStats = recentPosts.reduce((stats, post) => {
        post.hashtags.forEach(hashtag => {
            if (!stats[hashtag]) {
                stats[hashtag] = {
                    hashtag: hashtag,
                    mentions: 0,
                    totalEngagement: 0,
                    uniqueUsers: new Set(),
                    posts: []
                };
            }
            
            stats[hashtag].mentions++;
            stats[hashtag].totalEngagement += post.engagement.likes + post.engagement.shares + post.engagement.comments;
            stats[hashtag].uniqueUsers.add(post.userId);
            stats[hashtag].posts.push(post.id);
        });
        
        return stats;
    }, {});
    
    // Convert to array and calculate metrics
    return Object.values(hashtagStats).map(stat => ({
        ...stat,
        uniqueUsers: stat.uniqueUsers.size,
        avgEngagementPerPost: stat.mentions > 0 ? Math.round(stat.totalEngagement / stat.mentions) : 0,
        trendScore: stat.mentions * Math.log(stat.uniqueUsers + 1) * (stat.totalEngagement / 1000 + 1)
    })).sort((a, b) => b.trendScore - a.trendScore);
}

const trendingHashtags = analyzeTrendingHashtags(posts, 24);

console.log('Trending Hashtags (Last 24 Hours):');
trendingHashtags.slice(0, 5).forEach((trend, index) => {
    console.log(`${index + 1}. ${trend.hashtag}:`);
    console.log(`   Mentions: ${trend.mentions}, Unique Users: ${trend.uniqueUsers}`);
    console.log(`   Avg Engagement: ${trend.avgEngagementPerPost}, Trend Score: ${trend.trendScore.toFixed(2)}`);
});
console.log();

/**
 * Example 4B: Content topic clustering using map() and similarity analysis
 * Real-world use case: Content categorization and recommendation systems
 */
console.log('4B. Content Topic Clustering:');

function clusterTopics(posts) {
    // Simplified topic extraction based on hashtags and keywords
    const topicClusters = posts.reduce((clusters, post) => {
        // Determine primary topic based on hashtags and content
        let primaryTopic = 'General';
        
        if (post.hashtags.some(tag => ['#tech', '#business'].includes(tag))) {
            primaryTopic = 'Technology';
        } else if (post.hashtags.some(tag => ['#food', '#lifestyle'].includes(tag))) {
            primaryTopic = 'Lifestyle';
        } else if (post.hashtags.some(tag => ['#travel', '#nature'].includes(tag))) {
            primaryTopic = 'Travel & Nature';
        } else if (post.hashtags.some(tag => ['#fitness', '#sports'].includes(tag))) {
            primaryTopic = 'Sports & Fitness';
        } else if (post.hashtags.some(tag => ['#art', '#music'].includes(tag))) {
            primaryTopic = 'Arts & Culture';
        }
        
        if (!clusters[primaryTopic]) {
            clusters[primaryTopic] = {
                topic: primaryTopic,
                postCount: 0,
                totalEngagement: 0,
                avgEngagement: 0,
                topHashtags: {},
                contentTypes: {}
            };
        }
        
        const cluster = clusters[primaryTopic];
        cluster.postCount++;
        cluster.totalEngagement += post.engagement.likes + post.engagement.shares + post.engagement.comments;
        
        // Track hashtags
        post.hashtags.forEach(hashtag => {
            cluster.topHashtags[hashtag] = (cluster.topHashtags[hashtag] || 0) + 1;
        });
        
        // Track content types
        cluster.contentTypes[post.type] = (cluster.contentTypes[post.type] || 0) + 1;
        
        return clusters;
    }, {});
    
    // Calculate averages and sort hashtags
    Object.values(topicClusters).forEach(cluster => {
        cluster.avgEngagement = Math.round(cluster.totalEngagement / cluster.postCount);
        cluster.topHashtags = Object.entries(cluster.topHashtags)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([tag]) => tag);
    });
    
    return Object.values(topicClusters).sort((a, b) => b.postCount - a.postCount);
}

const topicClusters = clusterTopics(posts);

console.log('Content Topic Clusters:');
topicClusters.forEach((cluster, index) => {
    console.log(`${index + 1}. ${cluster.topic}:`);
    console.log(`   Posts: ${cluster.postCount}, Avg Engagement: ${cluster.avgEngagement}`);
    console.log(`   Top Hashtags: ${cluster.topHashtags.join(', ')}`);
    console.log(`   Content Types:`, Object.entries(cluster.contentTypes).map(([type, count]) => `${type}:${count}`).join(', '));
});
console.log();

// ===== 5. ADVANCED ANALYTICS =====

console.log('5. ADVANCED ANALYTICS\n');

/**
 * Example 5A: Cross-platform performance comparison using method chaining
 * Real-world use case: Multi-platform content strategy optimization
 */
console.log('5A. Performance Insights Dashboard:');

const performanceDashboard = posts
    .filter(post => post.engagement.views > 0) // Valid posts only
    .map(post => ({
        ...post,
        engagementRate: ((post.engagement.likes + post.engagement.shares + post.engagement.comments) / post.engagement.views) * 100,
        viralityScore: (post.engagement.shares / post.engagement.views) * 100,
        qualityScore: (post.engagement.saves / post.engagement.views) * 100
    }))
    .reduce((dashboard, post) => {
        // Overall metrics
        dashboard.totalPosts++;
        dashboard.totalViews += post.engagement.views;
        dashboard.totalEngagement += post.engagement.likes + post.engagement.shares + post.engagement.comments;
        
        // Performance by type
        if (!dashboard.byType[post.type]) {
            dashboard.byType[post.type] = { count: 0, engagement: 0, views: 0 };
        }
        dashboard.byType[post.type].count++;
        dashboard.byType[post.type].engagement += post.engagementRate;
        dashboard.byType[post.type].views += post.engagement.views;
        
        // Performance by user
        if (!dashboard.byUser[post.userId]) {
            dashboard.byUser[post.userId] = { posts: 0, totalEngagement: 0 };
        }
        dashboard.byUser[post.userId].posts++;
        dashboard.byUser[post.userId].totalEngagement += post.engagement.likes + post.engagement.shares + post.engagement.comments;
        
        return dashboard;
    }, {
        totalPosts: 0,
        totalViews: 0,
        totalEngagement: 0,
        byType: {},
        byUser: {}
    });

// Calculate averages
performanceDashboard.avgEngagementRate = (performanceDashboard.totalEngagement / performanceDashboard.totalViews) * 100;

Object.keys(performanceDashboard.byType).forEach(type => {
    const data = performanceDashboard.byType[type];
    data.avgEngagement = data.engagement / data.count;
    data.avgViews = data.views / data.count;
});

console.log('Performance Dashboard Summary:');
console.log(`Total Posts: ${performanceDashboard.totalPosts}`);
console.log(`Total Views: ${performanceDashboard.totalViews.toLocaleString()}`);
console.log(`Overall Engagement Rate: ${performanceDashboard.avgEngagementRate.toFixed(2)}%`);

console.log('\nPerformance by Content Type:');
Object.entries(performanceDashboard.byType)
    .sort(([,a], [,b]) => b.avgEngagement - a.avgEngagement)
    .forEach(([type, data]) => {
        console.log(`${type}: ${data.avgEngagement.toFixed(2)}% avg engagement (${data.count} posts)`);
    });
console.log();

// ===== UTILITY FUNCTIONS =====

console.log('6. UTILITY FUNCTIONS\n');

/**
 * Utility: Export analytics data
 */
function exportAnalytics(data, format = 'json') {
    if (format === 'csv' && Array.isArray(data)) {
        const headers = Object.keys(data[0] || {});
        return [headers.join(','), ...data.map(row => 
            headers.map(h => row[h]).join(',')
        )].join('\n');
    }
    return JSON.stringify(data, null, 2);
}

/**
 * Utility: Calculate reach and impressions
 */
function calculateReach(posts, interactions) {
    const uniqueViewers = new Set();
    
    posts.forEach(post => {
        // Estimate unique viewers based on engagement patterns
        const estimatedUniqueViewers = Math.min(
            post.engagement.views,
            post.engagement.likes + post.engagement.comments + post.engagement.shares * 2
        );
        
        for (let i = 0; i < estimatedUniqueViewers; i++) {
            uniqueViewers.add(`viewer_${post.id}_${i}`);
        }
    });
    
    return {
        totalReach: uniqueViewers.size,
        totalImpressions: posts.reduce((sum, post) => sum + post.engagement.views, 0),
        reachRate: (uniqueViewers.size / posts.reduce((sum, post) => sum + post.engagement.views, 0)) * 100
    };
}

console.log('=== UTILITY FUNCTIONS DEMO ===');

const reachMetrics = calculateReach(posts, interactions);
console.log('Reach Analysis:', {
    totalReach: reachMetrics.totalReach,
    totalImpressions: reachMetrics.totalImpressions,
    reachRate: `${reachMetrics.reachRate.toFixed(2)}%`
});

const exportSample = exportAnalytics(topPosts.slice(0, 2).map(p => ({
    id: p.id,
    engagement: p.metrics.engagementRate,
    performance: p.performance
})), 'csv');

console.log('\nCSV Export Sample:');
console.log(exportSample);

console.log('\n=== SOCIAL MEDIA ANALYTICS COMPLETE ===');