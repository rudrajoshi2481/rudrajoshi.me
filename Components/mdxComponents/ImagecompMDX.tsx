import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image"
function ImagecompMDX({src,height,width,caption,layout}:any) {

    
    
    

  return (
    <Box p="3" m="3" >
        <Image src={src}   sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" quality={5} layout={layout ? layout : "responsive"} height={height ? height : "1"} width={width ? width : "2"}/>
        <Text py="2"  fontWeight="thin" color="grey">{caption}</Text>
    </Box>
  )
}

export default ImagecompMDX