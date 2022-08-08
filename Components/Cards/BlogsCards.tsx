import { Box, Button, Heading, Tag, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function BlogsCards({title,link,para}:any) {
  return (
    <Box p="9" m="3" border={"solid"} borderColor="gray.600" maxW={"350"}>
      <Tag colorScheme={"green"}>New</Tag>
        <Heading >{title}</Heading>
        <Text color={"gray.100"}  py="4">{para}</Text>
        <Link href={link}><Button variant={"link"} size="sm" colorScheme="green" >Read Blog</Button></Link>
    </Box>
  )
}

export default BlogsCards