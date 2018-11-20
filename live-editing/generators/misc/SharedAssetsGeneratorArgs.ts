export class SharedAssetsGeneratorArgs {
    public stylesFileName: string;
    public stylesFileContent: string;
    public angularCliFilePath: string;
    public appComponentStylesFileName: string;
    public appComponentStylesFileContent: string;
    public appComponentTsFileContent: string;

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
