import { CandyMatchHandler } from "./controllers/CandyMatchHandler";
import { EventHandler } from "./controllers/EventHandler";
import { SwapHandler } from "./controllers/SwapHandler";
import { Board } from "./models/Board";
import { CanvasView } from "./views/CanvasView";
import { BOARD_HEIGHT, BOARD_WIDTH, delay } from './setup';
import { CandyDestroyer } from "./controllers/CandyDestroyer";
import { GravityHandler } from "./controllers/GravityHandler";
import { EventBus, Global } from "./EventBus";

async function main(): Promise<void> {
    const baseCanvas = new CanvasView('playField');
    const board = new Board();

    window.addEventListener('resize', () => makeResponsive(board));
    makeResponsive(board);

    Global.spritePool.ImageLoaded.add(() => EventBus.renderBoard.emit(board));

    const eventHandler =  new EventHandler(baseCanvas);
    const swapHandler = new SwapHandler(board);
    const candyMatchHandler = new CandyMatchHandler();
    const candyDestroyer = new CandyDestroyer();
    const gravityHandler = new GravityHandler(board);

    await delay(500);
    baseCanvas.drawBoard(board);
}

function makeResponsive(board: Board) {
    const canvas = document.getElementById('playField') as HTMLCanvasElement;

    if (innerWidth < BOARD_WIDTH) {
        canvas.width = innerWidth;
    } else {
        canvas.width = BOARD_WIDTH;
    }

    canvas.height = canvas.width * (BOARD_HEIGHT / BOARD_WIDTH);
    EventBus.renderBoard.emit(board)
}

main ();