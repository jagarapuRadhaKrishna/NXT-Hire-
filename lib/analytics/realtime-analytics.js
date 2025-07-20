// Real-time Analytics Integration for LinkedIn and DSA Progress
// Note: Database integration is optional - will use appropriate data based on user status

import { db } from "../prisma.js";

const database = db;

// LinkedIn Profile Analytics
export class LinkedInAnalytics {
  constructor(userId) {
    this.userId = userId;
  }

  async fetchLinkedInProfile() {
    try {
      // This would normally use LinkedIn API
      // For new users, return empty profile structure
      return this.getEmptyLinkedInData();
    } catch (error) {
      console.error("Error fetching LinkedIn profile:", error);
      return this.getEmptyLinkedInData();
    }
  }

  async getProfileAnalytics() {
    try {
      if (!this.userId) {
        return this.getEmptyAnalyticsData();
      }

      // Check if user has any LinkedIn data in database
      if (db) {
        try {
          const userLinkedInData = await database.linkedInData.findUnique({
            where: { userId: this.userId }
          });
          
          if (!userLinkedInData) {
            // New user with no LinkedIn data
            return this.getEmptyAnalyticsData();
          }
          
          // User has data, fetch real analytics
          return await this.getRealAnalytics(userLinkedInData);
        } catch (dbError) {
          console.log("Database query failed, using empty data for new user");
          return this.getEmptyAnalyticsData();
        }
      } else {
        // No database, assume new user
        return this.getEmptyAnalyticsData();
      }
    } catch (error) {
      console.error("Error getting profile analytics:", error);
      return this.getEmptyAnalyticsData();
    }
  }

  async getRealAnalytics(userLinkedInData) {
    // This would contain real analytics logic when user has data
    const [profile, views, search, connections, posts] = await Promise.all([
      this.fetchLinkedInProfile(),
      this.getProfileViews(),
      this.getSearchAppearances(), 
      this.getConnections(),
      this.getPostAnalytics()
    ]);

    const completeness = this.calculateCompleteness(profile);
    const optimizationScore = this.calculateOptimizationScore(profile, views, search);

    return {
      profile,
      analytics: {
        views,
        search,
        connections,
        posts,
        completeness,
        optimizationScore,
        lastUpdated: new Date().toISOString()
      }
    };
  }

  async getProfileViews() {
    // Return zero data for new users
    return {
      total: 0,
      thisWeek: 0,
      percentChange: 0,
      demographics: {
        industries: [],
        locations: []
      }
    };
  }

  async getSearchAppearances() {
    return {
      total: 0,
      thisWeek: 0,
      keywords: [],
      trends: []
    };
  }

  async getConnections() {
    return {
      total: 0,
      newThisWeek: 0,
      mutualConnections: 0,
      industryBreakdown: []
    };
  }

  async getPostAnalytics() {
    return {
      totalPosts: 0,
      avgEngagement: 0,
      topPerformingPost: null,
      recentPosts: []
    };
  }

  calculateCompleteness(profile) {
    const fields = ['headline', 'summary', 'experience', 'education', 'skills'];
    const completed = fields.filter(field => profile[field] && profile[field].length > 0).length;
    return Math.round((completed / fields.length) * 100);
  }

  calculateOptimizationScore(profile, views, search) {
    // Basic scoring algorithm
    const completenessScore = this.calculateCompleteness(profile);
    const viewsScore = Math.min(views.total / 10, 100);
    const searchScore = Math.min(search.total / 5, 100);
    
    return Math.round((completenessScore + viewsScore + searchScore) / 3);
  }

