import { Box, Divider, Heading, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Head from "next/head"
function BlogTitle({title,description}:any) {

    const { colorMode, toggleColorMode } = useColorMode()

    


  return (
    <>
    <Box py="3" my="3">
    <Head >
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={title} />
        <meta name="author" content="Rudra Joshi" />
      </Head>
        <Heading className='courier-fonts' fontSize={"4xl"} color="green.500">{title}</Heading>
        <Text pt="2"  fontWeight={"light"} fontSize="large" >{description}</Text>
    </Box>
        <Box py="3" my="3">
        <Divider />
        </Box>
        </>
  )
}

export default BlogTitle