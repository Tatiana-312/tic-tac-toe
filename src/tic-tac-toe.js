class TicTacToe {
    currentPlayer;
    previousPlayer;
    gameField;
    winCombinations;

    constructor() {
        this.currentPlayer = 'x';
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]

        this.winCombinations = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.previousPlayer = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
    }

    isFinished() {
        let winner = this.getWinner();
        if(winner) {
            return true;
        }

        let isDraw = this.isDraw();
        if(isDraw) {
            return true;
        }
        
        return false;
    }

    getWinner() {
        for(let i = 0; i < this.winCombinations.length; i++){
            let winCombination = this.winCombinations[i];

            let a = this.gameField[winCombination[0][0]][winCombination[0][1]];
            let b = this.gameField[winCombination[1][0]][winCombination[1][1]];
            let c = this.gameField[winCombination[2][0]][winCombination[2][1]];

            if(!a || !b || !c) {
                continue;
            }

            if(a == b && b == c) {
                return this.previousPlayer;
            }
        }

        return null;
    }

    noMoreTurns() {
        let hasTurns = true;
        for (let i = 0; i < this.gameField.length; i++) {
            if (this.gameField[i].includes(null)) {
                hasTurns = false;
            }
        }

        return hasTurns;
    }

    isDraw() {
        let winner = this.getWinner();

        if(!winner && this.noMoreTurns()) {
            return true;
        }

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
