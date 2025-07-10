/**
 * USER MANAGEMENT SYSTEM
 * 
 * Real-world examples demonstrating JavaScript array methods for user management:
 * - User authentication and roles
 * - Profile data transformation
 * - Activity tracking and analytics
 * - Permission management
 */

// ===== SAMPLE DATA GENERATION =====

/**
 * Generate sample user data
 */
function generateUsers() {
    const roles = ['admin', 'manager', 'editor', 'viewer', 'contributor'];
    const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
    const statuses = ['active', 'inactive', 'suspended', 'pending'];
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Chris', 'Emma', 'Alex', 'Anna'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Wilson', 'Miller', 'Taylor', 'Anderson', 'Thomas', 'Jackson'];
    
    const users = [];
    
    for (let i = 1; i <= 100; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const joinDate = new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000 * 3); // Last 3 years
        
        users.push({
            id: i,
            username: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@company.com`,
            firstName: firstName,
            lastName: lastName,
            fullName: `${firstName} ${lastName}`,
            role: roles[Math.floor(Math.random() * roles.length)],
            department: departments[Math.floor(Math.random() * departments.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
            joinDate: joinDate,
            lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Last 30 days
            profile: {
                avatar: `https://avatar.example.com/${i}.jpg`,
                bio: `${firstName} ${lastName} is a dedicated professional in ${departments[Math.floor(Math.random() * departments.length)]}.`,
                location: ['New York', 'California', 'Texas', 'Florida', 'Remote'][Math.floor(Math.random() * 5)],
                timezone: ['UTC-8', 'UTC-5', 'UTC-6', 'UTC-4', 'UTC'][Math.floor(Math.random() * 5)],
                skills: ['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'AWS', 'Docker'].filter(() => Math.random() > 0.6),
                preferences: {
                    theme: Math.random() > 0.5 ? 'dark' : 'light',
                    notifications: Math.random() > 0.3,
                    language: ['en', 'es', 'fr', 'de'][Math.floor(Math.random() * 4)]
                }
            },
            permissions: {
                canRead: true,
                canWrite: Math.random() > 0.4,
                canDelete: Math.random() > 0.7,
                canAdmin: Math.random() > 0.9
            },
            metrics: {
                loginCount: Math.floor(Math.random() * 500),
                documentsCreated: Math.floor(Math.random() * 100),
                documentsEdited: Math.floor(Math.random() * 200),
                collaborations: Math.floor(Math.random() * 50)
            }
        });
    }
    
    return users;
}

/**
 * Generate user activity logs
 */
function generateUserActivities() {
    const actions = ['login', 'logout', 'create_document', 'edit_document', 'delete_document', 'view_document', 'share_document', 'comment'];
    const activities = [];
    
    for (let i = 1; i <= 500; i++) {
        activities.push({
            id: i,
            userId: Math.floor(Math.random() * 100) + 1,
            action: actions[Math.floor(Math.random() * actions.length)],
            timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000), // Last 7 days
            metadata: {
                ipAddress: `192.168.1.${Math.floor(Math.random() * 255)}`,
                userAgent: 'Mozilla/5.0 (compatible; company-app)',
                documentId: Math.random() > 0.5 ? Math.floor(Math.random() * 1000) + 1 : null,
                success: Math.random() > 0.1 // 90% success rate
            }
        });
    }
    
    return activities;
}

// ===== DEMONSTRATION EXAMPLES =====

console.log('=== USER MANAGEMENT SYSTEM EXAMPLES ===\n');

// Generate sample data
const users = generateUsers();
const activities = generateUserActivities();

console.log(`Generated ${users.length} users and ${activities.length} activities\n`);

// ===== 1. USER AUTHENTICATION AND ROLES =====

console.log('1. USER AUTHENTICATION AND ROLES\n');

/**
 * Example 1A: Filter users by role and status using filter()
 * Real-world use case: Role-based access control
 */
console.log('1A. Role-Based User Filtering:');

function getUsersByRole(users, role, includeInactive = false) {
    return users.filter(user => {
        const roleMatch = user.role === role;
        const statusCheck = includeInactive ? true : user.status === 'active';
        return roleMatch && statusCheck;
    });
}

function getUsersByPermission(users, permission) {
    return users.filter(user => {
        return user.permissions[permission] === true && user.status === 'active';
    });
}

// Demonstrate role-based filtering
const admins = getUsersByRole(users, 'admin');
const activeManagers = getUsersByRole(users, 'manager');
const usersWithDeletePermission = getUsersByPermission(users, 'canDelete');

