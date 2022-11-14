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
  h1: (props: any) => <Heading {...props} fontSize={"6xl"} className='courier-fonts' color={"green.500"} />,
  h2: (props: any) => <Heading  {...props} className='courier-fonts' fontSize={"3xl"} color={"green.500"}/>,
  ul: (props: any) => <UnorderedList {...props}/>,
  li: (props: any) => <ListItem {...props}/>,
  h3: (props: any) => <Heading className='courier-fonts' {...props} fontSize={"2xl"} color={"green.500"}/>,
  h4: (props: any) => <Heading className='courier-fonts' {...props} fontSize={"xl"} color={"green.500"}/>,
  h5: (props: any) => <Heading {...props} fontSize={"large"} color={"green.500"}/>,
  em: (props: any) => <Text  {...props}  as="em" color="green.500" />,
  h6: (props: any) => <Heading {...props} fontSize={"md"} />,
  p: (props: any) => <Text  {...props}  />,
  blockquote:(props: any) => <Text as="em" color="grey"  {...props}  />,
  a:(props: any) => <Text color={"blue.400"}><Link  {...props} ></Link></Text>,
  code: (props: any) => <Code {...props} overflowWrap={"break-word"} background="none" py="1" my="1" fontSize={"xl"} />,
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
