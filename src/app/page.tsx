import React from 'react'
import Index from '../components/HeroPage/Index'
import { Separator } from '../../shadcomponents/ui/separator'
import WhatIDo from '../components/WhatIDo/Index'

function page() {
  return (
    <div className='container w-full'>

      {/*  Hero Page index */}
      <div className='mt-[5vh] '>
        <Index />
      </div>
      <div >
        <Separator className=' mt-10 border-2' />
      </div>
      <div>
        <WhatIDo />
      </div>
      <div >
        <Separator className=' mt-10 border-2' />
      </div>

      

    </div>
  )
}

export default page