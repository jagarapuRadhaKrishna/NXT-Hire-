// Test data for demonstrating the storage functionality
// This simulates creating some sample data when the dashboard loads

import { 
  saveResume, 
  saveCoverLetter, 
  saveLinkedInReport, 
  saveInterviewSession,
  clearAllUserData 
} from '@/lib/user-data-storage';

export const initializeSampleData = () => {
  // Clear existing data for fresh start (remove this in production)
  // clearAllUserData();

  // Create sample resumes
  saveResume({
    title: "Software Engineer Resume",
    content: "Professional software engineer with 3+ years experience...",
    template: "modern",
    personalInfo: {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1234567890"
    },
    skills: ["React", "Node.js", "JavaScript", "Python"],
    experience: [
      {
        company: "Tech Corp",
        position: "Frontend Developer",
        duration: "2021-2024"
      }
    ],
    education: [
      {
        degree: "B.Tech Computer Science",
        university: "ABC University",
        year: "2021"
      }
    ]
  });

  saveResume({
    title: "Full Stack Developer Resume",
    content: "Experienced full stack developer with expertise in...",
    template: "classic",
    personalInfo: {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1234567890"
    },
    skills: ["React", "Node.js", "MongoDB", "Express"],
    experience: [
      {
        company: "StartupXYZ",
        position: "Full Stack Developer",
        duration: "2022-2024"
      }
    ]
  });

  // Create sample cover letters
  saveCoverLetter({
    title: "Google Software Engineer Cover Letter",
    content: "Dear Hiring Manager, I am writing to express my interest...",
    company: "Google",
    position: "Software Engineer",
    jobDescription: "We are looking for a talented software engineer..."
  });

  saveCoverLetter({
    title: "Microsoft Frontend Developer Cover Letter",
    content: "Dear Microsoft Team, I am excited to apply for...",
    company: "Microsoft",
    position: "Frontend Developer",
    jobDescription: "Join our team as a frontend developer..."
  });

  // Create sample LinkedIn reports
  saveLinkedInReport({
    title: "LinkedIn Profile Analysis - January 2024",
    analysis: {
      headline: "Good use of keywords",
      summary: "Could be more compelling",
      experience: "Well detailed",
      skills: "Missing trending technologies"
    },
    suggestions: [
      "Add more industry keywords to headline",
      "Include quantifiable achievements",
      "Update skills with AI/ML technologies",
      "Add more endorsements"
    ],
    score: 78,
    profileData: {
      connections: 500,
      profileViews: 89,
      searchAppearances: 45
    }
  });

  // Create sample interview sessions
  saveInterviewSession({
    title: "Google Technical Interview Practice",
    questions: [
      "Implement a binary search algorithm",
      "Design a URL shortener system",
      "Explain the difference between HTTP and HTTPS"
    ],
    answers: [
      "Binary search implementation with O(log n) complexity...",
      "System design with database schema and API endpoints...",
      "HTTP is unsecured while HTTPS uses SSL/TLS encryption..."
    ],
    feedback: {
      technical: "Good understanding of algorithms",
      communication: "Clear explanations",
      areas_to_improve: "Practice more system design questions"
    },
    duration: 45,
    score: 82
  });

  saveInterviewSession({
    title: "Amazon Behavioral Interview Practice",
    questions: [
      "Tell me about a time you faced a difficult challenge",
      "Describe a situation where you had to work with a difficult team member",
      "How do you prioritize tasks when everything seems urgent?"
    ],
    answers: [
      "During my internship, I had to debug a critical production issue...",
      "I worked with a team member who had different working styles...",
      "I use the Eisenhower matrix to categorize tasks..."
    ],
    feedback: {
      behavioral: "Good STAR method usage",
      leadership: "Shows initiative",
      areas_to_improve: "Provide more specific examples"
    },
    duration: 30,
    score: 75
  });

  console.log("Sample data initialized successfully!");
};

// Function to create sample data for testing
export const createTestData = () => {
  initializeSampleData();
};
