export default function Block({ index, data }) {
    console.log(data)
    return (
        <div className="flex gap-1">
            {Object.keys(data).map((_, i) => (
                <div className={`${data[_] === 1 ? 'bg-teal-700' : 'bg-zinc-700'} hover:scale-125 hover:bg-teal-700 cursor-pointer transition-all w-[10vw] h-[5vh] sm:w-10 sm:h-10 rounded`} />
            ))}
        </div>
    )
}