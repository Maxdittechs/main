import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

// This would typically fetch data based on the slug
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Mock blog post data - in a real app, this would be fetched based on the slug
  const post = {
    title: "Getting Started with Microsoft Azure Fundamentals",
    content: `
# Introduction

Microsoft Azure is Microsoft's cloud computing platform that provides a wide range of services including computing, analytics, storage, and networking. As someone currently learning Microsoft fundamentals, I wanted to share my journey and key insights for beginners.

## What is Azure?

Azure is a comprehensive cloud platform that enables you to build, deploy, and manage applications through Microsoft's global network of data centers. It offers both Platform as a Service (PaaS) and Infrastructure as a Service (IaaS) capabilities.

## Key Services to Know

### Compute Services
- **Virtual Machines**: Run Windows or Linux VMs in the cloud
- **App Service**: Host web applications without managing infrastructure
- **Azure Functions**: Serverless computing for event-driven applications

### Storage Services
- **Blob Storage**: Object storage for unstructured data
- **File Storage**: Managed file shares in the cloud
- **Queue Storage**: Message queuing for application communication

### Networking
- **Virtual Networks**: Isolated network environments
- **Load Balancer**: Distribute traffic across multiple resources
- **Application Gateway**: Web traffic load balancer with additional features

## Getting Started Tips

1. **Start with the Free Account**: Azure offers a free tier with $200 credit for the first 30 days
2. **Take the AZ-900 Learning Path**: Microsoft provides excellent free learning resources
3. **Practice with Hands-on Labs**: Nothing beats practical experience
4. **Join the Community**: Connect with other Azure learners and professionals

## My Learning Journey

Currently working through the Microsoft Azure Fundamentals certification path, I've found the hands-on approach most effective. The Azure portal is intuitive, and the documentation is comprehensive.

## Conclusion

Azure fundamentals provide a solid foundation for cloud computing. Whether you're looking to migrate existing applications or build new cloud-native solutions, understanding these basics is essential.

Feel free to reach out if you have questions about Azure or cloud computing in general!
    `,
    date: "2024-01-15",
    author: "Max Dorman",
    tags: ["Azure", "Microsoft", "Cloud", "Fundamentals"],
    readTime: "5 min read",
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
              <Link href="/admin" className="text-slate-600 hover:text-slate-900 transition-colors">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-slate max-w-none">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-slate-900">
                      {paragraph.slice(2)}
                    </h1>
                  )
                } else if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-slate-900">
                      {paragraph.slice(3)}
                    </h2>
                  )
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-slate-900">
                      {paragraph.slice(4)}
                    </h3>
                  )
                } else if (paragraph.startsWith("- **")) {
                  const [, title, description] = paragraph.match(/- \*\*(.*?)\*\*: (.*)/) || []
                  return (
                    <li key={index} className="mb-2">
                      <strong className="text-slate-900">{title}</strong>: {description}
                    </li>
                  )
                } else if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="mb-1">
                      {paragraph.slice(2)}
                    </li>
                  )
                } else if (paragraph.match(/^\d+\./)) {
                  return (
                    <li key={index} className="mb-1">
                      {paragraph.replace(/^\d+\.\s*/, "")}
                    </li>
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4 text-slate-700 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </article>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-white rounded-lg border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Max Dorman</h3>
                <p className="text-slate-600 mb-4">
                  Currently learning Microsoft fundamentals and expanding expertise in cloud technologies. Based in
                  Fife, Scotland, passionate about helping businesses grow through innovative IT solutions.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://www.linkedin.com/in/max-dorman-1ba69814b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:maxd@ittechs.io">Contact</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
