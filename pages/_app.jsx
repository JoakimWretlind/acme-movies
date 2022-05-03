import { ThemeProvider } from "styled-components"
import { movieTheme, GlobalStyle } from '../styles/globalStyle'
import { Layout } from '../components/layout'
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={movieTheme}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} router={router} key={router.pathname} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
