"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Trophy,
  Target,
  Calendar,
  Clock,
  Star,
  TrendingUp,
  ExternalLink,
  Plus,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

// Mock Microsoft Learn data
const learningStats = {
  totalPoints: 2450,
  rank: "Intermediate",
  streakDays: 15,
  completedModules: 34,
  totalHours: 67,
  achievements: 8,
}

const currentLearningPaths = [
  {
    id: 1,
    title: "Azure Administrator Associate",
    code: "AZ-104",
    progress: 65,
    modules: 12,
    completedModules: 8,
    estimatedHours: 24,
    completedHours: 16,
    lastActivity: "2024-01-20",
    difficulty: "Intermediate",
    category: "Azure",
  },
  {
    id: 2,
    title: "Microsoft 365 Security Administrator",
    code: "MS-500",
    progress: 30,
    modules: 10,
    completedModules: 3,
    estimatedHours: 20,
    completedHours: 6,
    lastActivity: "2024-01-18",
    difficulty: "Advanced",
    category: "Security",
  },
  {
    id: 3,
    title: "Power Platform Fundamentals",
    code: "PL-900",
    progress: 85,
    modules: 8,
    completedModules: 7,
    estimatedHours: 12,
    completedHours: 10,
    lastActivity: "2024-01-22",
    difficulty: "Beginner",
    category: "Power Platform",
  },
]

const completedModules = [
  {
    id: 1,
    title: "Introduction to Azure Virtual Machines",
    completedDate: "2024-01-20",
    duration: "45 min",
    points: 100,
    category: "Azure",
  },
  {
    id: 2,
    title: "Configure Azure Active Directory",
    completedDate: "2024-01-19",
    duration: "60 min",
    points: 150,
    category: "Identity",
  },
  {
    id: 3,
    title: "Implement Azure Storage",
    completedDate: "2024-01-18",
    duration: "50 min",
    points: 120,
    category: "Storage",
  },
]

const achievements = [
  {
    id: 1,
    title: "Azure Explorer",
    description: "Completed 10 Azure modules",
    earnedDate: "2024-01-15",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Learning Streak",
    description: "15 consecutive days of learning",
    earnedDate: "2024-01-20",
    icon: "🔥",
  },
  {
    id: 3,
    title: "Security Specialist",
    description: "Completed security learning path",
    earnedDate: "2024-01-10",
    icon: "🛡️",
  },
]

const weeklyProgress = [
  { week: "Week 1", hours: 8, modules: 3 },
  { week: "Week 2", hours: 12, modules: 5 },
  { week: "Week 3", hours: 10, modules: 4 },
  { week: "Week 4", hours: 15, modules: 6 },
]

export default function MicrosoftLearnPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Max Dorman
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
                Blog
              </Link>
              <Link href="/portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">
                Portfolio
              </Link>
              <Link href="/certificates" className="text-slate-600 hover:text-slate-900 transition-colors">
                Certificates
              </Link>
              <Link href="/admin" className="text-slate-600 hover:text-slate-900 transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Microsoft Learn Progress</h1>
            <p className="text-xl text-slate-600 mb-8">
              Track my learning journey and skill development on Microsoft Learn
            </p>
            <Button asChild>
              <Link href="/admin">
                <Plus className="mr-2 h-4 w-4" />
                Update Progress
              </Link>
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="paths">Learning Paths</TabsTrigger>
              <TabsTrigger value="modules">Recent Modules</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{learningStats.totalPoints}</p>
                    <p className="text-sm text-slate-500">Total Points</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{learningStats.rank}</p>
                    <p className="text-sm text-slate-500">Current Rank</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{learningStats.streakDays}</p>
                    <p className="text-sm text-slate-500">Day Streak</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{learningStats.completedModules}</p>
                    <p className="text-sm text-slate-500">Modules Done</p>
                  </CardContent>
                </Card>
              </div>

              {/* Weekly Progress Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Weekly Learning Progress
                  </CardTitle>
                  <CardDescription>Hours spent and modules completed over the last 4 weeks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyProgress.map((week, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <span className="text-sm font-medium w-16">{week.week}</span>
                          <div className="flex-1">
                            <Progress value={(week.hours / 20) * 100} className="h-2" />
                          </div>
                          <span className="text-sm text-slate-500 w-20">
                            {week.hours}h • {week.modules} modules
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Focus */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Focus</CardTitle>
                  <CardDescription>Learning paths currently in progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentLearningPaths.slice(0, 2).map((path) => (
                      <div key={path.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{path.title}</h4>
                          <div className="flex items-center gap-4 mt-2">
                            <Progress value={path.progress} className="flex-1 h-2" />
                            <span className="text-sm text-slate-500">{path.progress}%</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="ml-4">
                          {path.category}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Learning Paths Tab */}
            <TabsContent value="paths" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentLearningPaths.map((path) => (
                  <Card key={path.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{path.title}</CardTitle>
                          <CardDescription>{path.code}</CardDescription>
                        </div>
                        <Badge
                          variant={
                            path.difficulty === "Beginner"
                              ? "secondary"
                              : path.difficulty === "Intermediate"
                                ? "default"
                                : "destructive"
                          }
                        >
                          {path.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{path.progress}%</span>
                        </div>
                        <Progress value={path.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-slate-500">Modules</p>
                          <p className="font-medium">
                            {path.completedModules}/{path.modules}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500">Hours</p>
                          <p className="font-medium">
                            {path.completedHours}/{path.estimatedHours}h
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        Last activity: {new Date(path.lastActivity).toLocaleDateString()}
                      </div>

                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Continue Path
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Recent Modules Tab */}
            <TabsContent value="modules" className="space-y-6">
              <div className="space-y-4">
                {completedModules.map((module) => (
                  <Card key={module.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <CheckCircle2 className="h-6 w-6 text-green-500" />
                          <div>
                            <h4 className="font-medium">{module.title}</h4>
                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {new Date(module.completedDate).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {module.duration}
                              </div>
                              <Badge variant="outline">{module.category}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">+{module.points}</p>
                          <p className="text-sm text-slate-500">points</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{achievement.icon}</div>
                      <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                      <p className="text-slate-600 mb-4">{achievement.description}</p>
                      <div className="flex items-center justify-center gap-1 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        {new Date(achievement.earnedDate).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Achievement Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Next Achievements</CardTitle>
                  <CardDescription>Goals you're working towards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Cloud Expert 🌩️</h4>
                      <p className="text-sm text-slate-500">Complete 50 Azure modules</p>
                    </div>
                    <div className="text-right">
                      <Progress value={68} className="w-24 h-2 mb-1" />
                      <p className="text-sm text-slate-500">34/50</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Learning Marathon 🏃</h4>
                      <p className="text-sm text-slate-500">30-day learning streak</p>
                    </div>
                    <div className="text-right">
                      <Progress value={50} className="w-24 h-2 mb-1" />
                      <p className="text-sm text-slate-500">15/30</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
