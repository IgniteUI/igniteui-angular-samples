// tslint:disable:prefer-const
import * as fs from "fs";
import * as path from "path";
import { SassCompiler } from "./SassCompiler";

const STYLES_FILE_PATH = path.join(__dirname, "../../src/styles.scss");

// Compiles styles.scss only
export class SassJsCompileChecker {
    public async run() {
        let styles = fs.readFileSync(STYLES_FILE_PATH, "utf8");
        let compiler = new SassCompiler();
        let result = await compiler.compileWithSassJs(styles, true);
        console.log(result);
    }
}

export const sassJsCompileChecker = new SassJsCompileChecker();
