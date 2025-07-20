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
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeft,
  Bell,
  Plus,
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Edit,
  Trash2,
  Mail,
  Smartphone,
  Settings,
  BellRing,
  AlertCircle,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const JobAlerts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock alert data
  const jobAlerts = [
    {
      id: 1,
      name: "Senior React Developer",
      keywords: ["React", "JavaScript", "Frontend"],
      location: "Bangalore",
      salaryMin: "₹15L",
      salaryMax: "₹25L",
      experience: "5+ years",
      frequency: "daily",
      isActive: true,
      matchCount: 12,
      lastNotified: "2025-07-19",
      createdDate: "2025-07-01"
    },
    {
      id: 2,
      name: "Full Stack Developer",
      keywords: ["Node.js", "React", "MongoDB"],
      location: "Mumbai",
      salaryMin: "₹12L",
      salaryMax: "₹20L",
      experience: "3+ years",
      frequency: "weekly",
      isActive: true,
      matchCount: 8,
      lastNotified: "2025-07-17",
      createdDate: "2025-06-28"
    },
    {
      id: 3,
      name: "Backend Engineer",
      keywords: ["Python", "Django", "API"],
      location: "Hyderabad",
      salaryMin: "₹10L",
      salaryMax: "₹18L",
      experience: "2+ years",
      frequency: "immediate",
      isActive: false,
      matchCount: 0,
      lastNotified: "2025-07-10",
      createdDate: "2025-06-20"
    },
    {
      id: 4,
      name: "DevOps Engineer",
      keywords: ["AWS", "Docker", "Kubernetes"],
      location: "Chennai",
      salaryMin: "₹14L",
      salaryMax: "₹22L",
      experience: "4+ years",
      frequency: "daily",
      isActive: true,
      matchCount: 5,
      lastNotified: "2025-07-19",
      createdDate: "2025-07-05"
    }
  ];

  const getFrequencyBadge = (frequency) => {
    const config = {
      immediate: { label: "Immediate", color: "bg-red-500" },
      daily: { label: "Daily", color: "bg-blue-500" },
      weekly: { label: "Weekly", color: "bg-green-500" }
    };
    
    return (
      <Badge className={`${config[frequency].color} text-white`}>
        {config[frequency].label}
      </Badge>
    );
  };

  const getStats = () => {
    const total = jobAlerts.length;
    const active = jobAlerts.filter(alert => alert.isActive).length;
    const totalMatches = jobAlerts.reduce((sum, alert) => sum + alert.matchCount, 0);
    const recentMatches = jobAlerts.filter(alert => 
      new Date(alert.lastNotified) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    ).length;
    
    return { total, active, totalMatches, recentMatches };
  };

  const stats = getStats();

  const filteredAlerts = jobAlerts.filter(alert =>
    alert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        {/* Header Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Link href="/jobs">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Jobs
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Job Alerts
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Get notified when new jobs match your criteria
              </p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Alert
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Bell className="h-4 w-4 text-blue-500" />
                Total Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.active}</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                Total Matches
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.totalMatches}</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <BellRing className="h-4 w-4 text-yellow-500" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.recentMatches}</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by alert name or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Notification Preferences
            </CardTitle>
            <CardDescription>
              Configure how you receive job alerts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <Label>Email Notifications</Label>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    <Label>Push Notifications</Label>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BellRing className="h-4 w-4" />
                    <Label>Weekly Summary</Label>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <Label>Market Insights</Label>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Alerts List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Your Job Alerts ({filteredAlerts.length})
          </h2>

          {filteredAlerts.map((alert) => (
            <Card key={alert.id} className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {alert.name}
                          </h3>
                          {getFrequencyBadge(alert.frequency)}
                          <Badge variant={alert.isActive ? "default" : "secondary"}>
                            {alert.isActive ? "Active" : "Paused"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mt-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {alert.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {alert.experience}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {alert.salaryMin} - {alert.salaryMax}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">
                          {alert.matchCount}
                        </div>
                        <div className="text-xs text-gray-500">matches</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium">Keywords:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {alert.keywords.map((keyword, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div>
                          <span className="font-medium">Last notified:</span> {new Date(alert.lastNotified).toLocaleDateString()}
                        </div>
                        <div>
                          <span className="font-medium">Created:</span> {new Date(alert.createdDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Switch 
                      checked={alert.isActive}
                      className="ml-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No job alerts found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {searchTerm 
                  ? "Try adjusting your search terms"
                  : "Create your first job alert to get notified of relevant opportunities"
                }
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Alert
              </Button>
            </CardContent>
          </Card>
        )}
          </div>
        </section>
      </div>
    </>
  );
};

export default JobAlerts;
