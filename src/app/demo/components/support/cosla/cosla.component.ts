import { Component,OnInit,OnDestroy,ViewChild,ElementRef } from "@angular/core";
import { MenuItem  } from "primeng/api";
import { CoslaService } from "src/app/demo/service/support.service";
import { Subscription } from "rxjs";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { Table } from 'primeng/table';
// import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "src/app/demo/service/auth.services";
import * as FileSaver from 'file-saver';

interface ExportColumn {
    title: string;
    dataKey: string;
}
@Component({
    templateUrl: './cosla.component.html',
})
export class CoslaComponent implements OnInit{
    datacosla : any[];
    loading: boolean = true;
    activityValues: number[] = [0, 100];
    exportColumns!: ExportColumn[];
    @ViewChild('filter') filter!: ElementRef;
    constructor(public layoutService: LayoutService,private coslaservice : CoslaService) { }

    async ngOnInit() {
        try {
            this.loading = true;
            this.datacosla = await this.coslaservice.getData().toPromise();
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            this.loading = false;
        }

    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default('p', 'px', 'a4');
                (doc as any).autoTable(this.exportColumns, this.datacosla);
                doc.save('data_co_sla.pdf');
            });
        });
    }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.datacosla);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, 'data_co_sla');
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    


}
