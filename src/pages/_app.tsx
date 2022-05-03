import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import 'swiper/css';

import { theme } from "../styles/theme";
import "../styles/swiper.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';