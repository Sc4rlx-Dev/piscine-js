/**
 * EDUCATIONAL SYSTEM
 * 
 * Real-world examples demonstrating JavaScript array methods for educational operations:
 * - Grade calculations and statistics
 * - Student performance tracking
 * - Course enrollment management
 * - Assignment submission processing
 */

// ===== SAMPLE DATA GENERATION =====

/**
 * Generate sample student data
 */
function generateStudents() {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
    const grades = ['9th', '10th', '11th', '12th'];
    const programs = ['Regular', 'Honors', 'AP', 'IB'];
    
    const students = [];
    
    for (let i = 1; i <= 150; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        
        students.push({
            id: i,
            firstName: firstName,
            lastName: lastName,
            fullName: `${firstName} ${lastName}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@school.edu`,
            studentId: `STU${String(i).padStart(4, '0')}`,
            grade: grades[Math.floor(Math.random() * grades.length)],
            program: programs[Math.floor(Math.random() * programs.length)],
            enrollmentDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000 * 4), // Last 4 years
            status: ['active', 'inactive', 'graduated', 'transferred'][Math.floor(Math.random() * 4)],
            gpa: parseFloat((Math.random() * 2 + 2.0).toFixed(2)), // 2.0 to 4.0
            attendance: Math.floor(Math.random() * 20 + 80), // 80-100%
            demographics: {
                age: Math.floor(Math.random() * 4 + 14), // 14-18
                parentEmail: `parent.${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`,
                address: {
                    zipCode: Math.floor(Math.random() * 90000 + 10000),
                    district: ['North', 'South', 'East', 'West', 'Central'][Math.floor(Math.random() * 5)]
                }
            },
            specialNeeds: {
                hasIEP: Math.random() > 0.9, // 10% have IEP
                has504Plan: Math.random() > 0.95, // 5% have 504 plan
                isELL: Math.random() > 0.85 // 15% are English Language Learners
            }
        });
    }
    
    return students;
}

/**
 * Generate course data
 */
function generateCourses() {
    const subjects = ['Mathematics', 'English', 'Science', 'History', 'Foreign Language', 'Arts', 'Physical Education'];
    const levels = ['Regular', 'Honors', 'AP'];
    
    const courses = [];
    let courseId = 1;
    
    subjects.forEach(subject => {
        levels.forEach(level => {
            courses.push({
                id: courseId++,
                name: `${level} ${subject}`,
                subject: subject,
                level: level,
                credits: subject === 'Physical Education' ? 0.5 : 1.0,
                maxEnrollment: Math.floor(Math.random() * 10 + 25), // 25-35 students
                currentEnrollment: 0,
                teacher: `Teacher ${courseId}`,
                room: `Room ${Math.floor(Math.random() * 100 + 100)}`,
                period: Math.floor(Math.random() * 8 + 1), // Periods 1-8
                prerequisites: level === 'AP' ? [`Regular ${subject}`, `Honors ${subject}`] : 
                             level === 'Honors' ? [`Regular ${subject}`] : [],
                description: `${level} level course in ${subject}`,
                semester: ['Fall', 'Spring', 'Full Year'][Math.floor(Math.random() * 3)]
            });
        });
    });
    
    return courses;
}

/**
 * Generate assignment and grade data
 */
function generateAssignments() {
    const assignmentTypes = ['Homework', 'Quiz', 'Test', 'Project', 'Lab', 'Essay', 'Presentation'];
    const assignments = [];
    
    for (let i = 1; i <= 300; i++) {
        assignments.push({
            id: i,
            title: `${assignmentTypes[Math.floor(Math.random() * assignmentTypes.length)]} ${i}`,
            type: assignmentTypes[Math.floor(Math.random() * assignmentTypes.length)],
            courseId: Math.floor(Math.random() * 21) + 1, // 21 courses
            studentId: Math.floor(Math.random() * 150) + 1, // 150 students
            maxPoints: [10, 20, 25, 50, 100][Math.floor(Math.random() * 5)],
            pointsEarned: 0, // Will be calculated
            dueDate: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000), // Next 30 days
            submittedDate: null,
            isSubmitted: Math.random() > 0.15, // 85% submission rate
            isLate: false,
            attempts: Math.floor(Math.random() * 3) + 1,
            feedback: '',
            rubricScore: {
                content: 0,
                organization: 0,
                mechanics: 0,
                creativity: 0
            }
        });
    }
    
    // Calculate earned points and submission details
    assignments.forEach(assignment => {
        if (assignment.isSubmitted) {
            const baseScore = Math.random() * 0.4 + 0.6; // 60-100% base score
            assignment.pointsEarned = Math.round(assignment.maxPoints * baseScore);
            assignment.submittedDate = new Date(assignment.dueDate.getTime() - Math.random() * 5 * 24 * 60 * 60 * 1000);
            assignment.isLate = assignment.submittedDate > assignment.dueDate;
            
            if (assignment.isLate) {
                assignment.pointsEarned = Math.max(0, assignment.pointsEarned - Math.floor(assignment.maxPoints * 0.1)); // 10% penalty
            }
            
            // Generate rubric scores for projects and essays
            if (['Project', 'Essay', 'Presentation'].includes(assignment.type)) {
                assignment.rubricScore = {
                    content: Math.floor(Math.random() * 3 + 3), // 3-5
                    organization: Math.floor(Math.random() * 3 + 3),
                    mechanics: Math.floor(Math.random() * 3 + 3),
                    creativity: Math.floor(Math.random() * 3 + 3)
                };
            }
        }
    });
    
    return assignments;
}

/**
 * Generate enrollment data
 */
