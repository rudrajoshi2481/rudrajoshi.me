import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock } from 'lucide-react';
import Link from "next/link";

interface Blog {
  title: string;
  description: string;
  tags: string[];
  publishDate: string;
  author: string;
  readTime: string;
}

const blogs = [
    {
      title: "Understanding Molecular Evolution",
      description: "Exploring evolutionary changes at the molecular level with an emphasis on genetic and protein modifications, including practical bioinformatics applications in phylogenetics and molecular clock theory.",
      tags: ["Bioinformatics", "Evolution", "Genetics"],
      publishDate: "2024-08-12",
      author: "Rudhra Joshi",
      readTime: "10 min"
    },
    {
      title: "Drug Discovery Basics",
      description: "An introduction to computational drug discovery techniques, covering key methods like molecular docking, QSAR, and ligand-based virtual screening. Ideal for bioinformaticians entering pharmacoinformatics.",
      tags: ["Drug Discovery", "Computational Biology", "Pharmacoinformatics"],
      publishDate: "2024-06-24",
      author: "Rudhra Joshi",
      readTime: "8 min"
    },
    {
      title: "Single-Cell Sequencing in Cancer Research",
      description: "A deep dive into the role of scRNA-seq in cancer studies, focusing on its applications for tumor heterogeneity and precision medicine.",
      tags: ["Cancer Research", "Single-Cell Analysis", "Genomics"],
      publishDate: "2024-05-15",
      author: "Rudhra Joshi",
      readTime: "12 min"
    },
    {
      title: "Data Acquisition in Bioinformatics",
      description: "Overview of efficient methods for acquiring datasets in bioinformatics, including resources like NCBI, GenBank, and EMBL, with a focus on open-source data for large-scale analyses.",
      tags: ["Data Science", "Bioinformatics", "Data Acquisition"],
      publishDate: "2024-03-20",
      author: "Rudhra Joshi",
      readTime: "7 min"
    },
    {
      title: "EADock: Evolutionary Algorithms for Molecular Docking",
      description: "Explains the EADock algorithm and its role in docking small molecules into protein active sites using multiobjective evolutionary optimization, highlighting its utility in structure-based drug design.",
      tags: ["Molecular Docking", "Drug Design", "Evolutionary Algorithms"],
      publishDate: "2024-01-28",
      author: "Rudhra Joshi",
      readTime: "15 min"
    },
    {
      title: "TeachOpenCADD: Computer-Aided Drug Design with Python",
      description: "A guide to using the TeachOpenCADD library for computational drug design in Python, covering core techniques like molecular modeling, docking, and cheminformatics applications.",
      tags: ["Drug Design", "Python", "Open Source"],
      publishDate: "2023-11-02",
      author: "Rudhra Joshi",
      readTime: "11 min"
    }
  ];
  

export default function BlogCardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      {blogs.length === 0 ? (
        <p className="text-muted-foreground">No blog posts available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link href="https://www.blogs.rudhrajoshi.me" key={index} target="_blank">
              <Card className="flex flex-col transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-100">
                <CardHeader className="p-4 bg-blue-50 border-b border-gray-200">
                  <CardTitle className="text-lg font-semibold text-blue-900">{blog.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 mt-1">{blog.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2" aria-hidden="true" />
                    <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                    <span>{blog.readTime}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
