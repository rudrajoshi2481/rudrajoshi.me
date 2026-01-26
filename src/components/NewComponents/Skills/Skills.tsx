import { Separator } from '@/components/ui/separator';
import { Code, Cpu, FlaskConical, BookOpen } from 'lucide-react';
import React from 'react';

function Skills() {
  const programmingLanguages = [
    "Python", "Javascript", "Typescript", "Node.js", "Julia", "React.js", "C++", "C",
    "Tailwind CSS", "Slate.js", "Framer Motion", "Bash", "PyTorch"
  ];

  const frameworksAndOpenSource = [
    "Next.js", "Blender", "Remix.js", "Redhat", "CCNA", "AWS", "Docker",
    "Google Cloud Service", "Github", "System Design", "Firebase Firestore",
    "Google Cloud Storage", "Flutter", "Pub/Sub", "Microsoft Excel",
    "Microsoft Word", "Pandas", "Numpy", "Sklearn", "ec2", "s3", "MiniIO",
    "Nginx", "CI/CD", "Fast AI", "MongoDB", "Vercel", "Shadcn UI"
  ];

  const sequencingOmics = [
    "RNA-seq", "ChIP-seq", "Hi-C Seq", "ChIA-PET", "HiChIP", "DESeq2", "Variant Analysis",
    "Scanpy", "Single-cell Analysis", "Multi-omics Analysis", "Pipeline Development",
    "Statistical Analysis", "Chr3D", "Various Databases (Promoter/Enhancer, ClinVar)"
  ];

  const drugDiscoveryTools = [
    "RDKit", "Autodock", "Autodock Vina", "rDock", "Pymol", "Discovery Studio",
    "Chemdraw 3d", "Sorcery Dock", "Open Babel API", "Dataset Filteration", "Schrodinger",
    "Molecular Docking"
  ];

  const deepLearningArchitectures = [
    "Attention Architecture (All Variants)", "CNN", "Diffusion (Flow Matching)", "AE/VAE", "UNET",
    "Hyena", "Transformers", "Evoformer", "CLIP Architecture", "BERT", "HyenaDNA",
    "AlphaFold 2/3", "ESM-2", "Chai-1", "DNABERT", "Reinforcement Learning",
    "21+ Reimplementation of Bioinformatics Models", "PointMAE Finetuning",
    "Experience Training on 8x A100 GPUs", "LangChain RAG System", "Ollama",
    "Genomic Data Processing", "Feature Extraction"
  ];

  const pharmaceuticalScience = [
    "Pharmaceutics 1/2/3", "Pharmacology 1/2/3", "Medicinal Chemistry 1/2/3",
    "Pharmacognosy 1/2/3", "Organic Chemistry 1/2", "Inorganic Chemistry 1/2",
    "Microbiology"
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
      <h1 className="text-4xl font-bold mb-12 tracking-tight text-slate-900">
        Skills and Hobbies
      </h1>
      <div className="flex justify-evenly my-8">
        <h2 className="text-xl w-[50vw]"><span className='font-bold mr-3'>#1</span> Programming Languages</h2>
        <ul className="flex gap-2 w-[80vw] flex-wrap">
          {programmingLanguages.map((item, index) => (
            <li key={index} className="text-sm rounded px-2 py-0.5 flex items-center bg-slate-100" style={{
              color: "#40513B"
            }}>
              <Code className="mr-1 text-slate-500" size={14} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="bg-slate-200" />
      <div className="flex justify-evenly my-8">
        <h2 className="text-xl w-[50vw]"><span className='font-bold mr-3'>#2</span> Frameworks & Open Source</h2>
        <ul className="flex gap-2 w-[80vw] flex-wrap">
          {frameworksAndOpenSource.map((item, index) => (
            <li key={index} className="text-sm rounded px-2 py-0.5 flex items-center bg-slate-100" style={{
              color: "#628141"
            }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="bg-slate-200" />
      <div className="flex justify-evenly my-8">
        <h2 className="text-xl w-[50vw]"><span className='font-bold mr-3'>#3</span> Sequencing & Omics</h2>
        <ul className="flex gap-2 w-[80vw] flex-wrap">
          {sequencingOmics.map((item, index) => (
            <li key={index} className="text-sm rounded px-2 py-0.5 flex items-center bg-slate-100">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="bg-slate-200" />
      <div className="flex justify-evenly my-8">
        <h2 className="text-xl w-[50vw]"><span className='font-bold mr-3'>#4</span> Drug Discovery Tools</h2>
        <ul className="flex gap-2 w-[80vw] flex-wrap">
          {drugDiscoveryTools.map((item, index) => (
            <li key={index} className="text-sm rounded px-2 py-0.5 flex items-center bg-slate-100">
              <FlaskConical className="mr-1 text-slate-500" size={14} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="bg-slate-200" />
      <div className="flex justify-evenly my-8">
        <h2 className="text-xl w-[50vw]"><span className='font-bold mr-3'>#5</span> Deep Learning & AI Architectures</h2>
        <ul className="flex gap-2 w-[80vw] flex-wrap">
          {deepLearningArchitectures.map((item, index) => (
            <li key={index} className="text-sm rounded px-2 py-0.5 flex items-center bg-slate-100">
              <Cpu className="mr-1 text-slate-500" size={14} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="bg-slate-200" />
      <div className="flex justify-evenly my-8">
        <h2 className="text-xl w-[50vw]"><span className='font-bold mr-3'>#6</span> Pharmaceutical Science</h2>
        <ul className="flex gap-2 w-[80vw] flex-wrap">
          {pharmaceuticalScience.map((item, index) => (
            <li key={index} className="text-sm rounded px-2 py-0.5 flex items-center bg-slate-100">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="bg-slate-200" />
      <div className="flex justify-evenly my-8">
        <h2 className="text-xl w-[50vw]"><span className='font-bold mr-3'>#7</span> Books</h2>
        <ul className="flex gap-2 w-[80vw] flex-wrap">
          {books.map((book, index) => (
            <li key={index} className="text-sm rounded px-2 py-0.5 flex items-center text-teal-600 bg-slate-100">
              <BookOpen className="mr-1 text-slate-400" size={14}/>
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
