"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Building2,
  Star,
  Globe,
  Zap,
  Heart,
  Share2,
  Bookmark,
  AlertCircle,
  CheckCircle,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  TrendingUp,
  Linkedin,
} from "lucide-react";
import { sampleJobs, featuredCompanies } from "@/data/jobs";

export default function JobDetailPage({ params }) {
  const [isSaved, setIsSaved] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  
  // Use React.use() to unwrap the params Promise
  const unwrappedParams = use(params);
  const job = sampleJobs.find(j => j.id === parseInt(unwrappedParams?.id)) || sampleJobs[0];
  const company = featuredCompanies.find(c => c.name === job.company) || featuredCompanies[0];

  const applicationProgress = 65; // Mock application completion percentage
  const similarJobs = sampleJobs.filter(j => j.id !== job.id).slice(0, 3);

  const handleApply = () => {
    setHasApplied(true);
    // In a real app, this would redirect to application form or handle application logic
  };

  return (
    <div className="container mx-auto space-y-6 py-6">
      {/* Header */}
      <div className="flex flex-col space-y-2 mx-2">
        <Link href="/jobs/search">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Job Search
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Header */}
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {job.featured && (
                    <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  {job.urgent && (
                    <Badge variant="destructive">
                      <Zap className="h-3 w-3 mr-1" />
                      Urgent Hiring
                    </Badge>
                  )}
                  {job.remote && (
                    <Badge variant="outline">
                      <Globe className="h-3 w-3 mr-1" />
                      Remote Work
                    </Badge>
                  )}
                  <Badge variant="secondary">Full Time</Badge>
                </div>

                {/* Title and Company */}
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold gradient-title">{job.title}</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <Link href={`/companies/${company.id}`} className="font-semibold text-lg hover:text-primary transition-colors">
                          {job.company}
                        </Link>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{company.rating}</span>
                          <span>•</span>
                          <span>{company.size} employees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-y">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{job.location}</p>
                      <p className="text-xs text-muted-foreground">Location</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium text-green-600">
                        ₹{(job.salary.min / 100000).toFixed(1)}L - ₹{(job.salary.max / 100000).toFixed(1)}L
                      </p>
                      <p className="text-xs text-muted-foreground">Annual Salary</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{job.posted}</p>
                      <p className="text-xs text-muted-foreground">Posted</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 flex-wrap">
                  <Button 
                    size="lg" 
                    className="flex-1 md:flex-none"
                    onClick={handleApply}
                    disabled={hasApplied}
                  >
                    {hasApplied ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Applied
                      </>
                    ) : (
                      "Apply Now"
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-[#0077B5] text-white hover:bg-[#005885] border-[#0077B5]"
                    onClick={() => {
                      const linkedinUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.title)}&location=${encodeURIComponent(job.location)}`;
                      window.open(linkedinUrl, '_blank');
                    }}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Apply with LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    <Heart className={`h-4 w-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>

                {/* Application Stats */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{job.applications} applications</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Apply by {job.deadline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>High match rate</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Details Tabs */}
          <Card className="border-2">
            <CardContent className="pt-6">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="company">Company</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Job Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">Key Responsibilities:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Develop and maintain scalable web applications using modern technologies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Collaborate with cross-functional teams to deliver high-quality solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Participate in code reviews and maintain coding standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Mentor junior developers and contribute to team knowledge sharing</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="requirements" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Requirements</h3>
                    <ul className="space-y-3">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3 mt-6">
                      <h4 className="font-semibold">Preferred Qualifications:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Master's degree in Computer Science or related field</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Experience with cloud platforms (AWS, GCP, Azure)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Knowledge of DevOps practices and CI/CD pipelines</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Benefits & Perks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {job.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Stock options and equity</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Unlimited PTO policy</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="company" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{company.name}</h3>
                        <p className="text-muted-foreground">{company.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span>{company.industry}</span>
                          <span>•</span>
                          <span>{company.size} employees</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>{company.rating} rating</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <h4 className="font-semibold mb-2">Company Size</h4>
                        <p className="text-muted-foreground">{company.size} employees</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Open Positions</h4>
                        <p className="text-muted-foreground">{company.openJobs} jobs available</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Application Progress */}
          {hasApplied && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Application Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Application Progress</span>
                    <span>{applicationProgress}%</span>
                  </div>
                  <Progress value={applicationProgress} className="h-2" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Application Submitted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Resume Reviewed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>Interview Scheduled</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Job Match Score */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Match Score
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Great match for your profile</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Skills Match</span>
                  <span className="font-medium">90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Experience Level</span>
                  <span className="font-medium">80%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location Preference</span>
                  <span className="font-medium">85%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Similar Jobs */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {similarJobs.map((similarJob) => (
                <Link key={similarJob.id} href={`/jobs/${similarJob.id}`}>
                  <div className="p-3 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-1">{similarJob.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{similarJob.company}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-green-600 font-medium">
                        ${similarJob.salary.min.toLocaleString()}+
                      </span>
                      <span className="text-muted-foreground">{similarJob.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
              <Link href="/jobs/search">
                <Button variant="outline" size="sm" className="w-full">
                  View More Jobs
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Job Alerts */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Job Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get notified about similar jobs posted in your area.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Create Job Alert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
