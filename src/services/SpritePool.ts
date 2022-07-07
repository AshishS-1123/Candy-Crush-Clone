import EMPTY_CELL from '~images/EmptyCell.png';

import BLUE_CANDY from '~/images/SimpleCandies/Blue_Simple.png';
import GREEN_CANDY from '~/images/SimpleCandies/Green_Simple.png';
import ORANGE_CANDY from '~/images/SimpleCandies/Orange_Simple.png';
import PURPLE_CANDY from '~/images/SimpleCandies/Purple_Simple.png';
import RED_CANDY from '~/images/SimpleCandies/Red_Simple.png';
import YELLOW_CANDY from '~images/SimpleCandies/Yellow_Simple.png';

import BLUE_H_CANDY from '~/images/StripedCandies/Horizontal/Blue.png';
import GREEN_H_CANDY from '~/images/StripedCandies/Horizontal/Green.png';
import ORANGE_H_CANDY from '~/images/StripedCandies/Horizontal/Orange.png';
import PURPLE_H_CANDY from '~/images/StripedCandies/Horizontal/Purple.png';
import RED_H_CANDY from '~/images/StripedCandies/Horizontal/Red.png';
import YELLOW_H_CANDY from '~/images/StripedCandies/Horizontal/Yellow.png';

import BLUE_V_CANDY from '~/images/StripedCandies/Vertical/Blue.png';
import GREEN_V_CANDY from '~/images/StripedCandies/Vertical/Green.png';
import ORANGE_V_CANDY from '~/images/StripedCandies/Vertical/Orange.png';
import PURPLE_V_CANDY from '~/images/StripedCandies/Vertical/Purple.png';
import RED_V_CANDY from '~/images/StripedCandies/Vertical/Red.png';
import YELLOW_V_CANDY from '~/images/StripedCandies/Vertical/Yellow.png';

import BLUE_HARD from '~/images/HardCandy/Blue.png';
import GREEN_HARD from '~/images/HardCandy/Green.png';
import ORANGE_HARD from '~/images/HardCandy/Orange.png';
import PURPLE_HARD from '~/images/HardCandy/Purple.png';
import RED_HARD from '~/images/HardCandy/Red.png';
import YELLOW_HARD from '~/images/HardCandy/Yellow.png';

import MULTICOLORED from '~/images/SpecialCandies/Multicolored.png';

import { Colors } from '~/setup';
import { Signal } from 'signal-ts';

export class SpritePool {
    public ImageLoaded: Signal<void> = new Signal();

    // Image for empty cell.
    emptySimple: HTMLImageElement = new Image();

    // Images for simple candies.
    redSimple: HTMLImageElement = new Image();
    orangeSimple: HTMLImageElement = new Image();
    blueSimple: HTMLImageElement = new Image();
    greenSimple: HTMLImageElement = new Image();
    yellowSimple: HTMLImageElement = new Image();
    purpleSimple: HTMLImageElement = new Image();
    
    // Images for vertical striped cells.
    redVStripe: HTMLImageElement = new Image();
    orangeVStripe: HTMLImageElement = new Image();
    blueVStripe: HTMLImageElement = new Image();
    greenVStripe: HTMLImageElement = new Image();
    yellowVStripe: HTMLImageElement = new Image();
    purpleVStripe: HTMLImageElement = new Image();
    
    // Images for horizontal striped cells.
    redHStripe: HTMLImageElement = new Image();
    orangeHStripe: HTMLImageElement = new Image();
    blueHStripe: HTMLImageElement = new Image();
    greenHStripe: HTMLImageElement = new Image();
    yellowHStripe: HTMLImageElement = new Image();
    purpleHStripe: HTMLImageElement = new Image();
    
    // Images for hard candies.
    redHard: HTMLImageElement = new Image();
    orangeHard: HTMLImageElement = new Image();
    blueHard: HTMLImageElement = new Image();
    greenHard: HTMLImageElement = new Image();
    yellowHard: HTMLImageElement = new Image();
    purpleHard: HTMLImageElement = new Image();
    
