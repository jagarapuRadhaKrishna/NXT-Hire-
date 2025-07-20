"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  MapPin,
  Users,
  Building2,
  Star,
  Globe,
  Calendar,
  Briefcase,
  Heart,
  Share2,
  ExternalLink,
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  Linkedin,
} from "lucide-react";
import { featuredCompanies, sampleJobs } from "@/data/jobs";

export default function CompanyProfilePage({ params }) {
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Use React.use() to unwrap the params Promise
  const unwrappedParams = use(params);
  const company = featuredCompanies.find(c => c.id === parseInt(unwrappedParams?.id)) || featuredCompanies[0];
  const companyJobs = sampleJobs.filter(job => job.company === company.name);

  const companyStats = {
    totalEmployees: company.size,
    founded: company.founded?.toString() || "1998",
    headquarters: company.headquarters || "Mountain View, CA",
    website: company.website || "https://google.com",
    revenue: company.revenue || "$280B+",
    industry: company.industry || "Technology",
    companyType: "Public",
    avgRating: company.rating || 4.5,
    totalReviews: Math.floor(Math.random() * 20000) + 5000,
    benefits: company.benefits || [
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development budget",
      "Stock purchase plan",
      "Parental leave",
      "Wellness programs",
      "Free meals and snacks"
    ],
    culture: [
      "Innovation-driven environment",
      "Collaborative team culture", 
      "Diversity and inclusion focus",
      "Work-life balance priority",
      "Continuous learning opportunities",
      "Employee resource groups"
    ],
    locations: [
      "Mountain View, CA (HQ)",
      "New York, NY",
      "Austin, TX", 
      "Seattle, WA",
      "London, UK",
      "Zurich, Switzerland"
    ]
  };

  return (
    <div className="container mx-auto space-y-6 py-6">
      {/* Header */}
      <div className="flex flex-col space-y-2 mx-2">
        <Link href="/jobs">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
          </Button>
        </Link>
      </div>

      {/* Company Header */}
      <Card className="border-2">
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Company Basic Info */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                {company.logo ? (
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <Building2 className="h-12 w-12 text-primary" />
                )}
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-4xl font-bold gradient-title">{company.name}</h1>
                    {company.verified && (
                      <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground">{company.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">{companyStats.avgRating}</span>
                      <span>({companyStats.totalReviews.toLocaleString()} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{companyStats.totalEmployees} employees</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{company.openJobs} open positions</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button 
                    variant={isFollowing ? "outline" : "default"}
                    onClick={() => setIsFollowing(!isFollowing)}
                    className="gap-2"
                  >
                    <Heart className={`h-4 w-4 ${isFollowing ? 'fill-red-500 text-red-500' : ''}`} />
                    {isFollowing ? 'Following' : 'Follow Company'}
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="gap-2" asChild>
                    <Link href={companyStats.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{companyStats.founded}</div>
                <p className="text-xs text-muted-foreground">Founded</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{companyStats.revenue}</div>
                <p className="text-xs text-muted-foreground">Annual Revenue</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">{companyStats.totalEmployees}</div>
                <p className="text-xs text-muted-foreground">Employees</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">{company.openJobs}</div>
                <p className="text-xs text-muted-foreground">Open Jobs</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Details */}
        <div className="lg:col-span-2">
          <Card className="border-2">
            <CardContent className="pt-6">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="jobs">Jobs ({companyJobs.length})</TabsTrigger>
                  <TabsTrigger value="culture">Culture</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">About {company.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {company.description || `${company.name} is a leading technology company that organizes the world's information 
                      and makes it universally accessible and useful. Founded in ${companyStats.founded}, we've grown from a 
                      search engine startup to a global technology leader, creating products and services 
                      that help billions of people around the world.`}
                    </p>
                    
                    {company.culture && (
                      <div className="mt-4 p-4 bg-primary/5 rounded-lg border">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          Our Culture
                        </h4>
                        <p className="text-sm text-muted-foreground">{company.culture}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Company Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Industry:</span>
                            <span>{companyStats.industry}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Company Type:</span>
                            <span>{companyStats.companyType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Headquarters:</span>
                            <span>{companyStats.headquarters}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Employees:</span>
                            <span>{companyStats.totalEmployees}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold">Global Presence</h4>
                        <div className="space-y-1">
                          {companyStats.locations.map((location, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <MapPin className="h-3 w-3 text-muted-foreground" />
                              <span className="text-muted-foreground">{location}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="jobs" className="space-y-4 mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Open Positions</h3>
                    <Link href="/jobs/search">
                      <Button variant="outline" size="sm">View All Jobs</Button>
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    {companyJobs.map((job) => (
                      <Link key={job.id} href={`/jobs/${job.id}`}>
                        <Card className="border hover:border-primary transition-colors cursor-pointer">
                          <CardContent className="pt-4">
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                  <h4 className="font-semibold hover:text-primary transition-colors">
                                    {job.title}
                                  </h4>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-3 w-3" />
                                      <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      <span>{job.posted}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-sm font-medium text-green-600">
                                  ₹{(job.salary.min / 100000).toFixed(1)}L+
                                </div>
                              </div>
                              
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {job.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-1">
                                {job.skills.slice(0, 4).map((skill) => (
                                  <Badge key={skill} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="culture" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Company Culture</h3>
                    <p className="text-muted-foreground">
                      Our culture is built on innovation, collaboration, and making a positive impact. 
                      We believe in empowering our employees to do their best work while maintaining 
                      a healthy work-life balance.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {companyStats.culture.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      <h4 className="font-semibold">Employee Satisfaction</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-green-500">4.5/5</div>
                          <p className="text-xs text-muted-foreground">Overall Rating</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-500">89%</div>
                          <p className="text-xs text-muted-foreground">Would Recommend</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-500">92%</div>
                          <p className="text-xs text-muted-foreground">Career Growth</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Benefits & Perks</h3>
                    <p className="text-muted-foreground">
                      We offer comprehensive benefits to support our employees' health, wellness, 
                      and professional growth.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {companyStats.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Apply */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Quick Apply
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Apply to multiple positions at {company.name} with one click.
              </p>
              <Button className="w-full">Apply Now</Button>
            </CardContent>
          </Card>

          {/* Company Stats */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Company Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Industry Rank</span>
                  <span className="font-medium">#2 in Tech</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Growth Rate</span>
                  <span className="font-medium text-green-600">+15% YoY</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Employee Turnover</span>
                  <span className="font-medium">8.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avg. Tenure</span>
                  <span className="font-medium">4.2 years</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Similar Companies */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Similar Companies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {featuredCompanies.filter(c => c.id !== company.id).slice(0, 3).map((similarCompany) => (
                <Link key={similarCompany.id} href={`/companies/${similarCompany.id}`}>
                  <div className="flex items-center gap-3 p-2 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{similarCompany.name}</h4>
                      <p className="text-xs text-muted-foreground">{similarCompany.openJobs} jobs</p>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Job Alerts */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Job Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get notified when {company.name} posts new jobs.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Create Alert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
