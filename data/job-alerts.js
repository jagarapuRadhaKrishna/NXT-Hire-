export const jobAlerts = [
  {
    id: 1,
    title: "Frontend Developer Jobs",
    criteria: {
      keywords: ["React", "JavaScript", "Frontend"],
      location: "San Francisco, CA",
      jobType: "full-time",
      salaryMin: 80000,
      experience: "mid"
    },
    frequency: "daily",
    isActive: true,
    created: "2024-01-15",
    lastTriggered: "2024-01-22",
    matchingJobs: 12
  },
  {
    id: 2,
    title: "Remote UX Designer Positions", 
    criteria: {
      keywords: ["UX", "UI", "Design"],
      location: "Remote",
      jobType: "full-time",
      salaryMin: 70000,
      experience: "senior"
    },
    frequency: "weekly",
    isActive: true,
    created: "2024-01-10",
    lastTriggered: "2024-01-20",
    matchingJobs: 8
  },
  {
    id: 3,
    title: "Data Science Opportunities",
    criteria: {
      keywords: ["Data Science", "Python", "Machine Learning"],
      location: "New York, NY",
      jobType: "full-time",
      salaryMin: 100000,
      experience: "senior"
    },
    frequency: "daily",
    isActive: false,
    created: "2024-01-08",
    lastTriggered: "2024-01-18",
    matchingJobs: 5
  }
];

export const alertFrequencies = [
  { value: "immediate", label: "Immediate" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" }
];

export const notificationMethods = [
  { id: "email", label: "Email", enabled: true },
  { id: "sms", label: "SMS", enabled: false },
  { id: "push", label: "Push Notifications", enabled: true },
  { id: "browser", label: "Browser Notifications", enabled: false }
];
