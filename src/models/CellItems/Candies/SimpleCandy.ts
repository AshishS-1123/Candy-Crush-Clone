import { CELL_HEIGHT, CELL_WIDTH, Colors } from '~/setup';
import BLUE_CANDY from '../../../images/SimpleCandies/Blue_Simple.png';
import GREEN_CANDY from '../../../images/SimpleCandies/Green_Simple.png';
import ORANGE_CANDY from '../../../images/SimpleCandies/Orange_Simple.png';
import PURPLE_CANDY from '../../../images/SimpleCandies/Purple_Simple.png';
import RED_CANDY from '../../../images/SimpleCandies/Red_Simple.png';
import YELLOW_CANDY from '../../../images/SimpleCandies/Yellow_Simple.png';
import { CellItem } from '../CellItem';

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

export class SimpleCandy extends CellItem {
    public color: Colors;
    public image: HTMLImageElement = new Image();

    constructor (color: Colors) {
        super();
        this.color = color;
        this.image.src = assignImageFromColor(color);
        
        this.image.height = CELL_HEIGHT;
        this.image.width = CELL_WIDTH;
    }
}