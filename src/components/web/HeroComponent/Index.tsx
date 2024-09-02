import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { AtSign, MapPinHouse, MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HeroComponent() {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start'>
      <ImageComponent />
      <MetaDataComp />
    </div>
  )
}

const MetaDataComp = () => {
  return (
    <div className='lg:px-[3rem] max-w-screen-sm lg:max-w-[800px] lg:mx-[0] mx-[1rem] mt-[2em] text-center lg:text-left'>
      <h1 className="text-4xl font-extrabold mb-2">Hey, I{"’"}m Rudhra Joshi.</h1>
      <p className="text-xl font-semibold mb-2">A Pharmacy Graduate & MS in Bioinformatics Student</p>
      <p className="font-normal text-lg capitalize text-justify">
      Driven by a passion for medical software and pharmaceutical research, I aim to bridge healthcare and technology for innovative solutions.
      </p>
      <div className='flex flex-col lg:flex-row justify-between mt-4 items-center lg:items-start'>
        <Button variant={"link"} className='flex font-semibold items-center text-lg'>
        <Link target='_blank' href="https://www.linkedin.com/in/rudrajoshi2481">Contact me </Link>  <MoveUpRight className='ml-2' size={"18"} />
        </Button>
        <div className='p-2 gap-y-3 flex flex-col mt-4 lg:mt-0'>
          <div className='flex gap-2'>
           <Link className='flex gap-2' href="https://maps.app.goo.gl/f7JW86LNFPFwp5fTA"> <MapPinHouse /> <p>Glassboro, New Jersey, USA</p></Link>
          </div>
          <div >
            <Link className='flex gap-2' href="mailto:rudrajoshi2481@gmail.com"> <AtSign /><p>rudrajoshi2481@gmail.com</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const ImageComponent = () => {
  return (
    <div className='w-[250px] lg:w-[300px] flex-shrink-0  '>
      <AspectRatio ratio={9 / 9} className='w-full'>
        <Image src="/Rowan-University.jpeg" fill alt="Image" className="rounded-full object-cover" />
      </AspectRatio>
    </div>
  )
}

export default HeroComponent

// import { AspectRatio } from '@/components/ui/aspect-ratio'
// import { Button } from '@/components/ui/button'
// import { AtSign, MapPinHouse, MoveUpRight } from 'lucide-react'
// import Image from 'next/image'
// import React from 'react'

// function HeroComponent() {
//   return (
//     <div className='flex '>

//       <ImageComponent />
//       <MetaDataComp />
//     </div>
//   )
// }


// const MetaDataComp = () => {
//   return <div className='lg:px-[3rem]  max-w-screen-sm  lg:max-w-[800px] mt-[2em]'>
//     <h1 className="text-4xl font-extrabold  mb-2">Hey, I{"’"}m Rudhra Joshi.</h1>
//     <p className="text-xl font-semibold  mb-2">A Pharmacy Graduate & MS in Bioinformatics Student</p>
//     <p className="  font-normal capitalize text-justify">I'm passionate about developing medical software and advancing pharmaceutical lab work in medicinal chemistry, with a focus on bridging the gap between healthcare and technology.</p>
//     <div className='flex justify-between mt-4 items-start '>

//       <div >
//         <Button variant={"link"} className='flex font-semibold items-center text-lg '>Contact me <MoveUpRight className='ml-2' size={"18"} /></Button>

//       </div>
//       <div className='p-2 gap-y-3 flex flex-col'>
//         <div className='flex gap-2'>
//         <MapPinHouse /> <p>Glassboro, New Jersy, USA</p>
//         </div>
//         <div className='flex gap-2'>
//         <AtSign /><p>rudrajoshi2481@gmail.com</p>
//         </div>
//       </div>
//     </div>
//   </div>
// }

// const ImageComponent = () => {
//   return <div className='w-[250px] '>

//     <AspectRatio ratio={9 / 9} className='w-[250]'>
//       <Image src="https://github.com/shadcn.png" fill alt="Image" className="rounded-full object-cover" />
//     </AspectRatio>

//   </div>
// }

// export default HeroComponent