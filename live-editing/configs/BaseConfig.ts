export const BaseAppConfig = {
    modules: [
        { 'module': 'BrowserModule', 'import': '@angular/platform-browser' },
        { 'module': 'FormsModule', 'import': '@angular/forms' },
        { 'module': 'HammerModule', 'import': '@angular/platform-browser' }
    ],
    providers: [
        { 'provider': 'provideAnimations()', 'import': '@angular/platform-browser/animations' }
    ],
    router: false
}