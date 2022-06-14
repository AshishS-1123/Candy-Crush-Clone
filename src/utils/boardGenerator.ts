import { Cell } from "~/models/Cells/Cell";
import { Colors, COLUMNS, ROWS } from "~/setup";
import { SimpleCell } from "~/models/Cells/SimpleCell";
import { selectRandomString } from '~/utils/random';

function compareCells (cell_1: Cell, cell_2: Cell): boolean {
    return (cell_1.image.src == cell_2.image.src);
}

export function generateRandomBoard (): Cell[][] {
    const cells: Cell[][] = [];

    const choices = ['RED', 'ORANGE', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE']

    for (let i = 0; i < ROWS; ++i) {
        cells[i] = [];

        for (let j = 0; j < COLUMNS; ++j) {
            cells[i][j] = new SimpleCell(selectRandomString(choices) as Colors);
        }
    }

    while (true) {
        let didCellChange = false;

        // Go through all rows and remove any elements that appear thrice in row.
        for (let i = 0; i < ROWS; ++i) {
            for (let j = 0; j < COLUMNS - 2; ++j) {
                if (compareCells(cells[i][j], cells[i][j + 1]) && compareCells(cells[i][j], cells[i][j + 2])) {
                    // Cells (i,j) (i,j+1) and (i,j+2) are in line
                    // mark the middle cell as some different color.
                    const exceptions = [
                        cells[i][j + 1].colorType,
                    ];
    
                    (i - 1 > -1) && exceptions.push(cells[i - 1][j + 1].colorType);
                    (i + 1 < ROWS) && exceptions.push(cells[i + 1][j + 1].colorType);
    
                    cells[i][j+1] = new SimpleCell (selectRandomString(choices, exceptions) as Colors);

                    didCellChange = true;
                }
            }
        }
    
        // Go through all columns and remove elements that appear thrice in column.
        for (let i = 0; i < COLUMNS; ++i) {
            for (let j = 0; j < ROWS - 2; ++j) {
                if (compareCells(cells[j][i], cells[j+1][i]) && compareCells(cells[j][i], cells[j+2][i])) {
                    // Cells (j,i) (j+1,i) and (j+2,i) are in line
                    // mark the middle cell as some different color.
                    const exceptions = [
                        cells[j + 1][i].colorType,
                    ];
                    
                    (i - 1 > -1) && exceptions.push (cells[j + 1][i - 1].colorType);
                    (i + 1 < COLUMNS) && exceptions.push (cells[j + 1][i + 1].colorType);
    
                    cells[j+1][i] = new SimpleCell (selectRandomString(choices, exceptions) as Colors);

                    didCellChange = true;
                }
            }
        }

        if (!didCellChange) break;
    }

    // TODO: Remove later. Only for testing purpose only.
    // return debug_setupMultiColored (cells);
    // return debug_setupHard (cells, 7); // Second param can only be between 0-7
    // return debug_setupStriped (cells, 7); // Second param can only be between 0-7
    // return debug_gravity(cells);

    return cells;
}

function debug_setupMultiColored(cells: Cell[][]): Cell[][] {
    // Generate horizontal six in line.
    cells[0][0] = new SimpleCell('BLUE');
    cells[0][1] = new SimpleCell('BLUE');
    cells[0][2] = new SimpleCell('GREEN');
    cells[0][3] = new SimpleCell('BLUE');
    cells[0][4] = new SimpleCell('BLUE');
    cells[1][2] = new SimpleCell('BLUE');
    cells[0][5] = new SimpleCell('GREEN');

    // Generate vertical six in line.
    cells[1][3] = new SimpleCell('RED');
    cells[2][3] = new SimpleCell('RED');
    cells[3][3] = new SimpleCell('ORANGE');
    cells[4][3] = new SimpleCell('RED');
    cells[5][3] = new SimpleCell('RED');
    cells[3][4] = new SimpleCell('RED');

    return cells;
}

function debug_setupHard (cells: Cell[][], idx: number): Cell[][] {
    const blueCells: number[][][] = [
        // Case 1. (+0, +0)
        [
        [1,0],     [1,2],[1,3],
              [2,1],
              [3,1],
        ],

        // Case 2. (+4, +0)
        [
              [0,1],
        [1,0],     [1,2],
              [2,1],
              [3,1],
        ],

        // Case 3. (+8, +0)
        [
        [0,0],[0,1],     [0,3],
                   [1,2],
                   [2,2],
        ],

        // Case 4. (+0, +4)
        [
             [0,1],
             [1,1],
        [2,0],    [2,2],[2,3],
        ],

        // Case 5. (+4, +4)
        [
              [0,1],
              [1,1],
        [2,0],     [2,2],
              [3,1]
        ],

        // Case 6. (+8, +4)
        [
                     [0,2],
                     [1,2],
        [2,0],[2,1],      [2,3],
        ],

        // Case 7. (+0, +0)
        [
             [0,1],
        [1,0],     [1,2],[1,3],
             [2,1],
        ],

        // Case 8. (+4, +0)
        [
                    [0,2],
        [1,0],[1,1],      [1,3],
                    [2,2],
        ],
    ]

    const greenCells: number[][][] = [
        // Case 1.
        [[1,1],[1,4],[4,1]],
        // Case 2.
        [[1,1],[1,3],[4,1]],
        // Case 3.
        [[0,2],[0,4],[3,2]],
        // Case 4.
        [[2,1],[2,4],[3,1]],
        // Case 5.
        [[2,1],[2,3],[4,1]],
        // Case 6.
        [[2,2],[2,4],[3,2]],
        // Case 7.
        [[1,1],[1,4],[3,1]],
        // Case 8.
        [[1,2],[1,4],[3,2]]
    ];

    blueCells[idx].forEach(cell => {
        cells[cell[0]][cell[1]] = new SimpleCell('BLUE');
    });

    greenCells[idx].forEach(cell => {
        cells[cell[0]][cell[1]] = new SimpleCell('GREEN');
    });

    return cells;
}

function debug_setupStriped (cells: Cell[][], idx: number): Cell[][] {
    const blueCells: number[][][] = [
        // Case 1H.
        [
        [0,0],
             [1,1],[1,2],[1,3],
        ],
        
        // Case 2H.
        [
             [0,1],
        [1,0],    [1,2],[1,3],
        ],
        
        // Case 3H.
        [
                    [0,2],
        [1,0],[1,1],     [1,3],
        ],
        
        // Case 4H.
        [
                          [0,3],
        [1,0],[1,1],[1,2],
        ],
        
        // Case 1V.
        [
        [0,0],
             [1,1],[2,1],[3,1],
        ],
        
        // Case 2V.
        [
             [1,0],
        [0,1],    [2,1],[3,1],
        ],
        
        // Case 3V.
        [
                    [2,0],
        [0,1],[1,1],     [3,1],
        ],
        
        // Case 4V.
        [
                          [3,0],
        [0,1],[1,1],[2,1],
        ],
    ]

    const greenCells: number[][][] = [
        // Case 1H.
        [[1,0],[2,0],[1,4]],
        // Case 2H.
        [[1,1],[2,1],[1,4]],
        // Case 3H.
        [[1,2],[2,2],[1,4]],
        // Case 4H.
        [[1,3],[2,3],[1,4]],

        // Case 1V.
        [[0,1],[0,2],[4,1]],
        // Case 2V.
        [[1,1],[1,2],[4,1]],
        // Case 3V.
        [[2,1],[2,2],[4,1]],
        // Case 4V.
        [[3,1],[3,2],[4,1]],
    ]

    blueCells[idx].forEach(cell => {
        cells[cell[0]][cell[1]] = new SimpleCell('BLUE');
    });

    greenCells[idx].forEach(cell => {
        cells[cell[0]][cell[1]] = new SimpleCell('GREEN');
    });

    return cells;
}

function debug_gravity(cells: Cell[][]): Cell[][] {
    const colNo = 2;
    const rowStart = 7;
    const rowEnd = 10;

    const emptyCells: number[][] = [];

    for(let i = rowStart; i <= rowEnd; ++i)
        emptyCells.push ([i, colNo]);

    emptyCells.forEach(cell => {
        cells[cell[0]][cell[1]] = new SimpleCell('EMPTY');
    })

    return cells;
}
