import '@/styles/globals.css'
import Head from 'next/head'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer';
import { baseUrl } from '@/utils/baseUrls';

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return(
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Shobhit Pundir | Blogs</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/sp-favicon.png"/>
        <meta name="description" content="Welcome to Shobhit Pundir's web development blog. Explore insightful articles, tutorials, and tips on web development, front-end and back-end technologies, responsive design, user experience, and more. Learn from Shobhit Pundir, a seasoned web developer with 6 years of experience in the field. Stay updated with the latest trends and best practices in web development."/>
        <meta name="keywords" content="Shobhit Pundir, Shobhit Pundir Blogs, web development, front-end development, back-end development, full-stack development, programming, coding, web design, HTML, CSS, JavaScript, responsive design, user experience, UX/UI, frameworks, libraries, databases, server-side scripting, client-side scripting, web technologies, responsive web design, mobile-friendly, cross-browser compatibility, SEO, website optimization, performance, debugging, version control, Git, deployment, hosting, CMS, content management system"/>
        <meta name="author" content="Shobhit Pundir"/>
        <meta name="robots" content="index, follow"/>
        <meta name="referrer" content="no-referrer-when-downgrade"/>
        <meta name="revisit-after" content="7 days"/>
        <meta name="image" content={`${baseUrl}/sp-logo.png`}/>
        <meta property="og:title" content="Shobhit Pundir | Blogs" />
        <meta property="og:description" content="Welcome to Shobhit Pundir's web development blog. Explore insightful articles, tutorials, and tips on web development, front-end and back-end technologies, responsive design, user experience, and more. Learn from Shobhit Pundir, a seasoned web developer with 6 years of experience in the field. Stay updated with the latest trends and best practices in web development."/>
        <meta property="og:image" content={`${baseUrl}/sp-logo.png`}/>
        <meta property="og:url" content={baseUrl}/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Shobhit Pundir | Blog"/>
        <meta name="twitter:description" content="Welcome to Shobhit Pundir's web development blog. Explore insightful articles, tutorials, and tips on web development, front-end and back-end technologies, responsive design, user experience, and more. Learn from Shobhit Pundir, a seasoned web developer with 6 years of experience in the field. Stay updated with the latest trends and best practices in web development."/>
        <meta name="twitter:image" content={`${baseUrl}/sp-logo.png`}></meta>
      </Head>
      
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
    
  )
}
