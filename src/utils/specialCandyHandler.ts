import { Board } from "~/models/Board";
import { CellType, Colors, Vector } from "~/setup";

export type CandyMatchData = {
    newCandyType: CellType,
    newCandyColor: Colors,
    destroyCandies: Vector[]
}

export function checkSpecialCandy (board: Board, pos: Vector): CandyMatchData {
    let countTop = 0;
    let countBottom = 0;
    let countLeft = 0;
    let countRight = 0;

    // Count the number of adjacent candies with color same as pos above it.
    for (let i = -1; i > -6; --i) {
        console.log(board.getColorAtCell({x: pos.x, y: pos.y + i}), {x: pos.x, y: pos.y + i});
        if (board.getColorAtCell({x: pos.x, y: pos.y + i}) == board.getColorAtCell(pos)) {
            ++countLeft;
        } else {
            break;
        }
    }

    // Count the number of adjacent candies with color same as pos below it.
    for (let i = 1; i < 6; ++i) {
        console.log(board.getColorAtCell({x: pos.x, y: pos.y + i}), {x: pos.x, y: pos.y + i});
        if (board.getColorAtCell({x: pos.x, y: pos.y + i}) == board.getColorAtCell(pos)) {
            ++countRight;
        } else {
            break;
        }
    }

    // Count the number of adjacent candies with color same as pos left of it.
    for (let i = -1; i > -6; --i) {
        console.log(board.getColorAtCell({x: pos.x + i, y: pos.y}), {x: pos.x + i, y: pos.y});
        if (board.getColorAtCell({x: pos.x + i, y: pos.y}) == board.getColorAtCell(pos)) {
            ++countTop;
        } else {
            break;
        }
    }
    
    // Count the number of adjacent candies with color same as pos right of it.
    for (let i = 1; i < 6; ++i) {
        console.log(board.getColorAtCell({x: pos.x + i, y: pos.y}), {x: pos.x + i, y: pos.y});
        if (board.getColorAtCell({x: pos.x + i, y: pos.y}) == board.getColorAtCell(pos)) {
            ++countBottom;
        } else {
            break;
        }
    }

    // Check if multicolored bomb can be formed.
    const multicolored = checkMulticolored(countTop, countBottom, countLeft, countRight, pos);
    if (multicolored.doesForm) {
        const returnValue: CandyMatchData = {
            newCandyType: 'MULTICOLORED',
            newCandyColor: 'BLUE', // Color doesn't matter for multicolored.
            destroyCandies: multicolored.destroyCandies
        }

        return returnValue;
    }

    // Check if hard candy can be formed.
    if (countTop + countBottom == 2 && countLeft + countRight == 2) {
        const returnValue: CandyMatchData = {
            newCandyType: 'HARD',
            newCandyColor: board.getColorAtCell(pos),
            destroyCandies: []
        }
        
        return returnValue;
    }

    // Check if striped candy can be formed.
    if (countTop + countBottom == 3 || countLeft + countRight == 3) {
        const returnValue: CandyMatchData = {
            newCandyType: 'STRIPED_V',
            newCandyColor: board.getColorAtCell(pos),
            destroyCandies: []
        }
        
        return returnValue;
    }
    
    const returnValue: CandyMatchData = {
        newCandyType: 'SIMPLE',
        newCandyColor: board.getColorAtCell (pos), // Color doesn't matter for multicolored.
        destroyCandies: []
    }
    
    return returnValue;
}

function checkMulticolored (
    countTop: number, 
    countBottom: number, 
    countLeft: number, 
    countRight: number, 
    pos: Vector
): {doesForm: boolean, destroyCandies: Vector[]} {
    let destroyCandies: Vector[] = [];
    let doesForm: boolean = false;

    if (countLeft + countRight == 4) {
        doesForm = true;
        
        destroyCandies = [
            {x: pos.x, y: pos.y - 1},
            {x: pos.x, y: pos.y - 2},
            {x: pos.x, y: pos.y + 1},
            {x: pos.x, y: pos.y + 2},
        ]
    } else if (countTop + countBottom == 4) {
        doesForm = true;

        destroyCandies = [
            {x: pos.x - 1, y: pos.y},
            {x: pos.x - 2, y: pos.y},
            {x: pos.x + 1, y: pos.y},
            {x: pos.x + 2, y: pos.y},
        ]
    }

    return { doesForm, destroyCandies };
}