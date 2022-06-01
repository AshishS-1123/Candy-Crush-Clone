// Define some constants here

// Size of game board.
export const BOARD_WIDTH = 500;
export const BOARD_HEIGHT = 700;

// Size of cells.
export const CELL_WIDTH = 36;
export const CELL_HEIGHT = 36;
export const CELL_PADDING = 14;

// Rows and columns of candies
export const ROWS = Math.floor ( (BOARD_HEIGHT - CELL_PADDING / 2) / (CELL_HEIGHT + CELL_PADDING) );
export const COLUMNS = Math.floor ( (BOARD_WIDTH - CELL_PADDING / 2) / (CELL_WIDTH + CELL_PADDING) );

// Colors supported for candies
export const RED = 'RED';
export const ORANGE = 'ORANGE';
export const BLUE = 'BLUE';
export const GREEN = 'GREEN';
export const YELLOW = 'YELLOW';
export const PURPLE = 'PURPLE';

export type Colors = 'RED' | 'ORANGE' | 'BLUE' | 'GREEN' | 'YELLOW' | 'PURPLE' | 'EMPTY';
export type StripeDirection = 'UP' | 'DOWN';
export type SpecialCandy = 'DONUT' | 'MULTICOLORED';
