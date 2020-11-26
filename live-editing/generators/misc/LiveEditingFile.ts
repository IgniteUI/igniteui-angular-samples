const ASSETS_REG_EXP = new RegExp("assets/");

export class LiveEditingFile {
    public path: string;
    public content: string;
    public hasRelativeAssetsUrls: boolean = false;
    public isMain: boolean;
    public fileExtension: string;
    public fileHeader: string;
    constructor(path: string, content: string, main?: boolean, filesExtension?: string, header?: string) {
        this.path = path;
        this.content = content;
        if (ASSETS_REG_EXP.test(content)) {
            this.hasRelativeAssetsUrls = true;
        }
        this.isMain = main;
        this.fileExtension = filesExtension;
        this.fileHeader = header;
    }
}
