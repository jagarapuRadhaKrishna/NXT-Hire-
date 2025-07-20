import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Building2,
  Star,
  ArrowRight,
  Filter,
  Briefcase,
  Globe,
  Zap,
} from "lucide-react";
import { jobCategories, featuredCompanies, sampleJobs, jobStats } from "@/data/jobs";

export default function JobPortalPage() {
  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative pt-20">
        {/* Header Section */}
        <section className="w-full py-8 md:py-12 bg-background/50">
          <div className="container mx-auto px-8">
            {/* Title */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-8">
              <h1 className="font-bold gradient-title text-5xl md:text-6xl">
                Job Portal
              </h1>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-muted-foreground text-lg">
                Discover your next career opportunity with AI-powered job matching
              </p>
            </div>

            {/* Job Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-12">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl font-bold text-primary">{jobStats.totalJobs.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Total Jobs</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl font-bold text-green-500">{jobStats.newThisWeek}</div>
                  <p className="text-xs text-muted-foreground">New This Week</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl font-bold text-blue-500">{jobStats.companiesHiring}</div>
                  <p className="text-xs text-muted-foreground">Companies Hiring</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl font-bold text-purple-500">₹{jobStats.averageSalary.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Avg Salary</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl font-bold text-orange-500">{jobStats.remoteJobs.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Remote Jobs</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl font-bold text-red-500">{jobStats.urgentHiring}</div>
                  <p className="text-xs text-muted-foreground">Urgent Hiring</p>
                </CardContent>
              </Card>
            </div>

            {/* Search Section */}
            <Card className="border-2 mb-8">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search jobs, companies, or keywords..."
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Location"
                      className="pl-10 h-12"
                    />
                  </div>
                  <Button size="lg" className="h-12">
                    <Search className="h-4 w-4 mr-2" />
                    Search Jobs
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    All Filters
                  </Button>
                  <Button variant="outline" size="sm">Remote</Button>
                  <Button variant="outline" size="sm">Full Time</Button>
                  <Button variant="outline" size="sm">Senior Level</Button>
                  <Button variant="outline" size="sm">₹100k+</Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Management Tools */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Job Management Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <Link href="/application-tracker" prefetch={true}>
                  <Card className="border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group h-28">
                    <CardContent className="pt-4 text-center flex flex-col items-center justify-center h-full">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-sm font-bold">Application Tracker</h3>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/job-alerts" prefetch={true}>
                  <Card className="border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group h-28">
                    <CardContent className="pt-4 text-center flex flex-col items-center justify-center h-full">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="text-sm font-bold">Job Alerts</h3>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/career-insights" prefetch={true}>
                  <Card className="border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group h-28">
                    <CardContent className="pt-4 text-center flex flex-col items-center justify-center h-full">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="text-sm font-bold">Career Insights</h3>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/smart-job-matching" prefetch={true}>
                  <Card className="border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group h-28">
                    <CardContent className="pt-4 text-center flex flex-col items-center justify-center h-full">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
                        <Zap className="h-5 w-5 text-orange-600" />
                      </div>
                      <h3 className="text-sm font-bold">Smart Matching</h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Featured Companies with Horizontal Auto-Scroll */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Top Hiring Companies</h2>
                <Link href="/companies">
                  <Button variant="outline">
                    View All <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll space-x-6 hover:pause-animation">
                  {[...featuredCompanies, ...featuredCompanies].map((company, index) => (
                    <Link key={`${company.id}-${index}`} href={`/companies/${company.id}`}>
                      <Card className="min-w-[300px] border-2 hover:border-primary transition-all duration-300 cursor-pointer group">
                        <CardContent className="pt-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                              {company.logo ? (
                                <img 
                                  src={company.logo} 
                                  alt={`${company.name} logo`}
                                  className="w-12 h-12 object-contain"
                                />
                              ) : (
                                <Building2 className="h-8 w-8 text-primary" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold truncate">{company.name}</h3>
                                {company.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                                {company.description}
                              </p>
                              <div className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-1">
                                  <Briefcase className="h-3 w-3" />
                                  <span>{company.openJobs} jobs</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 text-yellow-500" />
                                  <span>{company.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Jobs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Featured Jobs</h2>
                <Link href="/jobs">
                  <Button variant="outline">
                    View All Jobs <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleJobs.slice(0, 6).map((job) => (
                  <Link key={job.id} href={`/jobs/${job.id}`}>
                    <Card className="border-2 hover:border-primary transition-all duration-300 cursor-pointer group h-full">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {/* Job Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                {job.featured && (
                                  <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                                    <Star className="h-3 w-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                                {job.urgent && (
                                  <Badge variant="destructive">
                                    <Zap className="h-3 w-3 mr-1" />
                                    Urgent
                                  </Badge>
                                )}
                                {job.remote && (
                                  <Badge variant="outline">
                                    <Globe className="h-3 w-3 mr-1" />
                                    Remote
                                  </Badge>
                                )}
                              </div>
                              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                {job.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">{job.company}</p>
                            </div>
                          </div>

                          {/* Job Details */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{job.posted}</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1 text-sm">
                              <DollarSign className="h-4 w-4 text-green-500" />
                              <span className="font-medium text-green-600">
                                ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                              </span>
                            </div>

                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {job.description}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1">
                              {job.skills.slice(0, 3).map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {job.skills.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{job.skills.length - 3} more
                                </Badge>
                              )}
                            </div>

                            {/* Applications Count */}
                            <div className="flex items-center justify-between pt-2 border-t">
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Users className="h-3 w-3" />
                                <span>{job.applications} applications</span>
                              </div>
                              <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
