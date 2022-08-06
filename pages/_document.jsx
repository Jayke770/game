import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className='dark scroll-smooth'>
            <Head>
                <meta name="theme-color" content="#27272a" />
            </Head>
            <body className="overflow-hidden h-screen w-screen m-0 p-0 bg-zinc-800 flex justify-center items-center">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}