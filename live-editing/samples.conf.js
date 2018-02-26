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
      additionalFiles:["/badge/model/member.model.ts"],
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
      additionalFiles:["/badge/model/member.model.ts"],
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
      additionalFiles:["/badge/model/member.model.ts"],
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
      componentPath: "/buttonGroup/button-group-sample-1/",
      componentRoutePath: "button-group-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonGroupModule", from: "igniteui-angular/main" },
          { import: "ButtonGroupSample1Component", from: "./buttonGroup/button-group-sample-1/button-group-sample-1.component" }],
        ngDeclarations: "ButtonGroupSample1Component",
        ngImports: "IgxButtonGroupModule"
      },
      shortenComponentPathBy: "/buttonGroup/"
    },
    {
      componentPath: "/buttonGroup/button-group-sample-2/",
      componentRoutePath: "button-group-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonGroupModule", from: "igniteui-angular/main" },
          { import: "ButtonGroupSample2Component", from: "./buttonGroup/button-group-sample-2/button-group-sample-2.component" }],
        ngDeclarations: "ButtonGroupSample2Component",
        ngImports: "IgxButtonGroupModule"
      },
      shortenComponentPathBy: "/buttonGroup/"
    },
    {
      componentPath: "/buttonGroup/button-group-sample-3/",
      componentRoutePath: "button-group-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonGroupModule", from: "igniteui-angular/main" },
          { import: "ButtonGroupSample3Component", from: "./buttonGroup/button-group-sample-3/button-group-sample-3.component" }],
        ngDeclarations: "ButtonGroupSample3Component",
        ngImports: "IgxButtonGroupModule"
      },
      shortenComponentPathBy: "/buttonGroup/"
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
      componentPath: "/calendar/calendar-sample-1/",
      componentRoutePath: "calendar-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxCalendarModule", from: "igniteui-angular/main" },
          { import: "CalendarSample1Component", from: "./calendar/calendar-sample-1/calendar-sample-1.component" }],
        ngDeclarations: "CalendarSample1Component",
        ngImports: "IgxCalendarModule"
      },
      shortenComponentPathBy: "/calendar/"
    },
    {
      componentPath: "/calendar/calendar-sample-2/",
      componentRoutePath: "calendar-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxCalendarModule", from: "igniteui-angular/main" },
          { import: "CalendarSample2Component", from: "./calendar/calendar-sample-2/calendar-sample-2.component" }],
        ngDeclarations: "CalendarSample2Component",
        ngImports: "IgxCalendarModule"
      },
      shortenComponentPathBy: "/calendar/"
    },
    {
      componentPath: "/calendar/calendar-sample-3/",
      componentRoutePath: "calendar-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxCalendarModule, IgxDialogModule", from: "igniteui-angular/main" },
          { import: "CalendarSample3Component", from: "./calendar/calendar-sample-3/calendar-sample-3.component" }],
        ngDeclarations: "CalendarSample3Component",
        ngImports: "IgxCalendarModule, IgxDialogModule"
      },
      shortenComponentPathBy: "/calendar/"
    },
    {
      componentPath: "/calendar/calendar-sample-4/",
      componentRoutePath: "calendar-sample-4",
      appModuleConfig: {
        imports: [
          { import: "IgxCalendarModule", from: "igniteui-angular/main" },
          { import: "CalendarSample4Component", from: "./calendar/calendar-sample-4/calendar-sample-4.component" }],
        ngDeclarations: "CalendarSample4Component",
        ngImports: "IgxCalendarModule"
      },
      shortenComponentPathBy: "/calendar/"
    },
    {
      componentPath: "/calendar/calendar-sample-5/",
      componentRoutePath: "calendar-sample-5",
      appModuleConfig: {
        imports: [
          { import: "IgxCalendarModule, IgxDialogModule", from: "igniteui-angular/main" },
          { import: "CalendarSample5Component", from: "./calendar/calendar-sample-5/calendar-sample-5.component" }],
        ngDeclarations: "CalendarSample5Component",
        ngImports: "IgxCalendarModule, IgxDialogModule"
      },
      shortenComponentPathBy: "/calendar/"
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
      componentPath: "/datepicker/datepicker-sample-1/",
      componentRoutePath: "datepicker-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxDatePickerModule", from: "igniteui-angular/main" },
          { import: "DatepickerSample1Component", from: "./datepicker/datepicker-sample-1/datepicker-sample-1.component" }],
        ngDeclarations: "DatepickerSample1Component",
        ngImports: "IgxDatePickerModule"
      },
      shortenComponentPathBy: "/datepicker/"
    },
    {
      componentPath: "/datepicker/datepicker-sample-2/",
      componentRoutePath: "datepicker-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxDatePickerModule", from: "igniteui-angular/main" },
          { import: "DatepickerSample2Component", from: "./datepicker/datepicker-sample-2/datepicker-sample-2.component" }],
        ngDeclarations: "DatepickerSample2Component",
        ngImports: "IgxDatePickerModule"
      },
      shortenComponentPathBy: "/datepicker/"
    },
    {
      componentPath: "/datepicker/datepicker-sample-3/",
      componentRoutePath: "datepicker-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxDatePickerModule", from: "igniteui-angular/main" },
          { import: "DatepickerSample3Component", from: "./datepicker/datepicker-sample-3/datepicker-sample-3.component" }],
        ngDeclarations: "DatepickerSample3Component",
        ngImports: "IgxDatePickerModule"
      },
      shortenComponentPathBy: "/datepicker/"
    },
    {
      componentPath: "/datepicker/datepicker-sample-4/",
      componentRoutePath: "datepicker-sample-4",
      appModuleConfig: {
        imports: [
          { import: "IgxDatePickerModule", from: "igniteui-angular/main" },
          { import: "DatepickerSample4Component", from: "./datepicker/datepicker-sample-4/datepicker-sample-4.component" }],
        ngDeclarations: "DatepickerSample4Component",
        ngImports: "IgxDatePickerModule"
      },
      shortenComponentPathBy: "/datepicker/"
    },
    {
      componentPath: "/datepicker/datepicker-sample-5/",
      componentRoutePath: "datepicker-sample-5",
      appModuleConfig: {
        imports: [
          { import: "IgxDatePickerModule", from: "igniteui-angular/main" },
          { import: "DatepickerSample5Component", from: "./datepicker/datepicker-sample-5/datepicker-sample-5.component" }],
        ngDeclarations: "DatepickerSample5Component",
        ngImports: "IgxDatePickerModule"
      },
      shortenComponentPathBy: "/datepicker/"
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
      componentPath: "/dialog/dialog-sample-1/",
      componentRoutePath: "dialog-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxDialogModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "DialogSample1Component", from: "./dialog/dialog-sample-1/dialog-sample-1.component" }],
        ngDeclarations: "DialogSample1Component",
        ngImports: "IgxButtonModule, IgxDialogModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/dialog/"
    },
    {
      componentPath: "/dialog/dialog-sample-2/",
      componentRoutePath: "dialog-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxDialogModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "DialogSample2Component", from: "./dialog/dialog-sample-2/dialog-sample-2.component" }],
        ngDeclarations: "DialogSample2Component",
        ngImports: "IgxButtonModule, IgxDialogModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/dialog/"
    },
    {
      componentPath: "/dialog/dialog-sample-3/",
      componentRoutePath: "dialog-sample-3",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule", from: "igniteui-angular/main" },
          { import: "DialogSample3Component", from: "./dialog/dialog-sample-3/dialog-sample-3.component" }],
        ngDeclarations: "DialogSample3Component",
        ngImports: "IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule"
      },
      shortenComponentPathBy: "/dialog/"
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
      componentPath: "/list/list-sample-5/",
      componentRoutePath: "list-sample-5",
      appModuleConfig: {
        imports: [
          { import: "IgxListModule", from: "igniteui-angular/main" },
          { import: "ListSample5Component", from: "./list/list-sample-5/list-sample-5.component" }],
        ngDeclarations: "ListSample5Component",
        ngImports: "IgxListModule"
      },
      shortenComponentPathBy: "/list/"
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
      componentPath: "/navbar/navbar-sample-1/",
      componentRoutePath: "navbar-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxNavbarModule", from: "igniteui-angular/main" },
          { import: "NavbarSample1Component", from: "./navbar/navbar-sample-1/navbar-sample-1.component" }],
        ngDeclarations: "NavbarSample1Component",
        ngImports: "IgxNavbarModule"
      }
    },
    {
      componentPath: "/navdrawer/",
      componentRoutePath: "navigation-drawer",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRadioModule, IgxRippleModule, IgxSwitchModule, IgxToggleModule", from: "igniteui-angular/main" },
          { import: "NavdrawerComponent", from: "./navdrawer/navdrawer.component" }],
        ngDeclarations: "NavdrawerComponent",
        ngImports: "IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRadioModule, IgxRippleModule, IgxSwitchModule, IgxToggleModule"
      }
    },
    {
      componentPath: "/navdrawer/nav-drawer-simple/",
      componentRoutePath: "navigation-drawer-simple",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule", from: "igniteui-angular/main" },
          { import: "NavDrawerSimpleComponent", from: "./navdrawer/nav-drawer-simple/nav-drawer-simple.component" }],
        ngDeclarations: "NavDrawerSimpleComponent",
        ngImports: "IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule"
      }
    },
    {
      componentPath: "/navdrawer/nav-drawer-pin/",
      componentRoutePath: "navigation-drawer-pin",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule", from: "igniteui-angular/main" },
          { import: "NavDrawerPinComponent", from: "./navdrawer/nav-drawer-pin/nav-drawer-pin.component" }],
        ngDeclarations: "NavDrawerPinComponent",
        ngImports: "IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule"
      }
    },
    {
      componentPath: "/navdrawer/nav-drawer-mini/",
      componentRoutePath: "navigation-drawer-mini",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule", from: "igniteui-angular/main" },
          { import: "NavDrawerMiniComponent", from: "./navdrawer/nav-drawer-mini/nav-drawer-mini.component" }],
        ngDeclarations: "NavDrawerMiniComponent",
        ngImports: "IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule"
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
      componentPath: "/ripple/ripple-sample-1/",
      componentRoutePath: "ripple-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxRippleModule, IgxAvatarModule, IgxIconModule, IgxButtonModule", from: "igniteui-angular/main" },
          { import: "RippleSample1Component", from: "./ripple/ripple-sample-1/ripple-sample-1.component" }],
        ngDeclarations: "RippleSample1Component",
        ngImports: "IgxRippleModule, IgxAvatarModule, IgxIconModule, IgxButtonModule"
      },
      shortenComponentPathBy: "/button/"
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
      componentPath: "/snackbar/snackbar-sample-4/",
      componentRoutePath: "snackbar-sample-4",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxIconModule, IgxListModule, IgxRippleModule, IgxSnackbarModule", from: "igniteui-angular/main" },
          { import: "SnackbarSample4Component", from: "./snackbar/snackbar-sample-4/snackbar-sample-4.component" }],
        ngDeclarations: "SnackbarSample4Component",
        ngImports: "IgxAvatarModule, IgxIconModule, IgxListModule, IgxRippleModule, IgxSnackbarModule"
      },
      shortenComponentPathBy: "/snackbar/"
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
      componentPath: "/tabbar/tabbar-sample-1/",
      componentRoutePath: "tabbar-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxIconModule, IgxListModule, IgxTabBarModule", from: "igniteui-angular/main" },
          { import: "Router, RouterModule", from: "@angular/router"},
          { import: "TabbarSample1Component", from: "./tabbar/tabbar-sample-1/tabbar-sample-1.component" }],
        ngDeclarations: "TabbarSample1Component",
        ngImports: "RouterModule, IgxAvatarModule, IgxIconModule, IgxListModule, IgxTabBarModule"
      },
      shortenComponentPathBy: "/tabbar/"
    },
    {
      componentPath: "/tabbar/tabbar-sample-2/",
      componentRoutePath: "tabbar-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxAvatarModule, IgxIconModule, IgxListModule, IgxTabBarModule", from: "igniteui-angular/main" },
          { import: "Router, RouterModule", from: "@angular/router"},
          { import: "TabbarSample2Component", from: "./tabbar/tabbar-sample-2/tabbar-sample-2.component" }],
        ngDeclarations: "TabbarSample2Component",
        ngImports: "RouterModule, IgxAvatarModule, IgxIconModule, IgxListModule, IgxTabBarModule"
      },
      shortenComponentPathBy: "/tabbar/"
    },
    {
      componentPath: "/toast/toast-sample-1/",
      componentRoutePath: "toast-sample-1",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxRippleModule, IgxToastModule", from: "igniteui-angular/main" },
          { import: "ToastSample1Component", from: "./toast/toast-sample-1/toast-sample-1.component" }],
        ngDeclarations: "ToastSample1Component",
        ngImports: "IgxButtonModule, IgxRippleModule, IgxToastModule"
      },
      shortenComponentPathBy: "/toast/"
    },
    {
      componentPath: "/toast/toast-sample-5/",
      componentRoutePath: "toast-sample-5",
      appModuleConfig: {
        imports: [
          { import: "IgxButtonModule, IgxRippleModule, IgxToastModule", from: "igniteui-angular/main" },
          { import: "ToastSample5Component", from: "./toast/toast-sample-5/toast-sample-5.component" }],
        ngDeclarations: "ToastSample5Component",
        ngImports: "IgxButtonModule, IgxRippleModule, IgxToastModule"
      },
      shortenComponentPathBy: "/toast/"
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
