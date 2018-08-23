// tslint:disable:prefer-const
// tslint:disable:object-literal-shorthand
// tslint:disable:only-arrow-functions
import * as nodeSass from "node-sass";

const IGNITE_IMPORTS_REG_EXP = new RegExp(/(@import\s+['"])(~)(igniteui-angular)/g);
const IGNITE_IMPORT_REG_EXP = new RegExp(/(~)(igniteui-angular)/g);
const NODE_SASS_PATHS = [
    // required because of themes.scss file
    "src/app/theming/theme-chooser/", "src/app/theming/theme-chooser/styles" ];

export class SassCompiler {
    public compile(sass: string): string {
        sass = sass.replace(IGNITE_IMPORTS_REG_EXP, "$1./node_modules/$3");
        if (sass.trim() === "") {
            return "";
        }

        const renderedSassResult = nodeSass.renderSync({
            data: sass,
            importer: function(url, prev, done) {
                let fileUrl = url.replace(IGNITE_IMPORT_REG_EXP, "./node_modules/$2");
                return {file: fileUrl};
            },
            includePaths: NODE_SASS_PATHS
        });

        return renderedSassResult.css.toString();
    }
}
