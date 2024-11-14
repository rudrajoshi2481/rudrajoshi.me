"use client"
import Appbar from '@/components/NewComponents/Appbar/Appbar'
import React from 'react'

// hero component
const fonts_poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600","700","800","900"] });

import Link from "next/link";
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import { Poppins, Rasa } from 'next/font/google';
import ResearchExperience from '@/components/NewComponents/ResearchExperience/ResearchExperience';
import { Separator } from '@/components/ui/separator';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

import { Canvas } from '@react-three/fiber';
import ModelViewer from '@/components/NewComponents/proteinBlock/ModelBox';


const RasaFonts = Rasa({ subsets: ["latin"], weight: ["600", "700"] });


function page() {
  return (
    <div>
      <Appbar />
      <HeroComponent />
      <Separator className='mb-8' />
    <VelocityScroll text='Bioinformatics |' className={`text-6xl ${RasaFonts.className}`} default_velocity={2}/>
    <Separator className='mt-8' />
    <ResearchExperience />
    </div>
  )
}


const HeroComponent = () => {
  return (

    <div className="w-full mt-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
        <div className="flex flex-col min-w-[350px] min-h-[30vh] py-8 px-6 mr-16 space-y-4">
  <h1 className={`text-4xl font-bold text-gray-900 ${fonts_poppins.className}`}>
    Hey, I{"'"}m <span className="text-green-600">Rudhra Joshi.</span>
  </h1>
  
  <p className="text-lg text-green-700">
    MS in Bioinformatics & Bachelor{"'"}s in Pharmacy
  </p>
  
  <p className="text-base text-gray-800 leading-relaxed max-w-[650px]">
    Bioinformatics researcher specializing in drug discovery, single-cell sequencing, and computational biology. Skilled in bioinformatics software development, research automation, and cloud computing. Proficient in Python, R, and high-throughput data analysis for advancing medical research.
  </p>
  
  <div className="mt-6">
    <Link href="https://github.com/rudrajoshi2481/" target="_blank">
      <button className="border border-green-600 text-green-600 py-2 px-6 rounded-md hover:bg-green-50 transition-all duration-300">
        View GitHub Profile
      </button>
    </Link>
  </div>
</div>

          <div
            className="flex-1 h-[45vh]  mt-3 w-[35vw] hover:cursor-[url('/360.svg'),auto] z-50"
          >

            
         
              <Canvas 
              camera={{
                position: [0, 5, 30], // Set camera position to zoom out
                fov: 75, // Field of view
              }}
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
