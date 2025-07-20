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
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Brain,
  Target,
  Users,
  Briefcase,
  DollarSign,
  Award,
  BookOpen,
  BarChart3,
  PieChart,
  Activity,
  Star,
  Lightbulb,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
} from "recharts";

const CareerInsights = () => {
  // Mock data for career insights
  const marketTrends = [
    { month: "Jan", demand: 85, salary: 18 },
    { month: "Feb", demand: 88, salary: 19 },
    { month: "Mar", demand: 90, salary: 20 },
    { month: "Apr", demand: 87, salary: 19.5 },
    { month: "May", demand: 92, salary: 21 },
    { month: "Jun", demand: 95, salary: 22 },
    { month: "Jul", demand: 98, salary: 23 }
  ];

  const skillDemand = [
    { skill: "React", demand: 95, growth: 12 },
    { skill: "Node.js", demand: 88, growth: 8 },
    { skill: "Python", demand: 92, growth: 15 },
    { skill: "AWS", demand: 85, growth: 18 },
    { skill: "TypeScript", demand: 78, growth: 25 },
    { skill: "Docker", demand: 82, growth: 20 }
  ];

  const industryData = [
    { name: "Technology", value: 35, color: "#3B82F6" },
    { name: "Healthcare", value: 20, color: "#10B981" },
    { name: "Finance", value: 18, color: "#8B5CF6" },
    { name: "Education", value: 12, color: "#F59E0B" },
    { name: "Others", value: 15, color: "#EF4444" }
  ];

  const careerRecommendations = [
    {
      title: "Skill Development",
      description: "Focus on TypeScript and AWS to increase your market value",
      priority: "high",
      impact: "25% salary increase potential",
      timeline: "3-6 months",
      icon: <BookOpen className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Industry Transition",
      description: "Consider fintech roles - 40% more opportunities",
      priority: "medium",
      impact: "Expanded job market",
      timeline: "6-12 months",
      icon: <TrendingUp className="h-5 w-5 text-green-600" />
    },
    {
      title: "Leadership Skills",
      description: "Develop team leadership for senior roles",
      priority: "medium",
      impact: "Career advancement",
      timeline: "12+ months",
      icon: <Users className="h-5 w-5 text-purple-600" />
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <>
      <div className="grid-background"></div>
      <div className="min-h-screen relative">
        {/* Header Section */}
        <section className="w-full bg-background/50 pt-16">
          <div className="container mx-auto px-4 max-w-full">
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
                Career Insights
              </h1>
              <p className="text-muted-foreground">
                Data-driven insights to accelerate your career growth
              </p>
            </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          <Card className="border hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-8 w-8 text-green-500" />
                Market Demand
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">98%</div>
              <p className="text-xs text-gray-500">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="border hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="h-8 w-8 text-purple-500" />
                Avg. Salary Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">₹23L</div>
              <p className="text-xs text-gray-500">+15% YoY growth</p>
            </CardContent>
          </Card>
          
          <Card className="border hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Briefcase className="h-8 w-8 text-blue-500" />
                Job Openings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">12.5K</div>
              <p className="text-xs text-gray-500">Active positions</p>
            </CardContent>
          </Card>
          
          <Card className="border hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-8 w-8 text-orange-500" />
                Competition Index
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">7.2</div>
              <p className="text-xs text-gray-500">Candidates per role</p>
            </CardContent>
          </Card>
        </div>

        {/* Market Trends Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Market Trends
            </CardTitle>
            <CardDescription>
              Job demand and salary trends over the last 7 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #ccc', 
                      borderRadius: '8px' 
                    }}
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="demand" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    name="Demand %" 
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="salary" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    name="Avg Salary (₹L)" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Skills Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                In-Demand Skills
              </CardTitle>
              <CardDescription>
                Skills with highest market demand and growth potential
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillDemand.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.skill}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {skill.demand}% demand
                        </Badge>
                        <Badge className="bg-green-500 text-white text-xs">
                          +{skill.growth}% growth
                        </Badge>
                      </div>
                    </div>
                    <Progress value={skill.demand} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Industry Distribution
              </CardTitle>
              <CardDescription>
                Job opportunities across different industries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <RechartsPieChart
                      data={industryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {industryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </RechartsPieChart>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {industryData.map((industry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: industry.color }}
                    />
                    <span className="text-sm">{industry.name} ({industry.value}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Personalized Career Recommendations
            </CardTitle>
            <CardDescription>
              AI-powered suggestions based on your profile and market trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {careerRecommendations.map((rec, index) => (
                <Card key={index} className="border">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2">
                        {rec.icon}
                        <Badge className={`${getPriorityColor(rec.priority)} text-white`}>
                          {rec.priority}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {rec.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {rec.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-blue-500" />
                            <span className="font-medium">Impact:</span> {rec.impact}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-green-500" />
                            <span className="font-medium">Timeline:</span> {rec.timeline}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Recommended Learning Resources
            </CardTitle>
            <CardDescription>
              Curated courses and certifications to boost your career
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  title: "Advanced React Patterns",
                  provider: "Tech Academy",
                  rating: 4.8,
                  duration: "12 hours",
                  level: "Advanced",
                  url: "https://techacademy.com/react-patterns"
                },
                {
                  title: "AWS Cloud Practitioner",
                  provider: "Amazon",
                  rating: 4.9,
                  duration: "20 hours",
                  level: "Beginner",
                  url: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
                },
                {
                  title: "TypeScript Masterclass",
                  provider: "CodeCamp",
                  rating: 4.7,
                  duration: "15 hours",
                  level: "Intermediate",
                  url: "https://codecamp.com/typescript-masterclass"
                }
              ].map((course, index) => (
                <Card key={index} className="border hover:shadow-lg transition-all">
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {course.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {course.provider}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {course.rating}
                        </div>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <BookOpen className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <Button 
                        className="w-full" 
                        size="sm"
                        onClick={() => window.open(course.url, '_blank')}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerInsights;