function generateEnrollments(students, courses) {
    const enrollments = [];
    
    students.forEach(student => {
        // Each student enrolls in 6-8 courses
        const courseCount = Math.floor(Math.random() * 3) + 6;
        const selectedCourses = courses
            .filter(course => {
                // Basic grade/program compatibility
                if (student.program === 'AP' && course.level === 'Regular') return Math.random() > 0.7;
                if (student.program === 'Regular' && course.level === 'AP') return Math.random() > 0.9;
                return true;
            })
            .sort(() => 0.5 - Math.random())
            .slice(0, courseCount);
        
        selectedCourses.forEach(course => {
            enrollments.push({
                id: enrollments.length + 1,
                studentId: student.id,
                courseId: course.id,
                enrollmentDate: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000), // Last 60 days
                status: ['enrolled', 'dropped', 'completed'][Math.floor(Math.random() * 3)],
                midtermGrade: Math.random() > 0.3 ? ['A', 'B', 'C', 'D', 'F'][Math.floor(Math.random() * 5)] : null,
                finalGrade: Math.random() > 0.5 ? ['A', 'B', 'C', 'D', 'F'][Math.floor(Math.random() * 5)] : null,
                effort: ['Excellent', 'Good', 'Satisfactory', 'Needs Improvement'][Math.floor(Math.random() * 4)],
                participation: Math.floor(Math.random() * 30 + 70) // 70-100%
            });
        });
    });
    
    return enrollments;
}

// ===== DEMONSTRATION EXAMPLES =====

console.log('=== EDUCATIONAL SYSTEM EXAMPLES ===\n');

// Generate sample data
const students = generateStudents();
const courses = generateCourses();
const assignments = generateAssignments();
const enrollments = generateEnrollments(students, courses);

console.log(`Generated ${students.length} students, ${courses.length} courses, ${assignments.length} assignments, ${enrollments.length} enrollments\n`);

// ===== 1. GRADE CALCULATIONS AND STATISTICS =====

console.log('1. GRADE CALCULATIONS AND STATISTICS\n');

/**
 * Example 1A: Calculate class averages and grade distributions using reduce()
 * Real-world use case: Academic performance reporting and analytics
 */
console.log('1A. Grade Analysis and Class Statistics:');

function calculateGradeStatistics(assignments, courses, students) {
    // Group assignments by course
    const courseGrades = assignments
        .filter(assignment => assignment.isSubmitted)
        .reduce((courseData, assignment) => {
            if (!courseData[assignment.courseId]) {
                courseData[assignment.courseId] = {
                    courseId: assignment.courseId,
                    assignments: [],
                    totalPoints: 0,
                    earnedPoints: 0,
                    students: new Set()
                };
            }
            
            courseData[assignment.courseId].assignments.push(assignment);
            courseData[assignment.courseId].totalPoints += assignment.maxPoints;
            courseData[assignment.courseId].earnedPoints += assignment.pointsEarned;
            courseData[assignment.courseId].students.add(assignment.studentId);
            
            return courseData;
        }, {});
    
    // Calculate statistics for each course
    return Object.values(courseGrades).map(courseData => {
        const course = courses.find(c => c.id === courseData.courseId);
        const classAverage = (courseData.earnedPoints / courseData.totalPoints) * 100;
        
        // Calculate grade distribution
        const studentGrades = Array.from(courseData.students).map(studentId => {
            const studentAssignments = courseData.assignments.filter(a => a.studentId === studentId);
            const studentTotal = studentAssignments.reduce((sum, a) => sum + a.maxPoints, 0);
            const studentEarned = studentAssignments.reduce((sum, a) => sum + a.pointsEarned, 0);
            return studentTotal > 0 ? (studentEarned / studentTotal) * 100 : 0;
        });
        
        const gradeDistribution = studentGrades.reduce((dist, grade) => {
            if (grade >= 90) dist.A++;
            else if (grade >= 80) dist.B++;
            else if (grade >= 70) dist.C++;
            else if (grade >= 60) dist.D++;
            else dist.F++;
            return dist;
        }, { A: 0, B: 0, C: 0, D: 0, F: 0 });
        
        return {
            courseId: courseData.courseId,
            courseName: course ? course.name : 'Unknown',
            classAverage: parseFloat(classAverage.toFixed(2)),
            studentCount: courseData.students.size,
            assignmentCount: courseData.assignments.length,
            gradeDistribution: gradeDistribution,
            highestGrade: Math.max(...studentGrades),
            lowestGrade: Math.min(...studentGrades),
            passingRate: ((gradeDistribution.A + gradeDistribution.B + gradeDistribution.C + gradeDistribution.D) / studentGrades.length) * 100
        };
    }).sort((a, b) => b.classAverage - a.classAverage);
}

const gradeStatistics = calculateGradeStatistics(assignments, courses, students);

console.log('Course Performance Summary (Top 5):');
gradeStatistics.slice(0, 5).forEach((courseStats, index) => {
    console.log(`${index + 1}. ${courseStats.courseName}:`);
    console.log(`   Class Average: ${courseStats.classAverage}%`);
    console.log(`   Students: ${courseStats.studentCount}, Assignments: ${courseStats.assignmentCount}`);
    console.log(`   Grade Distribution: A:${courseStats.gradeDistribution.A} B:${courseStats.gradeDistribution.B} C:${courseStats.gradeDistribution.C} D:${courseStats.gradeDistribution.D} F:${courseStats.gradeDistribution.F}`);
    console.log(`   Passing Rate: ${courseStats.passingRate.toFixed(1)}%`);
});
console.log();

/**
 * Example 1B: Identify at-risk students using filter() and multiple criteria
 * Real-world use case: Early intervention and student support systems
 */
console.log('1B. At-Risk Student Identification:');

