import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { AtSign, MapPinIcon as MapPinHouse, MoveUpRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HeroComponent() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
        <ImageComponent />
        <MetaDataComp />
      </div>
    </div>
  )
}

const MetaDataComp = () => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Hey, I{"'"}m Rudhra Joshi.
      </h1>
      <p className="mb-4 text-xl font-semibold text-muted-foreground md:text-2xl">
        MS in Bioinformatics & Bachelor{"'"}s in Pharmacy
      </p>
      <p className="mb-6 max-w-2xl text-base text-muted-foreground md:text-lg">
        Bioinformatics Researcher with a focus on drug discovery, single-cell sequencing, and computational biology. Extensive
        experience in developing bioinformatics software, automating research workflows, and leveraging cloud computing platforms.
        Proficient in Python, R, and high-throughput data analysis, with a commitment to applying computational approaches to advance
        medical research.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
          <Link href="https://www.linkedin.com/in/rudrajoshi2481" target="_blank" rel="noopener noreferrer">
            Contact me
            <MoveUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link
            href="https://maps.app.goo.gl/f7JW86LNFPFwp5fTA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <MapPinHouse className="h-4 w-4" />
            <span>Glassboro, New Jersey, USA</span>
          </Link>
          <Link
            href="mailto:rudrajoshi2481@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <AtSign className="h-4 w-4" />
            <span>rudrajoshi2481@gmail.com</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

const ImageComponent = () => {
  return (
    <div className="w-64 flex-shrink-0 md:w-72 lg:w-80">
      <AspectRatio ratio={1} className="overflow-hidden rounded-full bg-muted">
        <Image
          src="/Rowan-University.jpeg"
          alt="Rudhra Joshi"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
        />
      </AspectRatio>
    </div>
  )
}