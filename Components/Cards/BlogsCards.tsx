import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function BlogsCards({title,link}:any) {
  return (
    <Box p="9" m="3" border={"solid"} borderColor="gray.600" maxW={"350"}>
        <Heading >{title}</Heading>
        <Text color={"gray.100"}  py="4">Dolor mollit excepteur sint occaecat laborum ullamco est officia cupidatat ex.</Text>
        <Link href={link}><Button variant={"link"} size="sm" colorScheme="green" >Read Blog</Button></Link>
    </Box>
  )
}

export default BlogsCards