"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import "./globals.css";
import { Poppins, Rasa } from "next/font/google";
import Link from "next/link";
import ScrollAnimation from "../../components/ScrollAnimation";
import dynamic from "next/dynamic";
// const ScrollAnimation = dynamic(() => import("../../components/ScrollAnimation"),{ssr:false})
import CardBox from "../../components/CardBox";
import { useState } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
// import ModelViewer from "../../components/ModelBox";
const PoppinsFonts = Poppins({ subsets: ["latin"], weight: ["400", "200"] });
import { useMediaQuery } from "@chakra-ui/react";
const RasaFonts = Rasa({ subsets: ["latin"], weight: ["600", "700"] });

const ProteinModel = dynamic(() => import("../../components/ModelBox"), {
  ssr: false,
});
function Index() {
  const [ProjectArray, setProjectArray] = useState([
    {
      title: "Design Drugs : Triple Negative Brest Cancer",
      tags: ["pharmaceutical Research", "Medicinal Chemistry"],
      description:
        "Awarded a grant by the Gujarat government for spearheading the design and synthesis of a novel drug targeting triple negative breast cancer. Leveraged open-source tools such as Autodock, RDKit, and ChemBL database to pioneer advancements in pharmaceutical research and development.",
      links: {
        name: "",
        link: "",
      },
      award: true,
    },
    {
      title: "Sorcery Dock : A Molecular Docking Software",
      tags: [
        "Full-Stack Software",
        "React.js",
        "Express",
        "Google Cloud Provider",
      ],
      description:
        "Sorcery Dock, my brainchild, is a pharmaceutical research web application that simplifies parallel molecular docking. With a click of a button and a drawn molecule, it seamlessly performs docking on the server side. Streamlining the process for efficient and user-friendly pharmaceutical research.",
      links: {
        name: "www.sorcery.rudrajoshi.me",
        link: "https://sorcery.rudrajoshi.me",
      },
      award: false,
    },
    {
      title: "System Design : Using Google Cloud Provide",
      tags: ["pub-sub", "node.js", "sockets", "storage"],
      description:
        "In a challenging practice endeavor, I crafted a distributed system using Google services such as Pub/Sub, App Run, and Next.js in conjunction with Node.js and Python Flask. This project, with its multitude of endpoints, pushed the boundaries of complexity, providing a valuable learning experience.",
      links: {
        name: "Github link",
        link: "https://github.com/rudrajoshi2481/",
      },
      award: false,
    },
  ]);

  const [BlogsArray, setBlogsArray] = useState([
    {
      title: "How to use openbabel in python using docker.",
      tags: ["Python", "Docker", "Molecular Dynamics", "SASS"],
      description:
        "To install openbabel use conda then import pybel from openbabel or else it will not work, in case when used from openbabel bable all package were safe and sound.",
      links: {
        name: "Read Blog",
        link: "https://blogs.rudrajoshi.me/Blogs/openbable-docker",
      },
      award: false,
    },
    {
      title: "How to create Documentation using MDX.",
      tags: ["Python", "Docker", "Molecular Dynamics", "SASS"],
      description:
        "To install openbabel use conda then import pybel from openbabel or else it will not work, in case when used from openbabel bable all package were safe and sound.",
      links: {
        name: "Read Blog",
        link: "https://blogs.rudrajoshi.me/Blogs/openbable-docker",
      },
      award: false,
    },
    {
      title: "Triple Negative Breast Cancer (TNBC)",
      tags: ["Medicinal chemistry", "Research Project"],
      description: "My Research Notes on Project TNBC",
      links: {
        name: "Read Blog",
        link: "https://blogs.rudrajoshi.me/triple-negative-breast-cancer",
      },
      award: false,
    },
    {
      title: "CImGui Basics",
      tags: ["Julia", "Programming Language"],
      description:
        "CImGui is used to create a old fashion GUI's (Graphical User Interface), Best in the market right now 💖.        ",
      links: {
        name: "Read Blog",
        link: "https://blogs.rudrajoshi.me/julia/CImGui",
      },
      award: false,
    },

    {
      title: "Molecular Dynamics",
      tags: ["pharmaceutical Research", "Medicinal Chemistry"],
      description:
        "Molecular Docking is a Bio-Informatic approach which involves the prediction of a ligand protein intrections by computer-assisted-drug-design.",
      links: {
        name: "Read Blog",
        link: "https://blogs.rudrajoshi.me/molecular-docking",
      },
      award: false,
    },
    {
      title: "12 Rules for Life ",
      tags: ["Author: Jordan B Peterson", "Book"],
      description:
        " To help understand this there is an example of lobster, lobster lives on the ocean floor. ocean base is home for them where they can hunt for prey and scavenge around to eat edible bits and pieces what every it rains down from the continual chaos of carnage and death fat above. They want somewhere secure, ehere the hunting and gathering is good.",
      links: {
        name: "Read Blog",
        link: "https://blogs.rudrajoshi.me/molecular-docking",
      },
      award: false,
    },
  ]);

  // ssr-friendly media query with fallback
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const cursorCSS = {
    cursor:'url("./360.svg"),auto'
  }

  return (
    <Box>
      <Container maxW={"container.xl"}>
        <HStack flexWrap={"wrap"}>
          <Box
            py="26"
            flex={"1"}
            minW={"350"}
            justifyContent={"space-around"}
            minH={"30vh"}
          >
            <Heading
              fontSize={"xxx-large"}
              display={"flex"}
              className={RasaFonts.className}
              mt="16"
              flexWrap={"wrap"}
              color={"black"}
            >
              Hey I{"'"}m{" "}
              <Text ml="2" color={"green.600"}>
                {" "}
                Rudhra Joshi.
              </Text>
            </Heading>
            <Text
              display={"flex"}
              flexWrap={"wrap"}
              maxW={"850"}
              fontSize={"xl"}
              mt="2"
              className={PoppinsFonts.className}
              color={"black"}
            >
              I{"'"}m a Final Year{" "}
              <Text px="2" as="u" color="green.600">
                Pharmacy Student
              </Text>{" "}
              with a passion for{" "}
              <Text as="u" color={"green.600"} px="2">
                Software Development.
              </Text>{" "}
            </Text>
            <Tag mt="5" colorScheme="green">
              About me.
            </Tag>
            <Text
              maxW={"650"}
              color={"black"}
              className={PoppinsFonts.className}
              fontSize={"xl"}
            >
              Enthusiastic about pharmaceutical projects and equally passionate
              about creating innovative software solutions. Final year pharmacy
              student with a dual love for science and coding, seeking to bridge
              the gap between healthcare and technology.
            </Text>
            <ButtonGroup mt="4">
              <Link href="https://github.com/rudrajoshi2481/" target="_blank">
                <Button size={"md"} colorScheme="green" variant={"outline"}>
                  Github Profile
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
          <Box _hover={{
            cursor:'url("./360.svg"),auto'
          }} flex={"1"} height={"45vh"} mt="3" width={"35vw"}>
            {/* <Text textAlign={"center"} bottom={"15"}>PDB ID : 7aad</Text> */}
            <ErrorBoundary>
              <Link href="https://doi.org/10.2210/pdb7AAD/pdb" target="_blank">
                <Box
                  _hover={{
                    color: "blue.600",
                  }}
                  w="full"
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text align={"center"}>PDB ID: 7AAD</Text>
                  <Text maxW={"320"} align={"center"}>
                    Crystal structure of the catalytic domain of human PARP1 in
                    complex with olaparib
                  </Text>
                </Box>
              </Link>
              <ProteinModel />
            </ErrorBoundary>
          </Box>
        </HStack>
        <Box mt="6">
          <ScrollAnimation />
        </Box>
        <Divider mt="6" borderColor={"yellow.400"} />
        <Box mt="6">
          <Heading className={PoppinsFonts.className} color={"black"}>
            Projects.
          </Heading>
          <Text mt="2" color={"gray.600"} textAlign={"justify"}>
            In the past couple of years, I{"'"}ve seamlessly navigated both
            pharmaceutical research projects and the development of software
            tailored for the industry. My portfolio reflects a dynamic skill
            set, bridging the gap between hands-on research and cutting-edge
            technology in the pharmaceutical sector.
          </Text>
        </Box>
        <Box w="full" display={"flex"}>
          <Flex flex="2" gap="6" flexWrap={"wrap"} my="6">
            {ProjectArray.map((e) => {
              return (
                <>
                  <CardBox
                    title={e.title}
                    tags={e.tags}
                    description={e.description}
                    awards={e.award}
                    links={e.links}
                  />
                </>
              );
            })}
          </Flex>
          {/* <Flex justifyContent={"flex-start"} flex="1">
            All the tags are going to be here...
          </Flex> */}
        </Box>
        <Divider mt="6" borderColor={"yellow.400"} />
        <Box mt="6">
          <Heading className={PoppinsFonts.className} color={"black"}>
            Blogs.
          </Heading>
          <Text mt="2" color={"gray.600"} textAlign={"justify"}>
            In the past couple of years, I{"'"}ve seamlessly navigated both
            pharmaceutical research projects and the development of software
            tailored for the industry. My portfolio reflects a dynamic skill
            set, bridging the gap between hands-on research and cutting-edge
            technology in the pharmaceutical sector.
          </Text>
        </Box>
        <Box w="full" display={"flex"}>
          <Flex flex="2" gap="6" flexWrap={"wrap"} my="6">
            {BlogsArray.map((e) => {
              return (
                <>
                  <CardBox
                    height="small"
                    title={e.title}
                    tags={e.tags}
                    description={e.description}
                    awards={e.award}
                    links={e.links}
                  />
                </>
              );
            })}
          </Flex>
          {/* <Flex justifyContent={"flex-start"} flex="1">
            All the tags are going to be here...
          </Flex> */}
        </Box>
      </Container>
    </Box>
  );
}

export default Index;
