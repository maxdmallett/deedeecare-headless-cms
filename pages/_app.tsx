import '../styles/thirdparty/spectre.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Script src='https://www.googletagmanager.com/gtag/js?id=UA-134016189-1' async></Script>
        <Script id="analytics-script">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-134016189-1');
          `}
        </Script>
        <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
