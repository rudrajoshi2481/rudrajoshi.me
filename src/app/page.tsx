"use client"
import Appbar from '@/components/NewComponents/Appbar/Appbar'
import React from 'react'

// hero component
const fonts_poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

import Link from "next/link";
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import { Noto_Serif_Old_Uyghur, Poppins, Rasa } from 'next/font/google';
import ResearchExperience from '@/components/NewComponents/ResearchExperience/ResearchExperience';
import { Separator } from '@/components/ui/separator';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

import { Canvas } from '@react-three/fiber';
import ModelViewer from '@/components/NewComponents/proteinBlock/ModelBox';
import { BottomDock } from '@/components/web/BottomDock/Index';
import Skills from '@/components/NewComponents/Skills/Skills';
import { Fog } from 'three';
import BlogCards from '@/components/NewComponents/Blogs/Blogs';



const NotoFonts = Noto_Serif_Old_Uyghur({ subsets: ["latin"], weight: ["400"] });


function page() {
  return (
    <div>
      <Appbar />
      <HeroComponent />
      <div className='container '>
      <Separator className='mb-8' />
      <VelocityScroll
  text='Bioinformatics | Medicinal Chemistry | Molecular Docking | Machine Learning | Deep Learning | Pharmacoinformatics | Drug Discovery | Computational Biology | Cancer Research | Molecular Dynamics | Structural Biology | Genetic Analysis | Evolutionary Genomics | Protein-Ligand Interactions | Single-cell RNA Sequencing | Statistical Mechanics | Cloud Computing | Google Cloud | AWS | Next.js | Node.js | Go | Docker | SQL | MongoDB | Kubernetes | Git Version Control | High-Performance Computing'
  className={`text-4xl font-bold ${NotoFonts.className}`}
  default_velocity={0.31}
/>

      <Separator className='mt-8' />
      </div>
      <ResearchExperience />
      <Skills />
      <BlogCards   />
    </div>
  )
}


const HeroComponent = () => {
  return (

    <div className="w-full  mt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-col min-w-[350px] min-h-[30vh] py-8 px-6 mr-16 space-y-4 mt-12">
            <h1 className={`text-4xl font-bold text-gray-900 ${fonts_poppins.className}`}>
              Hey, I{"'"}m <span className="text-green-600">Rudhra Joshi.</span>
            </h1>

            <p className="text-lg text-green-700">
              MS in Bioinformatics & Bachelor{"'"}s in Pharmacy
            </p>

            <p className=" text-gray-800 text-xl leading-relaxed max-w-[650px]">
              Bioinformatics researcher specializing in drug discovery, single-cell sequencing, and computational biology. Skilled in bioinformatics software development, research automation, and cloud computing. Proficient in Python, R, and high-throughput data analysis for advancing medical research.
            </p>

            <div className="-mt-6 float-left w-[10vw]">
              <BottomDock />
              
            </div>
          </div>

          <div
            className="flex-1 h-[50vh]  mt-3 w-[35vw] hover:cursor-[url('/360.svg'),auto] "
          >



            <Canvas
              camera={{
                position: [0, 5, 35], // Set camera position to zoom out
                fov: 75, // Field of view
              }}

              shadows
            
            >
              

              <ModelViewer />
            </Canvas>
          </div>
          
        </div>
      </div>
    </div>
  );
}




export default page
