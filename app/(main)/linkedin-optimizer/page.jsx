"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Linkedin,
  Upload,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Target,
  Award,
  Users,
  Eye,
  Download,
  BarChart3,
  Search,
  Brain,
  Star,
  Zap,
  Globe,
  RefreshCw
} from "lucide-react";

const LinkedInOptimizer = () => {
  const [profileData, setProfileData] = useState({
    headline: "",
    summary: "",
    experience: "",
    skills: ""
  });
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const optimizationResults = {
    overallScore: 78,
    headline: { score: 85, status: "good" },
    summary: { score: 70, status: "fair" },
    experience: { score: 82, status: "good" },
    skills: { score: 75, status: "fair" },
    keywords: { score: 68, status: "fair" },
    engagement: { score: 80, status: "good" }
  };

  const suggestions = [
    {
      category: "Headline",
      priority: "High",
      suggestion: "Include industry keywords like 'Software Engineer' or 'Full Stack Developer'",
      impact: "Increase profile visibility by 40%"
    },
    {
      category: "Summary",
      priority: "High", 
      suggestion: "Add quantified achievements and specific technologies you've worked with",
      impact: "Improve recruiter engagement by 60%"
    },
    {
      category: "Skills",
      priority: "Medium",
      suggestion: "Add trending skills like 'React', 'Node.js', 'AWS' to match industry demand",
      impact: "Better match for job opportunities"
    },
    {
      category: "Experience",
      priority: "Medium",
      suggestion: "Use action verbs and include project outcomes with metrics",
      impact: "Show measurable impact to employers"
    }
  ];

  const keywordAnalysis = [
    { keyword: "JavaScript", frequency: 8, importance: "High", suggestion: "Well optimized" },
    { keyword: "React", frequency: 5, importance: "High", suggestion: "Add more mentions" },
    { keyword: "Node.js", frequency: 3, importance: "Medium", suggestion: "Include in projects" },
    { keyword: "Python", frequency: 2, importance: "High", suggestion: "Highlight more" },
    { keyword: "AWS", frequency: 1, importance: "High", suggestion: "Add cloud experience" }
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return "bg-green-100 dark:bg-green-900/20";
    if (score >= 60) return "bg-yellow-100 dark:bg-yellow-900/20";
    return "bg-red-100 dark:bg-red-900/20";
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        {/* Header Section */}
        <section className="w-full bg-background/50 pt-16">
          <div className="container mx-auto px-8">
            {/* Title */}
            <div className="mb-6">
              <h1 className="font-bold gradient-title text-4xl md:text-5xl">
                LinkedIn Optimizer
              </h1>
              <p className="text-muted-foreground mt-2">
                AI-powered optimization for your LinkedIn profile
              </p>
            </div>

            {/* Input Section - Centered */}
            {!analysisComplete && (
              <div className="flex justify-center mb-6">
                <Card className="border max-w-2xl w-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-blue-500" />
                      Enter Your LinkedIn Profile Information
                    </CardTitle>
                    <CardDescription>
                      Paste your current LinkedIn sections below for AI-powered optimization
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Professional Headline</label>
                    <Input
                      placeholder="e.g., Software Engineer at TechCorp | React & Node.js Expert"
                      value={profileData.headline}
                      onChange={(e) => setProfileData({...profileData, headline: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">About/Summary Section</label>
                    <Textarea
                      placeholder="Paste your LinkedIn summary here..."
                      value={profileData.summary}
                      onChange={(e) => setProfileData({...profileData, summary: e.target.value})}
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Experience Section</label>
                    <Textarea
                      placeholder="Paste your work experience descriptions..."
                      value={profileData.experience}
                      onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Skills</label>
                    <Input
                      placeholder="e.g., JavaScript, React, Node.js, Python, AWS"
                      value={profileData.skills}
                      onChange={(e) => setProfileData({...profileData, skills: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <Button 
                      size="lg" 
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || !profileData.headline}
                      className="w-full md:w-auto"
                    >
                      {isAnalyzing ? (
                        <>
                          <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                          Analyzing Profile...
                        </>
                      ) : (
                        <>
                          <Brain className="h-5 w-5 mr-2" />
                          Analyze & Optimize
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
                </Card>
              </div>
            )}

            {/* Analysis Loading */}
            {isAnalyzing && (
              <Card className="border-2 max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <RefreshCw className="h-16 w-16 text-primary mx-auto mb-4 animate-spin" />
                    <h3 className="text-xl font-semibold mb-2">Analyzing Your LinkedIn Profile</h3>
                    <p className="text-muted-foreground mb-6">
                      Our AI is reviewing your profile for optimization opportunities...
                    </p>
                    <Progress value={65} className="w-64 mx-auto" />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Results Section */}
            {analysisComplete && (
              <div className="space-y-6">
                {/* Overall Score */}
                <Card className="border-2">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Target className="h-6 w-6 text-primary" />
                      LinkedIn Profile Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className={`text-5xl font-bold ${getScoreColor(optimizationResults.overallScore)} mb-2`}>
                        {optimizationResults.overallScore}%
                      </div>
                      <Progress value={optimizationResults.overallScore} className="mb-2 max-w-md mx-auto" />
                      <p className="text-muted-foreground">Good profile - room for improvement</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(optimizationResults).filter(([key]) => key !== 'overallScore').map(([section, data]) => (
                        <div key={section} className={`p-3 rounded-lg border ${getScoreBgColor(data.score)}`}>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium capitalize text-sm">{section}</h4>
                            <div className={`text-lg font-bold ${getScoreColor(data.score)}`}>
                              {data.score}%
                            </div>
                          </div>
                          <Progress value={data.score} className="h-1" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Analysis Tabs */}
                <Tabs defaultValue="suggestions" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                    <TabsTrigger value="keywords">Keywords</TabsTrigger>
                    <TabsTrigger value="optimized">Optimized Version</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  </TabsList>

                  {/* Suggestions Tab */}
                  <TabsContent value="suggestions" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Optimization Recommendations
                        </CardTitle>
                        <CardDescription>
                          Prioritized suggestions to improve your profile visibility
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {suggestions.map((item, index) => (
                            <div key={index} className="border rounded-lg p-4">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <h4 className="font-semibold">{item.category}</h4>
                                  <Badge variant={getPriorityColor(item.priority)}>
                                    {item.priority} Priority
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-2">{item.suggestion}</p>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-green-600">{item.impact}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Keywords Tab */}
                  <TabsContent value="keywords" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Search className="h-5 w-5" />
                          Keyword Analysis
                        </CardTitle>
                        <CardDescription>
                          Review keyword usage and get suggestions for better discoverability
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {keywordAnalysis.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <h4 className="font-medium">{item.keyword}</h4>
                                  <Badge variant={item.importance === "High" ? "default" : "secondary"}>
                                    {item.importance}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">
                                    Used {item.frequency} times
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground">{item.suggestion}</p>
                              </div>
                              <div className="text-right">
                                <Progress value={item.frequency * 10} className="w-20" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Optimized Version Tab */}
                  <TabsContent value="optimized" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Star className="h-5 w-5" />
                          AI-Optimized Profile Content
                        </CardTitle>
                        <CardDescription>
                          Copy and paste these optimized sections to your LinkedIn profile
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Optimized Headline
                          </h4>
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="font-medium">
                              Senior Full Stack Developer | React & Node.js Expert | Building Scalable Web Applications | Open to Remote Opportunities
                            </p>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">
                            Copy Headline
                          </Button>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Optimized Summary</h4>
                          <div className="bg-muted p-4 rounded-lg">
                            <p>
                              Passionate Full Stack Developer with 5+ years of experience building scalable web applications using React, Node.js, and modern JavaScript. 
                              Led development teams of 3-5 engineers and delivered 15+ projects that increased user engagement by 40% on average.
                              <br /><br />
                              🚀 Key Achievements:<br />
                              • Built e-commerce platform serving 100K+ users with 99.9% uptime<br />
                              • Reduced application load time by 60% through performance optimization<br />
                              • Mentored junior developers and established coding best practices<br />
                              <br />
                              💻 Technical Expertise: React, Node.js, TypeScript, Python, AWS, MongoDB, PostgreSQL
                              <br /><br />
                              Always excited to connect with fellow developers and explore new opportunities in tech!
                            </p>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2">
                            Copy Summary
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Analytics Tab */}
                  <TabsContent value="analytics" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-2">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-blue-600">
                            <Eye className="h-5 w-5" />
                            Visibility Metrics
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Profile Views</span>
                              <span className="font-semibold">+45% estimated increase</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Search Appearances</span>
                              <span className="font-semibold">+60% estimated increase</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Recruiter Reach</span>
                              <span className="font-semibold">+35% estimated increase</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-2">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-600">
                            <BarChart3 className="h-5 w-5" />
                            Optimization Impact
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Keyword Density</span>
                              <span className="font-semibold text-green-600">Improved</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Content Quality</span>
                              <span className="font-semibold text-green-600">Enhanced</span>
                            </div>
                            <div className="flex justify-between">
                              <span>ATS Compatibility</span>
                              <span className="font-semibold text-green-600">Optimized</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 pt-6">
                  <Button onClick={() => {setAnalysisComplete(false); setProfileData({headline: "", summary: "", experience: "", skills: ""});}}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Analyze Another Profile
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default LinkedInOptimizer;
