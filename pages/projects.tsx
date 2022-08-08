import { Box, Container, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function Projects() {
  return (
    <Box>
        <Container maxW={"container.xl"}>
            <Heading my="9">Art created using Blender 🔥</Heading>
            <Box display={"flex"} flexWrap="wrap">
              <ImagesComp src={"/images/01.jpg"}  />
              <ImagesComp src={"/images/02.jpg"}  />
              <ImagesComp src={"/images/03.jpg"}  />
              <ImagesComp src={"/images/04.jpg"}  />
              <ImagesComp src={"/images/05.jpg"}  />
              <ImagesComp src={"/images/06.jpg"}  />
              <ImagesComp src={"/images/07.jpg"}  />
              <ImagesComp src={"/images/08.jpg"}  />
              </Box>
        </Container>
    </Box>  
  )
}


const ImagesComp = ({src}:any) => {
  return <Box m="3" justifyContent={"space-between"} >
            <Image src={src} alt="image"  layout="fixed" height={350} width={350} />
  </Box>
}


export default Projects