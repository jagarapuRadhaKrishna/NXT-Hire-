"use client";

import React, { useState, useCallback, memo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Upload,
  FileText,
  Brain,
  Target,
  Star,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Eye,
  Trash2,
  Zap,
} from "lucide-react";
import Link from "next/link";

const SmartJobMatching = () => {
  const [uploadedResume, setUploadedResume] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Mock analysis results
  const resumeAnalysis = {
    skills: ["React", "JavaScript", "Node.js", "MongoDB", "AWS", "TypeScript"],
    experience: "3 years",
    education: "Bachelor's in Computer Science",
    certifications: ["AWS Solutions Architect", "React Certification"],
    strength: "Full-stack development with modern frameworks",
    improvement: "Add more experience with microservices architecture"
  };

  // Mock job matches with reduced size and no hover effects
  const jobMatches = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TCS",
      location: "Bangalore",
      salary: "₹15-20L",
      posted: "2 days ago",
      matchScore: 92,
      matchedSkills: ["React", "JavaScript", "TypeScript"],
      benefits: ["Health Insurance", "Flexible Hours"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Infosys",
      location: "Mumbai",
      salary: "₹12-18L", 
      posted: "1 day ago",
      matchScore: 88,
      matchedSkills: ["Node.js", "React", "MongoDB"],
      benefits: ["Remote Work", "Learning Budget"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Wipro",
      location: "Hyderabad",
      salary: "₹10-15L",
      posted: "3 days ago", 
      matchScore: 85,
      matchedSkills: ["React", "JavaScript", "CSS"],
      benefits: ["Gym Membership", "Cafeteria"],
    },
    {
      id: 4,
      title: "JavaScript Developer",
      company: "Cognizant",
      location: "Chennai",
      salary: "₹8-12L",
      posted: "4 days ago", 
      matchScore: 82,
      matchedSkills: ["JavaScript", "React"],
      benefits: ["Training Programs", "Health Benefits"],
    }
  ];

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedResume(file);
      setIsAnalyzing(true);
      
      // Simulate analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 3000);
    }
  }, []);

  const getMatchColor = (score) => {
    if (score >= 90) return "bg-green-100 text-green-800";
    if (score >= 80) return "bg-blue-100 text-blue-800";
    if (score >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  const getMatchIcon = (score) => {
    if (score >= 90) return <CheckCircle className="h-3 w-3" />;
    if (score >= 80) return <Target className="h-3 w-3" />;
    return <AlertCircle className="h-3 w-3" />;
  };

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        <section className="w-full bg-background/50 pt-16">
          <div className="container mx-auto px-8">
            {/* Back to Job Portal Navigation */}
            <div className="mb-2">
              <Link href="/job-portal">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Job Portal
                </Button>
              </Link>
            </div>
            
            {/* Title */}
            <div className="mb-6">
              <h1 className="font-bold gradient-title text-4xl md:text-5xl">
                Smart Job Matching
              </h1>
              <p className="text-muted-foreground">
                AI-powered job matching based on your resume and preferences
              </p>
            </div>

            {/* Resume Upload Section */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Your Resume
                </CardTitle>
                <CardDescription>
                  Upload your resume to get personalized job recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!uploadedResume ? (
                  <div
                    className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors border-gray-300 hover:border-gray-400"
                    onClick={() => document.getElementById('resume-upload')?.click()}
                  >
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Upload your resume</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Supports PDF, DOC, DOCX files up to 10MB
                    </p>
                    <Button variant="outline">
                      Choose File
                    </Button>
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <FileText className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <p className="font-medium">{uploadedResume.name}</p>
                        <p className="text-sm text-gray-600">
                          {(uploadedResume.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setUploadedResume(null);
                          setAnalysisComplete(false);
                          setIsAnalyzing(false);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {isAnalyzing && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Brain className="h-5 w-5 text-blue-500 animate-pulse" />
                          <span className="font-medium">Analyzing your resume...</span>
                        </div>
                        <Progress value={66} className="w-full" />
                        <p className="text-sm text-gray-600">
                          AI is extracting skills, experience, and matching with job requirements
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Analysis Results */}
            {analysisComplete && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-500" />
                    Resume Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Skills Identified</h4>
                      <div className="flex flex-wrap gap-2">
                        {resumeAnalysis.skills.map((skill, index) => (
                          <Badge key={index} className="bg-blue-100 text-blue-800">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Key Details</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Experience:</strong> {resumeAnalysis.experience}</div>
                        <div><strong>Education:</strong> {resumeAnalysis.education}</div>
                        <div><strong>Certifications:</strong> {resumeAnalysis.certifications.join(", ")}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                      Strength
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {resumeAnalysis.strength}
                    </p>
                  </div>
                  
                  <div className="mt-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                      Improvement Suggestion
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      {resumeAnalysis.improvement}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Job Matches */}
            {analysisComplete && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    Job Matches ({jobMatches.length})
                  </CardTitle>
                  <CardDescription>
                    Jobs that match your skills and experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobMatches.map((job) => (
                      <Card key={job.id} className="border hover:border-primary transition-all">
                        <CardContent className="pt-4 pb-4">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-base font-semibold">
                                    {job.title}
                                  </h3>
                                  <div className={`px-2 py-1 rounded-full flex items-center gap-1 ${getMatchColor(job.matchScore)} text-xs`}>
                                    {getMatchIcon(job.matchScore)}
                                    <span className="text-xs font-medium">
                                      {job.matchScore}%
                                    </span>
                                  </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                                  {job.company}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    {job.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <DollarSign className="h-3 w-3" />
                                    {job.salary}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {job.posted}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs">
                              <div>
                                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Skills Match
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                  {job.matchedSkills.slice(0, 3).map((skill, index) => (
                                    <Badge key={index} className="bg-green-100 text-green-800 text-xs px-1 py-0">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Benefits
                                </h4>
                                <ul className="space-y-1">
                                  {job.benefits.slice(0, 2).map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-1 text-xs text-gray-600">
                                      <Star className="h-2 w-2 text-yellow-500" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 pt-2 border-t">
                              <Button className="flex-1 h-8 text-xs">
                                Apply Now
                              </Button>
                              <Button variant="outline" className="h-8 px-3 text-xs">
                                <Eye className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(SmartJobMatching);