console.log(`Active Admins: ${admins.length}`);
console.log(`Active Managers: ${activeManagers.length}`);
console.log(`Users with Delete Permission: ${usersWithDeletePermission.length}`);
console.log('Sample admin:', admins[0] ? {
    username: admins[0].username,
    department: admins[0].department,
    permissions: admins[0].permissions
} : 'No admins found');
console.log();

/**
 * Example 1B: Validate user authentication using every() and some()
 * Real-world use case: Security validation and user verification
 */
console.log('1B. User Authentication Validation:');

function validateUserSecurity(users) {
    return {
        allUsersHaveEmail: users.every(user => user.email && user.email.includes('@')),
        allActiveUsersHaveRecentLogin: users
            .filter(user => user.status === 'active')
            .every(user => {
                const daysSinceLogin = (Date.now() - user.lastLogin.getTime()) / (1000 * 60 * 60 * 24);
                return daysSinceLogin <= 30; // Login within last 30 days
            }),
        hasUsersWithAdminAccess: users.some(user => user.permissions.canAdmin),
        hasInactiveUsers: users.some(user => user.status === 'inactive'),
        allUsersHaveValidTimezone: users.every(user => user.profile.timezone.startsWith('UTC'))
    };
}

const securityValidation = validateUserSecurity(users);
console.log('Security Validation Results:');
Object.entries(securityValidation).forEach(([check, result]) => {
    console.log(`${check}: ${result ? '✅' : '❌'}`);
});
console.log();

/**
 * Example 1C: Transform user data for authentication using map()
 * Real-world use case: Prepare user data for authentication systems
 */
console.log('1C. Authentication Data Transformation:');

function transformForAuth(users) {
    return users
        .filter(user => user.status === 'active')
        .map(user => ({
            id: user.id,
            username: user.username,
            email: user.email,
            roles: [user.role], // Convert to array for flexibility
            permissions: Object.keys(user.permissions).filter(key => user.permissions[key]),
            lastLogin: user.lastLogin.toISOString(),
            sessionData: {
                department: user.department,
                timezone: user.profile.timezone,
                preferences: user.profile.preferences
            }
        }));
}

const authUsers = transformForAuth(users.slice(0, 5));
console.log('Authentication-ready user data:');
console.log(authUsers.slice(0, 2));
console.log();

// ===== 2. PROFILE DATA TRANSFORMATION =====

console.log('2. PROFILE DATA TRANSFORMATION\n');

/**
 * Example 2A: Create user directory using map()
 * Real-world use case: Employee directory and contact lists
 */
console.log('2A. User Directory Creation:');

function createUserDirectory(users) {
    return users
        .filter(user => user.status === 'active')
        .map(user => ({
            displayName: user.fullName,
            contact: {
                email: user.email,
                department: user.department
            },
            profile: {
                location: user.profile.location,
                skills: user.profile.skills,
                joinedDate: user.joinDate.toLocaleDateString(),
                avatar: user.profile.avatar
            },
            activity: {
                lastSeen: user.lastLogin.toLocaleDateString(),
                isOnline: (Date.now() - user.lastLogin.getTime()) < (24 * 60 * 60 * 1000) // Online if login within 24h
            }
        }))
        .sort((a, b) => a.displayName.localeCompare(b.displayName));
}

const userDirectory = createUserDirectory(users.slice(0, 10));
console.log('User Directory Sample:');
console.log(userDirectory.slice(0, 3));
console.log();

/**
 * Example 2B: Group users by department using reduce()
 * Real-world use case: Organizational charts and team management
 */
console.log('2B. Department-Based User Grouping:');

const usersByDepartment = users
    .filter(user => user.status === 'active')
    .reduce((departments, user) => {
        if (!departments[user.department]) {
            departments[user.department] = {
                totalUsers: 0,
                roles: {},
                users: []
            };
        }
        
        departments[user.department].totalUsers++;
        departments[user.department].roles[user.role] = (departments[user.department].roles[user.role] || 0) + 1;
        departments[user.department].users.push({
            name: user.fullName,
            role: user.role,
            email: user.email
        });
        
        return departments;
    }, {});

console.log('Users by Department:');
Object.entries(usersByDepartment).forEach(([dept, data]) => {
    console.log(`${dept}: ${data.totalUsers} users, Roles:`, data.roles);
});
console.log();

/**
 * Example 2C: Calculate user profile completeness using map() and reduce()
 * Real-world use case: Profile completion tracking and user engagement
 */
console.log('2C. Profile Completeness Analysis:');

