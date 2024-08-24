import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'
import { Separator } from '@/components/ui/separator'
import HeroComponent from '@/components/web/HeroComponent/Index'
import { WhatICanBrinOnTable } from '@/components/web/WhatICanBringOnTable/Index'
import React from 'react'
import { fonts_old_uyghur } from './layout'

function page() {
  return (
    <div className='flex flex-col justify-center  xl:mx-[18em] lg:mx-[12em]'>
      <div className='mt-[4vh] mb-[1vh] flex justify-center'>
        <HeroComponent />
      </div>
      
      <div  className='my-[4vh]'>
      <VelocityScroll
      text="BIoinformatics | Medicinal chemistry | Drug Discovery | Full Stack |"
      default_velocity={2}
      className={`font-display  ${fonts_old_uyghur.className} text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[3rem]`}
    />
      </div>
      <div>
        <h1 className='text-6xl  tan-nimbus font-semibold text-center mt-4'>What i can Bring on Table</h1>
      <WhatICanBrinOnTable />
      </div>
    </div>
  )
}

export default page