function identifyAtRiskStudents(students, assignments, enrollments) {
    return students
        .filter(student => student.status === 'active')
        .map(student => {
            // Get student's assignments
            const studentAssignments = assignments.filter(a => a.studentId === student.id);
            const submittedAssignments = studentAssignments.filter(a => a.isSubmitted);
            
            // Calculate metrics
            const submissionRate = studentAssignments.length > 0 ? 
                (submittedAssignments.length / studentAssignments.length) * 100 : 100;
            
            const averageGrade = submittedAssignments.length > 0 ?
                submittedAssignments.reduce((sum, a) => sum + (a.pointsEarned / a.maxPoints) * 100, 0) / submittedAssignments.length : 0;
            
            const lateSubmissions = submittedAssignments.filter(a => a.isLate).length;
            const lateRate = submittedAssignments.length > 0 ? 
                (lateSubmissions / submittedAssignments.length) * 100 : 0;
            
            // Risk factors
            const riskFactors = {
                lowGPA: student.gpa < 2.5,
                lowAttendance: student.attendance < 85,
                lowSubmissionRate: submissionRate < 70,
                lowAverageGrade: averageGrade < 70,
                highLateRate: lateRate > 30,
                hasSpecialNeeds: student.specialNeeds.hasIEP || student.specialNeeds.has504Plan || student.specialNeeds.isELL
            };
            
            const riskScore = Object.values(riskFactors).filter(Boolean).length;
            
            return {
                student: student,
                metrics: {
                    submissionRate: parseFloat(submissionRate.toFixed(1)),
                    averageGrade: parseFloat(averageGrade.toFixed(1)),
                    lateRate: parseFloat(lateRate.toFixed(1)),
                    assignmentCount: studentAssignments.length
                },
                riskFactors: riskFactors,
                riskScore: riskScore,
                riskLevel: riskScore >= 4 ? 'High' : riskScore >= 2 ? 'Medium' : 'Low'
            };
        })
        .filter(studentData => studentData.riskScore >= 2)
        .sort((a, b) => b.riskScore - a.riskScore);
}

const atRiskStudents = identifyAtRiskStudents(students, assignments, enrollments);

console.log(`At-Risk Students Identified: ${atRiskStudents.length}`);
console.log('High Risk Students:');

atRiskStudents
    .filter(student => student.riskLevel === 'High')
    .slice(0, 5)
    .forEach((studentData, index) => {
        console.log(`${index + 1}. ${studentData.student.fullName} (${studentData.student.grade}, ${studentData.student.program}):`);
        console.log(`   Risk Score: ${studentData.riskScore}/6 (${studentData.riskLevel})`);
        console.log(`   GPA: ${studentData.student.gpa}, Attendance: ${studentData.student.attendance}%`);
        console.log(`   Submission Rate: ${studentData.metrics.submissionRate}%, Late Rate: ${studentData.metrics.lateRate}%`);
        
        const activeRiskFactors = Object.entries(studentData.riskFactors)
            .filter(([, isActive]) => isActive)
            .map(([factor]) => factor);
        console.log(`   Risk Factors: ${activeRiskFactors.join(', ')}`);
    });
console.log();

/**
 * Example 1C: Calculate weighted grades and class rank using map() and sort()
 * Real-world use case: Academic ranking and honor roll determination
 */
console.log('1C. Weighted GPA and Class Ranking:');

function calculateWeightedGPA(students, enrollments, courses) {
    return students
        .filter(student => student.status === 'active')
        .map(student => {
            const studentEnrollments = enrollments.filter(e => e.studentId === student.id && e.finalGrade);
            
            if (studentEnrollments.length === 0) {
                return {
                    student: student,
                    weightedGPA: student.gpa,
                    unweightedGPA: student.gpa,
                    totalCredits: 0,
                    honorRoll: false
                };
            }
            
            let totalWeightedPoints = 0;
            let totalUnweightedPoints = 0;
            let totalCredits = 0;
            
            studentEnrollments.forEach(enrollment => {
                const course = courses.find(c => c.id === enrollment.courseId);
                const credits = course ? course.credits : 1.0;
                
                // Convert letter grade to points
                const gradePoints = {
                    'A': 4.0, 'B': 3.0, 'C': 2.0, 'D': 1.0, 'F': 0.0
                };
                
                const basePoints = gradePoints[enrollment.finalGrade] || 0;
                let weightedPoints = basePoints;
                
                // Add weight for advanced courses
                if (course && course.level === 'Honors') {
                    weightedPoints += 0.5;
                } else if (course && course.level === 'AP') {
                    weightedPoints += 1.0;
                }
                
                totalWeightedPoints += weightedPoints * credits;
                totalUnweightedPoints += basePoints * credits;
                totalCredits += credits;
            });
            
            const weightedGPA = totalCredits > 0 ? totalWeightedPoints / totalCredits : 0;
            const unweightedGPA = totalCredits > 0 ? totalUnweightedPoints / totalCredits : 0;
            
            return {
                student: student,
                weightedGPA: parseFloat(weightedGPA.toFixed(3)),
                unweightedGPA: parseFloat(unweightedGPA.toFixed(3)),
                totalCredits: totalCredits,
                courseCount: studentEnrollments.length,
                honorRoll: weightedGPA >= 3.5
            };
        })
        .sort((a, b) => b.weightedGPA - a.weightedGPA)
        .map((studentData, index) => ({
            ...studentData,
            classRank: index + 1
        }));
}

const classRankings = calculateWeightedGPA(students, enrollments, courses);

console.log('Class Rankings (Top 10):');
classRankings.slice(0, 10).forEach((ranking, index) => {
    console.log(`${ranking.classRank}. ${ranking.student.fullName} (${ranking.student.grade}):`);
    console.log(`   Weighted GPA: ${ranking.weightedGPA}, Unweighted: ${ranking.unweightedGPA}`);
    console.log(`   Credits: ${ranking.totalCredits}, Honor Roll: ${ranking.honorRoll ? 'Yes' : 'No'}`);
});

