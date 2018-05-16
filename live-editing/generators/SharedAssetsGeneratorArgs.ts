export class SharedAssetsGeneratorArgs {
    stylesFileName: string;
    stylesFileContent: string;
    angularCliFilePath: string;
    appComponentStylesFileName: string;
    appComponentStylesFileContent: string;
    appComponentTsFileContent: string;

    constructor(stylesFileName: string, stylesFileContent: string,
        angularCliFilePath: string, appComponentStylesFileName: string,
        appComponentStylesFileContent: string, appComponentTsFileContent: string) {
        this.stylesFileName = stylesFileName;
        this.stylesFileContent = stylesFileContent;
        this.angularCliFilePath = angularCliFilePath;
        this.appComponentStylesFileName = appComponentStylesFileName;
        this.appComponentStylesFileContent = appComponentStylesFileContent;
        this.appComponentTsFileContent = appComponentTsFileContent;
    }
}
