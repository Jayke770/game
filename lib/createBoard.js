export default function createBoard(row, col) {
    let arr = new Array(row)
    for (let i = 0; i < row; i++) {
        arr[i] = new Array(col)
        arr[i].fill(0)
    }
    return arr
}