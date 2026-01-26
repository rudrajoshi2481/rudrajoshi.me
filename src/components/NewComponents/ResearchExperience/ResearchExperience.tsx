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
    title: "Chromatin 3D Analysis Research",
    subtitle: "Rowan University — Dr. Yong Chen's Lab",
    period: "Sep 2024 – Present",
    tags: ["Hi-C", "ChIA-PET", "HiChIP", "Deep Learning", "Python", "Chromatin Biology"],
    description:
      "Analyzed 20+ TB of chromatin conformation capture (3C) data. Developed Chr3D, a standardized Python framework for comprehensive 3C technique analysis. Built transformer-based deep learning model for Hi-C coverage enhancement. Contributing to manuscript on chromatin 3D structure prediction methods.",
    link: "https://github.com/rudrajoshi2481",
  },
  {
    title: "Radio Signal Deep Learning Research",
    subtitle: "Rutgers & Rowan University — Dr. Silvija Kokalj-Filipovic Lab",
    period: "Oct 2025 – Present",
    tags: ["PointMAE", "CLIP", "Diffusion Models", "H100 GPU", "Sionna", "3D Point Cloud"],
    description:
      "Trained PointMAE model from scratch on 8+ H100 Nvidia GPU cluster. Fine-tuned deep learning models for 3D spatial embeddings in radio signal propagation. Developed CLIP-based multimodal models and diffusion architectures for 3D scene understanding.",
    link: "https://github.com/rudrajoshi2481",
  },
  {
    title: "Triple-Negative Breast Cancer Drug Design",
    subtitle: "ITM University — Prof Ankita Tarapara",
    period: "Oct 2022 – 2024",
    tags: ["Medicinal Chemistry", "RDKit", "Autodock", "HPLC", "Drug Synthesis"],
    description:
      "Secured ₹1,20,000 SSIP Hub grant for synthesis and formulation targeting TNBC. Designed lead molecule library using RDKit and performed molecular docking on BRCA proteins. Conducted SAR analysis and wet lab characterization including HPLC and TLC.",
    link: "https://blogs.rudhrajoshi.me",
  },
  {
    title: "The Bioinformatics Arsenal",
    subtitle: "Open Source — 20+ SOTA Models",
    period: "2023 – Present",
    tags: ["AlphaFold", "ESM-2", "DNABERT", "PyTorch", "Transformers", "Evoformer"],
    description:
      "Reimplemented 20+ SOTA deep learning papers from scratch including AlphaFold 2/3, ESM-2 (650M parameters), and DNABERT. Created detailed documentation with architecture visualizations. Trained models at scale on 8+ H100 GPU Nvidia Brev cluster.",
    link: "https://github.com/rudrajoshi2481/The-Bioinformatics-Arsenal",
  },
  {
    title: "Genome Studio",
    subtitle: "Full Stack Bioinformatics Platform",
    period: "2023 – Present",
    tags: ["Next.js", "FastAPI", "LangChain", "AWS", "No-Code", "Pipeline Builder"],
    description:
      "Built no-code bioinformatics platform with drag-and-drop graph-based interface. Engineered dependency resolution system supporting R, Python, and Bash workflows. Implemented LangChain-powered LLM integration for automated code generation.",
    link: "https://github.com/rudrajoshi2481",
  },
  {
    title: "Chr3D Framework",
    subtitle: "Novel Chromatin Analysis Tool",
    period: "2024 – Present",
    tags: ["Python", "Hi-C", "Statistical Methods", "Scipy", "Chromatin Loops"],
    description:
      "Developed Chr3D, a comprehensive Python framework for chromatin interactions analysis with integrated statistical methods. Manuscript in preparation for expected submission March 2026.",
    link: "https://github.com/rudrajoshi2481",
  },
]

export default function ResearchExperience() {

  return (
    <div className="container mx-auto px-4 py-16 ">
      <h1 className="text-4xl font-bold mb-12  tracking-tight text-slate-900">
        Research Experience
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
                className="flex flex-col h-full transition-all duration-300 hover:shadow-md border border-slate-200 bg-white"
                
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold mb-1 text-slate-900">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-slate-600 mb-1">
                    <MapPinIcon className="mr-1.5 h-3.5 w-3.5" />
                    {project.subtitle}
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
                    {project.period}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pb-4">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs font-normal bg-slate-100 text-slate-700 border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
                </CardContent>
                {project.link && (
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full group bg-white hover:bg-slate-900 hover:text-white border-slate-300 text-slate-900 transition-all duration-200">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
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