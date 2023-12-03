import { Component,OnInit,OnDestroy,ViewChild,ElementRef } from "@angular/core";
import { MenuItem  } from "primeng/api";
import { PrefixService } from "src/app/demo/service/support.service";
import { Subscription } from "rxjs";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import { Item } from "src/app/demo/api/item";
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
    providers: [MessageService]
}) 

export class PrefixComponent implements OnInit{
    prefixDialog: boolean = false;
    prefixInput: boolean = false;
    deletePrefixDialog: boolean = false;
    dataprefix : Item[]=[];     
    loading: boolean = true;
    activityValues: number[] = [0, 100];
    exportColumns!: ExportColumn[];
    masalahOptions: any[] = [];
    item : Item = {};
    selectedMasalah: string;
    submitted: boolean = false;
    @ViewChild('filter') filter!: ElementRef;
    constructor(public layoutService: LayoutService,private prefixservice : PrefixService, private messageService: MessageService,) { }
    
    async ngOnInit() {
        try {
            this.loading = true;
            this.dataprefix = await this.prefixservice.getData().toPromise();
            if (this.dataprefix.length > 0) {
                const uniqueMasalahValues = [...new Set(this.dataprefix.map(item => item.masalah))];
                this.masalahOptions = uniqueMasalahValues.map(masalah => ({ label: masalah, value: masalah }));
                if (this.item && this.item.masalah && typeof this.item.masalah.value === 'string') {
                    this.item.selectedMasalah = this.item.masalah.value;
                   
                }
                console.log(this.item.masalah);
            }
            
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            this.loading = false;
        }

    }
    inputData(){
        this.prefixInput = true;
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

    editPrefix(item: Item) {
        this.item = { ...item };
        this.prefixDialog = true;
    }

    deletePrefix(item: Item){
        this.deletePrefixDialog = true;
        this.item = { ...item};    
    }  
    confirmDelete() {
        this.deletePrefixDialog = false;
        const itemid = this.item.id;
        this.prefixservice.deleteData(itemid).subscribe(
            (response) => {
              console.log('Data berhasil dihapus', response);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Data berhasil dihapus', life: 3000 });
              this.prefixservice.getData().subscribe(
                (data) => {
                  this.dataprefix = data;
                },
                (error) => {
                  console.error('Gagal mengambil data terbaru', error);
                }
              );
            },
            (error) => {
              console.error('Gagal menghapus data', error);
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Gagal menghapus data', life: 3000 });
            }
          );
    }
    openNew() {
        this.item = {};
        this.submitted = false;
        this.prefixDialog = true;
    }
    hideDialog() {
        this.prefixDialog = false;
    }
    savePrefix() {
        const itemId = this.item.id;
        const itemData = { solusi: this.item.solusi };
      
        this.prefixservice.saveData(itemId, itemData).subscribe(
          (response) => {
            console.log('Data berhasil disimpan', response);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Prefix berhasil diupdate', life: 3000 });

            this.prefixservice.getData().subscribe(
              (data) => {
                this.dataprefix = data;
              },
              (error) => {
                console.error('Gagal mengambil data terbaru', error);
              }
            );
      
            this.prefixDialog = false;
            this.item = {};
          },
          (error) => {
            console.error('Gagal menyimpan data', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Prefix gagal diupdate', life: 3000 });
            this.prefixDialog = false;
            this.item = {};
          }
        );
      }
      

}