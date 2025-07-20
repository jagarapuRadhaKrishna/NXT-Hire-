import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  MessageSquare,
  Building2,
  MapPin,
  DollarSign,
  TrendingUp,
  Filter,
  Search,
} from "lucide-react";

export default function ApplicationTrackerPage() {
  const applications = [
    {
      id: 1,
      jobTitle: "Senior Full Stack Developer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$140k - $180k",
      appliedDate: "2024-01-15",
      status: "interview",
      progress: 75,
      nextStep: "Technical Interview",
      nextStepDate: "2024-01-25",
      notes: "HR called for initial screening. Technical round scheduled.",
      interviewer: "John Smith",
      stages: [
        { name: "Applied", completed: true, date: "Jan 15" },
        { name: "Resume Review", completed: true, date: "Jan 17" },
        { name: "Phone Screen", completed: true, date: "Jan 20" },
        { name: "Technical Interview", completed: false, date: "Jan 25" },
        { name: "Final Interview", completed: false, date: "" },
        { name: "Offer", completed: false, date: "" },
      ]
    },
    {
      id: 2,
      jobTitle: "UX/UI Designer",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$90k - $130k",
      appliedDate: "2024-01-18",
      status: "pending",
      progress: 25,
      nextStep: "Waiting for Response",
      nextStepDate: "",
      notes: "Application submitted through company website.",
      stages: [
        { name: "Applied", completed: true, date: "Jan 18" },
        { name: "Resume Review", completed: false, date: "" },
        { name: "Portfolio Review", completed: false, date: "" },
        { name: "Design Challenge", completed: false, date: "" },
        { name: "Final Interview", completed: false, date: "" },
        { name: "Offer", completed: false, date: "" },
      ]
    },
    {
      id: 3,
      jobTitle: "Data Scientist",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$110k - $150k",
      appliedDate: "2024-01-12",
      status: "rejected",
      progress: 50,
      nextStep: "Application Closed",
      nextStepDate: "",
      notes: "Rejected after technical interview. Feedback: Need more ML experience.",
      stages: [
        { name: "Applied", completed: true, date: "Jan 12" },
        { name: "Resume Review", completed: true, date: "Jan 14" },
        { name: "Technical Interview", completed: true, date: "Jan 19" },
        { name: "Rejected", completed: true, date: "Jan 21" },
      ]
    },
    {
      id: 4,
      jobTitle: "Product Manager",
      company: "Meta",
      location: "Menlo Park, CA",
      salary: "$120k - $160k",
      appliedDate: "2024-01-20",
      status: "offer",
      progress: 100,
      nextStep: "Review Offer",
      nextStepDate: "2024-01-28",
      notes: "Offer received! Salary negotiation in progress.",
      stages: [
        { name: "Applied", completed: true, date: "Jan 20" },
        { name: "Resume Review", completed: true, date: "Jan 21" },
        { name: "Phone Screen", completed: true, date: "Jan 23" },
        { name: "Final Interview", completed: true, date: "Jan 26" },
        { name: "Offer", completed: true, date: "Jan 27" },
      ]
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "interview": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "offer": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "rejected": return "bg-red-500/10 text-red-600 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending": return <Clock className="h-4 w-4" />;
      case "interview": return <MessageSquare className="h-4 w-4" />;
      case "offer": return <CheckCircle className="h-4 w-4" />;
      case "rejected": return <AlertCircle className="h-4 w-4" />;
      default: return <Eye className="h-4 w-4" />;
    }
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === "pending").length,
    interview: applications.filter(app => app.status === "interview").length,
    offer: applications.filter(app => app.status === "offer").length,
    rejected: applications.filter(app => app.status === "rejected").length,
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
          <h1 className="text-6xl font-bold gradient-title">Application Tracker</h1>
          <p className="text-muted-foreground">
            Track and manage your job applications in one place
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-primary">{stats.total}</div>
            <p className="text-xs text-muted-foreground">Total Applications</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">{stats.pending}</div>
            <p className="text-xs text-muted-foreground">Pending Review</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-blue-500">{stats.interview}</div>
            <p className="text-xs text-muted-foreground">In Interview</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-green-500">{stats.offer}</div>
            <p className="text-xs text-muted-foreground">Offers Received</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-red-500">{stats.rejected}</div>
            <p className="text-xs text-muted-foreground">Not Selected</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="border-2">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((application) => (
          <Card key={application.id} className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* Application Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{application.jobTitle}</h3>
                      <Badge className={getStatusColor(application.status)}>
                        {getStatusIcon(application.status)}
                        <span className="ml-1 capitalize">{application.status}</span>
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{application.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{application.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{application.salary}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Progress and Timeline */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Application Progress</span>
                    <span>{application.progress}%</span>
                  </div>
                  <Progress value={application.progress} className="h-2" />
                  
                  <div className="flex flex-wrap gap-2">
                    {application.stages.map((stage, index) => (
                      <div key={index} className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                        stage.completed 
                          ? 'bg-green-500/10 text-green-600' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {stage.completed && <CheckCircle className="h-3 w-3" />}
                        <span>{stage.name}</span>
                        {stage.date && <span className="text-muted-foreground">({stage.date})</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Step and Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Next Step</h4>
                    <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                    {application.nextStepDate && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{application.nextStepDate}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Notes</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{application.notes}</p>
                  </div>
                </div>

                {/* Application Date */}
                <div className="flex items-center justify-between pt-2 border-t text-xs text-muted-foreground">
                  <span>Applied on {new Date(application.appliedDate).toLocaleDateString()}</span>
                  {application.interviewer && (
                    <span>Contact: {application.interviewer}</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 hover:border-primary transition-colors">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Find More Jobs</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Discover new opportunities that match your profile
            </p>
            <Link href="/jobs/search">
              <Button variant="outline" className="w-full">
                Search Jobs
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary transition-colors">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Schedule Interview</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Manage your interview calendar and reminders
            </p>
            <Button variant="outline" className="w-full">
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
