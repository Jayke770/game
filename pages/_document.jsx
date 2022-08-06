import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className='dark scroll-smooth'>
            <Head />
            <body className="overflow-hidden m-0 p-0">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}