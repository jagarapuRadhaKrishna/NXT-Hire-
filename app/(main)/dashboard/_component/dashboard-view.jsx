"use client";

import React, { useState, useEffect, memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
  Search,
  Users,
  Building2,
  Target,
  Bookmark,
  AlertCircle,
  Filter,
  ArrowLeft,
  BarChart3,
  Activity,
  Clock,
  CheckCircle,
  FileText,
  User,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getUserStats, getRecentActivities } from "@/lib/user-data-storage";
import { createTestData } from "@/lib/sample-data";

const DashboardView = memo(({ insights }) => {
  const [userStats, setUserStats] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Load user stats and activities
    const stats = getUserStats();
    const activities = getRecentActivities(5);
    setUserStats(stats);
    setRecentActivities(activities);
  }, []);

  const handleCreateSampleData = () => {
    createTestData();
    // Reload stats after creating sample data
    const stats = getUserStats();
    const activities = getRecentActivities(5);
    setUserStats(stats);
    setRecentActivities(activities);
  };

  // Feature options data
  const featureOptions = [
    {
      title: "Smart Job Search",
      description: "AI-powered job matching based on your profile",
      icon: Search,
      link: "/smart-job-matching",
      color: "bg-blue-500",
      count: "250+ jobs"
    },
    {
      title: "Company Explorer",
      description: "Discover top companies and their culture",
      icon: Building2,
      link: "/companies",
      color: "bg-green-500",
      count: "50+ companies"
    },
    {
      title: "Interview Prep",
      description: "Practice with AI-powered mock interviews",
      icon: Users,
      link: "/interview",
      color: "bg-purple-500",
      count: "100+ questions"
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with AI assistance",
      icon: Target,
      link: "/resume",
      color: "bg-orange-500",
      count: "10+ templates"
    },
    {
      title: "Resume Analyzer",
      description: "Get AI-powered insights to optimize your resume",
      icon: BarChart3,
      link: "/resume-analyzer",
      color: "bg-indigo-500",
      count: "Smart Analysis"
    },
    {
      title: "Cover Letter AI",
      description: "Generate personalized cover letters",
      icon: AlertCircle,
      link: "/ai-cover-letter",
      color: "bg-pink-500",
      count: "Custom AI"
    },
    {
      title: "LinkedIn Optimizer",
      description: "Optimize your LinkedIn profile for maximum visibility",
      icon: Users,
      link: "/linkedin-optimization",
      color: "bg-cyan-500",
      count: "AI Analysis"
    }
  ];

  // Mock data for enhanced dashboard features
  const jobStats = {
    savedJobs: 12,
    appliedJobs: 8,
    interviewsScheduled: 3,
    profileViews: 45
  };

  const recentActivity = [
    { action: "Applied to Software Engineer at TCS", time: "2 hours ago", type: "application" },
    { action: "Saved Backend Developer at Infosys", time: "5 hours ago", type: "saved" },
    { action: "Profile viewed by Cognizant recruiter", time: "1 day ago", type: "view" },
    { action: "Interview scheduled with HCL", time: "2 days ago", type: "interview" }
  ];

  const matchedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TCS",
      location: "Bangalore",
      salary: "₹15-20L",
      match: 95,
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "Infosys",
      location: "Mumbai",
      salary: "₹12-18L",
      match: 88,
      posted: "3 days ago"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Cognizant",
      location: "Chennai",
      salary: "₹10-15L",
      match: 82,
      posted: "1 week ago"
    }
  ];

  // Transform salary data for the chart
  const salaryData = insights?.salaryRanges?.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  })) || [];

  const getDemandLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook?.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights?.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights?.marketOutlook).color;

  // Format dates using date-fns
  const lastUpdatedDate = insights?.lastUpdated ? format(new Date(insights.lastUpdated), "dd/MM/yyyy") : "N/A";
  const nextUpdateDistance = insights?.nextUpdate ? formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  ) : "N/A";

  return (
    <>
      <div className="grid-background"></div>
      <div className="space-y-4 relative pt-20">
        {/* Feature Options Section - Horizontal Scrollable */}
        <section className="w-full py-4 md:py-6 bg-background/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-left max-w-3xl mb-4">
              <h2 className="text-2xl font-bold tracking-tighter mb-2">Explore Career Tools</h2>
              <p className="text-muted-foreground text-sm">
                Access all our AI-powered career development features
              </p>
            </div>
            
            {/* Horizontal Auto-Scrollable Tools - Increased Size */}
            <div className="relative overflow-hidden">
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 animate-scroll-fast">
                {featureOptions.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Link key={index} href={feature.link} prefetch={true} className="flex-shrink-0">
                      <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group min-w-[140px] bg-gray-900/50 dark:bg-gray-800/50 backdrop-blur-sm">
                        <CardContent className="pt-4 pb-4 text-center">
                          <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform border border-gray-700 mx-auto mb-3`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-medium text-white text-sm mb-1">{feature.title}</h3>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activities Visualization */}
        <section className="w-full py-8 bg-background/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-2">Recent Activities</h2>
                <p className="text-muted-foreground">
                  Your career progress and activities overview
                </p>
              </div>
              {/* Development mode: Create sample data button */}
              {process.env.NODE_ENV === 'development' && (
                <Button 
                  onClick={handleCreateSampleData}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  Create Sample Data
                </Button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Activity Timeline */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    Activity Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.length > 0 ? (
                      recentActivities.map((activity, index) => {
                        const getActivityIcon = (type) => {
                          switch (type) {
                            case 'resumes': return FileText;
                            case 'cover_letters': return AlertCircle;
                            case 'linkedin_reports': return User;
                            case 'interview_sessions': return Users;
                            default: return Activity;
                          }
                        };
                        
                        const getActivityColor = (type) => {
                          switch (type) {
                            case 'resumes': return 'green';
                            case 'cover_letters': return 'blue';
                            case 'linkedin_reports': return 'purple';
                            case 'interview_sessions': return 'orange';
                            default: return 'gray';
                          }
                        };
                        
                        const ActivityIcon = getActivityIcon(activity.type);
                        const color = getActivityColor(activity.type);
                        
                        return (
                          <div key={activity.id} className={`flex items-center gap-3 p-3 rounded-lg bg-${color}-50 dark:bg-${color}-900/20`}>
                            <ActivityIcon className={`w-4 h-4 text-${color}-500`} />
                            <div className="text-sm">
                              <p className={`font-medium text-${color}-700 dark:text-${color}-300`}>
                                {activity.title} ({activity.action})
                              </p>
                              <p className={`text-${color}-600 dark:text-${color}-400`}>
                                {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                              </p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-4">
                        <Activity className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">No recent activities</p>
                        <p className="text-xs text-gray-400">Start using our tools to see your progress here</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Progress Chart */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Weekly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Resumes Created</span>
                        <span className="text-green-600 font-bold">{userStats?.weeklyProgress.resumes || 0} this week</span>
                      </div>
                      <Progress value={Math.min((userStats?.weeklyProgress.resumes || 0) * 25, 100)} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Cover Letters</span>
                        <span className="text-blue-600 font-bold">{userStats?.weeklyProgress.coverLetters || 0} this week</span>
                      </div>
                      <Progress value={Math.min((userStats?.weeklyProgress.coverLetters || 0) * 25, 100)} className="h-3" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Interview Practice</span>
                        <span className="text-purple-600 font-bold">{userStats?.weeklyProgress.interviews || 0} sessions</span>
                      </div>
                      <Progress value={Math.min((userStats?.weeklyProgress.interviews || 0) * 20, 100)} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                    Quick Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Resumes</span>
                      <span className="text-xl font-bold text-blue-600">{userStats?.totalResumes || 0}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">Cover Letters</span>
                      <span className="text-xl font-bold text-green-600">{userStats?.totalCoverLetters || 0}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                      <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">LinkedIn Reports</span>
                      <span className="text-xl font-bold text-emerald-600">{userStats?.totalLinkedInReports || 0}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                      <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Interview Sessions</span>
                      <span className="text-xl font-bold text-purple-600">{userStats?.totalInterviews || 0}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Job Search */}
        <section className="w-full py-12 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Quick Job Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input placeholder="Search jobs, companies, or skills..." className="w-full" />
                  </div>
                  <Button className="whitespace-nowrap">
                    Search Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dashboard Stats */}
        <section className="w-full py-12 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Your Career Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Saved Jobs</CardTitle>
                  <Bookmark className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{jobStats.savedJobs}</div>
                  <p className="text-xs text-muted-foreground">+2 this week</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Applications</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{jobStats.appliedJobs}</div>
                  <p className="text-xs text-muted-foreground">+3 this week</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Interviews</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{jobStats.interviewsScheduled}</div>
                  <p className="text-xs text-muted-foreground">+1 this week</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{jobStats.profileViews}</div>
                  <p className="text-xs text-muted-foreground">+8 this week</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Smart Job Matches */}
        <section className="w-full py-12 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Smart Job Matches</CardTitle>
                <CardDescription>Jobs matched to your profile and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {matchedJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div>
                            <h4 className="font-medium text-sm">{job.title}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-300">{job.company} • {job.location}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="font-medium text-sm">{job.salary}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-300">{job.posted}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                          {job.match}%
                        </Badge>
                        <Button size="sm" className="h-8 px-3 text-xs">Apply</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link href="/jobs">
                    <Button variant="outline">View All Jobs</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Insights */}
        {insights && (
          <section className="w-full py-12 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold">Industry Insights</h3>
                <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
              </div>

              {/* Market Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
                    <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{insights.marketOutlook}</div>
                    <p className="text-xs text-muted-foreground">
                      Next update {nextUpdateDistance}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Industry Growth</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {insights.growthRate?.toFixed(1)}%
                    </div>
                    <Progress value={insights.growthRate} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
                    <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold dark:text-white">{insights.demandLevel}</div>
                    <div
                      className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
                        insights.demandLevel
                      )}`}
                    />
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
                    <Brain className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {insights.topSkills?.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Salary Ranges Chart */}
              {salaryData.length > 0 && (
                <Card className="border-2 mb-8">
                  <CardHeader>
                    <CardTitle>Salary Ranges by Role</CardTitle>
                    <CardDescription>
                      Displaying minimum, median, and maximum salaries (in thousands)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salaryData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip
                            content={({ active, payload, label }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-background border rounded-lg p-2 shadow-md">
                                    <p className="font-medium">{label}</p>
                                    {payload.map((item) => (
                                      <p key={item.name} className="text-sm">
                                        {item.name}: ₹{item.value}K
                                      </p>
                                    ))}
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                          <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                          <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Industry Trends */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Key Industry Trends</CardTitle>
                    <CardDescription>Current trends shaping the industry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {insights.keyTrends?.map((trend, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                          <span>{trend}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Recommended Skills</CardTitle>
                    <CardDescription>Skills to consider developing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {insights.recommendedSkills?.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
});

export default DashboardView;
