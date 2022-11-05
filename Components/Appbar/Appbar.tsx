import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/router";
function Appbar() {

  const router = useRouter()


  

  return (
    <>
      <DrawerComp />
      <Box display={"flex"} justifyContent="center" py="6">
        <UnorderedList
          alignItems={"center"}
          display={"flex"}
          className="mobileDisplay"
          justifyContent="center"
          listStyleType={"none"}
        >
          <ListItem  px="3">
            <Link href="/">
              <Text color={router.route == "/" ? "green" : "white"}  fontSize={"2xl"}>
                <AiOutlineHome />
              </Text>
            </Link>
          </ListItem>
          <ListItem color={router.route == "/about-me" ? "green" : "white"}  px="3">
            <Link  href="/about-me">About Me</Link>
          </ListItem>
          <ListItem px="3">
            <Link href="/projects">
              <Text color={router.route == "/projects" ? "green" : "white"} >Projects {"&"} Graphics</Text>
            </Link>
          </ListItem>
          <ListItem px="3">
            <Link href="/articles/demo">
              <Text color={"articles" == router.pathname.split("/")[1] ? "green" : "white"} >Articles</Text>
            </Link>
          </ListItem>
          
          {/* <ListItem px="3"><Link href="/blogs">Blogs</Link></ListItem> */}
          {/* <ListItem px="3"><Link href="/contact">Contact Me</Link></ListItem> */}
        </UnorderedList>
      </Box>
    </>
  );
}

const DrawerComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <Box className="desktopDisplay">
      <Button m="3" onClick={(e) => onOpen()}>
        <GiHamburgerMenu />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Link href="/">Rudra Joshi</Link>
          </DrawerHeader>
          <DrawerBody>
            <UnorderedList listStyleType={"none"}>
              <ListItem my="6">
                <Link href="/">
                  
                  <Text>
                    
                    <AiOutlineHome />
                  </Text>
                </Link>
              </ListItem>
              <ListItem my="6">
                <Link href="/about-me"> About Me</Link>
              </ListItem>
              <ListItem my="6">
                <Link href="/projects">
                  <Text> Projects {"&"} Graphics</Text>
                </Link>
              </ListItem>

              {/* <ListItem my="6"><Link href="/projects">👉 All Projects</Link></ListItem> */}
              {/* <ListItem my="6"><Link href="/blogs">👉 Blogs</Link></ListItem> */}
              {/* <ListItem my="6"><Link href="/contact">👉 Contact Me</Link></ListItem> */}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Appbar;
