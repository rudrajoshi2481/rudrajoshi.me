import { Button } from '@/components/ui/button'
import { MoveUpRight } from 'lucide-react'
import React from 'react'

function IWonResearchGrant() {
  return (
    <div className='p-6'>
        <h1 className='text-6xl  tan-nimbus font-semibold text-center  text-green-700'>I Won a Research Grant</h1>
        <p className='text-center text-2xl mt-4 font-semibold'>Grant Awarded for Designing a Novel Drug Targeting PARP-1</p>
        <p className='text-center text-xl mt-4'>I received a 120,000 INR grant from SSIP Hub to lead a team in designing, synthesizing, and studying the anticancer activity of drugs for triple-negative breast cancer. Our work involved using molecular dynamics tools such as Autodock, Rdkit, ... to predict the affinity of novel therapeutic candidates for the receptor.</p>
        <div className='flex justify-center mt-4'>
        <Button className='capitalize font-semibold'>check out my blog<MoveUpRight className='ml-3' size={"18"} /></Button>
        </div>
    </div>
  )
}

export default IWonResearchGrant