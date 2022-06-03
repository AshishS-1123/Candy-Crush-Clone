import { COLUMNS, ROWS } from "~/setup";
import { Cell } from "models/Cells/Cell";
import { CandySourceCell } from "./Cells/CandySourceCell";
import { SimpleCell } from "./Cells/SimpleCell";
import { generateRandomBoard } from "~/utils/boardGenerator";
import { Vector } from 'setup';
import EMPTY_CELL_IMG from '../images/EmptyCell.png';

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

    getImageAtCell (cellPos: Vector | null): HTMLImageElement {
        const emptyCellImage = new Image();
        emptyCellImage.src = EMPTY_CELL_IMG;

        return cellPos && this.cells[cellPos.x][cellPos.y].cellItem?.image || emptyCellImage;
    }
}