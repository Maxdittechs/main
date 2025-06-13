"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Award, ExternalLink, Search, Plus, Download, CheckCircle } from "lucide-react"
import Link from "next/link"

// Mock certificates data
const mockCertificates = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    dateEarned: "2024-01-15",
    expiryDate: "2027-01-15",
    status: "Active",
    credentialId: "ABC123456789",
    skills: ["Cloud Computing", "Azure Services", "Security", "Compliance"],
    type: "certification",
    verified: true,
  },
  {
    id: 2,
    title: "Microsoft 365 Fundamentals",
    code: "MS-900",
    issuer: "Microsoft",
    dateEarned: "2024-01-10",
    expiryDate: "2027-01-10",
    status: "Active",
    credentialId: "DEF987654321",
    skills: ["Microsoft 365", "Teams", "SharePoint", "Security"],
    type: "certification",
    verified: true,
  },
  {
    id: 3,
    title: "CompTIA A+ Core 1",
    code: "220-1101",
    issuer: "CompTIA",
    dateEarned: "2023-12-20",
    expiryDate: "2026-12-20",
    status: "Active",
    credentialId: "GHI456789123",
    skills: ["Hardware", "Networking", "Troubleshooting", "Security"],
    type: "certification",
    verified: true,
  },
  {
    id: 4,
    title: "Bachelor of Science in Information Technology",
    code: "BSc IT",
    issuer: "University of Edinburgh",
    dateEarned: "2023-06-15",
    expiryDate: null,
    status: "Completed",
    credentialId: "UOE2023IT789",
    skills: ["Software Development", "Database Management", "Network Administration", "Project Management"],
    type: "degree",
    verified: true,
  },
]

// Mock learning paths in progress
const learningPaths = [
  {
    id: 1,
    title: "Azure Administrator Associate",
    code: "AZ-104",
    progress: 65,
    estimatedCompletion: "2024-03-15",
    modules: 12,
    completedModules: 8,
  },
  {
    id: 2,
    title: "Microsoft 365 Security Administrator",
    code: "MS-500",
    progress: 30,
    estimatedCompletion: "2024-04-20",
    modules: 10,
    completedModules: 3,
  },
]

export default function CertificatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [certificates] = useState(mockCertificates)
  const [activeTab, setActiveTab] = useState("earned")

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
  )

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
              <Link href="/microsoft-learn" className="text-slate-600 hover:text-slate-900 transition-colors">
                MS Learn
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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Certificates & Qualifications</h1>
            <p className="text-xl text-slate-600 mb-8">
              Professional certifications, degrees, and continuous learning achievements
            </p>

            {/* Search and Add */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search certificates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button asChild>
                <Link href="/admin">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Certificate
                </Link>
              </Button>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-4 mb-8">
              <Button variant={activeTab === "earned" ? "default" : "outline"} onClick={() => setActiveTab("earned")}>
                Earned Certificates
              </Button>
              <Button
                variant={activeTab === "progress" ? "default" : "outline"}
                onClick={() => setActiveTab("progress")}
              >
                In Progress
              </Button>
            </div>
          </div>

          {/* Earned Certificates */}
          {activeTab === "earned" && (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredCertificates.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Award className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{cert.title}</CardTitle>
                          <CardDescription className="text-base">
                            {cert.code} • {cert.issuer}
                          </CardDescription>
                        </div>
                      </div>
                      {cert.verified && <CheckCircle className="h-5 w-5 text-green-500" title="Verified Certificate" />}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-500">Date Earned</p>
                        <p className="font-medium">{new Date(cert.dateEarned).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Status</p>
                        <Badge variant={cert.status === "Active" ? "default" : "secondary"}>{cert.status}</Badge>
                      </div>
                      {cert.expiryDate && (
                        <>
                          <div>
                            <p className="text-slate-500">Expires</p>
                            <p className="font-medium">{new Date(cert.expiryDate).toLocaleDateString()}</p>
                          </div>
                        </>
                      )}
                      <div>
                        <p className="text-slate-500">Type</p>
                        <Badge variant="outline" className="capitalize">
                          {cert.type}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <p className="text-slate-500 text-sm mb-2">Skills Covered</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-xs text-slate-500 mb-2">Credential ID: {cert.credentialId}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Verify
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Learning Paths in Progress */}
          {activeTab === "progress" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Current Learning Paths</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {learningPaths.map((path) => (
                  <Card key={path.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Award className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{path.title}</CardTitle>
                          <CardDescription className="text-base">{path.code}</CardDescription>
                        </div>
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
                            {path.completedModules} of {path.modules}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-500">Est. Completion</p>
                          <p className="font-medium">{new Date(path.estimatedCompletion).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Continue Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Microsoft Learn Integration</CardTitle>
                  <CardDescription className="text-blue-700">
                    Track your detailed progress and achievements on Microsoft Learn
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/microsoft-learn">
                      View Detailed Progress
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {filteredCertificates.length === 0 && activeTab === "earned" && (
            <div className="text-center py-12">
              <p className="text-slate-500">No certificates found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
