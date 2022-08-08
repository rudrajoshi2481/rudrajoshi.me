import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  ListItem,
  Spacer,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import BlogsCards from "../Components/Cards/BlogsCards";
import ProjectsCard from "../Components/Cards/ProjectsCard";
import {ImCancelCircle} from "react-icons/im"
import {GoLogoGithub} from "react-icons/go"
import Footer from "../Components/Footer/Footer";
import Link from "next/link";
function Index() {
  const TechLibraries = [
    {
      name:"chakra Ui",
      link:"https://chakra-ui.com/"
    },
    {
      name:"Figma",
      link:"https://www.figma.com/"
    },
    {
      name:"Mdxjs",
      link:"https://mdxjs.com/"
    },
    {
      name:"winston ",
      link:"https://github.com/winstonjs/winston"
    },
    {
      name:"react three.js",
      link:"https://github.com/pmndrs/react-three-fiber"
    }
  ]
  const techList = [
    {
      name:"react.js",
      link:"https://reactjs.org/"
    },
    {
      name:"git & github",
      link:"https://www.github.com"
    },
    {
      name:"next.js",
      link:"https://nextjs.org/"
    },
    {
      name:"node.js",
      link:"https://nodejs.org/en/about/"
    },
    {
      name:"express.js",
      link:"https://expressjs.com/"
    },
    {
      name:"ec2",
      link:"https://aws.amazon.com/ec2/"
    },
    {
      name:"MongoDB",
      link:"https://www.mongodb.com/"
    },
    {
      name:"firebase",
      link:"https://firebase.google.com/"
    },
    {
      name:"nginx",
      link:"https://www.nginx.com/"
    },
    {
      name:"redhat",
      link:"https://www.redhat.com/en"
    },
    {
      name:"flutter",
      link:"https://flutter.dev/",
      status:"learning"
    },
    {
      name:"blender",
      link:"https://www.blender.org/",
      // status:"learning"
    },
    {
      name:"unity Game Engine",
      link:"https://unity.com/",
      status:"learning"
    },
    {
      name:"Docker",
      link:"https://www.docker.com/",
      // status:"learning"
    },
  
  ]

  return (
    <Box>
      {/* <Container maxW={"container.lg"}> */}
        <Box height={"500"} display={"flex"} alignItems="center">
          <Box>
            <Heading fontSize={"6xl"}>
              Hey I{"'"}m <br />
            </Heading>
            <Heading colorScheme={"green"} fontSize={"6xl"} color="green.600">
              {" "}
              Rudra Joshi
            </Heading>
            <Box maxW={"container.sm"} >
              <Text py="3"  color="gray.200">
                {" "}
                Officia ad ullamco magna nostrud sunt id exercitation labore.
                Incididunt incididunt in et mollit aute. Irure aliquip anim
                mollit qui dolore.{" "}
              </Text>
              <Text color="gray.200">
                Officia ad ullamco magna nostrud sunt id exercitation labore.
                Incididunt incididunt in et mollit aute. Irure aliquip anim
                mollit qui dolore. Officia ad ullamco magna nostrud sunt id
                exercitation labore. Incididunt incididunt in et mollit aute.
                Irure aliquip anim mollit qui dolore.{" "}
              </Text>
              <Link href={"https://github.com/rudrajoshi2481"}><Button my="3" px="6" colorScheme={"green"} variant="outline"  fontSize={"6xl"}><GoLogoGithub /></Button></Link>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box py="6" display={"flex"} flexDirection="column">
          <Box>
            <Heading fontSize={"4xl"}>Hobbies {"&"} Projects 💖</Heading>
            <Box maxW={"container.sm"}>
              <Text py="3" color={"green.600"}>
                {" "}
                Officia ad ullamco magna nostrud sunt id exercitation labore.
                Incididunt incididunt in et mollit aute. Irure aliquip anim
                mollit qui dolore.{" "}
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexWrap="wrap">
            <Box flex={"1"} py="3">
              <Box py="3" display={"flex"} minW="250" flexWrap="wrap">
               <Box py="3" display={"flex"} minW="250" flexWrap="wrap">
               {
                  techList.map(e => {
                    return (<Tag
                    key={e.name}
                    p="2"
                    borderRadius={"3"}
                    listStyleType={"none"}
                    m="1"
                    color="white"
                  >
                    <Link href={e.link}>{e.name}</Link>
                  </Tag>)    
                  })
                }
               
               </Box>
              <Divider />
              <Heading fontSize={"xl"} mt="3">Libraries {"&"} Graphics</Heading>
              <Spacer />
              <Box  py="3" display={"flex"} minW="250" flexWrap="wrap">

              {
                TechLibraries.map(e => {
                  return (<Tag
                    key={e.name}
                    p="2"
                    borderRadius={"3"}
                    listStyleType={"none"}
                    m="1"
                    color="white"
                  >
                    <Link href={e.link}>{e.name}</Link>
                  </Tag>)
                })
              }
              </Box>
              </Box>
            </Box>
            <Divider orientation="vertical" />
            <Box flexWrap={"wrap"} p="3" minW="350" display={"flex"} justifyContent="flex-end" flex={"2"}>
              <ProjectsCard title="letter.js" lib={["slate.js","react.js","chakra Ui"]} link="https://github.com/rudrajoshi2481/letter.js"/>
              <ProjectsCard title="rudrajsohi.me" lib={["slate.js","next.js","chakra Ui"]} link="https://github.com/rudrajoshi2481/rudrajoshi.me-Final"/>
              <ProjectsCard title="RxLabs" lib={["slate.js","next.js","chakra Ui","firebase firestore","firebase storage","firebase hosting"]} link="https://github.com/rudrajoshi2481/RxLabs"/>
              <ProjectsCard title="Profile.js" lib={["node.js","express.js","chakra ui","framer motion","remix.js","mongodb","mongoose etc..."]}/>
              <ProjectsCard title="All Projects" lib={["react.js [remix,next,gatsby]","flutter","blender","node.js Backend etc ..."]}/>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box display={"flex"} flexDirection="column" flexWrap={"wrap"}>
          <Box py="3" maxW={"container.sm"}>
            <Heading fontSize={"4xl"}>Blogs 🔥</Heading>
            <Text py="3">
              {" "}
              Officia ad ullamco magna nostrud sunt id exercitation labore.
              Incididunt incididunt in et mollit aute. Irure aliquip anim mollit
              qui dolore.{" "}
            </Text>
          </Box>
          <Box pb="6"  display={"flex"} flexDirection="row" flexWrap={"wrap-reverse"}>
            {/* Display All Cards */}
            <Box flex="2" flexWrap={"wrap"} minW="350" display={"flex"}>
              {/* <BlogsCards title="Nginx" link="/blogs/nginx" /> */}
              <BlogsCards title="Mongo DB" link="/blogs/mongodb"/>
              <BlogsCards title="Firebase" link="/blogs/firebase"/>
              <BlogsCards title="Chakra ui" link="/blogs/chakra-ui"/>
              {/* <BlogsCards title="Blender" link="/blogs/blender"/> */}
              {/* <BlogsCards title="UI Designs" link="/blogs/ui-designs"/> */}
            </Box>
            <Box py="3"  display={"flex"} minW="250" flexWrap="wrap" flex="1" alignItems={"flex-start"}>
              <Tag
                p="2"
                borderRadius={"3"}
                listStyleType={"none"}
                m="1"
                background="green.500"
              >
                React.js {" "} <Box pl="2"><ImCancelCircle /></Box>
              </Tag>{" "}
              
              <Tag
                p="2"
                borderRadius={"3"}
                listStyleType={"none"}
                m="1"
                color="white"
              >
                React.js {" "} <Box pl="2"><ImCancelCircle /></Box>
              </Tag>{" "}
              
            </Box>
          </Box>
        </Box>
        <Divider />
        {/* <Box py="6" flexDir={"row"} justifyContent="space-evenly"  display={"flex"} flexWrap="wrap">
          <Box maxW={"350"} >
            <Heading textAlign={"center"}>About Me ✌</Heading>
            <Text my="4">
              Cupidatat nulla exercitation irure nisi nulla. Mollit sunt
              proident consequat dolore cupidatat quis reprehenderit do cillum
              laborum minim. Esse commodo ex laborum adipisicing labore sit sit
              id ipsum. Exercitation adipisicing ad eu sint nulla laboris id do
              commodo pariatur anim velit.
            </Text>
            <Button my="2" >About Me</Button>
          </Box>
          
          <Box maxW={"350"}>
            <Heading textAlign={"center"}>About Me ✌</Heading>
            <Text my="4">
              Cupidatat nulla exercitation irure nisi nulla. Mollit sunt
              proident consequat dolore cupidatat quis reprehenderit do cillum
              laborum minim. Esse commodo ex laborum adipisicing labore sit sit
              id ipsum. Exercitation adipisicing ad eu sint nulla laboris id do
              commodo pariatur anim velit.
            </Text>
            <Button my="2">About Me</Button>
          </Box>
          
          <Box maxW={"350"}>
            <Heading textAlign={"center"}>About Me ✌</Heading>
            <Text my="4">
              Cupidatat nulla exercitation irure nisi nulla. Mollit sunt
              proident consequat dolore cupidatat quis reprehenderit do cillum
              laborum minim. Esse commodo ex laborum adipisicing labore sit sit
              id ipsum. Exercitation adipisicing ad eu sint nulla laboris id do
              commodo pariatur anim velit.
            </Text>
            <Button my="2">About Me</Button>
          </Box>
        </Box> */}
      <Footer  />
      {/* </Container> */}
    </Box>
  );
}

export default Index;
