"use client";

// Simple localStorage-based data storage utility
// In production, this would integrate with your database/API

export const USER_DATA_KEYS = {
  RESUMES: 'user_resumes',
  COVER_LETTERS: 'user_cover_letters',
  LINKEDIN_REPORTS: 'user_linkedin_reports',
  INTERVIEW_SESSIONS: 'user_interview_sessions',
  ACTIVITIES: 'user_activities'
};

// Generic storage functions
export const saveToStorage = (key, data) => {
  try {
    if (typeof window !== 'undefined') {
      const existing = getFromStorage(key) || [];
      const newData = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        ...data
      };
      const updated = [newData, ...existing];
      localStorage.setItem(key, JSON.stringify(updated));
      
      // Log activity
      logActivity({
        type: key.replace('user_', ''),
        action: 'created',
        title: data.title || data.name || 'New item',
        timestamp: new Date().toISOString()
      });
      
      return newData;
    }
  } catch (error) {
    console.error('Error saving to storage:', error);
  }
  return null;
};

export const getFromStorage = (key) => {
  try {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    }
  } catch (error) {
    console.error('Error getting from storage:', error);
  }
  return [];
};

export const updateInStorage = (key, id, updates) => {
  try {
    if (typeof window !== 'undefined') {
      const existing = getFromStorage(key);
      const updated = existing.map(item => 
        item.id === id 
          ? { ...item, ...updates, updatedAt: new Date().toISOString() }
          : item
      );
      localStorage.setItem(key, JSON.stringify(updated));
      
      // Log activity
      logActivity({
        type: key.replace('user_', ''),
        action: 'updated',
        title: updates.title || updates.name || 'Item updated',
        timestamp: new Date().toISOString()
      });
      
      return updated.find(item => item.id === id);
    }
  } catch (error) {
    console.error('Error updating storage:', error);
  }
  return null;
};

export const deleteFromStorage = (key, id) => {
  try {
    if (typeof window !== 'undefined') {
      const existing = getFromStorage(key);
      const updated = existing.filter(item => item.id !== id);
      localStorage.setItem(key, JSON.stringify(updated));
      return true;
    }
  } catch (error) {
    console.error('Error deleting from storage:', error);
  }
  return false;
};

// Activity logging
export const logActivity = (activity) => {
  try {
    if (typeof window !== 'undefined') {
      const activities = getFromStorage(USER_DATA_KEYS.ACTIVITIES);
      const newActivity = {
        id: Date.now().toString(),
        ...activity
      };
      const updated = [newActivity, ...activities].slice(0, 50); // Keep last 50 activities
      localStorage.setItem(USER_DATA_KEYS.ACTIVITIES, JSON.stringify(updated));
    }
  } catch (error) {
    console.error('Error logging activity:', error);
  }
};

export const getRecentActivities = (limit = 10) => {
  const activities = getFromStorage(USER_DATA_KEYS.ACTIVITIES);
  return activities.slice(0, limit);
};

// Specific data functions
export const saveResume = (resumeData) => {
  return saveToStorage(USER_DATA_KEYS.RESUMES, {
    title: resumeData.title || 'New Resume',
    content: resumeData.content,
    template: resumeData.template,
    personalInfo: resumeData.personalInfo,
    skills: resumeData.skills,
    experience: resumeData.experience,
    education: resumeData.education,
    type: 'resume'
  });
};

export const getResumes = () => {
  return getFromStorage(USER_DATA_KEYS.RESUMES);
};

export const saveCoverLetter = (coverLetterData) => {
  return saveToStorage(USER_DATA_KEYS.COVER_LETTERS, {
    title: coverLetterData.title || 'New Cover Letter',
    content: coverLetterData.content,
    company: coverLetterData.company,
    position: coverLetterData.position,
    jobDescription: coverLetterData.jobDescription,
    type: 'cover_letter'
  });
};

export const getCoverLetters = () => {
  return getFromStorage(USER_DATA_KEYS.COVER_LETTERS);
};

export const saveLinkedInReport = (reportData) => {
  return saveToStorage(USER_DATA_KEYS.LINKEDIN_REPORTS, {
    title: reportData.title || 'LinkedIn Analysis Report',
    analysis: reportData.analysis,
    suggestions: reportData.suggestions,
    score: reportData.score,
    profileData: reportData.profileData,
    type: 'linkedin_report'
  });
};

export const getLinkedInReports = () => {
  return getFromStorage(USER_DATA_KEYS.LINKEDIN_REPORTS);
};

export const saveInterviewSession = (sessionData) => {
  return saveToStorage(USER_DATA_KEYS.INTERVIEW_SESSIONS, {
    title: sessionData.title || 'Interview Practice Session',
    questions: sessionData.questions,
    answers: sessionData.answers,
    feedback: sessionData.feedback,
    duration: sessionData.duration,
    score: sessionData.score,
    type: 'interview_session'
  });
};

export const getInterviewSessions = () => {
  return getFromStorage(USER_DATA_KEYS.INTERVIEW_SESSIONS);
};

// Analytics functions
export const getUserStats = () => {
  try {
    if (typeof window !== 'undefined') {
      const resumes = getResumes();
      const coverLetters = getCoverLetters();
      const linkedInReports = getLinkedInReports();
      const interviews = getInterviewSessions();
      const activities = getRecentActivities(100);

      return {
        totalResumes: resumes.length,
        totalCoverLetters: coverLetters.length,
        totalLinkedInReports: linkedInReports.length,
        totalInterviews: interviews.length,
        totalActivities: activities.length,
        recentActivities: activities.slice(0, 5),
        weeklyProgress: {
          resumes: resumes.filter(r => isThisWeek(new Date(r.createdAt))).length,
          coverLetters: coverLetters.filter(c => isThisWeek(new Date(c.createdAt))).length,
          interviews: interviews.filter(i => isThisWeek(new Date(i.createdAt))).length
        }
      };
    }
  } catch (error) {
    console.error('Error getting user stats:', error);
  }
  
  return {
    totalResumes: 0,
    totalCoverLetters: 0,
    totalLinkedInReports: 0,
    totalInterviews: 0,
    totalActivities: 0,
    recentActivities: [],
    weeklyProgress: { resumes: 0, coverLetters: 0, interviews: 0 }
  };
};

// Helper function to check if date is this week
const isThisWeek = (date) => {
  const now = new Date();
  const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
  const weekEnd = new Date(now.setDate(now.getDate() - now.getDay() + 6));
  return date >= weekStart && date <= weekEnd;
};

// Clear all user data (for development/testing)
export const clearAllUserData = () => {
  try {
    if (typeof window !== 'undefined') {
      Object.values(USER_DATA_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
    }
  } catch (error) {
    console.error('Error clearing user data:', error);
  }
};
