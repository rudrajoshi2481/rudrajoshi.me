import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function HeroComponent() {
  return (
    <div>

        {/* image */}
        {/* theory */}
    </div>
  )
}


const MetaDataComp = () => {
    return <div className='px-[3rem] max-w-[800px] mt-[2em]'>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Hello, I am Rudhra Joshi</h1>
      <p className="text-xl font-semibold text-gray-700 mb-2">A Pharmacy Graduate & MS in Bioinformatics Student</p>
      <p className="text-xl text-gray-700 font-normal text-justify"> </p>
      <div className='mt-6 flex gap-6'>
      
        <Button variant={"link"} className='flex font-bold items-center gap-1 text-lg'>Contact me <MoveUpRight size={"18"}/></Button>
      </div>
    </div>
  }

const ImageComponent = () => {
    return <div className='w-[250px] '>
      
        <AspectRatio ratio={9 / 9} className='w-[250]'>
          <Image src="https://github.com/shadcn.png" fill alt="Image" className="rounded-full object-cover" />
        </AspectRatio>
      
    </div>
  }

export default HeroComponent