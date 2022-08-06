const simulateTray = () => {
    let setCount = 0
    let emptyTrayCount = 0
    // for each tray block
    for (let i = 0; i < trayBlockArr.length; i++) {
        if (trayBlockArr[i] !== 0) {
            // for each row 
            for (let j = 0; j < 9; j++) {
                // for each col
                for (let k = 0; k < 9; k++) {
                    if (board[j][k] === 0) {
                        setCount += simulateBlockSet(board, trayBlockArr[i], j, k)
                    }
                }
            }
        }
        else if (trayBlockArr[i] === 0) {
            emptyTrayCount++
        }
    }
    if (setCount === 0 && emptyTrayCount === 3) {
    }
    else if (setCount === 0) {
        console.error('gameover')
    }
    else if (setCount !== 0) {
    }
}