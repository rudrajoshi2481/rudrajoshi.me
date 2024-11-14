import Appbar from '@/components/NewComponents/Appbar/Appbar'
import React from 'react'

// hero component
const fonts_poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600","700","800","900"] });

import Link from "next/link";
import { ProteinModel } from '@/components/NewComponents/proteinBlock/ProteinModel';
import ErrorBoundary from '@/components/NewComponents/proteinBlock/ErrorBoundary';

import { Scroll } from 'lucide-react';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';
import { Poppins, Rasa } from 'next/font/google';
import ResearchExperience from '@/components/NewComponents/ResearchExperience/ResearchExperience';
import { Separator } from '@/components/ui/separator';


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
          <div className="flex-1 min-w-[350px] py-6 justify-around min-h-[30vh]">
            <h1
              className={`text-5xl mt-4 flex flex-wrap text-black font-bold ${fonts_poppins.className}`}
            >
              Hey I{"'"}m
              <span className="ml-2 ">Rudhra Joshi.</span>
            </h1>
            <p
              className={`flex flex-wrap max-w-[850px] text-xl mt-2 text-green-600 mb-2 `}
            >
              MS in Bioinformatics & Bachelor{"'"}s in Pharmacy
            </p>
            <p className={`max-w-[650px] text-xl text-black`}>
            Bioinformatics researcher specializing in drug discovery, single-cell sequencing, and computational biology. Skilled in bioinformatics software development, research automation, and cloud computing. Proficient in Python, R, and high-throughput data analysis for advancing medical research.
            </p>
            <div className="mt-4">
              <Link href="https://github.com/rudrajoshi2481/" target="_blank">
                <button className="border border-green-600 text-green-600 py-2 px-4 rounded-md hover:bg-green-100">
                  Github Profile
                </button>
              </Link>
            </div>
          </div>
          <div
            className="flex-1 h-[45vh] mt-3 w-[35vw] hover:cursor-[url('/360.svg'),auto]"
          >
            {/* <p className="text-center">PDB ID : 7aad</p> */}
            
              {/* <Link href="https://doi.org/10.2210/pdb7AAD/pdb" target="_blank">
                <div className="w-full flex flex-col items-center hover:text-blue-600">
                  <p className="text-center">PDB ID: 7AAD</p>
                  <p className="max-w-[320px] text-center">
                    Crystal structure of the catalytic domain of human PARP1 in
                    complex with olaparib
                  </p>
                </div>
              </Link> */}
              {/* <ErrorBoundary>
              <ProteinModel />
              </ErrorBoundary> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}




export default page
