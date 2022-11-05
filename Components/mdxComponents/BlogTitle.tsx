import { Box, Heading, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

function BlogTitle({title,description}:any) {

    const { colorMode, toggleColorMode } = useColorMode()

    


  return (
    <Box py="3" my="3">
        <Heading fontSize={"xxx-large"}>{title}</Heading>
        <Text py="2" fontWeight={"light"} fontSize="large" >{description}</Text>
        
    </Box>
  )
}

export default BlogTitle