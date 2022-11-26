import {
  Box,
  Button,
  Collapse,
  Heading,
  Input,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";
import { blogs } from "./BlogIndexes/indexBlogs";
import { DrawerComp } from "./DrawercomponentBlogs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function Navbar() {
  const [isLargerThan1800] = useMediaQuery("(min-width: 1800px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!isLargerThan1800) {
    return (
      <>
        <DrawerComp isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </>
    );
  } else {
    return (
      <Box
        // position={"absolute"}
        position={"fixed"}
        maxW="300"
        left="0"
        borderRight={"1px solid green"}
        borderTop={"1px solid green"}
        h="full"
      >
        <Heading display={"flex"} alignItems="center" p="2" m="2" fontSize={"x-large"}>
          {/* 🎯☠  */}
          Articles  <Text ml="2" fontSize={"xxx-large"}>🗿</Text>
        </Heading>

        <UnorderedList>
          {blogs.map((r) => {
            return <ListComp blogs={r} key={r}/>;
          })}
        </UnorderedList>
      </Box>
    );
  }
}

const ListComp = ({ blogs }: any) => {
  const { isOpen, onToggle } = useDisclosure()
  const [subPagesLength,setSubPagesLength] = useState(0)
// useEffect(() => {
//   if(blogs.alwaysOpen){
//     onToggle();
//   }

//   setSubPagesLength(blogs.subPages.length)


// },[])

  return (
    
      <ListItem key={blogs.name} fontWeight={"bold"} p="1" m="1" listStyleType={"none"}>
        <Box onClick={onToggle} display={"flex"} justifyContent="space-between">
          
        <Text  color={"green.300"}>{blogs.name}</Text>
          <Box display={"flex"} alignItems="center" transform={{rotate:"60deg"}} >
        {/* <Tag colorScheme={"green"} mr="2">subpages : {subPagesLength}</Tag> */}
          {
            isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />
          }
          
          
          </Box>
        </Box>
      <Collapse in={isOpen} animateOpacity>
      <UnorderedList>
          {blogs.subPages.map((e: any) => {
            return (
              <ListItem
                p="1"
                m="1"
                key={e.link}
                _hover={{ color: "yellow.500" }}
              >
                <Link href={e.link}>{e.name}</Link>
              </ListItem>
            );
          })}
        </UnorderedList></Collapse>
      </ListItem>
    
  );
};

export default Navbar;
