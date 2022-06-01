import { COLUMNS, ROWS } from "~/setup";
import { Cell } from "models/Cells/Cell";
import { CandySourceCell } from "./Cells/CandySourceCell";
import { SimpleCell } from "./Cells/SimpleCell";

function createCellItemsFromBoardConfig(): Cell[][] {
    const cellItems: Cell[][] = [];

    // First row contains CandySourceCells
    cellItems[0] = [];
    for (let i = 0; i < COLUMNS; ++i) {
        cellItems[0][i] = new CandySourceCell();
    }

    for (let i = 1; i < ROWS; ++i) {
        cellItems[i] = [];

        for (let j = 0; j < COLUMNS; ++j) {
            cellItems[i][j] = new SimpleCell();
        }
    }

    return cellItems;
}

export class Board {
    // Matrix of items that represents board state.
    cells: Cell[][];

    constructor() {
        this.cells = createCellItemsFromBoardConfig();
    }
}