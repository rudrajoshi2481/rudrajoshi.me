import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ExternalLink } from 'lucide-react'
import Link from "next/link"

const projects = [
  {
    title: "Sorcery Dock",
    subtitle: "sorcery.rudrajoshi.me",
    period: "2023 - 2024",
    tags: ["Molecular Docking", "Git Version Control", "Molecular Visualizer", "Text Editor"],
    description:
      "Developed a bioinformatics platform to streamline molecular docking with Git-like version control and live molecular editing. Automated predictions using AWS and Google Cloud, enhancing scalability and accuracy using Autodock. Built with Next.js, Node.js, Go, and Docker, integrating SQL and MongoDB for efficient data management.",
    link: "https://sorcery.rudrajoshi.me",
  },
  {
    title: "Triple-Negative Breast Cancer Drug Design",
    subtitle: "blogs.rudrajoshi.me",
    period: "2022 - 2023",
    tags: ["Medicinal Chemistry", "Computer Aided Drug Discovery"],
    description:
      "Awarded a 120,000 INR SSIP Hub grant to lead a team in designing, synthesizing, and evaluating anticancer drug candidates. Utilized molecular dynamics tools like Autodock and RDKit to predict receptor affinity of novel therapeutics.",
    link: "https://blogs.rudrajoshi.me",
  },
  {
    title: "Distributed System Design",
    subtitle: "Google Cloud Provider",
    period: "Practice Project",
    tags: ["Pub/Sub", "Node.js", "Sockets", "Storage"],
    description:
      "Designed a distributed system using Google Cloud's Pub/Sub, App Run, and Next.js, alongside Node.js and Python Flask, featuring multiple endpoints for complex pharmaceutical workflows.",
  },
]

export default function ResearchExperience() {
  return (
    <div className="container mx-auto px-4 py-12">
        <h1 className="my-16 font-bold text-4xl">Research Experience</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-4 w-4" />
                {project.period}
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm">{project.description}</p>
            </CardContent>
            {project.link && (
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Explore Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline" className="group">
          <Link href="https://github.com/rudrajoshi2481/" target="_blank" rel="noopener noreferrer">
            <span className="mr-2">✨</span>
            Explore more projects
            <span className="ml-2">✨</span>
            <ExternalLink className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </Button>
      </div>
    </div>
  )
}