function calculateProfileCompleteness(user) {
    const fields = [
        user.profile.bio && user.profile.bio.length > 20,
        user.profile.location,
        user.profile.skills && user.profile.skills.length > 0,
        user.profile.avatar,
        user.profile.preferences.language,
        user.firstName && user.lastName
    ];
    
    const completedFields = fields.filter(Boolean).length;
    return Math.round((completedFields / fields.length) * 100);
}

const profileStats = users.map(user => ({
    username: user.username,
    completeness: calculateProfileCompleteness(user),
    department: user.department,
    status: user.status
})).filter(user => user.status === 'active');

const avgCompleteness = profileStats.reduce((sum, user) => sum + user.completeness, 0) / profileStats.length;

console.log(`Average Profile Completeness: ${avgCompleteness.toFixed(1)}%`);

const incompleteProfils = profileStats.filter(user => user.completeness < 70);
console.log(`Users with incomplete profiles (<70%): ${incompleteProfils.length}`);
console.log('Sample incomplete profiles:', incompleteProfils.slice(0, 3));
console.log();

// ===== 3. ACTIVITY TRACKING AND ANALYTICS =====

console.log('3. ACTIVITY TRACKING AND ANALYTICS\n');

/**
 * Example 3A: Analyze user activity patterns using filter() and reduce()
 * Real-world use case: User engagement analytics and behavior tracking
 */
console.log('3A. User Activity Analytics:');

function analyzeUserActivity(activities, users) {
    // Get activity data for last 7 days
    const recentActivities = activities.filter(activity => {
        const daysSince = (Date.now() - activity.timestamp.getTime()) / (1000 * 60 * 60 * 24);
        return daysSince <= 7;
    });
    
    // Group activities by user
    const userActivityStats = recentActivities.reduce((stats, activity) => {
        if (!stats[activity.userId]) {
            stats[activity.userId] = {
                userId: activity.userId,
                totalActivities: 0,
                activityTypes: {},
                successRate: 0,
                successfulActivities: 0
            };
        }
        
        stats[activity.userId].totalActivities++;
        stats[activity.userId].activityTypes[activity.action] = 
            (stats[activity.userId].activityTypes[activity.action] || 0) + 1;
        
        if (activity.metadata.success) {
            stats[activity.userId].successfulActivities++;
        }
        
        return stats;
    }, {});
    
    // Calculate success rates
    Object.values(userActivityStats).forEach(userStats => {
        userStats.successRate = Math.round((userStats.successfulActivities / userStats.totalActivities) * 100);
    });
    
    return userActivityStats;
}

const activityStats = analyzeUserActivity(activities, users);
const topActiveUsers = Object.values(activityStats)
    .sort((a, b) => b.totalActivities - a.totalActivities)
    .slice(0, 5);

console.log('Top Active Users (Last 7 Days):');
topActiveUsers.forEach((userStats, index) => {
    const user = users.find(u => u.id === userStats.userId);
    console.log(`${index + 1}. ${user ? user.fullName : 'Unknown'}: ${userStats.totalActivities} activities (${userStats.successRate}% success)`);
});
console.log();

/**
 * Example 3B: Track failed login attempts using filter() and grouping
 * Real-world use case: Security monitoring and threat detection
 */
console.log('3B. Security Monitoring - Failed Logins:');

const failedLogins = activities
    .filter(activity => activity.action === 'login' && !activity.metadata.success)
    .reduce((failures, activity) => {
        const key = activity.userId;
        if (!failures[key]) {
            failures[key] = {
                userId: activity.userId,
                attempts: 0,
                lastAttempt: activity.timestamp,
                ipAddresses: new Set()
            };
        }
        
        failures[key].attempts++;
        failures[key].ipAddresses.add(activity.metadata.ipAddress);
        if (activity.timestamp > failures[key].lastAttempt) {
            failures[key].lastAttempt = activity.timestamp;
        }
        
        return failures;
    }, {});

const suspiciousUsers = Object.values(failedLogins)
    .filter(failure => failure.attempts >= 3)
    .sort((a, b) => b.attempts - a.attempts);

console.log('Users with Multiple Failed Login Attempts:');
suspiciousUsers.slice(0, 5).forEach(failure => {
    const user = users.find(u => u.id === failure.userId);
    console.log(`${user ? user.fullName : 'Unknown'}: ${failure.attempts} failed attempts from ${failure.ipAddresses.size} IP(s)`);
});
console.log();

/**
 * Example 3C: Calculate user engagement metrics using map() and reduce()
 * Real-world use case: User engagement scoring and retention analysis
 */
console.log('3C. User Engagement Scoring:');

