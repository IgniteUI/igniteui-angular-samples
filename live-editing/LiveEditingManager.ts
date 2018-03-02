import { SampleAssetsGenerator } from "./SampleAssetsGenerator";
import { SharedAssetsGenerator } from "./SharedAssetsGenerator";

class LiveEditingManager {
    private sharedAssetsGenerator: SharedAssetsGenerator;
    private sampleAssetsGenerator: SampleAssetsGenerator;

    constructor() {
        this.sharedAssetsGenerator = new SharedAssetsGenerator();
        this.sampleAssetsGenerator = new SampleAssetsGenerator();
    }

    public run() {
        //this.sharedAssetsGenerator.generateSharedAssets();
        this.sampleAssetsGenerator.generateSamplesAssets();
    }
}

new LiveEditingManager().run();
