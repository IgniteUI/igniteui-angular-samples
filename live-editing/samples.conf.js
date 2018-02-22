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
      componentPath: "/avatar/avatar-sample-2/",
      componentRoutePath: "avatar-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule", from: "igniteui-angular/main" },
          { import: "AvatarSample2Component", from: "./avatar/avatar-sample-2/avatar-sample-2.component" }],
        ngDeclarations: "AvatarSample2Component",
        ngImports: "IgxAvatarModule"
      },
      shortenComponentPathBy: "/avatar/"
    },
    {
      componentPath: "/avatar/avatar-sample-3/",
      componentRoutePath: "avatar-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule", from: "igniteui-angular/main" },
          { import: "AvatarSample3Component", from: "./avatar/avatar-sample-3/avatar-sample-3.component" }],
        ngDeclarations: "AvatarSample3Component",
        ngImports: "IgxAvatarModule"
      },
      shortenComponentPathBy: "/avatar/"
    },
    {
      componentPath: "/badge/badge-sample-1/",
      componentRoutePath: "badge-sample-1",
      additionalFiles:["./badge/model/member.model.ts"],
      appModuleConfig: {
        imports: [
          { import: "IgxBadgeModule, IgxListModule", from: "igniteui-angular/main" },
          { import: "BadgeSample1Component", from: "./badge/badge-sample-1/badge-sample-1.component" }],
        ngDeclarations: "BadgeSample1Component",
        ngImports: "IgxBadgeModule, IgxListModule"
      },
      shortenComponentPathBy: "/badge/"
    },
    {
      componentPath: "/badge/badge-sample-2/",
      componentRoutePath: "badge-sample-2",
      additionalFiles:["./badge/model/member.model.ts"],
      appModuleConfig: {
        imports: [
          { import: "IgxBadgeModule, IgxListModule, IgxAvatarModule", from: "igniteui-angular/main" },
          { import: "BadgeSample2Component", from: "./badge/badge-sample-2/badge-sample-2.component" }],
        ngDeclarations: "BadgeSample2Component",
        ngImports: "IgxBadgeModule, IgxListModule, IgxAvatarModule"
      },      
      shortenComponentPathBy: "/badge/"
    },
    {
      componentPath: "/badge/badge-sample-3/",
      componentRoutePath: "badge-sample-3",
      additionalFiles:["./badge/model/member.model.ts"],
      appModuleConfig: {
        imports: [
          { import: "IgxBadgeModule, IgxListModule, IgxAvatarModule", from: "igniteui-angular/main" },
          { import: "BadgeSample3Component", from: "./badge/badge-sample-3/badge-sample-3.component" }],
        ngDeclarations: "BadgeSample3Component",
        ngImports: "IgxBadgeModule, IgxListModule, IgxAvatarModule"
      },
      shortenComponentPathBy: "/badge/"
    },
    {
      componentPath: "/buttons/buttons-sample-1/",
      componentRoutePath: "buttons-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "ButtonsSample1Component", from: "./buttons/buttons-sample-1/buttons-sample-1.component" }],
        ngDeclarations: "ButtonsSample1Component",
        ngImports: "IgxButtonModule, IgxIconModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/button/"
    },
    {
      componentPath: "/buttons/buttons-sample-2/",
      componentRoutePath: "buttons-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule", from: "igniteui-angular/main" },
          { import: "ButtonsSample2Component", from: "./buttons/buttons-sample-2/buttons-sample-2.component" }],
        ngDeclarations: "ButtonsSample2Component",
        ngImports: "IgxButtonModule"
      },
      shortenComponentPathBy: "/button/"
    },
    {
      componentPath: "/buttons/buttons-sample-3/",
      componentRoutePath: "buttons-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "ButtonsSample3Component", from: "./buttons/buttons-sample-3/buttons-sample-3.component" }],
        ngDeclarations: "ButtonsSample3Component",
        ngImports: "IgxButtonModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/button/"
    },
    {
      componentPath: "/buttons/buttons-sample-4/",
      componentRoutePath: "buttons-sample-4",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "ButtonsSample4Component", from: "./buttons/buttons-sample-4/buttons-sample-4.component" }],
        ngDeclarations: "ButtonsSample4Component",
        ngImports: "IgxButtonModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/button/"
    },
    {
      componentPath: "/buttons/buttons-sample-5/",
      componentRoutePath: "buttons-sample-5",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "ButtonsSample5Component", from: "./buttons/buttons-sample-5/buttons-sample-5.component" }],
        ngDeclarations: "ButtonsSample5Component",
        ngImports: "IgxButtonModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/button/"
    },
    {
      componentPath: "/buttons/buttons-sample-6/",
      componentRoutePath: "buttons-sample-6",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "ButtonsSample6Component", from: "./buttons/buttons-sample-6/buttons-sample-6.component" }],
        ngDeclarations: "ButtonsSample6Component",
        ngImports: "IgxButtonModule, IgxIconModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/button/"
    },
    {
      componentPath: "/buttons/buttons-sample-7/",
      componentRoutePath: "buttons-sample-7",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "ButtonsSample7Component", from: "./buttons/buttons-sample-7/buttons-sample-7.component" }],
        ngDeclarations: "ButtonsSample7Component",
        ngImports: "IgxButtonModule, IgxIconModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/button/"
    },
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
      componentPath: "/carousel/",
      componentRoutePath: "carousel",
      appModuleConfig: {
        imports: [
          { import: "IgxCarouselModule, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "CarouselComponent", from: "./carousel/carousel.component" }],
        ngDeclarations: "CarouselComponent",
        ngImports: "IgxCarouselModule, IgxSliderModule"
      }
    },
    {
      componentPath: "/carousel/carousel-sample-1/",
      componentRoutePath: "carousel-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxCarouselModule, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "CarouselSample1Component", from: "./carousel/carousel-sample-1/carousel-sample-1.component" }],
        ngDeclarations: "CarouselSample1Component",
        ngImports: "IgxCarouselModule, IgxSliderModule"
      },
      shortenComponentPathBy: "/carousel/"
    },
    {
      componentPath: "/carousel/carousel-sample-2/",
      componentRoutePath: "carousel-sample-2",
      appModuleConfig: {
        imports: [
          { import: "Direction, IgxCarouselComponent, IgxCarouselModule, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "CarouselSample2Component", from: "./carousel/carousel-sample-2/carousel-sample-2.component" }],
        ngDeclarations: "CarouselSample2Component",
        ngImports: "IgxCarouselModule, IgxSliderModule"
      },
      shortenComponentPathBy: "/carousel/"
    },
    {
      componentPath: "/carousel/carousel-sample-3/",
      componentRoutePath: "carousel-sample-3",
      appModuleConfig: {
        imports: [
          { import: "Direction, IgxCarouselComponent, IgxCarouselModule, IgxLinearProgressBarComponent, IgxProgressBarModule, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "CarouselSample3Component", from: "./carousel/carousel-sample-3/carousel-sample-3.component" }],
        ngDeclarations: "CarouselSample3Component",
        ngImports: "IgxCarouselModule, IgxProgressBarModule, IgxSliderModule"
      },
      shortenComponentPathBy: "/carousel/"
    },
    {
      componentPath: "/carousel/carousel-sample-4/",
      componentRoutePath: "carousel-sample-4",
      additionalFiles: ["/carousel/carousel-details/carousel-details.component.ts", "/carousel/carousel-details/carousel-details.component.html",
      "/carousel/mock-slides.ts"],
      appModuleConfig: {
        imports: [
          { import: "Direction, IgxButtonModule, IgxCarouselComponent, IgxCarouselModule, IgxLinearProgressBarComponent, IgxProgressBarModule, IgxRippleModule, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "CarouselDetailsViewComponent", from: "./carousel/carousel-details/carousel-details.component"},
          { import: "Routes, Router, RouterModule", from: "@angular/router"},
          { import: "CarouselSample4Component", from: "./carousel/carousel-sample-4/carousel-sample-4.component" }],
        ngDeclarations: "CarouselDetailsViewComponent, CarouselSample4Component",
        ngImports: `RouterModule.forRoot(Routes = [\{component: CarouselDetailsViewComponent, path: 'details/:index'}]),
        IgxButtonModule, IgxCarouselModule, IgxProgressBarModule, IgxRippleModule, IgxSliderModule`
      },
      shortenComponentPathBy: "/carousel/"
    },
    {
      componentPath: "/circular-progressbar/",
      componentRoutePath: "circular-progressbar",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "CircularProgressbarComponent", from: "./circular-progressbar/circular-progressbar.component" }],
        ngDeclarations: "CircularProgressbarComponent",
        ngImports: "IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule"
      }
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
          { import: "IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "DialogComponent", from: "./dialog/dialog.component" }],
        ngDeclarations: "DialogComponent",
        ngImports: "IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule"
      }
    },
    {
      componentPath: "/form-elements/checkbox/checkbox-sample-1/",
      componentRoutePath: "checkbox-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxCheckboxModule", from: "igniteui-angular/main" },
          { import: "CheckboxSample1Component", from: "./form-elements/checkbox/checkbox-sample-1/checkbox-sample-1.component" }],
        ngDeclarations: "CheckboxSample1Component",
        ngImports: "IgxCheckboxModule"
      }
    },
    {
      componentPath: "/form-elements/checkbox/checkbox-sample-2/",
      componentRoutePath: "checkbox-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxCheckboxModule", from: "igniteui-angular/main" },
          { import: "CheckboxSample2Component", from: "./form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component" }],
        ngDeclarations: "CheckboxSample2Component",
        ngImports: "IgxCheckboxModule"
      }
    },
    {
      componentPath: "/form-elements/radio/radio-sample-1/",
      componentRoutePath: "radio-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxRadioModule", from: "igniteui-angular/main" },
          { import: "RadioSample1Component", from: "./form-elements/radio/radio-sample-1/radio-sample-1.component" }],
        ngDeclarations: "RadioSample1Component",
        ngImports: "IgxRadioModule"
      }
    },
    {
      componentPath: "/form-elements/radio/radio-sample-2/",
      componentRoutePath: "radio-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxRadioModule", from: "igniteui-angular/main" },
          { import: "RadioSample2Component", from: "./form-elements/radio/radio-sample-2/radio-sample-2.component" }],
        ngDeclarations: "RadioSample2Component",
        ngImports: "IgxRadioModule"
      }
    },
    {
      componentPath: "/form-elements/switch/switch-sample-1/",
      componentRoutePath: "switch-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxSwitchModule", from: "igniteui-angular/main" },
          { import: "SwitchSample1Component", from: "./form-elements/switch/switch-sample-1/switch-sample-1.component" }],
        ngDeclarations: "SwitchSample1Component",
        ngImports: "IgxSwitchModule"
      }
    },
    {
      componentPath: "/form-elements/switch/switch-sample-2/",
      componentRoutePath: "switch-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxSwitchModule", from: "igniteui-angular/main" },
          { import: "SwitchSample2Component", from: "./form-elements/switch/switch-sample-2/switch-sample-2.component" }],
        ngDeclarations: "SwitchSample2Component",
        ngImports: "IgxSwitchModule"
      }
    },
    {
      componentPath: "/grid/",
      componentRoutePath: "grid",
      additionalFiles: ["/grid/services/data.service.ts", "/grid/services/data.ts"],
      appModuleConfig: {
        imports: [
          { import: "HttpClientModule", from: "@angular/common/http" },
          { import: "IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule, IgxIconModule, IgxInputModule, IgxLabelModule, IgxProgressBarModule, IgxRippleModule, IgxSwitchModule", from: "igniteui-angular/main" },
          { import: "GridComponent", from: "./grid/grid.component" },
          { import: "DataService", from: "./grid/services/data.service" }],
        ngDeclarations: "GridComponent",
        ngImports: "IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(), IgxIconModule, IgxInputModule, IgxLabelModule, IgxProgressBarModule, IgxRippleModule, IgxSwitchModule, HttpClientModule",
        ngProviders: "DataService"
      }
    },
    {
      componentPath: "/icon/icon-sample-1/",
      componentRoutePath: "icon-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxIconModule", from: "igniteui-angular/main" },
          { import: "IconSample1Component", from: "./icon/icon-sample-1/icon-sample-1.component" }],
        ngDeclarations: "IconSample1Component",
        ngImports: "IgxIconModule"
      },
      shortenComponentPathBy: "/icon/"
    },
    {
      componentPath: "/label-input/",
      componentRoutePath: "label-input",
      appModuleConfig: {
        imports: [
          { import: "IgxInputModule, IgxLabelModule", from: "igniteui-angular/main" },
          { import: "LabelInputComponent", from: "./label-input/label-input.component" }],
        ngDeclarations: "LabelInputComponent",
        ngImports: "IgxInputModule, IgxLabelModule"
      },
      shortenComponentPathBy: "/icon/"
    },
    {
      componentPath: "/layout/",
      componentRoutePath: "layout",
      appModuleConfig: {
        imports: [
          { import: "IgxLayoutModule", from: "igniteui-angular/main" },
          { import: "LayoutComponent", from: "./layout/layout.component" }],
        ngDeclarations: "LayoutComponent",
        ngImports: "IgxLayoutModule"
      }
    },
    {
      componentPath: "/list/",
      componentRoutePath: "list",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxFilterOptions, IgxFilterModule, IgxIconModule, IgxLabelModule, IgxListModule", from: "igniteui-angular/main" },
          { import: "ListComponent", from: "./list/list.component" }],
        ngDeclarations: "ListComponent",
        ngImports: "IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxLabelModule, IgxListModule"
      },
      shortenComponentPathBy: "/list/"
    },
    {
      componentPath: "/list/list-sample-1/",
      componentRoutePath: "list-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxListModule", from: "igniteui-angular/main" },
          { import: "ListSample1Component", from: "./list/list-sample-1/list-sample-1.component" }],
        ngDeclarations: "ListSample1Component",
        ngImports: "IgxListModule"
      },
      shortenComponentPathBy: "/list/"
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
      componentPath: "/linear-progressbar/",
      componentRoutePath: "linear-progressbar",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "LinearProgressbarComponent", from: "./linear-progressbar/linear-progressbar.component" }],
        ngDeclarations: "LinearProgressbarComponent",
        ngImports: "IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule"
      }
    },
    {
      componentPath: "/linear-progressbar/linear-progressbar-sample-1/",
      componentRoutePath: "linear-progressbar-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "LinearProgressbarSample1Component", from: "./linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component" }],
        ngDeclarations: "LinearProgressbarSample1Component",
        ngImports: "IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/linear-progressbar/"
    },
    {
      componentPath: "/navbar/",
      componentRoutePath: "navbar",
      appModuleConfig: {
        imports: [
          { import: "IgxIconModule, IgxNavbarModule", from: "igniteui-angular/main" },
          { import: "NavbarComponent", from: "./navbar/navbar.component" }],
        ngDeclarations: "NavbarComponent",
        ngImports: "IgxIconModule, IgxNavbarModule"
      }
    },
    {
      componentPath: "/navdrawer/",
      componentRoutePath: "navigation-drawer",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "NavdrawerComponent", from: "./navdrawer/navdrawer.component" }],
        ngDeclarations: "NavdrawerComponent",
        ngImports: "IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule"
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
          { import: "IgxAvatarModule, IgxLayoutModule, IgxScrollModule", from: "igniteui-angular/main" },
          { import: "ScrollComponent", from: "./scroll/scroll.component" }],
        ngDeclarations: "ScrollComponent",
        ngImports: "IgxAvatarModule, IgxLayoutModule, IgxScrollModule"
      }
    },
    {
      componentPath: "/slider/slider-sample-1/",
      componentRoutePath: "slider-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxInputModule, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "SliderSample1Component", from: "./slider/slider-sample-1/slider-sample-1.component" }],
        ngDeclarations: "SliderSample1Component",
        ngImports: "IgxInputModule, IgxSliderModule"
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
          { import: "IgxInputModule, IgxSliderModule", from: "igniteui-angular/main" },
          { import: "SliderSample3Component", from: "./slider/slider-sample-3/slider-sample-3.component" }],
        ngDeclarations: "SliderSample3Component",
        ngImports: "IgxInputModule, IgxSliderModule"
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
          { import: "IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxRippleModule, IgxListModule, IgxTabBarModule", from: "igniteui-angular/main" },
          { import: "Routes, Router, RouterModule", from: "@angular/router"},
          { import: "TabbarComponent", from: "./tabbar/tabbar.component" }],
        ngDeclarations: "TabbarComponent",
        ngImports: `RouterModule.forRoot(Routes = [\{component: TabbarComponent, path: 'tabbar'}]), 
        IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxRippleModule, IgxListModule, IgxTabBarModule`
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
