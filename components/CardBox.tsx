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

function CardBox({ title, tags, description, awards, links }: any) {
  return (
    <Box
    key={title}
      _hover={{ cursor: "pointer", background: "#fdf8e9" }}
      pos={"relative"}
      minW={"300"}
    >
      {awards ? (
        <Text zIndex={"5"} right="-6" top="-2" pos={"absolute"}>
          <Tag variant={"solid"} background="#FF8080">
            Won Gov Grant <br /> ₹1,20,000
          </Tag>
        </Text>
      ) : null}
      <Card
        minH={"450"}
        maxH={"450"}
        borderRadius={"5"}
        p="4"
        border={"1px solid gray"}
        maxW={"350"}
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
        <Text noOfLines={[7, 7, 7]}>{description}</Text>
        {links.name ? (
          <Box>
    <Link href={links.link}  target="_blank">        <Button
              pl="0"
              background={"none"}
              _hover={{ background: "none" }}
              variant={"ghost"}
              color={"green.600"}
              as="u"
            >
              {" "}
              👉 {links.name}
            </Button></Link>
          </Box>
        ) : null}
      </Card>
    </Box>
  );
}

export default CardBox;
