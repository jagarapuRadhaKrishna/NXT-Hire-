"use client";

import React, { useState, memo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Upload,
  FileText,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Target,
  Award,
  Users,
  Globe,
  Zap,
  Eye,
  Download,
  BarChart3,
  Search,
  Brain,
  Star,
  BookOpen,
  Calendar,
  MapPin,
  DollarSign,
  ChevronRight,
  RefreshCw
} from "lucide-react";

const ResumeAnalyzer = memo(() => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Mock analysis data
  const analysisResults = {
    overallScore: 87,
    atsScore: 92,
    sections: {
      contact: { score: 95, status: "excellent" },
      summary: { score: 78, status: "good" },
      experience: { score: 89, status: "excellent" },
      education: { score: 92, status: "excellent" },
      skills: { score: 85, status: "good" },
      achievements: { score: 73, status: "fair" }
    },
    keywords: {
      matched: 24,
      suggested: 8,
      coverage: 75
    },
    suggestions: [
      "Add more quantified achievements with specific metrics",
      "Include industry-specific keywords like 'Agile', 'Scrum'",
      "Optimize formatting for better ATS compatibility",
      "Add a professional summary section",
      "Include relevant certifications"
    ],
    strengths: [
      "Strong technical skills alignment",
      "Consistent work history",
      "Clear contact information",
      "Good education background"
    ],
    weaknesses: [
      "Limited quantified achievements",
      "Missing soft skills",
      "No certifications listed",
      "Formatting could be improved"
    ]
  };

  const skillsGap = [
    { skill: "JavaScript", level: 90, demand: 95 },
    { skill: "React", level: 85, demand: 90 },
    { skill: "Node.js", level: 70, demand: 85 },
    { skill: "Python", level: 60, demand: 88 },
    { skill: "AWS", level: 45, demand: 92 },
    { skill: "Docker", level: 30, demand: 80 }
  ];

  const jobMatches = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      match: 94,
      salary: "$120k - $150k",
      location: "San Francisco, CA",
      requirements: ["React", "JavaScript", "TypeScript", "Node.js"]
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      match: 89,
      salary: "$100k - $130k",
      location: "Remote",
      requirements: ["React", "Node.js", "Python", "AWS"]
    },
    {
      id: 3,
      title: "Frontend Architect",
      company: "Enterprise Solutions",
      match: 86,
      salary: "$140k - $180k",
      location: "New York, NY",
      requirements: ["React", "JavaScript", "Leadership", "System Design"]
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setAnalysisComplete(false);
      // Simulate analysis
      setTimeout(() => {
        setAnalysisComplete(true);
      }, 2000);
    }
  };

  const handleUploadNew = () => {
    setUploadedFile(null);
    setAnalysisComplete(false);
    // Reset file input
    const fileInput = document.getElementById('resume-upload-new');
    if (fileInput) {
      fileInput.click();
    }
  };

  const getScoreColor = (score) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score) => {
    if (score >= 85) return "bg-green-100 dark:bg-green-900/20";
    if (score >= 70) return "bg-yellow-100 dark:bg-yellow-900/20";
    return "bg-red-100 dark:bg-red-900/20";
  };

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        {/* Header Section */}
        <section className="w-full bg-background/50 pt-8">
          <div className="container mx-auto px-8">
            {/* Title */}
            <div className="mb-6">
              <h1 className="font-bold gradient-title text-4xl md:text-5xl">
                Resume Analyzer
              </h1>
              <p className="text-muted-foreground text-base">
                Get AI-powered insights to optimize your resume for better job opportunities
              </p>
            </div>

            {/* Upload Section - Centered */}
            {!uploadedFile && (
              <div className="flex justify-center mb-8">
                <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors max-w-xl w-full">
                  <CardContent className="pt-6">
                    <div className="py-6 text-center">
                      <Upload className="h-10 w-10 text-primary mb-4 mx-auto" />
                      <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
                      <p className="text-muted-foreground mb-6 text-sm">
                        Support for PDF, DOC, DOCX files up to 10MB
                      </p>
                      <div className="flex justify-center">
                        <input
                          id="resume-upload"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <Button 
                          size="lg" 
                          className="cursor-pointer"
                          onClick={() => document.getElementById('resume-upload')?.click()}
                        >
                          <Upload className="h-5 w-5 mr-2" />
                          Choose File
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Analysis Loading */}
            {uploadedFile && !analysisComplete && (
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <RefreshCw className="h-16 w-16 text-primary mx-auto mb-4 animate-spin" />
                    <h3 className="text-xl font-semibold mb-2">Analyzing Your Resume</h3>
                    <p className="text-muted-foreground mb-6">
                      Our AI is processing your resume for comprehensive insights...
                    </p>
                    <Progress value={75} className="w-64 mx-auto" />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Analysis Results */}
            {analysisComplete && (
              <div className="space-y-6">
                {/* Overall Score */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Overall Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getScoreColor(analysisResults.overallScore)} mb-2`}>
                          {analysisResults.overallScore}%
                        </div>
                        <Progress value={analysisResults.overallScore} className="mb-2" />
                        <p className="text-sm text-muted-foreground">Excellent resume quality</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        ATS Compatibility
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getScoreColor(analysisResults.atsScore)} mb-2`}>
                          {analysisResults.atsScore}%
                        </div>
                        <Progress value={analysisResults.atsScore} className="mb-2" />
                        <p className="text-sm text-muted-foreground">High ATS pass rate</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Search className="h-5 w-5 text-blue-500" />
                        Keyword Match
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getScoreColor(analysisResults.keywords.coverage)} mb-2`}>
                          {analysisResults.keywords.coverage}%
                        </div>
                        <Progress value={analysisResults.keywords.coverage} className="mb-2" />
                        <p className="text-sm text-muted-foreground">{analysisResults.keywords.matched} keywords matched</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upload New Resume Button - Always Visible */}
                <div className="flex justify-center">
                  <Card className="border-2 border-dashed border-primary/30 hover:border-primary/60 transition-colors">
                    <CardContent className="pt-6">
                      <div className="text-center py-4">
                        <RefreshCw className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Upload New Resume</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Want to analyze a different resume? Upload a new file for fresh insights.
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={handleUploadNew}
                          className="border-primary hover:bg-primary hover:text-white"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Choose New File
                        </Button>
                        <input
                          id="resume-upload-new"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Analysis Tabs */}
                <Tabs defaultValue="sections" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="sections">Sections</TabsTrigger>
                    <TabsTrigger value="skills">Skills Gap</TabsTrigger>
                    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                    <TabsTrigger value="matches">Job Matches</TabsTrigger>
                    <TabsTrigger value="optimize">Optimize</TabsTrigger>
                  </TabsList>

                  {/* Sections Analysis */}
                  <TabsContent value="sections" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart3 className="h-5 w-5" />
                          Resume Sections Analysis
                        </CardTitle>
                        <CardDescription>
                          Detailed breakdown of each resume section
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {Object.entries(analysisResults.sections).map(([section, data]) => (
                            <div key={section} className={`p-4 rounded-lg border-2 ${getScoreBgColor(data.score)}`}>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold capitalize">{section}</h4>
                                <div className={`text-lg font-bold ${getScoreColor(data.score)}`}>
                                  {data.score}%
                                </div>
                              </div>
                              <Progress value={data.score} className="mb-2" />
                              <Badge variant={data.status === "excellent" ? "default" : data.status === "good" ? "secondary" : "destructive"}>
                                {data.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Skills Gap Analysis */}
                  <TabsContent value="skills" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Brain className="h-5 w-5" />
                          Skills Gap Analysis
                        </CardTitle>
                        <CardDescription>
                          Compare your skills with market demand
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {skillsGap.map((skill) => (
                            <div key={skill.skill} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium">{skill.skill}</h4>
                                <div className="flex items-center gap-4">
                                  <div className="text-sm text-muted-foreground">
                                    Your Level: {skill.level}%
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Market Demand: {skill.demand}%
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <div className="text-xs text-muted-foreground mb-1">Your Skill Level</div>
                                  <Progress value={skill.level} className="h-2" />
                                </div>
                                <div>
                                  <div className="text-xs text-muted-foreground mb-1">Market Demand</div>
                                  <Progress value={skill.demand} className="h-2" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Suggestions */}
                  <TabsContent value="suggestions" className="space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <Card className="border-2">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="h-5 w-5" />
                            Strengths
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {analysisResults.strengths.map((strength, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm">{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-2">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-orange-600">
                            <AlertTriangle className="h-5 w-5" />
                            Improvements
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {analysisResults.suggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-orange-500" />
                                <span className="text-sm">{suggestion}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  {/* Job Matches */}
                  <TabsContent value="matches" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Job Matches Based on Your Resume
                        </CardTitle>
                        <CardDescription>
                          Jobs that match your skills and experience
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {jobMatches.map((job, index) => (
                            <Card key={index} className="border hover:border-primary transition-colors">
                              <CardContent className="pt-4">
                                <div className="flex items-start justify-between mb-3">
                                  <div>
                                    <h4 className="font-semibold text-lg">{job.title}</h4>
                                    <p className="text-muted-foreground">{job.company}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className={`text-lg font-bold ${getScoreColor(job.match)}`}>
                                      {job.match}% Match
                                    </div>
                                    <Progress value={job.match} className="w-20" />
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4" />
                                    <span>{job.salary}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{job.location}</span>
                                  </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                  {job.requirements.map((req) => (
                                    <Badge key={req} variant="secondary" className="text-xs">
                                      {req}
                                    </Badge>
                                  ))}
                                </div>

                                <div className="flex gap-2 pt-3 border-t">
                                  <Link href={`/jobs/${job.id}`} className="flex-1">
                                    <Button className="w-full">
                                      Apply Now
                                    </Button>
                                  </Link>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Optimization Tools */}
                  <TabsContent value="optimize" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
                        <CardContent className="pt-6 text-center">
                          <Download className="h-12 w-12 text-primary mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Download Optimized Resume</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Get an ATS-optimized version of your resume
                          </p>
                          <Button>Download PDF</Button>
                        </CardContent>
                      </Card>

                      <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
                        <CardContent className="pt-6 text-center">
                          <Eye className="h-12 w-12 text-green-500 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">ATS Preview</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            See how ATS systems will read your resume
                          </p>
                          <Button variant="outline">Preview</Button>
                        </CardContent>
                      </Card>

                      <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
                        <CardContent className="pt-6 text-center">
                          <RefreshCw className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Re-analyze</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Upload an updated version for fresh insights
                          </p>
                          <Button 
                            variant="outline"
                            onClick={handleUploadNew}
                          >
                            Upload New
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
});

ResumeAnalyzer.displayName = 'ResumeAnalyzer';

export default ResumeAnalyzer;