    // Special candies.
    multicolored: HTMLImageElement = new Image();

    constructor() {
        this.emptySimple.src = EMPTY_CELL;
        
        this.redSimple.src = RED_CANDY;
        this.orangeSimple.src = ORANGE_CANDY;
        this.blueSimple.src = BLUE_CANDY;
        this.greenSimple.src = GREEN_CANDY;
        this.yellowSimple.src = YELLOW_CANDY;
        this.purpleSimple.src = PURPLE_CANDY;
        
        this.redHStripe.src = RED_H_CANDY;
        this.orangeHStripe.src = ORANGE_H_CANDY;
        this.blueHStripe.src = BLUE_H_CANDY;
        this.greenHStripe.src = GREEN_H_CANDY;
        this.yellowHStripe.src = YELLOW_H_CANDY;
        this.purpleHStripe.src = PURPLE_H_CANDY;
        
        this.redVStripe.src = RED_V_CANDY;
        this.orangeVStripe.src = ORANGE_V_CANDY;
        this.blueVStripe.src = BLUE_V_CANDY;
        this.greenVStripe.src = GREEN_V_CANDY;
        this.yellowVStripe.src = YELLOW_V_CANDY;
        this.purpleVStripe.src = PURPLE_V_CANDY;
        
        this.redHard.src = RED_HARD;
        this.orangeHard.src = ORANGE_HARD;
        this.blueHard.src = BLUE_HARD;
        this.greenHard.src = GREEN_HARD;
        this.yellowHard.src = YELLOW_HARD;
        this.purpleHard.src = PURPLE_HARD;
        
        this.multicolored.src = MULTICOLORED;

        this.redSimple.onload = this.handleImageLoad.bind(this);
        this.orangeSimple.onload = this.handleImageLoad.bind(this);
        this.blueSimple.onload = this.handleImageLoad.bind(this);
        this.greenSimple.onload = this.handleImageLoad.bind(this);
        this.yellowSimple.onload = this.handleImageLoad.bind(this);
        this.purpleSimple.onload = this.handleImageLoad.bind(this);
    }

    handleImageLoad() {
        this.ImageLoaded.emit();
    }
        
    getSimpleCandy(color: Colors): HTMLImageElement {
        switch (color) {
            case 'RED': return this.redSimple;
            case 'ORANGE': return this.orangeSimple;
            case 'BLUE': return this.blueSimple;
            case 'GREEN': return this.greenSimple;
            case 'YELLOW': return this.yellowSimple;
            case 'PURPLE': return this.purpleSimple;
            default: return this.emptySimple;
        }
    }

    public getHardCandy(color: Colors): HTMLImageElement {
        switch (color) {
            case 'RED': return this.redHard;
            case 'ORANGE': return this.orangeHard;
            case 'BLUE': return this.blueHard;
            case 'GREEN': return this.greenHard;
            case 'YELLOW': return this.yellowHard;
            case 'PURPLE': return this.purpleHard;
            default: return this.emptySimple;
        }
    }

    public getStripedVertical(color: Colors): HTMLImageElement {
        switch (color) {
            case 'RED': return this.redVStripe;
            case 'ORANGE': return this.orangeVStripe;
            case 'BLUE': return this.blueVStripe;
            case 'GREEN': return this.greenVStripe;
            case 'YELLOW': return this.yellowVStripe;
            case 'PURPLE': return this.purpleVStripe;
            default: return this.emptySimple;
        }
    }
    
    public getStripedHorizontal(color: Colors): HTMLImageElement {
        switch (color) {
            case 'RED': return this.redHStripe;
            case 'ORANGE': return this.orangeHStripe;
            case 'BLUE': return this.blueHStripe;
            case 'GREEN': return this.greenHStripe;
            case 'YELLOW': return this.yellowHStripe;
            case 'PURPLE': return this.purpleHStripe;
            default: return this.emptySimple;
        }
    }

    public getMulticolored(): HTMLImageElement {
        return this.multicolored;
    }
}
