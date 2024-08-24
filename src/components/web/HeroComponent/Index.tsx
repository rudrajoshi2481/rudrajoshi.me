import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { AtSign, MapPinHouse, MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function HeroComponent() {
  return (
    <div className='flex'>

      <ImageComponent />
      <MetaDataComp />
    </div>
  )
}


const MetaDataComp = () => {
  return <div className='px-[3rem] max-w-[800px] mt-[2em]'>
    <h1 className="text-4xl font-bold  mb-2">Hello, I am Rudhra Joshi</h1>
    <p className="text-xl font-semibold  mb-2">A Pharmacy Graduate & MS in Bioinformatics Student</p>
    <p className="  font-normal capitalize text-justify">I'm passionate about developing medical software and advancing pharmaceutical lab work in medicinal chemistry, with a focus on bridging the gap between healthcare and technology.</p>
    <div className='flex justify-between mt-4 items-start '>

      <div >
        <Button variant={"link"} className='flex font-semibold items-center text-lg '>Contact me <MoveUpRight size={"18"} /></Button>

      </div>
      <div className='p-2 gap-y-3 flex flex-col'>
        <div className='flex gap-2'>
        <MapPinHouse /> <p>Glassboro, New Jersy, USA</p>
        </div>
        <div className='flex gap-2'>
        <AtSign /><p>rudrajoshi2481@gmail.com</p>
        </div>
      </div>
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