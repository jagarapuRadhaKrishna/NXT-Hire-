"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  FileText,
  CheckCircle,
  User,
  Briefcase,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Download,
} from "lucide-react";

export default function JobApplicationForm({ job, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Professional Information
    currentTitle: "",
    currentCompany: "",
    experience: "",
    salary: "",
    availability: "",
    workAuthorization: "",
    
    // Application Details
    coverLetter: "",
    portfolio: "",
    references: [],
    additionalDocuments: [],
    
    // Preferences
    relocation: false,
    remoteWork: false,
    travelWillingness: "",
    
    // Questionnaire
    whyInterested: "",
    greatestStrength: "",
    challenge: "",
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would submit the application
    console.log("Application submitted:", formData);
    alert("Application submitted successfully!");
    onClose?.();
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-between mb-6">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {step < currentStep ? <CheckCircle className="h-4 w-4" /> : step}
          </div>
          {step < 4 && (
            <div
              className={`flex-1 h-0.5 mx-2 ${
                step < currentStep ? 'bg-primary' : 'bg-muted'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Apply for {job?.title}
          </CardTitle>
          <p className="text-muted-foreground">{job?.company} • {job?.location}</p>
        </CardHeader>
        <CardContent>
          <StepIndicator />
          <div className="flex items-center justify-between text-sm">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="mt-2" />
        </CardContent>
      </Card>

      {/* Form Steps */}
      <Card className="border-2">
        <CardContent className="pt-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Personal Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="Enter your state"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Professional Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Professional Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentTitle">Current Job Title</Label>
                  <Input
                    id="currentTitle"
                    value={formData.currentTitle}
                    onChange={(e) => handleInputChange('currentTitle', e.target.value)}
                    placeholder="Your current position"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentCompany">Current Company</Label>
                  <Input
                    id="currentCompany"
                    value={formData.currentCompany}
                    onChange={(e) => handleInputChange('currentCompany', e.target.value)}
                    placeholder="Your current employer"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => handleInputChange('experience', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-5">2-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Expected Salary</Label>
                  <Input
                    id="salary"
                    value={formData.salary}
                    onChange={(e) => handleInputChange('salary', e.target.value)}
                    placeholder="e.g., $80,000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) => handleInputChange('availability', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="When can you start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                      <SelectItem value="1-month">1 month</SelectItem>
                      <SelectItem value="negotiable">Negotiable</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workAuth">Work Authorization *</Label>
                  <RadioGroup
                    value={formData.workAuthorization}
                    onValueChange={(value) => handleInputChange('workAuthorization', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="citizen" id="citizen" />
                      <Label htmlFor="citizen">US Citizen</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="permanent" id="permanent" />
                      <Label htmlFor="permanent">Permanent Resident</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="visa" id="visa" />
                      <Label htmlFor="visa">Work Visa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sponsorship" id="sponsorship" />
                      <Label htmlFor="sponsorship">Need Sponsorship</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-3">
                <Label>Resume/CV *</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your resume or click to browse
                  </p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Supported formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Application Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Application Details</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    placeholder="Tell us why you're interested in this position..."
                    rows={6}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio/Website URL</Label>
                  <Input
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                {/* Preferences */}
                <div className="space-y-4 pt-4 border-t">
                  <h4 className="font-medium">Work Preferences</h4>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="relocation"
                      checked={formData.relocation}
                      onCheckedChange={(checked) => handleInputChange('relocation', checked)}
                    />
                    <Label htmlFor="relocation">Willing to relocate</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remoteWork"
                      checked={formData.remoteWork}
                      onCheckedChange={(checked) => handleInputChange('remoteWork', checked)}
                    />
                    <Label htmlFor="remoteWork">Open to remote work</Label>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="travel">Travel Requirements</Label>
                    <Select
                      value={formData.travelWillingness}
                      onValueChange={(value) => handleInputChange('travelWillingness', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select travel preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No travel</SelectItem>
                        <SelectItem value="minimal">Minimal (0-25%)</SelectItem>
                        <SelectItem value="moderate">Moderate (25-50%)</SelectItem>
                        <SelectItem value="extensive">Extensive (50%+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review and Submit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Review & Submit</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Application Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Name:</span>
                      <span className="ml-2">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>
                      <span className="ml-2">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="ml-2">{formData.experience} years</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Expected Salary:</span>
                      <span className="ml-2">{formData.salary || 'Not specified'}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Required Documents</h4>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Resume/CV uploaded</span>
                  </div>
                </div>

                <div className="p-4 border border-orange-200 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    By submitting this application, you confirm that all information provided is accurate 
                    and complete. You also consent to the processing of your personal data for recruitment purposes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={handleNext} className="gap-2">
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="gap-2">
                Submit Application
                <CheckCircle className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
