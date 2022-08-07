import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Box,
  ChakraProvider,
  Code,
  ColorModeScript,
  Container,
  extendTheme,
  Heading,
  Text,
  ThemeConfig,
} from "@chakra-ui/react";
import Appbar from "../Components/Appbar/Appbar";
import { MDXProvider } from '@mdx-js/react'
import Image from "next/image"
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });


const components:any = {
    
  h1:(props:any) => <Heading my="6" color={"green.600"} className={"gfonts"} {...props} fontSize={"6xl"} />,
  h2: (props:any) => <Heading color={"green.600"} {...props} fontSize={"5xl"} />,
  h3: (props:any) => <Heading {...props} color={"green.600"} fontSize={"4xl"} />,
  h4: (props:any) => <Heading {...props} fontSize={"3xl"} color={"green.600"}/>,
  h5: (props:any) => <Heading {...props} fontSize={"2xl"} color={"green.600"}/>,
  h6: (props:any) => <Heading {...props} fontSize={"xl"} color={"green.600"}/>,
  p: (props:any) => <Text maxW={"900"} textColor="white" py="3" {...props}  fontSize={"xl"}/>,
  code:(props:any) => <Box maxW={"900"}  my="6" border="1px solid green"  display={"flex"} flexWrap="wrap" overflowY={"hidden"} p="3" overflowX="scroll" textColor="gray.500" py="3" {...props}  />,
  
  
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Appbar />
      <Container maxW={"container.xl"}>
      <Component {...pageProps} />
      </Container>
    </ChakraProvider>
     </MDXProvider>
  );
}

export default MyApp;
