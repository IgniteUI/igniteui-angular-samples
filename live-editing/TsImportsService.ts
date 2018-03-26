import * as Collections from "typescript-collections";
import * as ts from "typescript";
import * as fs from "fs";

export class TsImportsService {
    public getFileImports(filePath: string): Collections.Dictionary<string, string> {
        let sourceFile = ts.createSourceFile(filePath, fs.readFileSync(filePath).toString(), ts.ScriptTarget.ES2015, true);
        let imports = new Collections.Dictionary<string, string>();
        let children = sourceFile.getChildren()[0].getChildren();
        for (let i = 0; i < children.length; i++) {
            this.getImports(children[i], imports);
        }

        return imports;
    }

    private getImports(node: ts.Node, imports: Collections.Dictionary<string, string>) {
        if (node.kind === ts.SyntaxKind.ImportDeclaration) {
            let importDeclaration = (<ts.ImportDeclaration>node);
            let moduleSpecifier = importDeclaration.moduleSpecifier.getText();
            moduleSpecifier = moduleSpecifier.substring(1, moduleSpecifier.length - 1);
            let importSpecifiers = new Array<string>();
            let children = node.getChildren();
            for (let i = 0; i < children.length; i++) {
                this.getImportSpecifiers(node, importSpecifiers);
            }

            for (let i = 0; i < importSpecifiers.length; i++) {
                imports.setValue(importSpecifiers[i], moduleSpecifier);
            }
        }
    }

    private getImportSpecifiers(node: ts.Node, importSpecifiers: Array<string>) {
        if (node.kind === ts.SyntaxKind.ImportSpecifier) {
            let importSpecifier = (<ts.ImportSpecifier>node);
            importSpecifiers.push(importSpecifier.getText());
            return;
        }

        let children = node.getChildren();
        for (let i = 0; i < children.length; i++) {
            this.getImportSpecifiers(children[i], importSpecifiers);
        }
    }
}