  async storeCredentials(profileUrl, linkedinToken) {
    try {
      if (!db) {
        console.log("Database not available, credentials not stored");
        return { success: false, message: "Database not available" };
      }
      
      // Store LinkedIn credentials securely
      const result = await database.linkedInData.upsert({
        where: { userId: this.userId },
        update: {
          profileUrl,
          linkedinToken,
          updatedAt: new Date()
        },
        create: {
          userId: this.userId,
          profileUrl,
          linkedinToken,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      });
      
      return { success: true, message: "Credentials stored successfully" };
    } catch (error) {
      console.error("Error storing credentials:", error);
      return { success: false, message: "Error storing credentials" };
    }
  }

  getEmptyLinkedInData() {
    return {
      name: "",
      headline: "",
      summary: "",
      experience: [],
      education: [],
      skills: [],
      profileUrl: ""
    };
  }

  getEmptyAnalyticsData() {
    const profile = this.getEmptyLinkedInData();
    return {
      profile,
      analytics: {
        views: { total: 0, thisWeek: 0, percentChange: 0, demographics: { industries: [], locations: [] } },
        search: { total: 0, thisWeek: 0, keywords: [], trends: [] },
        connections: { total: 0, newThisWeek: 0, mutualConnections: 0, industryBreakdown: [] },
        posts: { totalPosts: 0, avgEngagement: 0, topPerformingPost: null, recentPosts: [] },
        completeness: 0,
        optimizationScore: 0,
        lastUpdated: new Date().toISOString()
      }
    };
  }

  // Keep sample data for demo purposes only
  getSampleAnalyticsData() {
    const profile = {
      name: "Demo User",
      headline: "Software Engineer | React Developer",
      summary: "This is sample data for demonstration",
      experience: [],
      education: [],
      skills: ["JavaScript", "React", "Node.js"],
      profileUrl: "https://linkedin.com/in/demo"
    };
    
    return {
      profile,
      analytics: {
        views: { total: 156, thisWeek: 23, percentChange: 12.5, demographics: { industries: [], locations: [] } },
        search: { total: 89, thisWeek: 15, keywords: [], trends: [] },
        connections: { total: 542, newThisWeek: 8, mutualConnections: 45, industryBreakdown: [] },
        posts: { totalPosts: 24, avgEngagement: 3.2, topPerformingPost: null, recentPosts: [] },
        completeness: 85,
        optimizationScore: 78,
        lastUpdated: new Date().toISOString()
      }
    };
  }
}

// DSA Progress Analytics
export class DSAAnalytics {
  constructor(userId) {
    this.userId = userId;
  }

  async getProgress() {
    try {
      if (!this.userId) {
        return this.getEmptyDSAData();
      }

      if (!database) {
        // No database, return empty data for new user
        return this.getEmptyDSAData();
      }

      const userProgress = await database.dsaProgress.findUnique({
        where: { userId: this.userId },
        include: {
          solvedProblems: true,
          topicProgress: true,
          submissions: {
            orderBy: { createdAt: 'desc' },
            take: 10
          }
        }
      });

      if (!userProgress) {
        // New user with no progress
        return this.getEmptyDSAData();
      }

      return userProgress;
    } catch (error) {
      console.error("Error getting DSA progress:", error);
      return this.getEmptyDSAData();
    }
  }

  async initializeProgress() {
    try {
      if (!db || !this.userId) {
        return this.getEmptyDSAData();
      }

      const initialProgress = await database.dsaProgress.create({
        data: {
          userId: this.userId,
          totalSolved: 0,
          easyCompleted: 0,
          mediumCompleted: 0,
          hardCompleted: 0,
          currentStreak: 0,
          maxStreak: 0,
          acceptanceRate: 0
        }
      });

      return initialProgress;
    } catch (error) {
      console.error("Error initializing DSA progress:", error);
      return this.getEmptyDSAData();
    }
  }

  async updateProgress(problemData) {
    try {
      if (!db || !this.userId) {
        console.log("Database not available or no user ID, cannot update progress");
        return this.getEmptyDSAData();
      }

      // First, ensure user has progress record
      let userProgress = await database.dsaProgress.findUnique({
        where: { userId: this.userId }
      });

      if (!userProgress) {
        userProgress = await this.initializeProgress();
      }

      // Update user progress based on solved problem
      const updated = await database.dsaProgress.update({
        where: { userId: this.userId },
        data: {
          totalSolved: { increment: 1 },
          [`${problemData.difficulty.toLowerCase()}Completed`]: { increment: 1 },
          lastSolved: new Date()
        }
      });

      // Record the solved problem
      await database.solvedProblem.create({
        data: {
          userId: this.userId,
          problemId: problemData.id,
          title: problemData.title,
          difficulty: problemData.difficulty,
          topic: problemData.topic,
          solution: problemData.solution,
          timeComplexity: problemData.timeComplexity,
          spaceComplexity: problemData.spaceComplexity
        }
      });

      return updated;
    } catch (error) {
      console.error("Error updating DSA progress:", error);
      return this.getEmptyDSAData();
    }
  }

  async getTopicProgress() {
    try {
      if (!db || !this.userId) {
        return [];
      }

      const topicProgress = await database.topicProgress.findMany({
        where: { userId: this.userId }
      });

      return topicProgress;
    } catch (error) {
      console.error("Error getting topic progress:", error);
      return [];
    }
  }

  async getSubmissionHistory() {
    try {
      if (!db || !this.userId) {
        return [];
      }

      const submissions = await database.submission.findMany({
        where: { userId: this.userId },
        orderBy: { createdAt: 'desc' },
        take: 50
      });

      return submissions;
    } catch (error) {
      console.error("Error getting submission history:", error);
      return [];
    }
  }

  getEmptyDSAData() {
    return {
      userId: this.userId,
      totalSolved: 0,
      easyCompleted: 0,
      mediumCompleted: 0,
      hardCompleted: 0,
      currentStreak: 0,
      maxStreak: 0,
      acceptanceRate: 0,
      lastSolved: null,
      recentActivity: []
    };
  }

