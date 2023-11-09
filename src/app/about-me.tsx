import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";


function About() {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <Heading fontSize={"6xl"} py="6">
          I{"'"}m Rudra Joshi
        </Heading>
        <Box fontSize={"xl"}>
          <Text py="2">
            {" "}
            Yes you heard it right i am a pharmacy student , but i am really
            passionate about computers{" "}
          </Text>
          <Text py="2">
            {" "}
            So when i was in 12th i decided to join{" "}
            <Text as="samp">IANT Instution</Text> to start my programming
            journey ..., I spent more than 2 years learning about Softwares and
            Hardwares
          </Text>
          <Text>From then I have been practicing Frontend ,Backend. and programming from last more than 4 years . I have worked on many collage based projects and i am really passionate about learning new things</Text>
         <Box py="6" display={"flex"} justifyContent="space-evenly">
          <UnorderedList flex={1}>
            <Heading py="1">SOFTWARE</Heading>
            <ListItem>C++</ListItem>
            <ListItem>C lang</ListItem>
            <ListItem>JAVA</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Javascript</ListItem>
          </UnorderedList>
          <UnorderedList flex={1}>
          <Heading py="1">HARDWARE</Heading>
            <ListItem>Redhat</ListItem>
            <ListItem>System Repair</ListItem>
            <ListItem>Docker</ListItem>
            <ListItem>CISCO</ListItem>
            <ListItem>Ethical Hacking</ListItem>
            <ListItem>Networking</ListItem>
          </UnorderedList>
         </Box>
         <Text>I have worked on graphics using Blender [i have a dream of developing games 😅,in unity i even gave a try to unreal engine but my pc gave up😂]</Text>
        </Box>
        <Heading py="3">Side Hobbies</Heading>
        <Text>I have hobbies of reading books and by books means lots of books that ,everyone call it a library </Text>
      </Container>
      
    </Box>
  );
}

export default About;
