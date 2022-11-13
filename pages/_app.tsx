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
  ListItem,
  Text,
  ThemeConfig,
  UnorderedList,
} from "@chakra-ui/react";
import Appbar from "../Components/Appbar/Appbar";
import { MDXProvider } from "@mdx-js/react";
import {useRouter} from "next/router"

import Link from "next/link"

const components: any = {
  h1: (props: any) => <Heading {...props} fontSize={"6xl"} />,
  h2: (props: any) => <Heading {...props} fontSize={"5xl"} />,
  ul: (props: any) => <UnorderedList {...props}/>,
  li: (props: any) => <ListItem {...props}/>,
  h3: (props: any) => <Heading {...props} fontSize={"4xl"} />,
  h4: (props: any) => <Heading {...props} fontSize={"3xl"} />,
  h5: (props: any) => <Heading {...props} fontSize={"2xl"} />,
  em: (props: any) => <Text  {...props}  as="i" color="green.500" />,
  h6: (props: any) => <Heading {...props} fontSize={"xl"} />,
  p: (props: any) => <Text {...props} fontSize={"xl"} />,

  a:(props: any) => <Text color={"blue.400"}><Link  {...props} ></Link></Text>,
  code: (props: any) => <Code {...props} background="none" py="3" my="3" fontSize={"xl"} />,
};





function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};





// 3. extend the theme
const theme = extendTheme({ config });


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
