import { AutocompleteConfigGenerator } from "../configs/AutocompleteConfigGenerator";
import { AvatarConfigGenerator } from "../configs/AvatarConfigGenerator";
import { BadgeConfigGenerator } from "../configs/BadgeConfigGenerator";
import { BannerConfigGenerator } from "../configs/BannerConfigGenerator";
import { ButtonConfigGenerator } from "../configs/ButtonConfigGenerator";
import { ButtonGroupConfigGenerator } from "../configs/ButtonGroupConfigGenerator";
import { CalendarConfigGenerator } from "../configs/CalendarConfigGenerator";
import { CardConfigGenerator } from "../configs/CardConfigGenerator";
import { CarouselConfigGenerator } from "../configs/CarouselConfigGenerator";
import { CategoryChartConfigGenerator } from "../configs/CategoryChartConfigGenerator";
import { CheckboxConfigGenerator } from "../configs/CheckboxConfigGenerator";
import { ChipConfigGenerator } from "../configs/ChipConfigGenerator";
import { CircularProgressbarConfigGenerator } from "../configs/CircularProgressbarConfigGenerator";
import { ComboConfigGenerator } from "../configs/ComboConfigGenerator";
import { DataChartConfigGenerator } from "../configs/DataChartConfigGenerator";
import { DatePickerConfigGenerator } from "../configs/DatePickerConfigGenerator";
import { DialogConfigGenerator } from "../configs/DialogConfigGenerator";
import { DividerConfigGenerator } from "../configs/DividerConfigGenerator";
import { DoughnutChartConfigGenerator } from "../configs/DoughnutChartConfigGenerator";
import { DragAndDropConfigGenerator } from "../configs/DragAndDropConfigGenerator";
import { DropDownConfigGenerator } from "../configs/DropDownConfigGenerator";
import { ExcelLibraryConfigGenerator } from "../configs/ExcelLibraryConfigGenerator";
import { ExpansionPanelConfigGenerator } from "../configs/ExpansionPanelConfigGenerator";
import { ExportCsvConfigGenerator } from "../configs/ExportCsvConfigGenerator";
import { ExportExcelConfigGenerator } from "../configs/ExportExcelConfigGenerator";
import { FinancialChartConfigGenerator } from "../configs/FinancialChartConfigGenerator";
import { ForConfigGenerator } from "../configs/ForConfigGenerator";
import { GaugesConfigGenerator } from "../configs/GaugesConfigGenerator";
import { GeoMapConfigGenerator } from "../configs/GeoMapConfigGenerator";
import { GridConfigGenerator } from "../configs/GridConfigGenerator";
import { GridCRMConfigGenerator } from "../configs/GridCRMConfigGenerator";
import { GridFinjsConfigGenerator } from "../configs/GridFinjsConfigGenerator";
import { HierarchicalGridConfigGenerator } from "../configs/HierarchicalGridConfigGenerator";
import { IconConfigGenerator } from "../configs/IconConfigGenerator";
import { InputGroupConfigGenerator } from "../configs/InputGroupConfigGenerator";
import { LayoutConfigGenerator } from "../configs/LayoutConfigGenerator";
import { LinearProgressbarConfigGenerator } from "../configs/LinearProgressbarConfigGenerator";
import { ListConfigGenerator } from "../configs/ListConfigGenerator";
import { LocalizationConfigGenerator } from "../configs/LocalizationConfigGenerator";
import { MaskConfigGenerator } from "../configs/MaskConfigGenerator";
import { MonthPickerConfigGenerator } from "../configs/MonthPickerConfigGenerator";
import { NavbarConfigGenerator } from "../configs/NavbarConfigGenerator";
import { NavdrawerConfigGenerator } from "../configs/NavDrawerConfigGenerator";
import { OverlayConfigGenerator } from "../configs/OverlayConfigGenerator";
import { PieChartConfigGenerator } from "../configs/PieChartConfigGenerator";
import { RadioConfigGenerator } from "../configs/RadioConfigGenerator";
import { RippleConfigGenerator } from "../configs/RippleConfigGenerator";
import { SelectConfigGenerator } from "../configs/SelectConfigGenerator";
import { SliderConfigGenerator } from "../configs/SliderConfigGenerator";
import { SnackbarConfigGenerator } from "../configs/SnackbarConfigGenerator";
import { SparklineConfigGenerator } from "../configs/SparklineConfigGenerator";
import { SpreadsheetConfigGenerator } from "../configs/SpreadsheetConfigGenerator";
import { SwitchConfigGenerator } from "../configs/SwitchConfigGenerator";
import { TabBarConfigGenerator } from "../configs/TabBarConfigGenerator";
import { TabsConfigGenerator } from "../configs/TabsConfigGenerator";
import { TextHighlightConfigGenerator } from "../configs/TextHighlightConfigGenerator";
import { ThemingConfigGenerator } from "../configs/ThemingConfigGenerator";
import { TimePickerConfigGenerator } from "../configs/TimePickerConfigGenerator";
import { ToastConfigGenerator } from "../configs/ToastConfigGenerator";
import { ToggleConfigGenerator } from "../configs/ToggleConfigGenerator";
import { TooltipConfigGenerator } from "../configs/TooltipConfigGenerator";
import { TransactionsConfigGenerator } from "../configs/TransactionsConfigGenerator";
import { TreeGridConfigGenerator } from "../configs/TreeGridConfigGenerator";
import { TreeGridFinjsConfigGenerator } from "../configs/TreeGridFinjsConfigGenerator";
import { ZoomSliderConfigGenerator } from "../configs/ZoomSliderConfigGenerator";

