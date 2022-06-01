import {Colors, StripeDirection} from 'setup';
import { CellItem } from '../CellItem';

import BLUE_V_CANDY from 'images/StripedCandies/Horizontal/Blue.png';
import GREEN_V_CANDY from 'images/StripedCandies/Horizontal/Green.png';
import ORANGE_V_CANDY from 'images/StripedCandies/Horizontal/Orange.png';
import PURPLE_V_CANDY from 'images/StripedCandies/Horizontal/Purple.png';
import RED_V_CANDY from 'images/StripedCandies/Horizontal/Red.png';
import YELLOW_V_CANDY from 'images/StripedCandies/Horizontal/Yellow.png';

import BLUE_H_CANDY from 'images/StripedCandies/Vertical/Blue.png';
import GREEN_H_CANDY from 'images/StripedCandies/Vertical/Green.png';
import ORANGE_H_CANDY from 'images/StripedCandies/Vertical/Orange.png';
import PURPLE_H_CANDY from 'images/StripedCandies/Vertical/Purple.png';
import RED_H_CANDY from 'images/StripedCandies/Vertical/Red.png';
import YELLOW_H_CANDY from 'images/StripedCandies/Vertical/Yellow.png';

// Uses color string to get image for this candy
function assignImageFromColor(color: Colors, stripeDirection: StripeDirection): string {
    switch (color) {
        case 'BLUE':
            return stripeDirection === 'UP' ? BLUE_V_CANDY : BLUE_H_CANDY;
        case 'GREEN':
            return stripeDirection === 'UP' ? GREEN_V_CANDY : GREEN_H_CANDY;
        case 'ORANGE':
            return stripeDirection === 'UP' ? ORANGE_V_CANDY : ORANGE_H_CANDY;
        case 'PURPLE':
            return stripeDirection === 'UP' ? PURPLE_V_CANDY : PURPLE_H_CANDY;
        case 'RED':
            return stripeDirection === 'UP' ? RED_V_CANDY : RED_H_CANDY;
        case 'YELLOW':
            return stripeDirection === 'UP' ? YELLOW_V_CANDY : YELLOW_H_CANDY;
    }

    return YELLOW_V_CANDY;
}

export class StripedCandy extends CellItem {
    public color: Colors;
    public stripeDirection: StripeDirection
    public image: HTMLImageElement = new Image();

    constructor (color: Colors, stripeDirection: StripeDirection) {
        super();
        this.color = color;
        this.stripeDirection = stripeDirection;
        this.image.src = assignImageFromColor(color, stripeDirection);
    }
}