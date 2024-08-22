import React from 'react'

import Image from 'next/image'
import { Button } from '../../../shadcomponents/ui/button'
import { AspectRatio } from '../../../shadcomponents/ui/aspect-ratio'
import { MoveUpRight } from 'lucide-react'
import WordFadeIn from '../../../shadcomponents/magicui/word-fade-in'


function Index() {
  return (
    <div className='flex justify-center '>

      {/* Image Component */}
      <ImageComponent />
      <MetaDataComp />
      
    </div>
  )
}

const ImageComponent = () => {
  return <div className='w-[250px] '>
    
      <AspectRatio ratio={9 / 9} className='w-[250]'>
        <Image src="https://github.com/shadcn.png" fill alt="Image" className="rounded-full object-cover" />
      </AspectRatio>
    
  </div>
}

const MetaDataComp = () => {
  return <div className='px-[3rem] max-w-[800px] mt-[2em]'>
    <h1 className="text-4xl font-bold text-gray-900 mb-2">Hello, I am Rudhra Joshi</h1>
    <p className="text-xl font-semibold text-gray-700 mb-2">A Pharmacy Graduate & MS in Bioinformatics Student</p>
    <p className="text-xl text-gray-700 font-normal text-justify"> <WordFadeIn words="I'm a pharmacy graduate now pursuing an MS in Bioinformatics, passionate about merging healthcare and technology. I love using bioinformatics to drive innovation in pharmaceutical research." /></p>
    <div className='mt-6 flex gap-6'>
    
      <Button variant={"link"} className='flex font-bold items-center gap-1 text-lg'>Contact me <MoveUpRight size={"18"}/></Button>
    </div>
  </div>
}



export default Index