const honorRollStudents = classRankings.filter(r => r.honorRoll);
console.log(`\nHonor Roll Students: ${honorRollStudents.length} (${((honorRollStudents.length / classRankings.length) * 100).toFixed(1)}%)`);
console.log();

// ===== 2. STUDENT PERFORMANCE TRACKING =====

console.log('2. STUDENT PERFORMANCE TRACKING\n');

/**
 * Example 2A: Track performance trends over time using reduce() and time analysis
 * Real-world use case: Progress monitoring and intervention planning
 */
console.log('2A. Performance Trend Analysis:');

function analyzePerformanceTrends(assignments, students) {
    // Group assignments by student and sort by date
    const studentTrends = assignments
        .filter(a => a.isSubmitted && a.submittedDate)
        .reduce((trends, assignment) => {
            if (!trends[assignment.studentId]) {
                trends[assignment.studentId] = [];
            }
            trends[assignment.studentId].push({
                ...assignment,
                percentage: (assignment.pointsEarned / assignment.maxPoints) * 100
            });
            return trends;
        }, {});
    
    // Analyze trends for each student
    return Object.entries(studentTrends).map(([studentId, studentAssignments]) => {
        const student = students.find(s => s.id === parseInt(studentId));
        if (!student) return null;
        
        // Sort by submission date
        studentAssignments.sort((a, b) => a.submittedDate - b.submittedDate);
        
        // Calculate trend metrics
        const firstHalf = studentAssignments.slice(0, Math.ceil(studentAssignments.length / 2));
        const secondHalf = studentAssignments.slice(Math.ceil(studentAssignments.length / 2));
        
        const firstHalfAvg = firstHalf.reduce((sum, a) => sum + a.percentage, 0) / firstHalf.length;
        const secondHalfAvg = secondHalf.length > 0 ? 
            secondHalf.reduce((sum, a) => sum + a.percentage, 0) / secondHalf.length : firstHalfAvg;
        
        const trendDirection = secondHalfAvg - firstHalfAvg;
        const currentAverage = studentAssignments.reduce((sum, a) => sum + a.percentage, 0) / studentAssignments.length;
        
        // Recent performance (last 5 assignments)
        const recentAssignments = studentAssignments.slice(-5);
        const recentAverage = recentAssignments.reduce((sum, a) => sum + a.percentage, 0) / recentAssignments.length;
        
        return {
            student: student,
            assignmentCount: studentAssignments.length,
            currentAverage: parseFloat(currentAverage.toFixed(2)),
            recentAverage: parseFloat(recentAverage.toFixed(2)),
            trendDirection: parseFloat(trendDirection.toFixed(2)),
            trendStatus: trendDirection > 5 ? 'Improving' : 
                        trendDirection < -5 ? 'Declining' : 'Stable',
            firstHalfAvg: parseFloat(firstHalfAvg.toFixed(2)),
            secondHalfAvg: parseFloat(secondHalfAvg.toFixed(2))
        };
    }).filter(Boolean).sort((a, b) => a.trendDirection - b.trendDirection);
}

const performanceTrends = analyzePerformanceTrends(assignments, students);

console.log('Students with Declining Performance:');
performanceTrends
    .filter(trend => trend.trendStatus === 'Declining')
    .slice(0, 5)
    .forEach((trend, index) => {
        console.log(`${index + 1}. ${trend.student.fullName}:`);
        console.log(`   Current Avg: ${trend.currentAverage}%, Recent Avg: ${trend.recentAverage}%`);
        console.log(`   Trend: ${trend.trendDirection}% (${trend.trendStatus})`);
        console.log(`   Early vs Recent: ${trend.firstHalfAvg}% → ${trend.secondHalfAvg}%`);
    });

console.log('\nStudents with Improving Performance:');
performanceTrends
    .filter(trend => trend.trendStatus === 'Improving')
    .slice(-5)
    .forEach((trend, index) => {
        console.log(`${index + 1}. ${trend.student.fullName}:`);
        console.log(`   Current Avg: ${trend.currentAverage}%, Recent Avg: ${trend.recentAverage}%`);
        console.log(`   Trend: +${trend.trendDirection}% (${trend.trendStatus})`);
    });
console.log();

/**
 * Example 2B: Compare performance across different assignment types using grouping
 * Real-world use case: Assessment strategy optimization and learning analytics
 */
console.log('2B. Performance by Assignment Type:');

function analyzePerformanceByType(assignments, students) {
    const typeAnalysis = assignments
        .filter(a => a.isSubmitted)
        .reduce((analysis, assignment) => {
            if (!analysis[assignment.type]) {
                analysis[assignment.type] = {
                    type: assignment.type,
                    assignments: [],
                    totalPoints: 0,
                    earnedPoints: 0,
                    submissionCount: 0,
                    lateCount: 0,
                    studentPerformance: {}
                };
            }
            
            const typeData = analysis[assignment.type];
            typeData.assignments.push(assignment);
            typeData.totalPoints += assignment.maxPoints;
            typeData.earnedPoints += assignment.pointsEarned;
            typeData.submissionCount++;
            if (assignment.isLate) typeData.lateCount++;
            
            // Track per-student performance
            if (!typeData.studentPerformance[assignment.studentId]) {
                typeData.studentPerformance[assignment.studentId] = {
                    totalPoints: 0,
                    earnedPoints: 0,
                    count: 0
                };
            }
            
            typeData.studentPerformance[assignment.studentId].totalPoints += assignment.maxPoints;
            typeData.studentPerformance[assignment.studentId].earnedPoints += assignment.pointsEarned;
            typeData.studentPerformance[assignment.studentId].count++;
            
            return analysis;
        }, {});
    
    // Calculate statistics for each type
    return Object.values(typeAnalysis).map(typeData => {
        const averageScore = (typeData.earnedPoints / typeData.totalPoints) * 100;
        const lateRate = (typeData.lateCount / typeData.submissionCount) * 100;
        
        // Calculate student score distribution
        const studentScores = Object.values(typeData.studentPerformance).map(student => 
            (student.earnedPoints / student.totalPoints) * 100
        );
        
        studentScores.sort((a, b) => a - b);
        const median = studentScores.length % 2 === 0 ?
            (studentScores[studentScores.length / 2 - 1] + studentScores[studentScores.length / 2]) / 2 :
            studentScores[Math.floor(studentScores.length / 2)];
        
        return {
            type: typeData.type,
            assignmentCount: typeData.assignments.length,
            submissionCount: typeData.submissionCount,
            averageScore: parseFloat(averageScore.toFixed(2)),
            medianScore: parseFloat(median.toFixed(2)),
            lateRate: parseFloat(lateRate.toFixed(2)),
            highestScore: Math.max(...studentScores),
            lowestScore: Math.min(...studentScores),
            uniqueStudents: Object.keys(typeData.studentPerformance).length
        };
    }).sort((a, b) => b.averageScore - a.averageScore);
}

