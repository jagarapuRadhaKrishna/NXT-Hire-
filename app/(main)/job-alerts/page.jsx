"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Bell,
  Plus,
  Search,
  MapPin,
  DollarSign,
  Calendar,
  Settings,
  Trash2,
  Edit,
  CheckCircle,
  Clock,
  Building2,
} from "lucide-react";
import Link from "next/link";

const JobAlerts = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [alertData, setAlertData] = useState({
    jobTitle: "",
    location: "",
    salaryMin: "",
    salaryMax: "",
    jobType: "",
    frequency: "daily"
  });

  // Mock job alerts data
  const jobAlerts = [
    {
      id: 1,
      title: "React Developer",
      location: "Bangalore",
      salaryRange: "₹15-25L",
      frequency: "Daily",
      status: "Active",
      created: "2 days ago",
      matches: 12
    },
    {
      id: 2,
      title: "Full Stack Developer",
      location: "Mumbai",
      salaryRange: "₹12-20L",
      frequency: "Weekly",
      status: "Active",
      created: "1 week ago",
      matches: 8
    },
    {
      id: 3,
      title: "Frontend Developer",
      location: "Hyderabad",
      salaryRange: "₹10-18L",
      frequency: "Daily",
      status: "Paused",
      created: "3 days ago",
      matches: 5
    }
  ];

  const recentMatches = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TCS",
      location: "Bangalore",
      salary: "₹18-24L",
      posted: "2 hours ago",
      match: 92
    },
    {
      id: 2,
      title: "React.js Developer",
      company: "Infosys",
      location: "Bangalore",
      salary: "₹15-22L",
      posted: "4 hours ago",
      match: 88
    }
  ];

  const handleCreateAlert = () => {
    console.log("Creating alert:", alertData);
    setShowCreateForm(false);
    setAlertData({
      jobTitle: "",
      location: "",
      salaryMin: "",
      salaryMax: "",
      jobType: "",
      frequency: "daily"
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Paused": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
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
                Job Alerts
              </h1>
              <p className="text-muted-foreground">
                Set up personalized job alerts and never miss opportunities
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 text-blue-500" />
                    <div className="ml-2">
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-xs text-muted-foreground">Active Alerts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <Search className="h-4 w-4 text-green-500" />
                    <div className="ml-2">
                      <p className="text-2xl font-bold">25</p>
                      <p className="text-xs text-muted-foreground">Total Matches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <div className="ml-2">
                      <p className="text-2xl font-bold">5</p>
                      <p className="text-xs text-muted-foreground">Today's Matches</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <div className="ml-2">
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-xs text-muted-foreground">Applied</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Create Alert Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">My Job Alerts</h2>
              <Button onClick={() => setShowCreateForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Alert
              </Button>
            </div>

            {/* Create Alert Form */}
            {showCreateForm && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Create New Job Alert</CardTitle>
                  <CardDescription>
                    Set up criteria for your ideal job and get notified when matches are found
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        placeholder="e.g. React Developer"
                        value={alertData.jobTitle}
                        onChange={(e) => setAlertData({...alertData, jobTitle: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="e.g. Bangalore"
                        value={alertData.location}
                        onChange={(e) => setAlertData({...alertData, location: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="salaryMin">Min Salary (₹L)</Label>
                      <Input
                        id="salaryMin"
                        placeholder="15"
                        value={alertData.salaryMin}
                        onChange={(e) => setAlertData({...alertData, salaryMin: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="salaryMax">Max Salary (₹L)</Label>
                      <Input
                        id="salaryMax"
                        placeholder="25"
                        value={alertData.salaryMax}
                        onChange={(e) => setAlertData({...alertData, salaryMax: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="frequency">Alert Frequency</Label>
                      <Select value={alertData.frequency} onValueChange={(value) => setAlertData({...alertData, frequency: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="instant">Instant</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button onClick={handleCreateAlert}>Create Alert</Button>
                    <Button variant="outline" onClick={() => setShowCreateForm(false)}>Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Job Alerts List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Your Alerts</h3>
                <div className="space-y-4">
                  {jobAlerts.map((alert) => (
                    <Card key={alert.id}>
                      <CardContent className="pt-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{alert.title}</h4>
                              <Badge className={getStatusColor(alert.status)}>
                                {alert.status}
                              </Badge>
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {alert.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />
                                {alert.salaryRange}
                              </div>
                              <div className="flex items-center gap-1">
                                <Bell className="h-3 w-3" />
                                {alert.frequency} • {alert.matches} matches
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Matches</h3>
                <div className="space-y-4">
                  {recentMatches.map((job) => (
                    <Card key={job.id}>
                      <CardContent className="pt-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{job.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
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
                          <div className="text-right">
                            <Badge className="bg-green-100 text-green-800 mb-2">
                              {job.match}% match
                            </Badge>
                            <Button size="sm" className="w-full">
                              Apply
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobAlerts;