function calculateEngagementScore(user, userActivities) {
    const daysSinceJoin = (Date.now() - user.joinDate.getTime()) / (1000 * 60 * 60 * 24);
    const daysSinceLastLogin = (Date.now() - user.lastLogin.getTime()) / (1000 * 60 * 60 * 24);
    
    // Base scores
    let score = 0;
    
    // Activity frequency (0-30 points)
    score += Math.min((user.metrics.loginCount / Math.max(daysSinceJoin, 1)) * 30, 30);
    
    // Recent activity (0-25 points)
    if (daysSinceLastLogin <= 1) score += 25;
    else if (daysSinceLastLogin <= 7) score += 15;
    else if (daysSinceLastLogin <= 30) score += 5;
    
    // Content creation (0-20 points)
    score += Math.min((user.metrics.documentsCreated / 10) * 20, 20);
    
    // Collaboration (0-15 points)
    score += Math.min((user.metrics.collaborations / 5) * 15, 15);
    
    // Profile completeness (0-10 points)
    score += (calculateProfileCompleteness(user) / 100) * 10;
    
    return Math.round(score);
}

const engagementScores = users
    .filter(user => user.status === 'active')
    .map(user => ({
        username: user.username,
        fullName: user.fullName,
        department: user.department,
        role: user.role,
        engagementScore: calculateEngagementScore(user, activities),
        metrics: user.metrics
    }))
    .sort((a, b) => b.engagementScore - a.engagementScore);

console.log('Top Engaged Users:');
engagementScores.slice(0, 5).forEach((user, index) => {
    console.log(`${index + 1}. ${user.fullName} (${user.department}): ${user.engagementScore}/100`);
});

const avgEngagement = engagementScores.reduce((sum, user) => sum + user.engagementScore, 0) / engagementScores.length;
console.log(`\nAverage Engagement Score: ${avgEngagement.toFixed(1)}/100`);

const lowEngagementUsers = engagementScores.filter(user => user.engagementScore < 30);
console.log(`Users with Low Engagement (<30): ${lowEngagementUsers.length}`);
console.log();

// ===== 4. PERMISSION MANAGEMENT =====

console.log('4. PERMISSION MANAGEMENT\n');

/**
 * Example 4A: Advanced permission checking using every() and some()
 * Real-world use case: Access control and security validation
 */
console.log('4A. Permission Validation:');

function checkBulkPermissions(users, requiredPermissions) {
    return users.map(user => {
        const hasAllPermissions = requiredPermissions.every(permission => 
            user.permissions[permission] === true
        );
        
        const hasAnyPermission = requiredPermissions.some(permission => 
            user.permissions[permission] === true
        );
        
        return {
            userId: user.id,
            username: user.username,
            hasAllPermissions,
            hasAnyPermission,
            grantedPermissions: Object.keys(user.permissions).filter(key => user.permissions[key])
        };
    });
}

const permissionCheck = checkBulkPermissions(users.slice(0, 10), ['canWrite', 'canDelete']);
console.log('Permission Check Results:');
console.log(permissionCheck.slice(0, 3));
console.log();

/**
 * Example 4B: Role-based permission matrix using reduce() and map()
 * Real-world use case: Role management and permission auditing
 */
console.log('4B. Role-Permission Matrix:');

const rolePermissionMatrix = users.reduce((matrix, user) => {
    if (!matrix[user.role]) {
        matrix[user.role] = {
            userCount: 0,
            permissions: {
                canRead: 0,
                canWrite: 0,
                canDelete: 0,
                canAdmin: 0
            }
        };
    }
    
    matrix[user.role].userCount++;
    
    Object.keys(user.permissions).forEach(permission => {
        if (user.permissions[permission]) {
            matrix[user.role].permissions[permission]++;
        }
    });
    
    return matrix;
}, {});

console.log('Role-Permission Distribution:');
Object.entries(rolePermissionMatrix).forEach(([role, data]) => {
    console.log(`${role} (${data.userCount} users):`);
    Object.entries(data.permissions).forEach(([permission, count]) => {
        const percentage = Math.round((count / data.userCount) * 100);
        console.log(`  ${permission}: ${count}/${data.userCount} (${percentage}%)`);
    });
});
console.log();

/**
 * Example 4C: Generate permission audit report using method chaining
 * Real-world use case: Security compliance and audit reporting
 */
console.log('4C. Permission Audit Report:');

