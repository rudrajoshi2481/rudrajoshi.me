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
import { MDXProvider } from "@mdx-js/react";
import {useRouter} from "next/router"



const components: any = {
  h1: (props: any) => <Heading fontSize={"6xl"} />,
  h2: (props: any) => <Heading fontSize={"5xl"} />,
  h3: (props: any) => <Heading {...props} fontSize={"4xl"} />,
  h4: (props: any) => <Heading {...props} fontSize={"3xl"} />,
  h5: (props: any) => <Heading {...props} fontSize={"2xl"} />,
  h6: (props: any) => <Heading {...props} fontSize={"xl"} />,
  p: (props: any) => <Text {...props} fontSize={"xl"} />,
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
