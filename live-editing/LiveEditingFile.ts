const ASSETS_REG_EXP = new RegExp("assets/");

export class LiveEditingFile {
    public path: string;
    public content: string;
    public hasRelativeAssetsUrls: boolean = false;

    constructor(path: string, content: string) {
        this.path = path;
        this.content = content;
        if (ASSETS_REG_EXP.test(content)) {
            this.hasRelativeAssetsUrls = true;
        }
    }
}
