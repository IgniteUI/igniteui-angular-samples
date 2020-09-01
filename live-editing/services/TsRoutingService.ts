import { TsImportsService } from "./TsImportsService";
import * as path from "path";
// tslint:disable-next-line: no-implicit-dependencies
import * as ts from "typescript";
import * as fs from "fs";
const ROUTES = "./Routes.ts";
interface IModuleRouting{
    component: string,
    path: string;
}

interface IAppRouting {
    module: string,
    path: string,
    routes: IModuleRouting[]
}

export class TsRoutingService {

    private imports;
    private tsImportService: TsImportsService;
    public appRouting = new Map<string, IAppRouting[]>();
    constructor(){
        this.tsImportService =  new TsImportsService();
        this.imports = this.tsImportService.getFileNamespacesImports(path.join(__dirname, ROUTES));
    }

    public generateRouting(routePath = ROUTES, routes?: IModuleRouting[]) {
        const source = ts.createSourceFile('router', fs.readFileSync(path.join(__dirname, routePath)).toString(), ts.ScriptTarget.ES2015, true);
        const routingAssignments = source.statements.filter(s => s.kind === ts.SyntaxKind.VariableStatement);
        routingAssignments.forEach(a => {
            const [variableName, array] = this.getRoutesArray(a, ts.SyntaxKind.VariableDeclarationList);
            if (!routes){
                this.appRouting.set(variableName.text, []);
            }
            console.log(routePath);
            (array as ts.ArrayLiteralExpression).elements.forEach((node: ts.ObjectLiteralExpression) => {
                // tslint:disable-next-line: prefer-const
                const [idProp, ...props] = node.properties;
                const [pathProp, routesProp] = this.getObjectLiteralSpecificProperties(props);
                const [, idPropValue] = (idProp.getChildren().filter(n => n.kind === ts.SyntaxKind.Identifier) as [ts.Identifier, ts.Identifier]);
                const pathPropValue = (pathProp.getChildren().find(n => n.kind === ts.SyntaxKind.StringLiteral) as ts.StringLiteral)
                const componentRoutes = routesProp?.getChildren().find(n => n.kind === ts.SyntaxKind.PropertyAccessExpression);
                if (!componentRoutes) {
                    const moduleRoute: IModuleRouting = {component: idPropValue.text, path: pathPropValue.text}
                    routes.push(moduleRoute);
                } else {
                    const appRoute: IAppRouting = { module: idPropValue.text, routes: [], path: pathPropValue.text}
                    const moduleRoutingIdentifier = componentRoutes.getChildren()[0].getText();
                    const moduleRoutingPath = `${this.imports.get(moduleRoutingIdentifier)}.ts`;
                    this.generateRouting(moduleRoutingPath, appRoute.routes);
                    this.appRouting.get(variableName.text).push(appRoute);
                }

            });
        });
    }

    private getRoutesArray(parent: ts.Node, searchKind: ts.SyntaxKind): never | [ts.Identifier, ts.ArrayLiteralExpression] {
        const child = parent.getChildren().find(node => node.kind === searchKind)
        switch (child.kind) {
            case ts.SyntaxKind.VariableDeclarationList:
                return this.getRoutesArray(child, ts.SyntaxKind.SyntaxList);
            case ts.SyntaxKind.SyntaxList:
                return this.getRoutesArray(child, ts.SyntaxKind.VariableDeclaration);
            case ts.SyntaxKind.VariableDeclaration:
                return child.getChildren().filter(node => node.kind === ts.SyntaxKind.Identifier || node.kind === ts.SyntaxKind.ArrayLiteralExpression) as unknown as [ts.Identifier, ts.ArrayLiteralExpression]
        }
    }

    private getObjectLiteralSpecificProperties(props: ts.ObjectLiteralElementLike[]): [ts.StringLiteral, ts.PropertyAccessExpression] {
        return props.filter(prop => prop.name.getText() === 'path' || prop.name.getText() === 'routes') as unknown as [ts.StringLiteral, ts.PropertyAccessExpression];
    }
}
