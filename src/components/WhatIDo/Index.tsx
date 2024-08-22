import React from 'react'
import WordFadeIn from '../../../shadcomponents/magicui/word-fade-in'
import { Rss } from 'lucide-react'

function WhatIDo() {
    return (
        <div className='mt-6'>
            <h1 className='text-2xl mb-8 font-semibold'><WordFadeIn words="What I Can Do" /></h1>
            <div className='mt-4 flex flex-wrap gap-8 gap-y-14'>
            <CardComp title="full stack" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " toolsArray={["react","go"]}/>
            <CardComp title="full stack" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " toolsArray={["react","go"]}/>
            <CardComp title="full stack" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " toolsArray={["react","go"]}/>
            <CardComp title="full stack" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " toolsArray={["react","go"]}/>
            <CardComp title="full stack" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " toolsArray={["react","go"]}/>
            <CardComp title="full stack" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " toolsArray={["react","go"]}/>
           
            </div>
        </div>
    )
}

const CardComp = ({ title, description, toolsArray }: any) => {
    return (
        <div className='max-w-[400px]'>
            <h1 className='text-xl font-bold mb-2 capitalize flex gap-2'><Rss />{title}</h1>
            <p className='text-gray-700  text-justify font-normal'>{description}</p>
            <div>
                {
                    toolsArray.map((e: any) => {
                        return <span key={e}>{e}</span>
                    })
                }
            </div>
        </div>
    )
}

export default WhatIDo