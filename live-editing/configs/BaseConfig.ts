export const BaseAppConfig = {
    modules: [
        { 'module': 'BrowserModule', 'import': '@angular/platform-browser' },
        { 'module': 'FormsModule', 'import': '@angular/forms' },
    ],
    providers: [
        { 'provider': 'provideAnimations()', 'import': '@angular/platform-browser/animations' },
        { 'provider': 'provideIgniteIntl()', 'import': 'igniteui-angular' },
        { 'provider': 'provideRouter([])', 'import': '@angular/router' }
    ],
    routesConfig: {
        router: false
    }
}
