import DefaultLayout from "@/components/Layout/Default";
import theme from "@/lib/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '@fontsource-variable/playfair-display';
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps & { Component: { Layout?: any } }) {
  const LayoutWrapper = Component.Layout || DefaultLayout;

  return (
    <>
      <Head>
        <title>The Keeper Of Memory</title>
      </Head>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode="popLayout" initial={false}>
          <LayoutWrapper>
            <Component {...pageProps} key={router.asPath} />
          </LayoutWrapper>
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}