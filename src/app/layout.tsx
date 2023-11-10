// import './globals.css'
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  Box,
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import Appbar from "../../components/Appbar";
import { useEffect, useState } from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorMode, setcolorMode]: any = useState("white");

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "white");
  }, []);

  return (
    <html lang="en">
      <body>
        {/* <CacheProvider key="5123"> */}
          <ChakraProvider>
            <ColorModeScript
              storageKey="colorMode"
              type="localStorage"
              key={"5"}
              initialColorMode={colorMode}
            />
            <Appbar />
            <Box mt="12">{children}</Box>
            
          </ChakraProvider>
        {/* </CacheProvider> */}
      </body>
    </html>
  );
}
