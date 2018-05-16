import { argv } from 'yargs';
import { SampleAssetsGenerator } from "./generators/SampleAssetsGenerator";
import { SharedAssetsGenerator } from "./generators/SharedAssetsGenerator";
import { StyleSyntax } from './generators/StyleSyntax';

class LiveEditingManager {
    public run() {
        if (argv.styles) {
            let styles = argv.styles.trim().toLowerCase();
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
    }
}

new LiveEditingManager().run();
