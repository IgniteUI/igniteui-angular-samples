import { HeatTileGeneratorWebWorker } from "igniteui-angular-core/ES5/HeatTileGeneratorWebWorker";

const worker: Worker = self as any;

worker.onmessage = HeatTileGeneratorWebWorker.onmessage;
HeatTileGeneratorWebWorker.postmessage = heatWorkerPostMessage;

function heatWorkerPostMessage() {
  (self as any).postMessage.apply(self, Array.prototype.slice.call(arguments));
}

HeatTileGeneratorWebWorker.start();

export default {} as typeof Worker & (new () => Worker);
