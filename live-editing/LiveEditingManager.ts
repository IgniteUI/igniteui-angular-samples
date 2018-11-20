import { argv } from "yargs";
import { MetaDataGenerator } from "./generators/MetaDataGenerator";
import { StyleSyntax } from "./generators/misc/StyleSyntax";
import { SampleAssetsGenerator } from "./generators/SampleAssetsGenerator";
import { SharedAssetsGenerator } from "./generators/SharedAssetsGenerator";

class LiveEditingManager {
    public run() {
        if (argv.styles) {
            const styles = argv.styles.trim().toLowerCase();
            if (styles === "css") {
                this._run(StyleSyntax.CSS);
            } else if (styles === "sass") {
                this._run(StyleSyntax.Sass);
            }
        } else {
            this._run(StyleSyntax.CSS);
            this._run(StyleSyntax.Sass);
        }
    }

    public _run(styleSyntax: StyleSyntax) {
        new SharedAssetsGenerator(styleSyntax).generateSharedAssets();
        new SampleAssetsGenerator(styleSyntax).generateSamplesAssets();
        new MetaDataGenerator(styleSyntax).Generate();
    }
}

new LiveEditingManager().run();
