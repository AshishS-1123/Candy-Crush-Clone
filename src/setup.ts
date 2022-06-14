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

// Number of moves user can make in each round.
export const MOVES = 20;

// Colors supported for candies
export const RED = 'RED';
export const ORANGE = 'ORANGE';
export const BLUE = 'BLUE';
export const GREEN = 'GREEN';
export const YELLOW = 'YELLOW';
export const PURPLE = 'PURPLE';

export type CellType = 'SIMPLE' | 'STRIPED_V' | 'STRIPED_H' | 'HARD' | 'MULTICOLORED' | 'HIDDEN' | 'NONE';
export type Colors = 'RED' | 'ORANGE' | 'BLUE' | 'GREEN' | 'YELLOW' | 'PURPLE' | 'EMPTY' | 'NONE';

export const Scores = {
  'SIMPLE': 1,
  'STRIPED_V': 10,
  'STRIPED_H': 10,
  'HARD': 15,
  'MULTICOLORED': 20,
}

export const ANIMATION_DURATION = 1000;
export const ANIMATION_THROTTLE = 100;

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
