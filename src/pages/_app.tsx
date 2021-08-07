import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boilerplate</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
