"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
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
  RefreshCw,
  ExternalLink,
  Copy,
  CheckCheck,
  Linkedin,
  User,
  Briefcase,
  GraduationCap,
  Camera,
  Edit3
} from "lucide-react";

const LinkedInOptimization = () => {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [customUrl, setCustomUrl] = useState("");
  const [urlCopied, setUrlCopied] = useState(false);

  // Mock analysis data
  const profileAnalysis = {
    overallScore: 82,
    profileStrength: "Strong",
    sections: {
      headline: { score: 78, status: "good", current: "Software Engineer at TechCorp", suggested: "Full-Stack Software Engineer | React, Node.js | Building Scalable Web Applications" },
      about: { score: 65, status: "fair", issues: ["Too short", "Missing keywords", "No call to action"] },
      experience: { score: 85, status: "excellent", issues: ["Quantify achievements more"] },
      education: { score: 90, status: "excellent", issues: [] },
      skills: { score: 75, status: "good", issues: ["Add trending skills", "Get more endorsements"] },
      photo: { score: 88, status: "excellent", issues: ["Professional headshot"] }
    },
    keywordOptimization: {
      current: 12,
      recommended: 25,
      missing: ["React.js", "Node.js", "AWS", "TypeScript", "Agile", "Scrum"]
    },
    visibility: {
      searchAppearances: 156,
      profileViews: 89,
      impressions: 1240,
      connections: 342
    },
    suggestions: [
      "Add a custom LinkedIn URL to improve SEO",
      "Include 3-5 industry keywords in your headline",
      "Write a compelling About section with 150+ words",
      "Add specific achievements with numbers/percentages",
      "Request recommendations from colleagues",
      "Post industry-related content weekly"
    ]
  };

  const industryBenchmarks = {
    averageConnections: 500,
    averageProfileViews: 120,
    topPerformers: {
      connections: 1500,
      profileViews: 300,
      skills: 30
    }
  };

  const handleUrlAnalysis = () => {
    if (linkedinUrl) {
      setAnalysisComplete(true);
    }
  };

  const generateCustomUrl = () => {
    const suggestions = [
      "john-doe-software-engineer",
      "johndoe-fullstack-developer",
      "john-doe-react-developer"
    ];
    setCustomUrl(suggestions[Math.floor(Math.random() * suggestions.length)]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setUrlCopied(true);
    setTimeout(() => setUrlCopied(false), 2000);
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
        <section className="w-full py-8 md:py-12 bg-background/50">
          <div className="container mx-auto px-4 md:px-6">
            {/* Back Navigation */}
            <div className="mb-6">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-8">
              <h1 className="font-bold gradient-title text-5xl md:text-6xl">
                LinkedIn Optimization
              </h1>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-muted-foreground text-lg">
                Optimize your LinkedIn profile for maximum visibility and professional impact
              </p>
            </div>

            {/* LinkedIn URL Input */}
            {!analysisComplete && (
              <Card className="border-2 max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Linkedin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Analyze Your LinkedIn Profile</h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      Enter your LinkedIn profile URL to get detailed optimization insights
                    </p>
                    <div className="space-y-4">
                      <Input
                        placeholder="https://linkedin.com/in/your-profile"
                        value={linkedinUrl}
                        onChange={(e) => setLinkedinUrl(e.target.value)}
                        className="h-12"
                      />
                      <Button 
                        size="lg" 
                        onClick={handleUrlAnalysis}
                        disabled={!linkedinUrl}
                        className="w-full"
                      >
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Analyze Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Analysis Results */}
            {analysisComplete && (
              <div className="space-y-6">
                {/* Overall Score */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Overall Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getScoreColor(profileAnalysis.overallScore)} mb-2`}>
                          {profileAnalysis.overallScore}%
                        </div>
                        <Progress value={profileAnalysis.overallScore} className="mb-2" />
                        <p className="text-sm text-muted-foreground">{profileAnalysis.profileStrength} profile</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Eye className="h-5 w-5 text-blue-500" />
                        Profile Views
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          {profileAnalysis.visibility.profileViews}
                        </div>
                        <p className="text-sm text-muted-foreground">Last 30 days</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-green-500" />
                        Connections
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          {profileAnalysis.visibility.connections}
                        </div>
                        <p className="text-sm text-muted-foreground">Total connections</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Search className="h-5 w-5 text-purple-500" />
                        Search Rank
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">
                          #{profileAnalysis.visibility.searchAppearances}
                        </div>
                        <p className="text-sm text-muted-foreground">Search appearances</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upload New Resume Button */}
                <Card className="border-2 bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">Analyze Another Profile</h3>
                        <p className="text-sm text-muted-foreground">
                          Get insights for a different LinkedIn profile
                        </p>
                      </div>
                      <Button 
                        onClick={() => {
                          setAnalysisComplete(false);
                          setLinkedinUrl("");
                        }}
                        variant="outline"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Analyze New Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Analysis Tabs */}
                <Tabs defaultValue="sections" className="w-full">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="sections">Profile Sections</TabsTrigger>
                    <TabsTrigger value="keywords">Keywords</TabsTrigger>
                    <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                    <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
                    <TabsTrigger value="url">Custom URL</TabsTrigger>
                  </TabsList>

                  {/* Profile Sections Analysis */}
                  <TabsContent value="sections" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Profile Sections Analysis
                        </CardTitle>
                        <CardDescription>
                          Detailed breakdown of each profile section
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {Object.entries(profileAnalysis.sections).map(([section, data]) => (
                            <Card key={section} className={`border ${getScoreBgColor(data.score)}`}>
                              <CardContent className="pt-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="font-semibold capitalize flex items-center gap-2">
                                    {section === 'headline' && <FileText className="h-4 w-4" />}
                                    {section === 'about' && <User className="h-4 w-4" />}
                                    {section === 'experience' && <Briefcase className="h-4 w-4" />}
                                    {section === 'education' && <GraduationCap className="h-4 w-4" />}
                                    {section === 'skills' && <Brain className="h-4 w-4" />}
                                    {section === 'photo' && <Camera className="h-4 w-4" />}
                                    {section}
                                  </h4>
                                  <div className="flex items-center gap-2">
                                    <div className={`text-lg font-bold ${getScoreColor(data.score)}`}>
                                      {data.score}%
                                    </div>
                                    <Badge variant={data.status === "excellent" ? "default" : data.status === "good" ? "secondary" : "destructive"}>
                                      {data.status}
                                    </Badge>
                                  </div>
                                </div>
                                <Progress value={data.score} className="mb-3" />
                                {data.current && (
                                  <div className="space-y-2">
                                    <div>
                                      <p className="text-sm font-medium">Current:</p>
                                      <p className="text-sm text-muted-foreground">{data.current}</p>
                                    </div>
                                    {data.suggested && (
                                      <div>
                                        <p className="text-sm font-medium">Suggested:</p>
                                        <p className="text-sm text-green-600">{data.suggested}</p>
                                      </div>
                                    )}
                                  </div>
                                )}
                                {data.issues && data.issues.length > 0 && (
                                  <div className="mt-2">
                                    <p className="text-sm font-medium mb-1">Issues to address:</p>
                                    <ul className="list-disc list-inside space-y-1">
                                      {data.issues.map((issue, index) => (
                                        <li key={index} className="text-sm text-muted-foreground">{issue}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Keywords Analysis */}
                  <TabsContent value="keywords" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Search className="h-5 w-5" />
                          Keyword Optimization
                        </CardTitle>
                        <CardDescription>
                          Improve your discoverability with industry keywords
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Current Keywords</h4>
                            <div className="text-center p-6 border-2 rounded-lg">
                              <div className="text-3xl font-bold text-blue-600 mb-2">
                                {profileAnalysis.keywordOptimization.current}
                              </div>
                              <p className="text-sm text-muted-foreground">Keywords found</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Recommended Keywords</h4>
                            <div className="text-center p-6 border-2 rounded-lg">
                              <div className="text-3xl font-bold text-green-600 mb-2">
                                {profileAnalysis.keywordOptimization.recommended}
                              </div>
                              <p className="text-sm text-muted-foreground">Target keywords</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <h4 className="font-semibold mb-3">Missing High-Impact Keywords</h4>
                          <div className="flex flex-wrap gap-2">
                            {profileAnalysis.keywordOptimization.missing.map((keyword) => (
                              <Badge key={keyword} variant="outline" className="text-sm">
                                + {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Suggestions */}
                  <TabsContent value="suggestions" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Optimization Recommendations
                        </CardTitle>
                        <CardDescription>
                          Actionable steps to improve your LinkedIn presence
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {profileAnalysis.suggestions.map((suggestion, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-sm">{suggestion}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Benchmarks */}
                  <TabsContent value="benchmarks" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart3 className="h-5 w-5" />
                          Industry Benchmarks
                        </CardTitle>
                        <CardDescription>
                          Compare your profile with industry standards
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold mb-2">Connections</h4>
                            <div className="space-y-2">
                              <div className="text-2xl font-bold text-primary">{profileAnalysis.visibility.connections}</div>
                              <div className="text-sm text-muted-foreground">
                                Average: {industryBenchmarks.averageConnections}
                              </div>
                              <div className="text-sm text-green-600">
                                Top 10%: {industryBenchmarks.topPerformers.connections}+
                              </div>
                            </div>
                          </div>
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold mb-2">Profile Views</h4>
                            <div className="space-y-2">
                              <div className="text-2xl font-bold text-primary">{profileAnalysis.visibility.profileViews}</div>
                              <div className="text-sm text-muted-foreground">
                                Average: {industryBenchmarks.averageProfileViews}
                              </div>
                              <div className="text-sm text-green-600">
                                Top 10%: {industryBenchmarks.topPerformers.profileViews}+
                              </div>
                            </div>
                          </div>
                          <div className="text-center p-4 border rounded-lg">
                            <h4 className="font-semibold mb-2">Skills Listed</h4>
                            <div className="space-y-2">
                              <div className="text-2xl font-bold text-primary">18</div>
                              <div className="text-sm text-muted-foreground">
                                Average: 25
                              </div>
                              <div className="text-sm text-green-600">
                                Top 10%: {industryBenchmarks.topPerformers.skills}+
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Custom URL Generator */}
                  <TabsContent value="url" className="space-y-4">
                    <Card className="border-2">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <ExternalLink className="h-5 w-5" />
                          Custom LinkedIn URL
                        </CardTitle>
                        <CardDescription>
                          Create a professional, SEO-friendly LinkedIn URL
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Benefits of Custom URL:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Easier to share and remember</li>
                              <li>Improves SEO and Google search ranking</li>
                              <li>Looks more professional on resumes and business cards</li>
                              <li>Increases trust with recruiters and connections</li>
                            </ul>
                          </div>
                          <div className="space-y-3">
                            <Button onClick={generateCustomUrl} variant="outline" className="w-full">
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Generate Custom URL Suggestions
                            </Button>
                            {customUrl && (
                              <div className="p-4 border rounded-lg bg-muted/50">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">linkedin.com/in/{customUrl}</p>
                                    <p className="text-sm text-muted-foreground">Suggested custom URL</p>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => copyToClipboard(`linkedin.com/in/${customUrl}`)}
                                  >
                                    {urlCopied ? <CheckCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default LinkedInOptimization;
