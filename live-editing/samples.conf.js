/*
    This configuration helps to create a JSON file in the assets folder for each sample. Each JSON file contains the
    source code of each file used by the sample. These files are used for live sample editing or 
    whenever you'll need a sample's code in a human-readable form.

    Properties:
    - componentPath (string, required) - where the sample component is located in src/app/ directory.
          Gets the following three files from the path specified:
          %path%.component.css, %path%.component.html, %path%.component.ts.
    - componentRoutePath (string, required) - the route path of the component
    - additionalFiles (array, optional) - file paths to additional files the sample depends on
    - appModuleConfig (array, required) - the app module configuration for the sample
      - imports (array, required) - an array of imports with the following syntax: { "import": "", "from": "" }
      - ngDeclarations (string, required) - all NgModule declarations, separated by commas
      - ngImports (string, required) - all NgModule imports, separated by commas
      - ngProviders (string, optional) - all NgModule providers, separated by commas
    - shortenComponentPathBy (string, optional) - directory/directories to be removed from component path.
          This could be used when we have a lot of nested directories e.g. "/src/app/list/list-sample-1" and
          "/list/" path component could be omitted.
    - shortenComponentPathByExcludeFiles (array, optional) - files which content should be omitted when shortening
          component path by directory/directories.
*/

module.exports = {
  samplesAssetsConfig: [
    {
      componentPath: "/avatar/",
      componentRoutePath: "avatar",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule", from: "igniteui-angular/main" },
          { import: "AvatarComponent", from: "./avatar/avatar.component" }],
        ngDeclarations: "AvatarComponent",
        ngImports: "IgxAvatarModule"
      }
    },
    {
      componentPath: "/badge/",
      componentRoutePath: "badge",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxBadgeModule", from: "igniteui-angular/main" },
          { import: "BadgeComponent", from: "./badge/badge.component" }],
        ngDeclarations: "BadgeComponent",
        ngImports: "IgxAvatarModule, IgxBadgeModule"
      }
    },
    // {
    //   componentPath: "/buttons/",
    //   componentRoutePath: "buttons",
    //   appModuleConfig: {
    //     imports: [
    //       { import: "IgxButtonModule, IgxButtonGroupModule, IgxIconModule, IgxRippleModule", from: "igniteui-angular/main" },
    //       { import: "ButtonsComponent", from: "./buttons/buttons.component" }],
    //     ngDeclarations: "ButtonsComponent",
    //     ngImports: "IgxButtonModule, IgxButtonGroupModule, IgxIconModule, IgxRippleModule"
    //   }
    // },
      {
      componentPath: "/calendar/",
      componentRoutePath: "calendar",
      appModuleConfig: {
        imports: [
          { import: "IgxCardModule, IgxCalendarModule", from: "igniteui-angular/main" },
          { import: "CalendarComponent", from: "./calendar/calendar.component" }],
        ngDeclarations: "CalendarComponent",
        ngImports: "IgxCardModule, IgxCalendarModule"
      }
    },
    {
      componentPath: "/card/",
      componentRoutePath: "card",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "CardComponent", from: "./card/card.component" }],
        ngDeclarations: "CardComponent",
        ngImports: "IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule"
      }
    },
    {
      componentPath: "/card/card-sample-1/",
      componentRoutePath: "card-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxCardModule", from: "igniteui-angular/main" },
          { import: "CardSample1Component", from: "./card/card-sample-1/card-sample-1.component" }],
        ngDeclarations: "CardSample1Component",
        ngImports: "IgxCardModule"
      },
      shortenComponentPathBy: "/card/"
    },
    {
      componentPath: "/card/card-sample-2/",
      componentRoutePath: "card-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxCardModule", from: "igniteui-angular/main" },
          { import: "CardSample2Component", from: "./card/card-sample-2/card-sample-2.component" }],
        ngDeclarations: "CardSample2Component",
        ngImports: "IgxAvatarModule, IgxCardModule"
      },
      shortenComponentPathBy: "/card/"
    },
    {
      componentPath: "/card/card-sample-3/",
      componentRoutePath: "card-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "CardSample3Component", from: "./card/card-sample-3/card-sample-3.component" }],
        ngDeclarations: "CardSample3Component",
        ngImports: "IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxCardModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/card/"
    },
    {
      componentPath: "/datepicker/",
      componentRoutePath: "datepicker",
      appModuleConfig: {
        imports: [
          { import: "IgxDatePickerModule", from: "igniteui-angular/main" },
          { import: "DatepickerComponent", from: "./datepicker/datepicker.component" }],
        ngDeclarations: "DatepickerComponent",
        ngImports: "IgxDatePickerModule"
      }
    },
    {
      componentPath: "/dialog/",
      componentRoutePath: "dialog",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxDialogModule, IgxInput, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "DialogComponent", from: "./dialog/dialog.component" }],
        ngDeclarations: "DialogComponent",
        ngImports: "IgxButtonModule, IgxDialogModule, IgxInput, IgxRippleModule"
      }
    },
    {
      componentPath: "/form-elements/",
      componentRoutePath: "form-elements",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxCheckboxModule, IgxIconModule, IgxInput, IgxRadioModule, IgxSwitchModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "FormElementsComponent", from: "./form-elements/form-elements.component" }],
        ngDeclarations: "FormElementsComponent",
        ngImports: "IgxAvatarModule, IgxCheckboxModule, IgxIconModule, IgxInput, IgxRadioModule, IgxSwitchModule, IgxRippleModule"
      }
    },
    {
      componentPath: "/grid/",
      componentRoutePath: "grid",
      additionalFiles: ["/grid/services/data.service.ts", "/grid/services/data.ts"],
      appModuleConfig: {
        imports: [
          { import: "HttpClientModule", from: "@angular/common/http" },
          { import: "IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule, IgxIconModule, IgxInput, IgxProgressBarModule, IgxRippleModule, IgxSwitchModule", from: "igniteui-angular/main" },
          { import: "GridComponent", from: "./grid/grid.component" },
          { import: "DataService", from: "./grid/services/data.service" }],
        ngDeclarations: "GridComponent",
        ngImports: "IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(), IgxIconModule, IgxInput, IgxProgressBarModule, IgxRippleModule, IgxSwitchModule, HttpClientModule",
        ngProviders: "DataService"
      }
    },
    {
      componentPath: "/layout/",
      componentRoutePath: "layout",
      appModuleConfig: {
        imports: [
          { import: "IgxLayout", from: "igniteui-angular/main" },
          { import: "LayoutComponent", from: "./layout/layout.component" }],
        ngDeclarations: "LayoutComponent",
        ngImports: "IgxLayout"
      }
    },
    {
      componentPath: "/list/list-sample-2/",
      componentRoutePath: "list-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxListModule", from: "igniteui-angular/main" },
          { import: "ListSample2Component", from: "./list/list-sample-2/list-sample-2.component" }],
        ngDeclarations: "ListSample2Component",
        ngImports: "IgxListModule"
      },
      shortenComponentPathBy: "/list/"
    },
    {
      componentPath: "/list/list-sample-3/",
      componentRoutePath: "list-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxListModule", from: "igniteui-angular/main" },
          { import: "ListSample3Component", from: "./list/list-sample-3/list-sample-3.component" }],
        ngDeclarations: "ListSample3Component",
        ngImports: "IgxListModule"
      },
      shortenComponentPathBy: "/list/"
    },
    {
      componentPath: "/list/list-sample-4/",
      componentRoutePath: "list-sample-4",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxListModule", from: "igniteui-angular/main" },
          { import: "ListSample4Component", from: "./list/list-sample-4/list-sample-4.component" }],
        ngDeclarations: "ListSample4Component",
        ngImports: "IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxListModule"
      },
      shortenComponentPathBy: "/list/"
    },
    {
      componentPath: "/navbar/",
      componentRoutePath: "navbar",
      appModuleConfig: {
        imports: [
          { import: "IgxNavbarModule", from: "igniteui-angular/main" },
          { import: "NavbarComponent", from: "./navbar/navbar.component" }],
        ngDeclarations: "NavbarComponent",
        ngImports: "IgxNavbarModule"
      }
    },
    {
      componentPath: "/navdrawer/",
      componentRoutePath: "navigation-drawer",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, NavigationDrawerModule, IgxRippleModule, IgxNavigationDirectives", from: "igniteui-angular/main" },
          { import: "NavdrawerComponent", from: "./navdrawer/navdrawer.component" }],
        ngDeclarations: "NavdrawerComponent",
        ngImports: "IgxButtonModule, IgxIconModule, NavigationDrawerModule, IgxRippleModule, IgxNavigationDirectives"
      }
    },
    {
      componentPath: "/progressbar/",
      componentRoutePath: "progressbar",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "ProgressbarComponent", from: "./progressbar/progressbar.component" }],
        ngDeclarations: "ProgressbarComponent",
        ngImports: "IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule"
      }
    },
    {
      componentPath: "/scroll/",
      componentRoutePath: "scroll",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxLayout, IgxScrollModule", from: "igniteui-angular/main" },
          { import: "ScrollComponent", from: "./scroll/scroll.component" }],
        ngDeclarations: "ScrollComponent",
        ngImports: "IgxAvatarModule, IgxLayout, IgxScrollModule"
      }
    },
    {
      componentPath: "/slider/slider-sample-1/",
      componentRoutePath: "slider-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxInput, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "SliderSample1Component", from: "./slider/slider-sample-1/slider-sample-1.component" }],
        ngDeclarations: "SliderSample1Component",
        ngImports: "IgxInput, IgxSliderModule"
      },
      shortenComponentPathBy: "/slider/"
    },
    {
      componentPath: "/slider/slider-sample-2/",
      componentRoutePath: "slider-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxSliderModule", from: "igniteui-angular/main" },
          { import: "SliderSample2Component", from: "./slider/slider-sample-2/slider-sample-2.component" }],
        ngDeclarations: "SliderSample2Component",
        ngImports: "IgxSliderModule"
      },
      shortenComponentPathBy: "/slider/"
    },
    {
      componentPath: "/slider/slider-sample-3/",
      componentRoutePath: "slider-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxInput, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "SliderSample3Component", from: "./slider/slider-sample-3/slider-sample-3.component" }],
        ngDeclarations: "SliderSample3Component",
        ngImports: "IgxInput, IgxSliderModule"
      },
      shortenComponentPathBy: "/slider/"
    },
    {
      componentPath: "/slider/slider-sample-4/",
      componentRoutePath: "slider-sample-4",
      appModuleConfig: {
        imports: [
          { import: "IgxSliderModule", from: "igniteui-angular/main" },
          { import: "SliderSample4Component", from: "./slider/slider-sample-4/slider-sample-4.component" }],
        ngDeclarations: "SliderSample4Component",
        ngImports: "IgxSliderModule"
      },
      shortenComponentPathBy: "/slider/"
    },
    {
      componentPath: "/slider/slider-sample-5/",
      componentRoutePath: "slider-sample-5",
      appModuleConfig: {
        imports: [
          { import: "IgxSliderModule", from: "igniteui-angular/main" },
          { import: "SliderSample5Component", from: "./slider/slider-sample-5/slider-sample-5.component" }],
        ngDeclarations: "SliderSample5Component",
        ngImports: "IgxSliderModule"
      },
      shortenComponentPathBy: "/slider/"
    },
    {
      componentPath: "/snackbar/",
      componentRoutePath: "snackbar",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxIconModule, IgxListModule, IgxRippleModule, IgxSnackbarModule", from: "igniteui-angular/main" },
          { import: "SnackbarComponent", from: "./snackbar/snackbar.component" }],
        ngDeclarations: "SnackbarComponent",
        ngImports: "IgxAvatarModule, IgxIconModule, IgxListModule, IgxRippleModule, IgxSnackbarModule"
      }
    },
    {
      componentPath: "/tabbar/",
      componentRoutePath: "tabbar",
      appModuleConfig: {
        imports: [
          { import: "IgxTabBarModule", from: "igniteui-angular/main" },
          { import: "TabbarComponent", from: "./tabbar/tabbar.component" }],
        ngDeclarations: "TabbarComponent",
        ngImports: "IgxTabBarModule"
      }
    },
    {
      componentPath: "/toast/",
      componentRoutePath: "toast",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxRippleModule, IgxToastModule", from: "igniteui-angular/main" },
          { import: "ToastComponent", from: "./toast/toast.component" }],
        ngDeclarations: "ToastComponent",
        ngImports: "IgxButtonModule, IgxRippleModule, IgxToastModule"
      }
    },
    {
      componentPath: "/toggle/",
      componentRoutePath: "toggle",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxToggleModule", from: "igniteui-angular/main" },
          { import: "ToggleComponent", from: "./toggle/toggle.component" }],
        ngDeclarations: "ToggleComponent",
        ngImports: "IgxButtonModule, IgxToggleModule"
      }
    },
    {
      componentPath: "/toggle/toggle-sample-1/",
      componentRoutePath: "toggle-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxToggleModule", from: "igniteui-angular/main" },
          { import: "ToggleSample1Component", from: "./toggle/toggle-sample-1/toggle-sample-1.component" }],
        ngDeclarations: "ToggleSample1Component",
        ngImports: "IgxButtonModule, IgxToggleModule"
      },
      shortenComponentPathBy: "/toggle/"
    },
    {
      componentPath: "/toggle/toggle-sample-2/",
      componentRoutePath: "toggle-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxToggleModule", from: "igniteui-angular/main" },
          { import: "ToggleSample2Component", from: "./toggle/toggle-sample-2/toggle-sample-2.component" }],
        ngDeclarations: "ToggleSample2Component",
        ngImports: "IgxButtonModule, IgxToggleModule"
      },
      shortenComponentPathBy: "/toggle/"
    },
    {
      componentPath: "/toggle/toggle-sample-3/",
      componentRoutePath: "toggle-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxToggleModule", from: "igniteui-angular/main" },
          { import: "ToggleSample3Component", from: "./toggle/toggle-sample-3/toggle-sample-3.component" }],
        ngDeclarations: "ToggleSample3Component",
        ngImports: "IgxButtonModule, IgxToggleModule"
      },
      shortenComponentPathBy: "/toggle/"
    },
  ]
}
