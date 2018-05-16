import * as nodeSass from "node-sass";

const IGNITE_IMPORTS_REG_EXP = new RegExp(/(@import\s+['"])(~)(igniteui-angular)/g);

export class SassCompiler {
    compile(sass: string): string {
        sass = sass.replace(IGNITE_IMPORTS_REG_EXP, "$1./node_modules/$3");
        if (sass.trim() === "") {
            return "";
        }

        var renderedSassResult = nodeSass.renderSync({
            data: sass
        });

        return renderedSassResult.css.toString();
    }
}
