import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {Rasa} from 'next/font/google';
import Link from "next/link";
const RasaFonts = Rasa({ subsets: ["latin"], weight: ["600", "700"] });
function PopUp() {
  return (
    <Box position={"sticky"} bottom={"0"} mr="16" flexDir={"column"} display={"flex"}  alignItems={"flex-end"} pb="6">
      <Box >
        <Text>Email: rudrajoshi2481@gmail.com</Text>
        <Text>Instagram: <Link href="http://instagram.com/rudra._joshi">ruda._joshi</Link></Text>
      </Box>
    </Box>
  );
}

export default PopUp;
