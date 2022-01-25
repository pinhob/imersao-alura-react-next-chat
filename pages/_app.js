import GlobalStyle from "../utils/GlobalStyle"

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
};
