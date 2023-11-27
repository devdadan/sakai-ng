import { Component,OnInit,OnDestroy,ViewChild,ElementRef } from "@angular/core";
import { MenuItem  } from "primeng/api";
import { PrefixService } from "src/app/demo/service/support.service";
import { Subscription } from "rxjs";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import { MessageService } from 'primeng/api';
// import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "src/app/demo/service/auth.services";
import * as XLSX from 'xlsx';


interface ExportColumn {
    title: string; 
    dataKey: string;
}
@Component({
    templateUrl: './prefix.component.html',
}) 

export class PrefixComponent implements OnInit{
    prefixDialog: boolean = false;
    deletePrefixDialog: boolean = false;
    dataprefix : any[];
    loading: boolean = true;
    activityValues: number[] = [0, 100];
    exportColumns!: ExportColumn[];
    @ViewChild('filter') filter!: ElementRef;
    constructor(public layoutService: LayoutService,private prefixservice : PrefixService,) { }

    async ngOnInit() {
        try {
            this.loading = true;
            this.dataprefix = await this.prefixservice.getData().toPromise();
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
                (doc as any).autoTable(this.exportColumns, this.dataprefix);
                doc.save('prefix.pdf');
            });
        });
    }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.dataprefix);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, 'prefix');
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
    // editProduct(prefix: PrefixService) {
    //     this.dataprefix = { ...prefix };
    //     this.prefixDialog = true;
    // }
    
      
    

}