  // Keep sample data for demo purposes only
  getSampleDSAData() {
    return {
      userId: this.userId,
      totalSolved: 247,
      easyCompleted: 89,
      mediumCompleted: 134,
      hardCompleted: 24,
      currentStreak: 12,
      maxStreak: 45,
      acceptanceRate: 78.5,
      lastSolved: new Date(),
      recentActivity: [
        { date: "2024-01-07", problemsSolved: 3 },
        { date: "2024-01-06", problemsSolved: 2 },
        { date: "2024-01-05", problemsSolved: 4 },
        { date: "2024-01-04", problemsSolved: 1 },
        { date: "2024-01-03", problemsSolved: 2 },
        { date: "2024-01-02", problemsSolved: 3 },
        { date: "2024-01-01", problemsSolved: 2 }
      ]
    };
  }

  getSampleTopicData() {
    return [
      { topic: "Arrays", solved: 45, total: 67, accuracy: 85 },
      { topic: "Strings", solved: 32, total: 45, accuracy: 89 },
      { topic: "Linked Lists", solved: 28, total: 34, accuracy: 82 },
      { topic: "Trees", solved: 41, total: 56, accuracy: 79 },
      { topic: "Graphs", solved: 23, total: 38, accuracy: 76 },
      { topic: "Dynamic Programming", solved: 35, total: 67, accuracy: 71 },
      { topic: "Sorting", solved: 18, total: 23, accuracy: 91 },
      { topic: "Searching", solved: 15, total: 19, accuracy: 88 }
    ];
  }

  getSampleSubmissions() {
    return [
      {
        id: "1",
        problemTitle: "Two Sum",
        difficulty: "Easy",
        status: "Accepted",
        runtime: "64ms",
        memory: "14.2MB",
        timestamp: new Date("2024-01-07T10:30:00")
      },
      {
        id: "2", 
        problemTitle: "Add Two Numbers",
        difficulty: "Medium",
        status: "Accepted",
        runtime: "92ms",
        memory: "16.8MB",
        timestamp: new Date("2024-01-07T09:15:00")
      }
    ];
  }
}

// Real-time Sync Service
export class RealTimeSync {
  constructor() {
    this.syncInterval = null;
    this.isRunning = false;
  }

  startSync(userId, interval = 30000) {
    if (this.isRunning || !userId) {
      console.log("Sync already running or no user ID provided");
      return;
    }

    this.isRunning = true;
    this.linkedInAnalytics = new LinkedInAnalytics(userId);
    this.dsaAnalytics = new DSAAnalytics(userId);

    this.syncInterval = setInterval(async () => {
      try {
        await this.syncAnalytics();
      } catch (error) {
        console.error("Error during sync:", error);
      }
    }, interval);

    console.log(`Real-time sync started for user ${userId}`);
  }

  stopSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
    this.isRunning = false;
    console.log("Real-time sync stopped");
  }

  async syncAnalytics() {
    try {
      const [linkedInData, dsaData] = await Promise.all([
        this.linkedInAnalytics.getProfileAnalytics(),
        this.dsaAnalytics.getProgress()
      ]);

      // Emit events or store in cache for real-time updates
      this.emitUpdate('linkedin', linkedInData);
      this.emitUpdate('dsa', dsaData);

      return { linkedin: linkedInData, dsa: dsaData };
    } catch (error) {
      console.error("Error syncing analytics:", error);
      return null;
    }
  }

  emitUpdate(type, data) {
    // This would typically emit to WebSocket or Server-Sent Events
    console.log(`${type} data updated:`, { timestamp: new Date(), hasData: data && Object.keys(data).length > 0 });
  }

  async manualSync(userId) {
    if (!userId) {
      return {
        linkedin: new LinkedInAnalytics().getEmptyAnalyticsData(),
        dsa: new DSAAnalytics().getEmptyDSAData(),
        syncTime: new Date().toISOString(),
        status: 'error',
        message: 'No user ID provided'
      };
    }

    const linkedInAnalytics = new LinkedInAnalytics(userId);
    const dsaAnalytics = new DSAAnalytics(userId);

    try {
      const [linkedInData, dsaData] = await Promise.all([
        linkedInAnalytics.getProfileAnalytics(),
        dsaAnalytics.getProgress()
      ]);

      return { 
        linkedin: linkedInData, 
        dsa: dsaData,
        syncTime: new Date().toISOString(),
        status: 'success'
      };
    } catch (error) {
      console.error("Error in manual sync:", error);
      return {
        linkedin: linkedInAnalytics.getEmptyAnalyticsData(),
        dsa: dsaAnalytics.getEmptyDSAData(),
        syncTime: new Date().toISOString(),
        status: 'error',
        message: error.message
      };
    }
  }
}

// Export instances
export const linkedInAnalytics = new LinkedInAnalytics();
export const dsaAnalytics = new DSAAnalytics();
export const realTimeSync = new RealTimeSync();
