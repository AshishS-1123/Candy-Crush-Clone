import { CellItem } from '../CellItem';
import DONUT_IMAGE from 'images/SpecialCandies/Donut.png';
import MULTICOLORED_IMAGE from 'images/SpecialCandies/Multicolored.png';

export class MultiColorCandy extends CellItem {
    image: HTMLImageElement = new Image();

    constructor () {
        super();
        this.image.src = MULTICOLORED_IMAGE;
    }
}

export class Donut extends CellItem {
    image: HTMLImageElement = new Image();

    constructor() {
        super();
        this.image.src = DONUT_IMAGE;
    }
}
