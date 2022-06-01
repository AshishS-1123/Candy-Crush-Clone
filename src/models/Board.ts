import { COLUMNS, ROWS } from "~/setup";
import { Cell } from "models/Cells/Cell";
import { CandySourceCell } from "./Cells/CandySourceCell";
import { SimpleCell } from "./Cells/SimpleCell";
import { generateRandomBoard } from "~/utils/boardGenerator";

// function createCellItemsFromBoardConfig(): Cell[][] {
//     const cellItems: Cell[][] = [];

//     for (let i = 0; i < ROWS; ++i) {
//         cellItems[i] = [];

//         for (let j = 0; j < COLUMNS; ++j) {
//             cellItems[i][j] = new SimpleCell();
//         }
//     }

//     return cellItems;
// }

function createCandySourceCells(): CandySourceCell[] {
    const sourceCells: CandySourceCell[] = [];

    for (let i = 0; i < COLUMNS; ++i) {
        sourceCells[i] = new CandySourceCell();
    }

    return sourceCells;
}

export class Board {
    // Matrix of items that represents board state.
    cells: Cell[][];
    sourceCells: CandySourceCell[];

    constructor() {
        this.cells = generateRandomBoard();
        this.sourceCells = createCandySourceCells();
    }

    /**
     * 
     * @param start_x row number of top left corner of rectangular slice
     * @param start_y column number of top left corner of rectangular slice
     * @param end_x row number of bottom right corner of rectangular slice
     * @param end_y column number of bottom right corner of rectangular slice
     * @param height number of cells to slide this column by.
     */
    slideColumnSliceDown (
        start_x: number,
        start_y: number,
        end_x: number,
        end_y: number,
        height: number
    ): void {
        for (let i = end_x; i >= start_x; --i) {
            for (let j = start_y; j <= end_y; ++j) {
                this.cells[i][j + height] = this.cells[i][j];
            }
        }
    }
}