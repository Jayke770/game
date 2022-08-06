import Head from 'next/head'
import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
//functions
const handlers = {
    defBlocks: {
        0: {},
        1: {
            1: [1, 1, 1, 1, 1]
        },
        2: {
            1: [1, 1, 1]
        },
        3: {
            1: [1],
            2: [1],
            3: [1],
            4: [1],
            5: [1]
        },
        4: {
            1: [1],
            2: [1],
            3: [1]
        },
        5: {
            1: [1, 1],
            2: [1, 1]
        }
    },
    createBoard: (row, col) => {
        let arr = new Array(row)
        for (let i = 0; i < row; i++) {
            arr[i] = new Array(col)
            arr[i].fill(0)
        }
        return arr
    },
    createRandomTray: () => {
        let tempArr = []
        const min = Math.ceil(1)
        const max = Math.floor(5)
        for (let i = 1; i <= 2; i++) {
            tempArr.push(Math.floor(Math.random() * (max - min + 1)) + min)
        }
        return tempArr
    }
}
export default function Index() {
    const [board, setBoard] = useState(handlers.createBoard(9, 9))
    const [tray, settray] = useState(handlers.createRandomTray())
    return (
        <>
            <Head>
                <title>Game</title>
            </Head>
            <div className='flex justify-center items-center p-5'>
                <button
                    className='text-white bg-indigo-700 px-4 py-3'
                    onClick={() => settray(handlers.createRandomTray())}>Generate Tray</button>
            </div>
            <div className='flex flex-col gap-5 w-full'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    {board.map((x, i) => (
                        <div key={i} className="flex gap-1">
                            {Object.keys(x).map((_, i) => (
                                <div key={i} className={`bg-zinc-700 cursor-pointer transition-all w-[9vw] h-[5vh] sm:w-10 sm:h-10 rounded`} />
                            ))}
                        </div>
                    ))}
                </div>
                <div id='tray' className='flex gap-3 justify-center items-center w-full'>
                    {tray.map((tray, i) => (
                        <Draggable
                            key={i}>
                            <div className='tray flex flex-col justify-center items-center gap-1 cursor-pointer group '>
                                {Object.values(handlers.defBlocks[tray]).map((trayRow, trayRowIndex) => (
                                    <div key={trayRowIndex} className="flex gap-1">
                                        {Object.keys(trayRow).map((_, h) => (
                                            <div key={h} className={`bg-teal-700 transition-all w-[9vw] h-[5vh] sm:w-10 sm:h-10 rounded`} />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Draggable>
                    ))}
                </div>
            </div>
        </>
    )
}
