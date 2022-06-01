import { Board } from "./models/Board";
import { CanvasView } from "./views/CanvasView";


function delay(delayInms: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delayInms);
    });
}

async function main(): Promise<void> {
    const baseCanvas = new CanvasView('playField');
    const board = new Board();
    await delay(500);
    baseCanvas.drawBoard(board);
}

main ();