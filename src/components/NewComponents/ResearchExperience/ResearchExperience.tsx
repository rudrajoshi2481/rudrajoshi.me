'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ExternalLink, MapPinIcon, TagIcon } from 'lucide-react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

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
    <div className="container mx-auto px-4 py-16 ">
      <h1 className="text-5xl font-extrabold mb-12 text-center ">
        Research Experience.
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="flex flex-col h-full transition-all duration-300 "
                
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <MapPinIcon className="mr-1 h-4 w-4" />
                    {project.subtitle}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    {project.period}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pb-4">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <TagIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                </CardContent>
                {project.link && (
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full group bg-transparent hover:bg-purple-500 hover:text-white transition-all duration-300">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        Explore Project
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                )}
               
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
} 