const performanceByType = analyzePerformanceByType(assignments, students);

console.log('Performance by Assignment Type:');
performanceByType.forEach((typeData, index) => {
    console.log(`${index + 1}. ${typeData.type}:`);
    console.log(`   Average Score: ${typeData.averageScore}% (Median: ${typeData.medianScore}%)`);
    console.log(`   Assignments: ${typeData.assignmentCount}, Submissions: ${typeData.submissionCount}`);
    console.log(`   Late Rate: ${typeData.lateRate}%, Range: ${typeData.lowestScore}%-${typeData.highestScore}%`);
});
console.log();

// ===== 3. COURSE ENROLLMENT MANAGEMENT =====

console.log('3. COURSE ENROLLMENT MANAGEMENT\n');

/**
 * Example 3A: Analyze enrollment patterns and capacity management using filter() and reduce()
 * Real-world use case: Course scheduling and resource allocation
 */
console.log('3A. Enrollment Analysis and Capacity Management:');

function analyzeEnrollmentPatterns(enrollments, courses, students) {
    // Calculate current enrollment for each course
    const courseEnrollmentData = courses.map(course => {
        const courseEnrollments = enrollments.filter(e => 
            e.courseId === course.id && e.status === 'enrolled'
        );
        
        const enrolledStudents = courseEnrollments.map(enrollment => 
            students.find(s => s.id === enrollment.studentId)
        ).filter(Boolean);
        
        // Analyze student composition
        const gradeDistribution = enrolledStudents.reduce((dist, student) => {
            dist[student.grade] = (dist[student.grade] || 0) + 1;
            return dist;
        }, {});
        
        const programDistribution = enrolledStudents.reduce((dist, student) => {
            dist[student.program] = (dist[student.program] || 0) + 1;
            return dist;
        }, {});
        
        const utilizationRate = (courseEnrollments.length / course.maxEnrollment) * 100;
        
        return {
            course: course,
            currentEnrollment: courseEnrollments.length,
            maxEnrollment: course.maxEnrollment,
            availableSpots: course.maxEnrollment - courseEnrollments.length,
            utilizationRate: parseFloat(utilizationRate.toFixed(1)),
            waitlistNeeded: courseEnrollments.length >= course.maxEnrollment,
            gradeDistribution: gradeDistribution,
            programDistribution: programDistribution,
            status: utilizationRate >= 100 ? 'Full' :
                   utilizationRate >= 90 ? 'Near Full' :
                   utilizationRate >= 50 ? 'Good' : 'Low Enrollment'
        };
    });
    
    return courseEnrollmentData.sort((a, b) => b.utilizationRate - a.utilizationRate);
}

const enrollmentAnalysis = analyzeEnrollmentPatterns(enrollments, courses, students);

console.log('Course Enrollment Status:');

console.log('\nOverenrolled/Full Courses:');
enrollmentAnalysis
    .filter(data => data.status === 'Full')
    .slice(0, 5)
    .forEach((data, index) => {
        console.log(`${index + 1}. ${data.course.name}:`);
        console.log(`   Enrollment: ${data.currentEnrollment}/${data.maxEnrollment} (${data.utilizationRate}%)`);
        console.log(`   Grade Mix:`, Object.entries(data.gradeDistribution).map(([grade, count]) => `${grade}:${count}`).join(', '));
    });

console.log('\nUnderenrolled Courses:');
enrollmentAnalysis
    .filter(data => data.status === 'Low Enrollment')
    .slice(-3)
    .forEach((data, index) => {
        console.log(`${index + 1}. ${data.course.name}:`);
        console.log(`   Enrollment: ${data.currentEnrollment}/${data.maxEnrollment} (${data.utilizationRate}%)`);
        console.log(`   Available Spots: ${data.availableSpots}`);
    });
console.log();

/**
 * Example 3B: Prerequisites and course sequencing validation using every() and some()
 * Real-world use case: Academic planning and prerequisite enforcement
 */
console.log('3B. Prerequisites and Academic Planning:');

