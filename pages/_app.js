import '@/styles/globals.css'
import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return(
    <>
      <Head>
        <title>Shobhit Pundir | Blogs</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/sp-favicon.png"/>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
    
  )
}
