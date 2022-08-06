import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className='dark scroll-smooth'>
            <Head>
                <meta name="theme-color" content="#27272a" />
            </Head>
            <body className="m-0 p-0 bg-zinc-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}