import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Search,
  Building2,
  Star,
  Users,
  Briefcase,
  TrendingUp,
  MapPin,
  Globe,
  Filter,
  Heart,
  ExternalLink,
} from "lucide-react";
import { featuredCompanies } from "@/data/jobs";

export default function CompaniesPage() {
  // Extended companies list for demonstration
  const allCompanies = [
    ...featuredCompanies,
    {
      id: 22,
      name: "Stripe",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png",
      description: "Online payment processing platform",
      industry: "Fintech",
      size: "1,000+",
      openJobs: 45,
      rating: 4.8,
      verified: true,
    },
    {
      id: 23,
      name: "Airbnb",
      logo: "https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png",
      description: "Online marketplace for lodging and tourism",
      industry: "Travel",
      size: "1,000+",
      openJobs: 34,
      rating: 4.4,
      verified: true,
    },
  ];

  const industries = [
    { name: "Technology", count: 156, color: "bg-blue-500" },
    { name: "Healthcare", count: 89, color: "bg-green-500" },
    { name: "Finance", count: 67, color: "bg-purple-500" },
    { name: "Education", count: 45, color: "bg-orange-500" },
    { name: "Entertainment", count: 34, color: "bg-pink-500" },
    { name: "Retail", count: 78, color: "bg-yellow-500" },
  ];

  const companyStats = {
    totalCompanies: allCompanies.length,
    hiringNow: allCompanies.filter(c => c.openJobs > 0).length,
    totalJobs: allCompanies.reduce((sum, c) => sum + c.openJobs, 0),
    avgRating: (allCompanies.reduce((sum, c) => sum + c.rating, 0) / allCompanies.length).toFixed(1),
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
          <h1 className="text-6xl font-bold gradient-title">Companies</h1>
          <p className="text-muted-foreground">
            Discover top companies and explore career opportunities
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-primary">{companyStats.totalCompanies}</div>
            <p className="text-xs text-muted-foreground">Total Companies</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-green-500">{companyStats.hiringNow}</div>
            <p className="text-xs text-muted-foreground">Hiring Now</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-blue-500">{companyStats.totalJobs}</div>
            <p className="text-xs text-muted-foreground">Open Positions</p>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardContent className="pt-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">{companyStats.avgRating}</div>
            <p className="text-xs text-muted-foreground">Avg Rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="border-2">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search companies..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="gap-2 h-12">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Industry Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Browse by Industry</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors cursor-pointer">
              <CardContent className="pt-4 text-center">
                <div className={`w-12 h-12 rounded-lg ${industry.color} bg-opacity-10 flex items-center justify-center mx-auto mb-3`}>
                  <Building2 className={`h-6 w-6 ${industry.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{industry.name}</h3>
                <p className="text-xs text-muted-foreground">{industry.count} companies</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Companies */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Companies</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCompanies.map((company) => (
            <Link key={company.id} href={`/companies/${company.id}`}>
              <Card className="border-2 hover:border-primary transition-all duration-300 cursor-pointer group h-full">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Company Header */}
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform">
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
                          <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                            {company.name}
                          </h3>
                          {company.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {company.description}
                        </p>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="font-medium">{company.rating}</span>
                          <span className="text-muted-foreground">• {company.industry}</span>
                        </div>
                      </div>
                    </div>

                    {/* Company Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-sm font-medium">{company.size}</div>
                        <p className="text-xs text-muted-foreground">Employees</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-sm font-medium text-green-600">{company.openJobs}</div>
                        <p className="text-xs text-muted-foreground">Open Jobs</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Company
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Top Hiring Companies */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Top Hiring This Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allCompanies
            .sort((a, b) => b.openJobs - a.openJobs)
            .slice(0, 6)
            .map((company, index) => (
              <Link key={company.id} href={`/companies/${company.id}`}>
                <Card className="border hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center">
                        {company.logo ? (
                          <img 
                            src={company.logo} 
                            alt={`${company.name} logo`}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <Building2 className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold truncate">{company.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            #{index + 1}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>{company.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-green-600 font-medium">
                            <TrendingUp className="h-3 w-3" />
                            <span>{company.openJobs} jobs</span>
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

      {/* Company Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 hover:border-primary transition-colors">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Company Reviews</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Read employee reviews and company ratings to make informed decisions
            </p>
            <Button variant="outline" className="w-full">
              Read Reviews
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary transition-colors">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Salary Insights</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Compare salaries and compensation packages across companies
            </p>
            <Button variant="outline" className="w-full">
              View Salaries
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 hover:border-primary transition-colors">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Company Culture</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn about company values, culture, and work environment
            </p>
            <Button variant="outline" className="w-full">
              Explore Culture
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
