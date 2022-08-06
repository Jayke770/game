export default function Tray() {
    const generateTray = () => {
        let tempArr = []
        const min = Math.ceil(1)
        const max = Math.floor(5)
        for (let i = 1; i <= 3; i++) {
            tempArr.push(Math.floor(Math.random() * (max - min + 1)) + min)
        }
        console.log(tempArr)
    }
    const create2DArray = (row, col) => {
        let arr = new Array(row)
        for (let i = 0; i < row; i++) {
            arr[i] = new Array(col)
            arr[i].fill(0)
        }
        console.log(arr)
    }
    return (
        <div className="grid grid-cols-3 gap-3 p-2">
            <button
                onClick={() => create2DArray(9, 9)}>djahdjas</button>
        </div>
    )
}