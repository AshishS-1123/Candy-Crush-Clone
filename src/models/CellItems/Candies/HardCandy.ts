import { Colors } from 'setup';
import { CellItem } from '../CellItem';

import BLUE_CANDY from 'images/HardCandy/Blue.png';
import GREEN_CANDY from 'images/HardCandy/Green.png';
import ORANGE_CANDY from 'images/HardCandy/Orange.png';
import PURPLE_CANDY from 'images/HardCandy/Purple.png';
import RED_CANDY from 'images/HardCandy/Red.png';
import YELLOW_CANDY from 'images/HardCandy/Yellow.png';

// Uses color string to get image for this candy
function assignImageFromColor(color: Colors) {
    switch (color) {
        case 'BLUE': return BLUE_CANDY;
        case 'GREEN': return GREEN_CANDY;
        case 'ORANGE': return ORANGE_CANDY;
        case 'PURPLE': return PURPLE_CANDY;
        case 'RED': return RED_CANDY;
        case 'YELLOW': return YELLOW_CANDY;
        default: return YELLOW_CANDY;
    }
}

export class HardCandy extends CellItem {
    public color: Colors;
    public image: HTMLImageElement = new Image();

    constructor (color: Colors) {
        super();
        this.color = color;
        this.image.src = assignImageFromColor(color);
    }
}