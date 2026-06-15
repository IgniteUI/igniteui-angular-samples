export const BaseAppAngularLocaleConfig = {
    modules: [
        { 'module': 'BrowserModule', 'import': '@angular/platform-browser' },
        { 'module': 'FormsModule', 'import': '@angular/forms' },
    ],
    providers: [
        { 'provider': 'provideAnimations()', 'import': '@angular/platform-browser/animations' }
    ],
    router: false
}
