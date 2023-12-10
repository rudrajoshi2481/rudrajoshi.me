import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Noto_Serif_Old_Uyghur } from "next/font/google";
import Link from "next/link";
const NotoFonts = Noto_Serif_Old_Uyghur({
  subsets: ["latin"],
  weight: ["400"],
});

function CardBox({ title, tags, description, awards, links, height }: any) {
  return (
    <Box
      key={title}
      _hover={{ cursor: "", background: "#fdf8e9" }}
      pos={"relative"}
      minW={"300"}
    >
      {awards ? (
        <Text zIndex={"5"} right="-6" top="-2" pos={"absolute"}>
          <Tag variant={"solid"} background="#FF8080">
            Won SSIP Grant <br /> ₹1,20,000
          </Tag>
        </Text>
      ) : null}
      <Card
        minH={height === "small" ? "450" : "450"}
        maxH={height === "small" ? "450" : "450"}
        borderRadius={"5"}
        p="4"
        border={"1px solid gray"}
        maxW={height === "small" ? "350" : "350"}
      >
        <Heading className={NotoFonts.className}>{title}</Heading>
        <Box display={"flex"} flexWrap={"wrap"}>
          {tags.map((e: any) => {
            return (
              <Badge
                key={e}
                maxW={"fit-content"}
                colorScheme={"green"}
                variant={"solid"}
                m="1"
              >
                {e}
              </Badge>
            );
          })}
        </Box>
        <Divider my="2" />
        <Text noOfLines={[6, 6, 6]}>{description}</Text>
        {links.name ? (
          <Box pos={"absolute"} bottom={"0"} mb="3" ml="3" >
            <Link href={links.link} target="_blank">
              {" "}
              <Button
                pl="0"
                background={"none"}
                _hover={{ background: "none" }}
                variant={"ghost"}
                color={"blue.600"}
                as="u"
              >
                {" "}
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                >
                  <path
                    d="M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6"
                    stroke="currentColor"
                  ></path>
                </svg>{" "}
                <Text ml="3">{links.name}</Text>
              </Button>
            </Link>
          </Box>
        ) : null}
      </Card>
    </Box>
  );
}

export default CardBox;
