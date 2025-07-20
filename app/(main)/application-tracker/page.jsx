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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  Building2,
  MapPin,
  Clock,
  FileText,
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  Target,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const ApplicationTracker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock application data
  const applications = [
    {
      id: 1,
      jobTitle: "Senior React Developer",
      company: "TCS",
      location: "Bangalore",
      appliedDate: "2025-07-15",
      status: "interview",
      salary: "₹15-20L",
      nextStep: "Technical Interview on July 22",
      notes: "Positive response from HR"
    },
    {
      id: 2,
      jobTitle: "Full Stack Developer",
      company: "Infosys",
      location: "Mumbai",
      appliedDate: "2025-07-12",
      status: "applied",
      salary: "₹12-18L",
      nextStep: "Waiting for response",
      notes: "Applied through company website"
    },
    {
      id: 3,
      jobTitle: "Frontend Developer",
      company: "Wipro",
      location: "Hyderabad",
      appliedDate: "2025-07-10",
      status: "offer",
      salary: "₹10-15L",
      nextStep: "Review offer letter",
      notes: "Received offer after final round"
    },
    {
      id: 4,
      jobTitle: "Backend Developer",
      company: "HCL",
      location: "Chennai",
      appliedDate: "2025-07-08",
      status: "rejected",
      salary: "₹8-12L",
      nextStep: "Apply to similar roles",
      notes: "Feedback: Need more experience in microservices"
    },
    {
      id: 5,
      jobTitle: "DevOps Engineer",
      company: "Cognizant",
      location: "Pune",
      appliedDate: "2025-07-05",
      status: "interview",
      salary: "₹14-20L",
      nextStep: "Final round scheduled",
      notes: "Technical round went well"
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      applied: { label: "Applied", color: "bg-blue-500", icon: Target },
      interview: { label: "Interview", color: "bg-yellow-500", icon: Clock },
      offer: { label: "Offer", color: "bg-green-500", icon: CheckCircle },
      rejected: { label: "Rejected", color: "bg-red-500", icon: XCircle }
    };

    const config = statusConfig[status] || statusConfig.applied;
    const IconComponent = config.icon;

    return (
      <Badge className={`${config.color} hover:${config.color}/80 text-white flex items-center gap-1`}>
        <IconComponent className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const getStats = () => {
    const total = applications.length;
    const applied = applications.filter(app => app.status === 'applied').length;
    const interviews = applications.filter(app => app.status === 'interview').length;
    const offers = applications.filter(app => app.status === 'offer').length;
    const rejected = applications.filter(app => app.status === 'rejected').length;
    
    return { total, applied, interviews, offers, rejected };
  };

  const stats = getStats();

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-4 md:px-6 pt-16">
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
            Application Tracker
          </h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-500" />
                Total Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-500" />
                Applied
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.applied}</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-500" />
                Interviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.interviews}</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Offers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.offers}</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500" />
                Rejected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.rejected}</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="offer">Offer</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4 pb-8">
          {filteredApplications.map((application) => (
            <Card key={application.id} className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardContent className="pt-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                      {getStatusBadge(application.status)}
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>{application.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{application.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Applied on {new Date(application.appliedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600 mb-2">
                      {application.salary}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Next Step: </span>
                      <span className="text-muted-foreground">{application.nextStep}</span>
                    </div>
                    <div>
                      <span className="font-medium">Notes: </span>
                      <span className="text-muted-foreground">{application.notes}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Applications Found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || statusFilter !== 'all' 
                  ? "Try adjusting your search or filter criteria"
                  : "Start tracking your job applications by adding your first application"
                }
              </p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Application
              </Button>
            </CardContent>
          </Card>
        )}
        </div>
      </div>
    </>
  );
};

export default ApplicationTracker;
