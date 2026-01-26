'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ClipDemo() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2 tracking-tight text-slate-900">
        CLIP Knowledge Model
      </h1>
      <p className="text-slate-600 mb-2">
        Interactive 3D visualization of CLIP embeddings showing how the model organizes visual and textual concepts in a shared embedding space. Explore 100 classes with 3000 image and text embeddings.{' '}
        <Link 
          href="https://github.com/rudrajoshi2481/The-Bioinformatics-Arsenal" 
          target="_blank" 
          className="text-slate-900 underline underline-offset-2 hover:text-slate-600 transition-colors"
        >
          View on GitHub
        </Link>
      </p>
      <p className=' mb-3 bg-green-600 text-white p-1 rounded-lg'>Click on dots it will show you the embeddings of the class and images representing that embeddings</p>
      <div className="w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
        {isMounted ? (
          <iframe
            src="https://clip-demo.rudhrajoshi.me/"
            className="w-full"
            style={{ height: '60vh', minHeight: '500px' }}
            title="CLIP Knowledge Embeddings Visualization"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div 
            className="w-full flex items-center justify-center text-slate-400"
            style={{ height: '60vh', minHeight: '500px' }}
          >
            Loading visualization...
          </div>
        )}
      </div>
    </div>
  )
}
