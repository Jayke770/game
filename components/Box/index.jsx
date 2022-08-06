const x = Array.from({ length: 9 }), y = Array.from({ length: 9 })
const top = [3, 4, 5]
export default function Box() {
    return (
        <div className="flex flex-col gap-1">
            {x.map((_, i) => (
                <div
                    key={i}
                    className="x flex gap-1">
                    {y.map((_, j) => (
                        <div
                            key={j}
                            id={`y-${j}`}
                            className={`y bg-zinc-700 hover:bg-teal-700 hover:scale-125 cursor-pointer transition-all w-[10vw] h-[5vh] sm:w-14 sm:h-14 rounded`} />
                    ))}
                </div>
            ))}
        </div>
    )
}