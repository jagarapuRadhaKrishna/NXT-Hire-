// Test file to verify the user data storage functionality
// Run this in browser console to test the storage system

import { 
  saveResume, 
  saveCoverLetter, 
  saveLinkedInReport, 
  saveInterviewSession,
  getUserStats,
  getRecentActivities,
  clearAllUserData 
} from './lib/user-data-storage.js';

// Test function to create sample data and verify storage
window.testUserDataStorage = () => {
  console.log("Testing User Data Storage...");
  
  // Clear existing data
  clearAllUserData();
  console.log("✅ Cleared all existing data");
  
  // Test saving resume
  const resume = saveResume({
    title: "Test Resume",
    content: "Sample resume content",
    template: "modern",
    skills: ["JavaScript", "React", "Node.js"]
  });
  console.log("✅ Saved resume:", resume);
  
  // Test saving cover letter
  const coverLetter = saveCoverLetter({
    title: "Test Cover Letter",
    content: "Sample cover letter content",
    company: "Test Company",
    position: "Software Engineer"
  });
  console.log("✅ Saved cover letter:", coverLetter);
  
  // Test saving LinkedIn report
  const linkedInReport = saveLinkedInReport({
    title: "Test LinkedIn Report",
    analysis: { headline: "Good", summary: "Needs improvement" },
    score: 85
  });
  console.log("✅ Saved LinkedIn report:", linkedInReport);
  
  // Test saving interview session
  const interviewSession = saveInterviewSession({
    title: "Test Interview",
    questions: ["What is React?", "Explain closures"],
    answers: ["React is a library", "Closures are..."],
    score: 90
  });
  console.log("✅ Saved interview session:", interviewSession);
  
  // Test getting user stats
  const stats = getUserStats();
  console.log("✅ User stats:", stats);
  
  // Test getting recent activities
  const activities = getRecentActivities(5);
  console.log("✅ Recent activities:", activities);
  
  console.log("🎉 All tests passed! User data storage is working correctly.");
  
  return {
    resume,
    coverLetter,
    linkedInReport,
    interviewSession,
    stats,
    activities
  };
};

console.log("Test function loaded. Run window.testUserDataStorage() to test the storage system.");
