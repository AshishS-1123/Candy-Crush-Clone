import { CellType, Colors } from '~/setup';
import { Cell } from './Cell';

import BLUE_CANDY from '~/images/SimpleCandies/Blue_Simple.png';
import GREEN_CANDY from '~/images/SimpleCandies/Green_Simple.png';
import ORANGE_CANDY from '~/images/SimpleCandies/Orange_Simple.png';
import PURPLE_CANDY from '~/images/SimpleCandies/Purple_Simple.png';
import RED_CANDY from '~/images/SimpleCandies/Red_Simple.png';
import YELLOW_CANDY from '~images/SimpleCandies/Yellow_Simple.png';
import EMPTY_CELL from '~images/EmptyCell.png';

// Uses color string to get image for this candy
function assignImageFromColor(color: Colors) {
    switch (color) {
        case 'BLUE': return BLUE_CANDY;
        case 'GREEN': return GREEN_CANDY;
        case 'ORANGE': return ORANGE_CANDY;
        case 'PURPLE': return PURPLE_CANDY;
        case 'RED': return RED_CANDY;
        case 'YELLOW': return YELLOW_CANDY;
        default: return EMPTY_CELL;
    }
}

export class SimpleCell implements Cell {
    cellType: CellType;
    colorType: Colors;
    image: HTMLImageElement = new Image();
    isVisible: boolean;

    constructor(color: Colors) {
        this.cellType = 'SIMPLE';
        this.colorType = color;
        this.isVisible = true;
        this.image.src = assignImageFromColor (color);
    }
}
