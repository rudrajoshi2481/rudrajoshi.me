import { Separator } from '@/components/ui/separator'
import React from 'react'

function Skills() {


const programmingLanguages = [
    "Python", "Javascript", "Typescript", "Node.js", "Julia", "React.js", "C++", "C",
    "Tailwind CSS", "Slate.js", "Framer Motion"
  ]
  
  const frameworksAndOpenSource = [
    "Next.js", "Blender", "Remix.js", "Redhat", "CCNA", "AWS", "Docker",
    "Google Cloud Service", "Github", "System Design", "Firebase Firestore",
    "Google Cloud Storage", "Flutter", "Pub/Sub", "Microsoft Excel",
    "Microsoft Word", "Pandas"
  ]
  
  const drugDiscoveryTools = [
    "Rdkit", "Open Babel API", "Pymol", "Dataset filteration", "Discovery Studio",
    "Autodock vina", "Chemdraw 3d", "Sorcery Dock"
  ]
  
  const books = [
    "The 4 Hours Work Week", "Elon Musk -Ashlee vance", "The Warren Buffett Way",
    "Outliers", "Influence", "Zero to One", "Think and Grow Rich", "The One Thing",
    "Start With Why", "Ikigai", "Rich Dad Poor Dad", "7 Secrets of Persuasion",
    "The Art of Thinking Clearly", "Eat That Frog", "How to win Friends and Influence People",
    "The psychology of Money", "The Compound Effect", "The New One Minute Manager",
    "The Leader In You", "The Power of your Subconcious mind", "Never Split The Diffrence",
    "How To Talk To Anyone", "Deep Work", "Instant Self-Hypnosis"
  ]

  return (
    <div className='container'>
        <h1 className="text-5xl font-extrabold mb-12 text-center ">
        Skills and Hobbies.
      </h1>
        <div className='flex justify-evenly my-8'>
          <h2 className='text-2xl w-[50vw]'>Programming Languages</h2>
          <ul className='flex gap-2 w-[50vw] flex-wrap'>
            {programmingLanguages.map((language, index) => (
              <li key={index} className='border text-sm rounded-sm px-1'>{language}</li>
            ))}
          </ul>
          </div>
            <Separator />
          <div className='flex justify-evenly my-8'>
            <h2 className='text-2xl w-[50vw]'>Frameworks & Open Source</h2>
            <ul className='flex gap-2 w-[50vw] flex-wrap'>
              {frameworksAndOpenSource.map((framework, index) => (
                <li key={index} className='border text-sm rounded-sm px-1'>{framework}</li>
              ))}
            </ul>

            </div>
            <Separator />
            <div className='flex justify-evenly my-8'>
              <h2 className='text-2xl w-[50vw]'>Drug Discovery Tools</h2>
              <ul className='flex gap-2 flex-wrap w-[50vw]'>
                {drugDiscoveryTools.map((tool, index) => (
                  <li key={index}className='border text-sm rounded-sm px-1'>{tool}</li>
                ))}
              </ul>
              </div>
              <Separator />
              <div className='flex justify-evenly my-8'>
                <h2 className='text-2xl w-[50vw]'>Books</h2>
                <ul className='flex gap-2 flex-wrap w-[50vw]'>
                  {books.map((book, index) => (
                    <li key={index} className='border text-sm rounded-sm px-1'>{book}</li>
                  ))}
                </ul>
                </div>
    </div>
  )
}

export default Skills