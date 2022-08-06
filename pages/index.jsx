import Head from 'next/head'
import { useState } from 'react'
import { Block } from '../components'
import { createBoard } from '../lib'
export default function Index() {
    const [board, setBoard] = useState(createBoard(9, 9))
    return (
        <>
            <Head>
                <title>Game</title>
            </Head>
            <div className='flex flex-col gap-1 p-2'>
                {board.map((x, i) => (
                    <Block key={i} data={x} index={i} />
                ))}
            </div>
        </>
    )
}