function validatePrerequisites(students, enrollments, courses) {
    const violations = [];
    const recommendations = [];
    
    enrollments
        .filter(enrollment => enrollment.status === 'enrolled')
        .forEach(enrollment => {
            const student = students.find(s => s.id === enrollment.studentId);
            const course = courses.find(c => c.id === enrollment.courseId);
            
            if (!student || !course) return;
            
            // Check prerequisites
            if (course.prerequisites.length > 0) {
                const studentCompletedCourses = enrollments
                    .filter(e => e.studentId === student.id && e.status === 'completed' && e.finalGrade !== 'F')
                    .map(e => courses.find(c => c.id === e.courseId))
                    .filter(Boolean)
                    .map(c => c.name);
                
                const missingPrereqs = course.prerequisites.filter(prereq => 
                    !studentCompletedCourses.some(completed => completed.includes(prereq.replace('Regular ', '').replace('Honors ', '')))
                );
                
                if (missingPrereqs.length > 0) {
                    violations.push({
                        student: student,
                        course: course,
                        missingPrerequisites: missingPrereqs,
                        severity: 'High'
                    });
                }
            }
            
            // Generate course recommendations based on completed courses and grade level
            if (course.level === 'Regular' && student.program === 'Honors') {
                const honorsVersion = courses.find(c => 
                    c.subject === course.subject && c.level === 'Honors'
                );
                if (honorsVersion) {
                    recommendations.push({
                        student: student,
                        currentCourse: course,
                        recommendedCourse: honorsVersion,
                        reason: 'Student program suggests honors level'
                    });
                }
            }
        });
    
    return { violations, recommendations };
}

const prereqValidation = validatePrerequisites(students, enrollments, courses);

console.log(`Prerequisite Violations Found: ${prereqValidation.violations.length}`);
if (prereqValidation.violations.length > 0) {
    console.log('Sample Violations:');
    prereqValidation.violations.slice(0, 3).forEach((violation, index) => {
        console.log(`${index + 1}. ${violation.student.fullName} in ${violation.course.name}:`);
        console.log(`   Missing Prerequisites: ${violation.missingPrerequisites.join(', ')}`);
    });
}

console.log(`\nCourse Recommendations: ${prereqValidation.recommendations.length}`);
if (prereqValidation.recommendations.length > 0) {
    console.log('Sample Recommendations:');
    prereqValidation.recommendations.slice(0, 3).forEach((rec, index) => {
        console.log(`${index + 1}. ${rec.student.fullName}:`);
        console.log(`   Current: ${rec.currentCourse.name} → Recommended: ${rec.recommendedCourse.name}`);
        console.log(`   Reason: ${rec.reason}`);
    });
}
console.log();

// ===== 4. ASSIGNMENT SUBMISSION PROCESSING =====

console.log('4. ASSIGNMENT SUBMISSION PROCESSING\n');

/**
 * Example 4A: Process late submissions and calculate penalties using map() and filter()
 * Real-world use case: Grading automation and policy enforcement
 */
console.log('4A. Late Submission Analysis and Processing:');

function processLateSubmissions(assignments) {
    const lateSubmissions = assignments.filter(assignment => 
        assignment.isSubmitted && assignment.isLate
    );
    
    const lateAnalysis = lateSubmissions.map(assignment => {
        const daysLate = Math.ceil((assignment.submittedDate - assignment.dueDate) / (1000 * 60 * 60 * 24));
        const originalScore = assignment.pointsEarned + Math.floor(assignment.maxPoints * 0.1); // Reverse penalty
        const penaltyAmount = Math.floor(assignment.maxPoints * 0.1);
        
        return {
            ...assignment,
            daysLate: daysLate,
            originalScore: originalScore,
            penaltyAmount: penaltyAmount,
            penaltyRate: (penaltyAmount / assignment.maxPoints) * 100,
            finalScore: assignment.pointsEarned
        };
    });
    
    // Group by days late
    const lateDistribution = lateAnalysis.reduce((dist, assignment) => {
        const daysBucket = assignment.daysLate <= 1 ? '1 day' :
                          assignment.daysLate <= 3 ? '2-3 days' :
                          assignment.daysLate <= 7 ? '4-7 days' : '8+ days';
        
        if (!dist[daysBucket]) {
            dist[daysBucket] = { count: 0, totalPenalty: 0 };
        }
        
        dist[daysBucket].count++;
        dist[daysBucket].totalPenalty += assignment.penaltyAmount;
        
        return dist;
    }, {});
    
    return { lateAnalysis, lateDistribution };
}

const lateSubmissionAnalysis = processLateSubmissions(assignments);

console.log(`Late Submissions: ${lateSubmissionAnalysis.lateAnalysis.length}`);
console.log('Late Submission Distribution:');
Object.entries(lateSubmissionAnalysis.lateDistribution).forEach(([bucket, data]) => {
    console.log(`${bucket}: ${data.count} submissions, Average penalty: ${(data.totalPenalty / data.count).toFixed(1)} points`);
});

// Students with chronic late submission issues
const chronicLateSubmitters = lateSubmissionAnalysis.lateAnalysis
    .reduce((studentData, assignment) => {
        if (!studentData[assignment.studentId]) {
            studentData[assignment.studentId] = {
                studentId: assignment.studentId,
                lateCount: 0,
                totalPenalty: 0,
                assignments: []
            };
        }
        
        studentData[assignment.studentId].lateCount++;
        studentData[assignment.studentId].totalPenalty += assignment.penaltyAmount;
        studentData[assignment.studentId].assignments.push(assignment);
        
        return studentData;
    }, {});

const topLateSubmitters = Object.values(chronicLateSubmitters)
    .filter(data => data.lateCount >= 3)
    .sort((a, b) => b.lateCount - a.lateCount)
    .slice(0, 5);

console.log('\nStudents with Chronic Late Submission Issues:');
topLateSubmitters.forEach((studentData, index) => {
    const student = students.find(s => s.id === studentData.studentId);
    console.log(`${index + 1}. ${student ? student.fullName : 'Unknown'}:`);
    console.log(`   Late Submissions: ${studentData.lateCount}, Total Penalty: ${studentData.totalPenalty} points`);
});
console.log();

