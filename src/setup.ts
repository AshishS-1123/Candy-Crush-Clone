// Define some constants here

// Size of game board.
export const BOARD_WIDTH = 500;
export const BOARD_HEIGHT = 700;

// Size of cells.
export const CELL_WIDTH = 36;
export const CELL_HEIGHT = 36;
export const CELL_PADDING = 14;

// Rows and columns of candies
export const ROWS = Math.floor ( (BOARD_HEIGHT - CELL_PADDING) / (CELL_HEIGHT + CELL_PADDING) );
export const COLUMNS = Math.floor ( (BOARD_WIDTH - CELL_PADDING) / (CELL_WIDTH + CELL_PADDING) );

// Colors supported for candies
export const RED = 'RED';
export const ORANGE = 'ORANGE';
export const BLUE = 'BLUE';
export const GREEN = 'GREEN';
export const YELLOW = 'YELLOW';
export const PURPLE = 'PURPLE';

export type CellType = 'SIMPLE' | 'STRIPED_V' | 'STRIPED_H' | 'HARD' | 'MULTICOLORED' | 'HIDDEN';
export type Colors = 'RED' | 'ORANGE' | 'BLUE' | 'GREEN' | 'YELLOW' | 'PURPLE' | 'EMPTY';

// Represents a pair of values.
export type Vector = {
    x: number,
    y: number,
};

export type CellPos = {
    pos: Vector,
    img: HTMLImageElement
}

export function delay(delayInms: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delayInms);
    });
}
