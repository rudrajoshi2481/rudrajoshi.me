import { Separator } from '@/components/ui/separator';
import { Code, Cpu, FlaskConical, BookOpen } from 'lucide-react';
import React from 'react';

function Skills() {
  const programmingLanguages = [
    "Python", "Javascript", "Typescript", "Node.js", "Julia", "React.js", "C++", "C",
    "Tailwind CSS", "Slate.js", "Framer Motion"
  ];

  const frameworksAndOpenSource = [
    "Next.js", "Blender", "Remix.js", "Redhat", "CCNA", "AWS", "Docker",
    "Google Cloud Service", "Github", "System Design", "Firebase Firestore",
    "Google Cloud Storage", "Flutter", "Pub/Sub", "Microsoft Excel",
    "Microsoft Word", "Pandas"
  ];

  const drugDiscoveryTools = [
    "Rdkit", "Open Babel API", "Pymol", "Dataset filteration", "Discovery Studio",
    "Autodock vina", "Chemdraw 3d", "Sorcery Dock"
  ];

  const books = [
    "The 4 Hours Work Week", "Elon Musk - Ashlee Vance", "The Warren Buffett Way",
    "Outliers", "Influence", "Zero to One", "Think and Grow Rich", "The One Thing",
    "Start With Why", "Ikigai", "Rich Dad Poor Dad", "7 Secrets of Persuasion",
    "The Art of Thinking Clearly", "Eat That Frog", "How to Win Friends and Influence People",
    "The Psychology of Money", "The Compound Effect", "The New One Minute Manager",
    "The Leader In You", "The Power of Your Subconscious Mind", "Never Split the Difference",
    "How to Talk to Anyone", "Deep Work", "Instant Self-Hypnosis"
  ];

  return (
    <div className="container">
      <h1 className="text-5xl font-extrabold mb-12 text-center">
        Skills and Hobbies
      </h1>
      <div className="flex justify-evenly my-8">
        <h2 className="text-2xl w-[50vw]"><span className='font-bold mr-3'>#1</span> Programming Languages</h2>
        <ul className="flex gap-2 w-[50vw] flex-wrap">
          {programmingLanguages.map((language, index) => (
            <li key={index} className="border text-sm rounded-sm px-1 flex items-center text-green-700">
              {["Python", "Javascript", "Node.js", "C++"].includes(language) && <Code className="mr-1 text-purple-700" size={15} />}
              {language}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex justify-evenly my-8">
        <h2 className="text-2xl w-[50vw]"> <span className='font-bold mr-3'>#2</span>Frameworks & Open Source</h2>
        <ul className="flex gap-2 w-[50vw] flex-wrap">
          {frameworksAndOpenSource.map((framework, index) => (
            <li key={index} className="border text-sm rounded-sm px-1 flex items-center text-blue-700">
              {["Next.js", "Docker", "AWS", "Google Cloud Service"].includes(framework) && <Cpu className="mr-1 text-green-700" size={15} />}
              {framework}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex justify-evenly my-8">
        <h2 className="text-2xl w-[50vw]"><span className='font-bold mr-3'>#3</span>Drug Discovery Tools</h2>
        <ul className="flex gap-2 w-[50vw] flex-wrap">
          {drugDiscoveryTools.map((tool, index) => (
            <li key={index} className="border text-sm rounded-sm px-1 flex items-center text-green-700">
              {["Rdkit", "Pymol", "Autodock vina", "Discovery Studio"].includes(tool) && <FlaskConical className="mr-1 text-green-700" size={15} />}
              {tool}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex justify-evenly my-8">
        <h2 className="text-2xl w-[50vw]"><span className='font-bold mr-3'>#4</span>Books</h2>
        <ul className="flex gap-2 w-[50vw] flex-wrap">
          {books.map((book, index) => (
            <li key={index} className="border text-sm rounded-sm px-1 flex items-center  text-blue-700">
              {["The 4 Hours Work Week", "Elon Musk - Ashlee Vance", "Outliers", "Rich Dad Poor Dad", "The Art of Thinking Clearly"].includes(book) && <BookOpen className="mr-1 text-green-700" size={15}/>}
              {book}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;


// import { Separator } from '@/components/ui/separator';
// import { Code, Cpu, FlaskConical, BookOpen } from 'lucide-react';
// import React from 'react';

// function Skills() {
//   const programmingLanguages = [
//     "Python", "Javascript", "Typescript", "Node.js", "Julia", "React.js", "C++", "C",
//     "Tailwind CSS", "Slate.js", "Framer Motion"
//   ];

//   const frameworksAndOpenSource = [
//     "Next.js", "Blender", "Remix.js", "Redhat", "CCNA", "AWS", "Docker",
//     "Google Cloud Service", "Github", "System Design", "Firebase Firestore",
//     "Google Cloud Storage", "Flutter", "Pub/Sub", "Microsoft Excel",
//     "Microsoft Word", "Pandas"
//   ];

//   const drugDiscoveryTools = [
//     "Rdkit", "Open Babel API", "Pymol", "Dataset filteration", "Discovery Studio",
//     "Autodock vina", "Chemdraw 3d", "Sorcery Dock"
//   ];

//   const books = [
//     "The 4 Hours Work Week", "Elon Musk - Ashlee Vance", "The Warren Buffett Way",
//     "Outliers", "Influence", "Zero to One", "Think and Grow Rich", "The One Thing",
//     "Start With Why", "Ikigai", "Rich Dad Poor Dad", "7 Secrets of Persuasion",
//     "The Art of Thinking Clearly", "Eat That Frog", "How to Win Friends and Influence People",
//     "The Psychology of Money", "The Compound Effect", "The New One Minute Manager",
//     "The Leader In You", "The Power of Your Subconscious Mind", "Never Split the Difference",
//     "How to Talk to Anyone", "Deep Work", "Instant Self-Hypnosis"
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8 bg-white  rounded-lg">
//       <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
//         Skills and Hobbies
//       </h1>

//       {[
//         { title: "Programming Languages", items: programmingLanguages, icon: <Code size={18} /> },
//         { title: "Frameworks & Open Source", items: frameworksAndOpenSource, icon: <Cpu size={18} /> },
//         { title: "Drug Discovery Tools", items: drugDiscoveryTools, icon: <FlaskConical size={18} /> },
//         { title: "Books", items: books, icon: <BookOpen size={18} /> }
//       ].map((section, index) => (
//         <div key={index} className="my-8">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-700">{section.title}</h2>
//           <ul className="flex flex-wrap gap-3">
//             {section.items.map((item, idx) => (
//               <li key={idx} className="border border-blue-200 rounded-md px-2 py-1 bg-blue-50 text-blue-900 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-blue-100 hover:shadow-md flex items-center space-x-1">
//                 {["Python", "Javascript", "Node.js", "C++", "Next.js", "Docker", "AWS", "Google Cloud Service", "Rdkit", "Pymol", "Autodock vina", "Discovery Studio", "The 4 Hours Work Week", "Elon Musk - Ashlee Vance", "Outliers", "Rich Dad Poor Dad", "The Art of Thinking Clearly"].includes(item) && (
//                   <span className="text-green-700">{section.icon}</span>
//                 )}
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//           {index < 3 && <Separator className="my-6" />}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Skills;