/**
 * Example 4B: Assignment completion rates and engagement metrics using every() and some()
 * Real-world use case: Student engagement monitoring and intervention triggers
 */
console.log('4B. Assignment Completion and Engagement Analysis:');

function analyzeAssignmentEngagement(assignments, students, courses) {
    const studentEngagement = students.map(student => {
        const studentAssignments = assignments.filter(a => a.studentId === student.id);
        const submittedAssignments = studentAssignments.filter(a => a.isSubmitted);
        
        const completionRate = studentAssignments.length > 0 ? 
            (submittedAssignments.length / studentAssignments.length) * 100 : 0;
        
        const onTimeRate = submittedAssignments.length > 0 ?
            (submittedAssignments.filter(a => !a.isLate).length / submittedAssignments.length) * 100 : 0;
        
        const averageAttempts = submittedAssignments.length > 0 ?
            submittedAssignments.reduce((sum, a) => sum + a.attempts, 0) / submittedAssignments.length : 0;
        
        // Check engagement patterns
        const hasSubmittedAllTypes = ['Homework', 'Quiz', 'Test', 'Project'].every(type =>
            submittedAssignments.some(a => a.type === type)
        );
        
        const hasMissedMultipleTests = studentAssignments
            .filter(a => a.type === 'Test' && !a.isSubmitted).length >= 2;
        
        const recentActivity = studentAssignments
            .filter(a => a.submittedDate && 
                (Date.now() - a.submittedDate.getTime()) <= 7 * 24 * 60 * 60 * 1000
            ).length;
        
        return {
            student: student,
            assignmentMetrics: {
                totalAssignments: studentAssignments.length,
                submittedAssignments: submittedAssignments.length,
                completionRate: parseFloat(completionRate.toFixed(1)),
                onTimeRate: parseFloat(onTimeRate.toFixed(1)),
                averageAttempts: parseFloat(averageAttempts.toFixed(1)),
                recentActivity: recentActivity
            },
            engagementFlags: {
                hasSubmittedAllTypes: hasSubmittedAllTypes,
                hasMissedMultipleTests: hasMissedMultipleTests,
                hasRecentActivity: recentActivity > 0,
                isHighEngagement: completionRate >= 90 && onTimeRate >= 80,
                needsIntervention: completionRate < 60 || hasMissedMultipleTests
            }
        };
    }).sort((a, b) => a.assignmentMetrics.completionRate - b.assignmentMetrics.completionRate);
    
    return studentEngagement;
}

const engagementAnalysis = analyzeAssignmentEngagement(assignments, students, courses);

// Students needing intervention
const interventionNeeded = engagementAnalysis.filter(data => 
    data.engagementFlags.needsIntervention && data.student.status === 'active'
);

console.log(`Students Needing Intervention: ${interventionNeeded.length}`);
console.log('Critical Cases:');
interventionNeeded.slice(0, 5).forEach((studentData, index) => {
    console.log(`${index + 1}. ${studentData.student.fullName}:`);
    console.log(`   Completion Rate: ${studentData.assignmentMetrics.completionRate}%`);
    console.log(`   On-Time Rate: ${studentData.assignmentMetrics.onTimeRate}%`);
    console.log(`   Recent Activity: ${studentData.assignmentMetrics.recentActivity} assignments`);
    console.log(`   Flags: ${Object.entries(studentData.engagementFlags)
        .filter(([key, value]) => value && key.startsWith('has') || key.startsWith('needs'))
        .map(([key]) => key).join(', ')}`);
});

// High-performing students
const highPerformers = engagementAnalysis.filter(data => 
    data.engagementFlags.isHighEngagement
);

console.log(`\nHigh-Engagement Students: ${highPerformers.length} (${((highPerformers.length / engagementAnalysis.length) * 100).toFixed(1)}%)`);
console.log();

// ===== 5. ADVANCED EDUCATIONAL ANALYTICS =====

console.log('5. ADVANCED EDUCATIONAL ANALYTICS\n');

/**
 * Example 5A: Comprehensive student success prediction using multiple data points
 * Real-world use case: Predictive analytics for student success and early warning systems
 */
console.log('5A. Student Success Prediction Model:');

function predictStudentSuccess(students, assignments, enrollments, courses) {
    return students
        .filter(student => student.status === 'active')
        .map(student => {
            // Academic performance metrics
            const studentAssignments = assignments.filter(a => a.studentId === student.id);
            const submittedAssignments = studentAssignments.filter(a => a.isSubmitted);
            
            const avgGrade = submittedAssignments.length > 0 ?
                submittedAssignments.reduce((sum, a) => sum + (a.pointsEarned / a.maxPoints) * 100, 0) / submittedAssignments.length : 0;
            
            // Behavioral metrics
            const completionRate = studentAssignments.length > 0 ?
                (submittedAssignments.length / studentAssignments.length) * 100 : 0;
            
            const onTimeRate = submittedAssignments.length > 0 ?
                (submittedAssignments.filter(a => !a.isLate).length / submittedAssignments.length) * 100 : 0;
            
            // Course load and difficulty
            const studentEnrollments = enrollments.filter(e => e.studentId === student.id && e.status === 'enrolled');
            const advancedCourses = studentEnrollments.filter(e => {
                const course = courses.find(c => c.id === e.courseId);
                return course && (course.level === 'Honors' || course.level === 'AP');
            }).length;
            
            // Success score calculation (0-100)
            let successScore = 0;
            
            // Academic performance (40 points)
            successScore += Math.min(40, (avgGrade / 100) * 40);
            
            // GPA component (20 points)
            successScore += Math.min(20, (student.gpa / 4.0) * 20);
            
            // Attendance (15 points)
            successScore += Math.min(15, (student.attendance / 100) * 15);
            
            // Assignment completion (15 points)
            successScore += Math.min(15, (completionRate / 100) * 15);
            
            // Timeliness (10 points)
            successScore += Math.min(10, (onTimeRate / 100) * 10);
            
            // Risk factors (deductions)
            let riskDeduction = 0;
            if (student.specialNeeds.hasIEP) riskDeduction += 2;
            if (student.specialNeeds.isELL) riskDeduction += 3;
            if (advancedCourses > 4) riskDeduction += 2; // Course overload
            
            successScore = Math.max(0, successScore - riskDeduction);
            
            return {
                student: student,
                successScore: parseFloat(successScore.toFixed(1)),
                successLevel: successScore >= 80 ? 'High' :
                             successScore >= 60 ? 'Medium' :
                             successScore >= 40 ? 'Low' : 'Critical',
                metrics: {
                    avgGrade: parseFloat(avgGrade.toFixed(1)),
                    completionRate: parseFloat(completionRate.toFixed(1)),
                    onTimeRate: parseFloat(onTimeRate.toFixed(1)),
                    advancedCourses: advancedCourses,
                    riskFactors: riskDeduction
                },
                recommendations: generateRecommendations(successScore, student, {
                    avgGrade, completionRate, onTimeRate, advancedCourses
                })
            };
        })
        .sort((a, b) => a.successScore - b.successScore);
}

