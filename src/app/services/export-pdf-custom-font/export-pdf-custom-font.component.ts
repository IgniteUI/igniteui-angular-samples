import { ChangeDetectionStrategy, Component, signal, computed, inject, viewChild, OnInit } from '@angular/core';
import { IgxColumnComponent, IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';

/**
 * Demonstrates PDF export with a custom Unicode font.
 *
 * The sample ships with Noto Sans (Latin/Cyrillic/Greek) loaded from
 * assets/fonts/noto-sans.json. Users can also upload their own .ttf font —
 * for example Noto Sans CJK for Japanese/Chinese/Korean support.
 *
 * All Noto fonts are licensed under the SIL Open Font License 1.1
 * (see assets/fonts/OFL.txt).
 */
@Component({
    selector: 'app-export-pdf-custom-font',
    templateUrl: './export-pdf-custom-font.component.html',
    styleUrls: ['./export-pdf-custom-font.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [IgxGridComponent, IgxColumnComponent]
})
export class ExportPdfCustomFontComponent implements OnInit {
    private pdfExporter = inject(IgxPdfExporterService);

    protected readonly grid = viewChild.required<IgxGridComponent>('grid');

    protected readonly isExporting = signal(false);
    protected readonly builtInFontLoaded = signal(false);
    protected readonly builtInFontLoading = signal(false);
    protected readonly uploadedFontName = signal('');
    protected readonly exportStatus = signal('');

    // Built-in Noto Sans (Latin / Cyrillic / Greek)
    private builtInFontData: string | null = null;
    private builtInBoldFontData: string | null = null;

    // User-uploaded font (e.g. Noto Sans CJK for Japanese)
    private uploadedFontData = signal<string | null>(null);

    protected readonly canExportBuiltIn = computed(() => this.builtInFontLoaded() && !this.isExporting());
    protected readonly canExportUploaded = computed(() => !!this.uploadedFontData() && !this.isExporting());

    protected readonly data = signal([
        { Name: 'Александър Иванов', City: 'София', Product: '商品A', Amount: 1500 },
        { Name: '田中太郎', City: '東京', Product: '商品B', Amount: 2300 },
        { Name: 'Élise Müller', City: 'München', Product: '商品D', Amount: 3200 },
        { Name: '王小明', City: '北京', Product: '商品E', Amount: 1750 },
        { Name: 'Ирина Петрова', City: 'Санкт-Петербург', Product: '製品 F', Amount: 2890 }
    ]);

    public ngOnInit(): void {
        this.loadBuiltInFont();
    }

    /** Loads the built-in Noto Sans font from application assets. */
    private async loadBuiltInFont(): Promise<void> {
        this.builtInFontLoading.set(true);
        this.exportStatus.set('Loading built-in Noto Sans font…');

        try {
            const response = await fetch('assets/fonts/noto-sans.json');
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            const fontJson: { normal: string; bold: string } = await response.json();

            this.builtInFontData = fontJson.normal;
            this.builtInBoldFontData = fontJson.bold;
            this.builtInFontLoaded.set(true);
            this.exportStatus.set('Noto Sans loaded — ready to export. Upload a CJK font for Japanese/Chinese/Korean support.');
        } catch (error) {
            console.error('Failed to load built-in font:', error);
            this.exportStatus.set('Failed to load built-in Noto Sans font.');
        } finally {
            this.builtInFontLoading.set(false);
        }
    }

    /** Handles the user uploading a custom .ttf font file. */
    protected onFontFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (!input.files?.[0]) {
            return;
        }
        const file = input.files[0];
        this.uploadedFontName.set(file.name);
        this.exportStatus.set(`Reading "${file.name}"…`);

        this.readFontFile(file).then(base64 => {
            this.uploadedFontData.set(base64);
            this.exportStatus.set(`"${file.name}" loaded — you can now export with the uploaded font.`);
        });
    }

    /** Export using the built-in Noto Sans font. */
    protected exportWithBuiltInFont(): void {
        if (!this.builtInFontData) {
            return;
        }

        this.isExporting.set(true);
        this.exportStatus.set('Exporting PDF with Noto Sans…');

        const options = new IgxPdfExporterOptions('NotoSansExport');
        options.customFont = {
            name: 'NotoSans',
            data: this.builtInFontData
        };

        if (this.builtInBoldFontData) {
            options.customFont.bold = {
                name: 'NotoSans-Bold',
                data: this.builtInBoldFontData
            };
        }

        this.pdfExporter.exportEnded.subscribe({
            next: () => {
                this.isExporting.set(false);
                this.exportStatus.set(
                    'PDF exported with Noto Sans. Note: CJK characters (Japanese, Chinese, Korean) require a CJK font.'
                );
            }
        });

        this.pdfExporter.export(this.grid(), options);
    }

    /** Export using the user-uploaded font file. */
    protected exportWithUploadedFont(): void {
        const fontData = this.uploadedFontData();
        if (!fontData) {
            return;
        }

        this.isExporting.set(true);
        this.exportStatus.set('Exporting PDF with uploaded font…');

        const options = new IgxPdfExporterOptions('CustomFontExport');
        options.customFont = {
            name: 'CustomFont',
            data: fontData
        };

        this.pdfExporter.exportEnded.subscribe({
            next: () => {
                this.isExporting.set(false);
                this.exportStatus.set('PDF exported successfully with the uploaded font!');
            }
        });

        this.pdfExporter.export(this.grid(), options);
    }

    /** Export with the default PDF font (Helvetica). */
    protected exportWithDefaultFont(): void {
        this.isExporting.set(true);
        this.exportStatus.set('Exporting PDF with default font (Helvetica)…');

        const options = new IgxPdfExporterOptions('DefaultFontExport');

        this.pdfExporter.exportEnded.subscribe({
            next: () => {
                this.isExporting.set(false);
                this.exportStatus.set(
                    'PDF exported — non-Latin characters may not render correctly with the default Helvetica font.'
                );
            }
        });

        this.pdfExporter.export(this.grid(), options);
    }

    private readFontFile(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                const base64 = result.includes(',') ? result.split(',')[1] : result;
                resolve(base64);
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }
}
