
// tslint:disable:prefer-const
import * as fs from "fs";
import { Generator } from "./Generator";
import { MetaData } from "./misc/MetaData";
import { StyleSyntax } from "./misc/StyleSyntax";

export class MetaDataGenerator extends Generator {
    constructor(styleSyntax: StyleSyntax = StyleSyntax.Sass) {
        super(styleSyntax);
        console.log("Live-Editing created MetaDataGenerator... ");
    }

    public Generate() {
        let metadata = new MetaData();
        fs.writeFileSync(this.getAssetsSamplesDir() + "/meta.json", JSON.stringify(metadata));
    }
}
