"use client";
import { cn } from "@/lib/utils";
import React from "react";

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { MoleculeEditor } from "./MoleculeEditor/Index";

export function ProjectBentoGrid() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}


const SkeletonOne = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className="relative w-full h-full">
    <Image
      alt="image"
      src="/protein.jpeg"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
    />
  </div>
  );
};
const SkeletonMolecularEditor = () => {
  return(
    <div>
      <MoleculeEditor />
    </div>
  )
};
const SkeletonFive = () => {
  
  return (
    <div className="relative w-full h-full">
    <Image
      alt="image"
      src="/oxytocin.jpeg"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
    />
  </div>
  );
};
const items = [
 
  {
    title: "Designing and Evaluating Anticancer Drugs for Triple-Negative Breast Cancer",
    description: (
      <span className="text-sm truncate text-pretty">
        I received a 120,000 INR grant from SSIP Hub to lead a team in designing, synthesizing, and studying the anticancer activity of drugs for triple-negative breast cancer. 
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ketcher Molecular Editor in React",
    description: (
      <span className="text-sm">
        I implemented a chemdraw like molecular editor in React Framework.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-2",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sorcery Labs",
    description: (
      <span className="text-sm ">
      An innovative platform for bioinformatics professionals, offering intuitive molecule editing, version control, text and flow editors, and seamless molecular docking capabilities—all in one streamlined environment.
      
     
      </span>
    ),
    header: <SkeletonMolecularEditor />,
    className: "md:row-span-2 md:col-span-3 ",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

];
