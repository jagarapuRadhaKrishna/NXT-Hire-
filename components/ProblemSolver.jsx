"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Play,
  Save,
  CheckCircle,
  AlertTriangle,
  Clock,
  Target,
  Code,
  Lightbulb,
  FileText,
  Loader2
} from "lucide-react";
import Link from "next/link";

const ProblemSolver = ({ problemId, onClose, onProblemSolved }) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [problem, setProblem] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  // Sample problems data - in real app this would come from API
  const problems = {
    1: {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]",
          explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
        }
      ],
      constraints: [
        "2 <= nums.length <= 10^4",
        "-10^9 <= nums[i] <= 10^9",
        "-10^9 <= target <= 10^9",
        "Only one valid answer exists."
      ],
      starterCode: {
        javascript: `function twoSum(nums, target) {
    // Write your solution here
    
}`,
        python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
        java: `public int[] twoSum(int[] nums, int target) {
    // Write your solution here
    return new int[]{};
}`
      },
      testCases: [
        { input: "[2,7,11,15], 9", expected: "[0,1]" },
        { input: "[3,2,4], 6", expected: "[1,2]" },
        { input: "[3,3], 6", expected: "[0,1]" }
      ]
    },
    2: {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
      examples: [
        {
          input: "l1 = [2,4,3], l2 = [5,6,4]",
          output: "[7,0,8]",
          explanation: "342 + 465 = 807."
        }
      ],
      constraints: [
        "The number of nodes in each linked list is in the range [1, 100].",
        "0 <= Node.val <= 9"
      ],
      starterCode: {
        javascript: `function addTwoNumbers(l1, l2) {
    // Write your solution here
    
}`,
        python: `def add_two_numbers(l1, l2):
    # Write your solution here
    pass`,
        java: `public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    // Write your solution here
    return null;
}`
      },
      testCases: [
        { input: "[2,4,3], [5,6,4]", expected: "[7,0,8]" },
        { input: "[0], [0]", expected: "[0]" },
        { input: "[9,9,9,9,9,9,9], [9,9,9,9]", expected: "[8,9,9,9,0,0,0,1]" }
      ]
    },
    3: {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      description: "Given a string s, find the length of the longest substring without repeating characters.",
      examples: [
        {
          input: 's = "abcabcbb"',
          output: "3",
          explanation: 'The answer is "abc", with the length of 3.'
        },
        {
          input: 's = "bbbbb"',
          output: "1",
          explanation: 'The answer is "b", with the length of 1.'
        }
      ],
      constraints: [
        "0 <= s.length <= 5 * 10^4",
        "s consists of English letters, digits, symbols and spaces."
      ],
      starterCode: {
        javascript: `function lengthOfLongestSubstring(s) {
    // Write your solution here
    
}`,
        python: `def length_of_longest_substring(s):
    # Write your solution here
    pass`,
        java: `public int lengthOfLongestSubstring(String s) {
    // Write your solution here
    return 0;
}`
      },
      testCases: [
        { input: '"abcabcbb"', expected: "3" },
        { input: '"bbbbb"', expected: "1" },
        { input: '"pwwkew"', expected: "3" }
      ]
    }
  };

  useEffect(() => {
    if (problemId && problems[problemId]) {
      const currentProblem = problems[problemId];
      setProblem(currentProblem);
      setCode(currentProblem.starterCode[language] || "// Write your solution here");
    }
  }, [problemId, language]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    if (problem && problem.starterCode[newLanguage]) {
      setCode(problem.starterCode[newLanguage]);
    }
  };

  const runCode = async () => {
    setIsRunning(true);
    
    // Simulate running code
    setTimeout(() => {
      setTestResults({
        passed: 2,
        total: 3,
        cases: [
          { input: problem.testCases[0].input, expected: problem.testCases[0].expected, actual: problem.testCases[0].expected, passed: true },
          { input: problem.testCases[1].input, expected: problem.testCases[1].expected, actual: problem.testCases[1].expected, passed: true },
          { input: problem.testCases[2].input, expected: problem.testCases[2].expected, actual: "Wrong Answer", passed: false }
        ]
      });
      setIsRunning(false);
    }, 2000);
  };

  const submitSolution = async () => {
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      const submission = {
        id: Date.now(),
        timestamp: new Date(),
        language: language,
        code: code,
        status: "Accepted",
        runtime: Math.floor(Math.random() * 100) + 50 + "ms",
        memory: Math.floor(Math.random() * 10) + 40 + "MB",
        testsPassed: problem.testCases.length,
        totalTests: problem.testCases.length
      };
      
      setSubmissions([submission, ...submissions]);
      
      // Update user progress via API
      updateUserProgress();
      
      setIsSubmitting(false);
      
      // Show success and call parent callback
      onProblemSolved && onProblemSolved(problem);
    }, 3000);
  };

  const updateUserProgress = async () => {
    try {
      const response = await fetch('/api/analytics/dsa/update-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemId: problem.id,
          title: problem.title,
          difficulty: problem.difficulty,
          topic: "Arrays", // This would be determined based on problem
          solution: code,
          language: language,
          timeComplexity: "O(n)", // This would be analyzed
          spaceComplexity: "O(1)" // This would be analyzed
        })
      });

      if (response.ok) {
        console.log("Progress updated successfully");
      }
    } catch (error) {
      console.error("Failed to update progress:", error);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100 dark:bg-green-900/20";
      case "Medium": return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20";
      case "Hard": return "text-red-600 bg-red-100 dark:bg-red-900/20";
      default: return "text-gray-600 bg-gray-100 dark:bg-gray-900/20";
    }
  };

  if (!problem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Problem not found</h1>
            <Button onClick={onClose} className="mt-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Problems
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={onClose}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{problem.title}</h1>
              <Badge className={getDifficultyColor(problem.difficulty)}>
                {problem.difficulty}
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Problem Description */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Problem Description
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-[calc(100vh-300px)]">
              <div className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300">{problem.description}</p>

                <div>
                  <h3 className="font-semibold mb-3">Examples:</h3>
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-3">
                      <div className="space-y-2">
                        <div><strong>Input:</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{example.input}</code></div>
                        <div><strong>Output:</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{example.output}</code></div>
                        {example.explanation && <div><strong>Explanation:</strong> {example.explanation}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Constraints:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-400">{constraint}</li>
                    ))}
                  </ul>
                </div>

                {/* Test Results */}
                {testResults && (
                  <div>
                    <h3 className="font-semibold mb-3">Test Results:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${testResults.passed === testResults.total ? 'text-green-600' : 'text-red-600'}`}>
                          {testResults.passed}/{testResults.total} tests passed
                        </span>
                      </div>
                      {testResults.cases.map((testCase, index) => (
                        <div key={index} className={`p-3 rounded-lg border ${testCase.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                          <div className="flex items-center gap-2 mb-2">
                            {testCase.passed ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <AlertTriangle className="h-4 w-4 text-red-600" />
                            )}
                            <span className="font-medium">Test Case {index + 1}</span>
                          </div>
                          <div className="text-sm space-y-1">
                            <div><strong>Input:</strong> {testCase.input}</div>
                            <div><strong>Expected:</strong> {testCase.expected}</div>
                            <div><strong>Actual:</strong> {testCase.actual}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Code Editor */}
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Code Editor
                </CardTitle>
                <div className="flex items-center gap-2">
                  <select
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="px-3 py-1 border rounded-md text-sm"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex flex-col h-[calc(100vh-400px)]">
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 font-mono text-sm border-0 rounded-none resize-none focus:ring-0"
                placeholder="Write your solution here..."
              />
              
              <div className="p-4 border-t bg-gray-50 dark:bg-gray-800">
                <div className="flex gap-2">
                  <Button
                    onClick={runCode}
                    disabled={isRunning}
                    variant="outline"
                    className="flex-1"
                  >
                    {isRunning ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {isRunning ? "Running..." : "Run Code"}
                  </Button>
                  
                  <Button
                    onClick={submitSolution}
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <CheckCircle className="h-4 w-4 mr-2" />
                    )}
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions History */}
        {submissions.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {submissions.map((submission) => (
                  <div key={submission.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-medium">{submission.status}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {submission.timestamp.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div>Runtime: {submission.runtime}</div>
                      <div>Memory: {submission.memory}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProblemSolver;
