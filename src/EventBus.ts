import { Signal } from 'signal-ts';
import { CellPos, Vector } from 'setup';

export namespace EventBus {
    export const cellClickEvent: Signal<Vector> = new Signal();
    export const swapCellRequest: Signal<Vector> = new Signal();

    export const renderSwapAnimation: Signal<{first: CellPos, second: CellPos}> = new Signal();
}