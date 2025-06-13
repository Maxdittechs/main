"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Save, Plus, Edit, Trash2, FileText, ImageIcon, Award } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock data states
  const [profile, setProfile] = useState({
    name: "Max Dorman",
    bio: "Currently learning Microsoft fundamentals and expanding my expertise in cloud technologies. Passionate about technology solutions and helping businesses grow through innovative IT services.",
    location: "Fife, Scotland",
    email: "maxd@ittechs.io",
    linkedin: "https://www.linkedin.com/in/max-dorman-1ba69814b",
    fiverr: "https://www.fiverr.com/maxittech?public_mode=true",
  })

  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
  })

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    type: "project",
    tags: "",
    fiverr: false,
  })

  const handleProfileSave = () => {
    // In a real app, this would save to a database
    alert("Profile updated successfully!")
  }

  const handlePostSave = () => {
    // In a real app, this would save to a database
    alert("Blog post created successfully!")
    setNewPost({ title: "", excerpt: "", content: "", tags: "" })
  }

  const handleProjectSave = () => {
    // In a real app, this would save to a database
    alert("Project uploaded successfully!")
    setNewProject({ title: "", description: "", type: "project", tags: "", fiverr: false })
  }

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
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Admin Dashboard</h1>
            <p className="text-slate-600">Manage your website content, profile, and uploads</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="blog">Blog Posts</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="mslearn">MS Learn</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>

            {/* Profile Management */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Update your personal information and social links</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn URL</Label>
                      <Input
                        id="linkedin"
                        value={profile.linkedin}
                        onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fiverr">Fiverr Profile URL</Label>
                    <Input
                      id="fiverr"
                      value={profile.fiverr}
                      onChange={(e) => setProfile({ ...profile, fiverr: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profile-pic">Profile Picture</Label>
                    <div className="flex items-center gap-4">
                      <Input id="profile-pic" type="file" accept="image/*" />
                      <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload
                      </Button>
                    </div>
                  </div>

                  <Button onClick={handleProfileSave} className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Save Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Blog Management */}
            <TabsContent value="blog">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Write New Blog Post</CardTitle>
                    <CardDescription>Create and publish new blog content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="post-title">Title</Label>
                      <Input
                        id="post-title"
                        placeholder="Enter post title..."
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-excerpt">Excerpt</Label>
                      <Textarea
                        id="post-excerpt"
                        placeholder="Brief description of the post..."
                        rows={2}
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-content">Content</Label>
                      <Textarea
                        id="post-content"
                        placeholder="Write your blog post content here..."
                        rows={8}
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-tags">Tags (comma-separated)</Label>
                      <Input
                        id="post-tags"
                        placeholder="Azure, Microsoft, Cloud..."
                        value={newPost.tags}
                        onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                      />
                    </div>

                    <Button onClick={handlePostSave} className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Publish Post
                    </Button>
                  </CardContent>
                </Card>

                {/* Existing Posts Management */}
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Existing Posts</CardTitle>
                    <CardDescription>Edit or delete your published blog posts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((post) => (
                        <div key={post} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">Sample Blog Post {post}</h4>
                            <p className="text-sm text-slate-500">Published on Jan {post + 10}, 2024</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Portfolio Management */}
            <TabsContent value="portfolio">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload New Project</CardTitle>
                    <CardDescription>Add projects, certifications, and work samples to your portfolio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-title">Project Title</Label>
                        <Input
                          id="project-title"
                          placeholder="Enter project title..."
                          value={newProject.title}
                          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project-type">Type</Label>
                        <Select
                          value={newProject.type}
                          onValueChange={(value) => setNewProject({ ...newProject, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="project">Project</SelectItem>
                            <SelectItem value="certification">Certification</SelectItem>
                            <SelectItem value="case-study">Case Study</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project-description">Description</Label>
                      <Textarea
                        id="project-description"
                        placeholder="Describe your project..."
                        rows={3}
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project-tags">Tags (comma-separated)</Label>
                      <Input
                        id="project-tags"
                        placeholder="Azure, Microsoft, Implementation..."
                        value={newProject.tags}
                        onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Upload Files</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-pdf">PDF Documents</Label>
                          <Input id="project-pdf" type="file" accept=".pdf" multiple />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="project-images">Images</Label>
                          <Input id="project-images" type="file" accept="image/*" multiple />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="fiverr-project"
                        checked={newProject.fiverr}
                        onChange={(e) => setNewProject({ ...newProject, fiverr: e.target.checked })}
                      />
                      <Label htmlFor="fiverr-project">Available on Fiverr</Label>
                    </div>

                    <Button onClick={handleProjectSave} className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Project
                    </Button>

                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Fiverr Integration:</strong> Projects marked as "Available on Fiverr" will include a
                        link to your Fiverr profile:
                        <a
                          href="https://www.fiverr.com/maxittech?public_mode=true"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline ml-1"
                        >
                          https://www.fiverr.com/maxittech
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Existing Projects */}
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Portfolio Items</CardTitle>
                    <CardDescription>Edit or remove existing portfolio projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((project) => (
                        <div key={project} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-slate-400" />
                            <div>
                              <h4 className="font-medium">Sample Project {project}</h4>
                              <div className="flex gap-2 mt-1">
                                <Badge variant="secondary">Azure</Badge>
                                <Badge variant="secondary">Microsoft</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Certificates Management */}
            <TabsContent value="certificates">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Certificate</CardTitle>
                    <CardDescription>Add certifications, degrees, and qualifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cert-title">Certificate Title</Label>
                        <Input id="cert-title" placeholder="Microsoft Azure Fundamentals" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cert-code">Certificate Code</Label>
                        <Input id="cert-code" placeholder="AZ-900" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cert-issuer">Issuing Organization</Label>
                        <Input id="cert-issuer" placeholder="Microsoft" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cert-type">Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="certification">Certification</SelectItem>
                            <SelectItem value="degree">Degree</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="course">Course</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cert-earned">Date Earned</Label>
                        <Input id="cert-earned" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cert-expiry">Expiry Date (optional)</Label>
                        <Input id="cert-expiry" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cert-skills">Skills/Topics Covered</Label>
                      <Input id="cert-skills" placeholder="Cloud Computing, Azure Services, Security..." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cert-credential">Credential ID</Label>
                      <Input id="cert-credential" placeholder="ABC123456789" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cert-file">Certificate File</Label>
                      <Input id="cert-file" type="file" accept=".pdf,.jpg,.png" />
                    </div>

                    <Button className="w-full">
                      <Save className="mr-2 h-4 w-4" />
                      Add Certificate
                    </Button>
                  </CardContent>
                </Card>

                {/* Manage Existing Certificates */}
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Certificates</CardTitle>
                    <CardDescription>Edit or remove existing certificates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((cert) => (
                        <div key={cert} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Award className="h-5 w-5 text-blue-500" />
                            <div>
                              <h4 className="font-medium">Sample Certificate {cert}</h4>
                              <p className="text-sm text-slate-500">Microsoft • Active</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Microsoft Learn Management */}
            <TabsContent value="mslearn">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Update Microsoft Learn Progress</CardTitle>
                    <CardDescription>Track your learning paths and achievements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ms-points">Total Points</Label>
                        <Input id="ms-points" type="number" placeholder="2450" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ms-rank">Current Rank</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select rank" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ms-streak">Learning Streak (days)</Label>
                        <Input id="ms-streak" type="number" placeholder="15" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ms-modules">Completed Modules</Label>
                        <Input id="ms-modules" type="number" placeholder="34" />
                      </div>
                    </div>

                    <Button className="w-full">
                      <Save className="mr-2 h-4 w-4" />
                      Update Stats
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Add Learning Path</CardTitle>
                    <CardDescription>Track progress on certification learning paths</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="path-title">Learning Path Title</Label>
                        <Input id="path-title" placeholder="Azure Administrator Associate" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="path-code">Certification Code</Label>
                        <Input id="path-code" placeholder="AZ-104" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="path-progress">Progress (%)</Label>
                        <Input id="path-progress" type="number" min="0" max="100" placeholder="65" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="path-modules">Total Modules</Label>
                        <Input id="path-modules" type="number" placeholder="12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="path-completed">Completed Modules</Label>
                        <Input id="path-completed" type="number" placeholder="8" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="path-difficulty">Difficulty Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Learning Path
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Add Achievement</CardTitle>
                    <CardDescription>Record Microsoft Learn achievements and badges</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="achievement-title">Achievement Title</Label>
                        <Input id="achievement-title" placeholder="Azure Explorer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="achievement-icon">Icon/Emoji</Label>
                        <Input id="achievement-icon" placeholder="🏆" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="achievement-description">Description</Label>
                      <Textarea id="achievement-description" placeholder="Completed 10 Azure modules" rows={2} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="achievement-date">Date Earned</Label>
                      <Input id="achievement-date" type="date" />
                    </div>

                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Achievement
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Media Management */}
            <TabsContent value="media">
              <Card>
                <CardHeader>
                  <CardTitle>Media Library</CardTitle>
                  <CardDescription>Manage your uploaded images and documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                      <h3 className="text-lg font-medium text-slate-900 mb-2">Upload Media Files</h3>
                      <p className="text-slate-500 mb-4">Drag and drop files here, or click to browse</p>
                      <Input type="file" multiple accept="image/*,.pdf" className="hidden" id="media-upload" />
                      <Button asChild>
                        <label htmlFor="media-upload" className="cursor-pointer">
                          Choose Files
                        </label>
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="relative group">
                          <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center">
                            {item % 2 === 0 ? (
                              <ImageIcon className="h-8 w-8 text-slate-400" />
                            ) : (
                              <FileText className="h-8 w-8 text-slate-400" />
                            )}
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <Button size="sm" variant="secondary">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
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
