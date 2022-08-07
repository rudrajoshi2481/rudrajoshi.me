import { Box, Button, Code, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

function ProjectsCard({title,lib}:any) {
  return (
    <Box p="6" m="3" border={"solid"} borderColor="gray.600" minW={"350"}>
        <Heading >{title}</Heading>
        
          <Code my="2">Libraries used</Code>
        <UnorderedList>
        {
          lib.map((e:any) => {
            return <ListItem key={e}>{e}</ListItem>
          })
        }
        </UnorderedList>
        {/* <Text  py="4">Dolor mollit excepteur sint occaecat laborum ullamco est officia cupidatat ex.</Text> */}
        <Button variant={"link"} color="green.500">Github</Button>
    </Box>
  )
}

export default ProjectsCard