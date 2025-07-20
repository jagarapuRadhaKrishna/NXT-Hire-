"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import { jobCategories, sampleJobs } from "@/data/jobs";

export default function JobCategoryPage({ params }) {
  const [savedJobs, setSavedJobs] = useState(new Set());
  
  // Use React.use() to unwrap the params Promise
  const unwrappedParams = use(params);
  const categoryId = parseInt(unwrappedParams?.id);
  const category = jobCategories.find(cat => cat.id === categoryId) || jobCategories[0];
  
  // Filter jobs by category (for demo, we'll show all sample jobs with category label)
  const categoryJobs = sampleJobs.map(job => ({
    ...job,
    id: job.id + (categoryId * 100), // Make unique IDs for different categories
    category: category.name,
  }));

  const toggleSavedJob = (jobId) => {
    const newSaved = new Set(savedJobs);
    if (newSaved.has(jobId)) {
      newSaved.delete(jobId);
    } else {
      newSaved.add(jobId);
    }
    setSavedJobs(newSaved);
  };

  return (
    <div className="container mx-auto space-y-6 py-6">
      {/* Header */}
      <div className="flex flex-col space-y-2 mx-2">
        <Link href="/jobs">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Job Portal
          </Button>
        </Link>

        <div>
          <h1 className="text-6xl font-bold gradient-title">
            {category.icon} {category.name} Jobs
          </h1>
          <p className="text-muted-foreground">
            {category.count} jobs available in {category.name}
          </p>
        </div>
      </div>

      {/* Category Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-primary">{category.count}</div>
            <p className="text-xs text-muted-foreground">Total Jobs</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-green-500">{Math.floor(category.count * 0.15)}</div>
            <p className="text-xs text-muted-foreground">New This Week</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-blue-500">{Math.floor(category.count * 0.6)}</div>
            <p className="text-xs text-muted-foreground">Remote Available</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-purple-500">{Math.floor(category.count * 0.08)}</div>
            <p className="text-xs text-muted-foreground">Urgent Hiring</p>
          </CardContent>
        </Card>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Available Positions</h2>
          <Link href="/jobs/search">
            <Button variant="outline">Advanced Search</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryJobs.map((job) => (
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
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSavedJob(job.id);
                        }}
                        className="text-muted-foreground hover:text-red-500"
                      >
                        <Heart className={`h-4 w-4 ${savedJobs.has(job.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
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

      {/* Related Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Related Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {jobCategories.filter(cat => cat.id !== categoryId).map((relatedCategory) => (
            <Link key={relatedCategory.id} href={`/jobs/category/${relatedCategory.id}`}>
              <Card className="border-2 hover:border-primary transition-all duration-300 cursor-pointer group">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {relatedCategory.icon}
                  </div>
                  <h3 className="font-medium text-sm mb-1">{relatedCategory.name}</h3>
                  <p className="text-xs text-muted-foreground">{relatedCategory.count} jobs</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
