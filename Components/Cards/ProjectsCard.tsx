import { Box, Button, Code, Heading, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function ProjectsCard({title,lib,link}:any) {
  return (
    <Box p="6" m="3" border={"solid"} borderColor="gray.600" minW={"350"}>
      <Tag colorScheme={"green"}>New</Tag>
        <Heading >{title}</Heading>
        
          <Code my="2">Libraries used</Code>
        <UnorderedList mb="3">
        {
          lib.map((e:any) => {
            return <ListItem key={e}>{e}</ListItem>
          })
        }
        </UnorderedList>
        {/* <Text  py="4">Dolor mollit excepteur sint occaecat laborum ullamco est officia cupidatat ex.</Text> */}
        <Link target={"_blank"} href={link}><Button variant={"link"} color="green.500">Github</Button></Link>
    </Box>
  )
}

export default ProjectsCard