export const CONFIG_GENERATORS =
    [
        // DV:
        CategoryChartConfigGenerator,
        DataChartConfigGenerator,
        DoughnutChartConfigGenerator,
        FinancialChartConfigGenerator,
        PieChartConfigGenerator,
        SparklineConfigGenerator,
        GaugesConfigGenerator,
        GeoMapConfigGenerator,
        ZoomSliderConfigGenerator,

        // frameworks:
        DragAndDropConfigGenerator,
        ExcelLibraryConfigGenerator,
        ExportCsvConfigGenerator,
        ExportExcelConfigGenerator,
        SpreadsheetConfigGenerator,

        // containers:
        AvatarConfigGenerator,
        BadgeConfigGenerator,
        BannerConfigGenerator,
        CardConfigGenerator,
        CarouselConfigGenerator,
        ChipConfigGenerator,
        DialogConfigGenerator,
        ExpansionPanelConfigGenerator,
        LayoutConfigGenerator,
        ListConfigGenerator,
        NavbarConfigGenerator,
        NavdrawerConfigGenerator,
        TabBarConfigGenerator,
        TabsConfigGenerator,

        // selectors:
        AutocompleteConfigGenerator,
        ButtonConfigGenerator,
        ButtonGroupConfigGenerator,
        CalendarConfigGenerator,
        CheckboxConfigGenerator,
        ComboConfigGenerator,
        DatePickerConfigGenerator,
        DropDownConfigGenerator,
        InputGroupConfigGenerator,
        MaskConfigGenerator,
        MonthPickerConfigGenerator,
        RadioConfigGenerator,
        SelectConfigGenerator,
        SliderConfigGenerator,
        SwitchConfigGenerator,
        TimePickerConfigGenerator,
        ToggleConfigGenerator,

        // grids:
        GridConfigGenerator,
        GridCRMConfigGenerator,
        GridFinjsConfigGenerator,
        HierarchicalGridConfigGenerator,
        TreeGridFinjsConfigGenerator,
        TreeGridConfigGenerator,

        // other:
        CircularProgressbarConfigGenerator,
        DividerConfigGenerator,
        ForConfigGenerator,
        IconConfigGenerator,
        OverlayConfigGenerator,
        LinearProgressbarConfigGenerator,
        LocalizationConfigGenerator,
        RippleConfigGenerator,
        SnackbarConfigGenerator,
        TextHighlightConfigGenerator,
        ToastConfigGenerator,
        TooltipConfigGenerator,
        ThemingConfigGenerator,
        TransactionsConfigGenerator
    ];
