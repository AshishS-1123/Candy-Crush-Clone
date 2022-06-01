import { Cell } from "~/models/Cells/Cell";
import { Colors, COLUMNS, ROWS } from "~/setup";
import { SimpleCell } from "~/models/Cells/SimpleCell";

export function generateRandomBoard (): Cell[][] {
    const cells: Cell[][] = [];

    const choices = ['RED', 'ORANGE', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE', 'EMPTY']

    for (let i = 0; i < ROWS; ++i) {
        cells[i] = [];

        for (let j = 0; j < COLUMNS; ++j) {
            cells[i][j] = new SimpleCell(choices[ Math.floor (Math.random() * choices.length) ] as Colors);
        }
    }

    return cells;
}