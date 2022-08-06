import Head from 'next/head'
import { Box } from '../components'
export default function Index() {
    return (
        <>
            <Head>
                <title>Game</title>
            </Head>
            <div className='flex flex-col p-2'>
                <Box />
            </div>
        </>
    )
}