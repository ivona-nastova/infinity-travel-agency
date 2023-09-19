import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'src/components/Global/Header'
import Footer from 'src/components/Global/Footer'
import GetMoreOffers from 'src/components/ContactForm/GetMoreOffers'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GetMoreOffers />
      <Footer />
    </>
  )
}
