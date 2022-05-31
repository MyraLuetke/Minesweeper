class GameLogic {

    initalizeGame(height, width, mines) {
        this.height = height;
        this.width = width;
        this.num_mines = mines;
        this.tile_values = Array.from(
            {length: height},
            () => new Array(width).fill(0)
        );
    }

    surroundingMineCount(row, column, tile_values) {
        var mine_count = 0;
        for (var r of [row-1, row, row+1]) {
            for (var c of [column-1, column, column+1]) {
                if (0 <= r && r < this.height && 0 <= c && c < this.width) {
                    if (tile_values[r][c] === -1) {
                        mine_count += 1;
                    }
                }
            }
        }

        return mine_count;
    }

    createGame(start_row, start_column) {

        var mines = this.num_mines;
        var tile_values = [];

        for (var i=0; i< this.height; i++) {
            var row_values = [];
            for (var j=0; j< this.width; j++) {
                row_values[j]=0;
            }
            tile_values[i]=row_values;
        }

        while (mines > 0) {
            var row = Math.floor(Math.random() * this.height);
            var column = Math.floor(Math.random() * this.width);

            if (tile_values[row][column] === 0 && row !== start_row && column !== start_column) {
                tile_values[row][column] = -1;
                mines -= 1;
            }
        }

        for (var x=0; x < this.height; x++) {
            for (var y=0; y < this.width; y++) {
                if (tile_values[x][y] !== -1) {
                    tile_values[x][y] = this.surroundingMineCount(x,y,tile_values);
                } 
            }
        }

        this.tile_values = tile_values;
    }

    resetGame() {
        this.tile_values = Array.from(
            {length: this.height},
            () => new Array(this.width).fill(0)
        );
    }



}

const game_logic = new GameLogic();
export default game_logic;