function generateRecommendations(successScore, student, metrics) {
    const recommendations = [];
    
    if (metrics.avgGrade < 70) {
        recommendations.push('Academic tutoring support');
    }
    if (metrics.completionRate < 80) {
        recommendations.push('Assignment completion monitoring');
    }
    if (metrics.onTimeRate < 70) {
        recommendations.push('Time management counseling');
    }
    if (student.attendance < 85) {
        recommendations.push('Attendance intervention');
    }
    if (metrics.advancedCourses > 4) {
        recommendations.push('Course load evaluation');
    }
    if (student.specialNeeds.hasIEP || student.specialNeeds.has504Plan) {
        recommendations.push('Special education support review');
    }
    if (successScore < 40) {
        recommendations.push('Comprehensive intervention plan');
    }
    
    return recommendations;
}

const successPredictions = predictStudentSuccess(students, assignments, enrollments, courses);

console.log('Student Success Prediction Summary:');
const successDistribution = successPredictions.reduce((dist, pred) => {
    dist[pred.successLevel] = (dist[pred.successLevel] || 0) + 1;
    return dist;
}, {});

Object.entries(successDistribution).forEach(([level, count]) => {
    console.log(`${level} Success Likelihood: ${count} students (${((count / successPredictions.length) * 100).toFixed(1)}%)`);
});

console.log('\nCritical Cases Requiring Immediate Attention:');
successPredictions
    .filter(pred => pred.successLevel === 'Critical')
    .slice(0, 5)
    .forEach((prediction, index) => {
        console.log(`${index + 1}. ${prediction.student.fullName}:`);
        console.log(`   Success Score: ${prediction.successScore}/100`);
        console.log(`   Key Metrics: Avg Grade ${prediction.metrics.avgGrade}%, Completion ${prediction.metrics.completionRate}%`);
        console.log(`   Recommendations: ${prediction.recommendations.slice(0, 3).join(', ')}`);
    });
console.log();

// ===== UTILITY FUNCTIONS =====

console.log('6. UTILITY FUNCTIONS\n');

/**
 * Utility: Generate report cards
 */
function generateReportCard(studentId, assignments, enrollments, courses) {
    const student = students.find(s => s.id === studentId);
    if (!student) return null;
    
    const studentEnrollments = enrollments.filter(e => e.studentId === studentId);
    const courseGrades = studentEnrollments.map(enrollment => {
        const course = courses.find(c => c.id === enrollment.courseId);
        const courseAssignments = assignments.filter(a => a.studentId === studentId && a.courseId === enrollment.courseId && a.isSubmitted);
        
        const totalPoints = courseAssignments.reduce((sum, a) => sum + a.maxPoints, 0);
        const earnedPoints = courseAssignments.reduce((sum, a) => sum + a.pointsEarned, 0);
        const percentage = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
        
        return {
            courseName: course ? course.name : 'Unknown',
            teacher: course ? course.teacher : 'Unknown',
            finalGrade: enrollment.finalGrade || calculateLetterGrade(percentage),
            percentage: parseFloat(percentage.toFixed(1)),
            effort: enrollment.effort,
            assignments: courseAssignments.length
        };
    });
    
    return {
        student: student,
        grades: courseGrades,
        gpa: student.gpa,
        attendance: student.attendance,
        generateDate: new Date()
    };
}

function calculateLetterGrade(percentage) {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

/**
 * Utility: Export academic data
 */
function exportAcademicData(data, format = 'json') {
    if (format === 'csv' && Array.isArray(data)) {
        const headers = Object.keys(data[0] || {});
        return [headers.join(','), ...data.map(row => 
            headers.map(h => typeof row[h] === 'object' ? JSON.stringify(row[h]) : row[h]).join(',')
        )].join('\n');
    }
    return JSON.stringify(data, null, 2);
}

console.log('=== UTILITY FUNCTIONS DEMO ===');

// Generate sample report card
const sampleReportCard = generateReportCard(1, assignments, enrollments, courses);
if (sampleReportCard) {
    console.log(`Sample Report Card for ${sampleReportCard.student.fullName}:`);
    console.log(`GPA: ${sampleReportCard.gpa}, Attendance: ${sampleReportCard.attendance}%`);
    console.log('Course Grades:');
    sampleReportCard.grades.slice(0, 3).forEach(grade => {
        console.log(`  ${grade.courseName}: ${grade.finalGrade} (${grade.percentage}%)`);
    });
}

console.log('\n=== EDUCATIONAL SYSTEM EXAMPLES COMPLETE ===');