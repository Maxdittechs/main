"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, Search, Plus } from "lucide-react"
import Link from "next/link"

// Mock blog posts data
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with Microsoft Azure Fundamentals",
    excerpt: "My journey learning Azure fundamentals and key takeaways for beginners.",
    date: "2024-01-15",
    author: "Max Dorman",
    tags: ["Azure", "Microsoft", "Cloud"],
    slug: "azure-fundamentals-guide",
  },
  {
    id: 2,
    title: "Microsoft 365 Security Best Practices",
    excerpt: "Essential security configurations every organization should implement.",
    date: "2024-01-10",
    author: "Max Dorman",
    tags: ["Microsoft 365", "Security", "Best Practices"],
    slug: "m365-security-practices",
  },
  {
    id: 3,
    title: "PowerShell Automation for IT Professionals",
    excerpt: "Streamline your daily tasks with these PowerShell automation scripts.",
    date: "2024-01-05",
    author: "Max Dorman",
    tags: ["PowerShell", "Automation", "IT"],
    slug: "powershell-automation",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [posts] = useState(mockPosts)

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
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
              <Link href="/portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">
                Portfolio
              </Link>
              <Link href="/certificates" className="text-slate-600 hover:text-slate-900 transition-colors">
                Certificates
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
            <p className="text-xl text-slate-600 mb-8">
              Insights on Microsoft technologies, cloud computing, and IT best practices
            </p>

            {/* Search and New Post */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-80"
                />
              </div>
              <Button asChild>
                <Link href="/admin">
                  <Plus className="mr-2 h-4 w-4" />
                  Write New Post
                </Link>
              </Button>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Button asChild className="mt-4">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No posts found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