const auditReport = users
    .filter(user => user.status === 'active')
    .map(user => ({
        ...user,
        permissionCount: Object.values(user.permissions).filter(Boolean).length,
        hasElevatedAccess: user.permissions.canDelete || user.permissions.canAdmin
    }))
    .reduce((report, user) => {
        // Overall statistics
        report.totalUsers++;
        if (user.hasElevatedAccess) report.usersWithElevatedAccess++;
        
        // Department breakdown
        if (!report.departmentBreakdown[user.department]) {
            report.departmentBreakdown[user.department] = {
                totalUsers: 0,
                elevatedUsers: 0,
                averagePermissions: 0
            };
        }
        
        report.departmentBreakdown[user.department].totalUsers++;
        if (user.hasElevatedAccess) {
            report.departmentBreakdown[user.department].elevatedUsers++;
        }
        report.departmentBreakdown[user.department].averagePermissions += user.permissionCount;
        
        // Role breakdown
        if (!report.roleBreakdown[user.role]) {
            report.roleBreakdown[user.role] = 0;
        }
        report.roleBreakdown[user.role]++;
        
        return report;
    }, {
        totalUsers: 0,
        usersWithElevatedAccess: 0,
        departmentBreakdown: {},
        roleBreakdown: {}
    });

// Calculate averages
Object.keys(auditReport.departmentBreakdown).forEach(dept => {
    const data = auditReport.departmentBreakdown[dept];
    data.averagePermissions = Math.round(data.averagePermissions / data.totalUsers * 10) / 10;
});

console.log('Permission Audit Summary:');
console.log(`Total Active Users: ${auditReport.totalUsers}`);
console.log(`Users with Elevated Access: ${auditReport.usersWithElevatedAccess} (${Math.round((auditReport.usersWithElevatedAccess / auditReport.totalUsers) * 100)}%)`);
console.log('\nDepartment Security Profile:');
Object.entries(auditReport.departmentBreakdown).forEach(([dept, data]) => {
    console.log(`${dept}: ${data.elevatedUsers}/${data.totalUsers} elevated (avg ${data.averagePermissions} permissions)`);
});
console.log();

// ===== 5. UTILITY FUNCTIONS =====

console.log('5. UTILITY FUNCTIONS\n');

/**
 * Utility: Search users with fuzzy matching
 */
function searchUsers(users, query) {
    const lowercaseQuery = query.toLowerCase();
    
    return users
        .filter(user => user.status === 'active')
        .map(user => {
            let relevanceScore = 0;
            
            // Exact matches get highest scores
            if (user.username.toLowerCase().includes(lowercaseQuery)) relevanceScore += 10;
            if (user.fullName.toLowerCase().includes(lowercaseQuery)) relevanceScore += 10;
            if (user.email.toLowerCase().includes(lowercaseQuery)) relevanceScore += 8;
            if (user.department.toLowerCase().includes(lowercaseQuery)) relevanceScore += 5;
            if (user.role.toLowerCase().includes(lowercaseQuery)) relevanceScore += 5;
            
            // Skills matching
            const skillMatches = user.profile.skills.filter(skill => 
                skill.toLowerCase().includes(lowercaseQuery)
            ).length;
            relevanceScore += skillMatches * 3;
            
            return {
                user: {
                    id: user.id,
                    username: user.username,
                    fullName: user.fullName,
                    department: user.department,
                    role: user.role,
                    email: user.email
                },
                relevanceScore
            };
        })
        .filter(result => result.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

/**
 * Utility: Get user statistics
 */
function getUserStatistics(users, activities) {
    const activeUsers = users.filter(user => user.status === 'active');
    
    return {
        total: users.length,
        active: activeUsers.length,
        byStatus: users.reduce((counts, user) => {
            counts[user.status] = (counts[user.status] || 0) + 1;
            return counts;
        }, {}),
        byRole: activeUsers.reduce((counts, user) => {
            counts[user.role] = (counts[user.role] || 0) + 1;
            return counts;
        }, {}),
        byDepartment: activeUsers.reduce((counts, user) => {
            counts[user.department] = (counts[user.department] || 0) + 1;
            return counts;
        }, {}),
        recentActivity: {
            last24h: activities.filter(a => (Date.now() - a.timestamp.getTime()) < 24 * 60 * 60 * 1000).length,
            last7days: activities.filter(a => (Date.now() - a.timestamp.getTime()) < 7 * 24 * 60 * 60 * 1000).length
        }
    };
}

console.log('=== UTILITY FUNCTIONS DEMO ===');

const searchResults = searchUsers(users, 'john');
console.log('Search results for "john":', searchResults.slice(0, 3));

const userStats = getUserStatistics(users, activities);
console.log('\nUser Statistics:', userStats);

console.log('\n=== USER MANAGEMENT EXAMPLES COMPLETE ===');