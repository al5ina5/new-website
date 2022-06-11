import '../styles/global.css'
import '../styles/utils.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <script src="/js/three.min.js" />
                <script src="/js/p5.min.js" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
