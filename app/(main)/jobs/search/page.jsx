"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Building2,
  Star,
  ArrowLeft,
  Filter,
  Globe,
  Zap,
  Heart,
  Share2,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from "lucide-react";
import { sampleJobs, jobTypes, experienceLevels, salaryRanges, jobCategories } from "@/data/jobs";

export default function JobSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [savedJobs, setSavedJobs] = useState(new Set());

  // Extended sample jobs for demonstration
  const extendedJobs = useMemo(() => {
    const baseJobs = [...sampleJobs];
    // Duplicate and modify jobs for more variety
    const additionalJobs = baseJobs.map((job, index) => ({
      ...job,
      id: job.id + 100 + index,
      title: job.title.replace("Senior", index % 2 === 0 ? "Junior" : "Lead"),
      posted: index % 3 === 0 ? "1 hour ago" : index % 3 === 1 ? "1 day ago" : "3 days ago",
      applications: Math.floor(Math.random() * 100) + 10,
      salary: {
        min: job.salary.min - (index % 2 === 0 ? 20000 : 0),
        max: job.salary.max - (index % 2 === 0 ? 20000 : 0),
      },
    }));
    return [...baseJobs, ...additionalJobs];
  }, []);

  // Filter jobs based on search criteria
  const filteredJobs = useMemo(() => {
    return extendedJobs.filter((job) => {
      const matchesSearch = !searchQuery || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesLocation = !locationQuery || 
        job.location.toLowerCase().includes(locationQuery.toLowerCase());
      
      const matchesJobType = selectedJobTypes.length === 0 || 
        selectedJobTypes.includes(job.type);
      
      const matchesExperience = !selectedExperience || 
        job.experience === selectedExperience;
      
      const matchesSalary = !selectedSalaryRange || (() => {
        const range = salaryRanges.find(r => r.id === selectedSalaryRange);
        if (!range) return true;
        return job.salary.min >= range.min && (range.max === null || job.salary.max <= range.max);
      })();

      return matchesSearch && matchesLocation && matchesJobType && matchesExperience && matchesSalary;
    });
  }, [extendedJobs, searchQuery, locationQuery, selectedJobTypes, selectedExperience, selectedSalaryRange]);

  // Sort jobs
  const sortedJobs = useMemo(() => {
    const sorted = [...filteredJobs];
    switch (sortBy) {
      case "newest":
        return sorted.sort((a, b) => new Date(b.posted) - new Date(a.posted));
      case "salary-high":
        return sorted.sort((a, b) => b.salary.max - a.salary.max);
      case "salary-low":
        return sorted.sort((a, b) => a.salary.min - b.salary.min);
      case "applications":
        return sorted.sort((a, b) => a.applications - b.applications);
      default:
        return sorted;
    }
  }, [filteredJobs, sortBy]);

  const toggleSavedJob = (jobId) => {
    const newSaved = new Set(savedJobs);
    if (newSaved.has(jobId)) {
      newSaved.delete(jobId);
    } else {
      newSaved.add(jobId);
    }
    setSavedJobs(newSaved);
  };

  const handleJobTypeChange = (jobType, checked) => {
    if (checked) {
      setSelectedJobTypes([...selectedJobTypes, jobType]);
    } else {
      setSelectedJobTypes(selectedJobTypes.filter(type => type !== jobType));
    }
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
          <h1 className="text-6xl font-bold gradient-title">Find Your Dream Job</h1>
          <p className="text-muted-foreground">
            {filteredJobs.length} jobs found matching your criteria
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className={`lg:col-span-1 space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Job Type */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Job Type</Label>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={type.id}
                        checked={selectedJobTypes.includes(type.id)}
                        onCheckedChange={(checked) => handleJobTypeChange(type.id, checked)}
                      />
                      <Label htmlFor={type.id} className="text-sm flex-1 cursor-pointer">
                        {type.label}
                      </Label>
                      <span className="text-xs text-muted-foreground">({type.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Experience Level</Label>
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.id} value={level.id}>
                        {level.label} ({level.range})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Salary Range */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Salary Range</Label>
                <Select value={selectedSalaryRange} onValueChange={setSelectedSalaryRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select salary range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Salary</SelectItem>
                    {salaryRanges.map((range) => (
                      <SelectItem key={range.id} value={range.id}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Category */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {jobCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.icon} {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSelectedJobTypes([]);
                  setSelectedExperience("");
                  setSelectedSalaryRange("");
                  setSelectedCategory("");
                }}
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search Bar */}
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search jobs..."
                    className="pl-10 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Location"
                    className="pl-10 h-12"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="lg:hidden h-12"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {showFilters ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sort and Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {sortedJobs.length} of {extendedJobs.length} jobs
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                <SelectItem value="applications">Fewest Applicants</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {sortedJobs.map((job) => (
              <Card key={job.id} className="border-2 hover:border-primary transition-all duration-300 job-card">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Job Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
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
                        
                        <div>
                          <Link href={`/jobs/${job.id}`}>
                            <h3 className="font-semibold text-xl hover:text-primary transition-colors cursor-pointer">
                              {job.title}
                            </h3>
                          </Link>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{job.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSavedJob(job.id)}
                          className="text-muted-foreground hover:text-red-500"
                        >
                          <Heart className={`h-4 w-4 ${savedJobs.has(job.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-1 text-sm">
                          <DollarSign className="h-4 w-4 text-green-500" />
                          <span className="font-medium text-green-600">
                            ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{job.applications} applicants</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Link href={`/jobs/${job.id}`}>
                          <Button>Apply Now</Button>
                        </Link>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {job.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {sortedJobs.length === 0 && (
              <Card className="border-2">
                <CardContent className="pt-6 text-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">No jobs found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or clearing some filters
                  </p>
                  <Button variant="outline" onClick={() => {
                    setSearchQuery("");
                    setLocationQuery("");
                    setSelectedJobTypes([]);
                    setSelectedExperience("");
                    setSelectedSalaryRange("");
                  }}>
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Load More */}
          {sortedJobs.length > 0 && (
            <div className="text-center pt-6">
              <Button variant="outline" size="lg">
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
