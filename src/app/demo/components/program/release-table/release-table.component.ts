import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ReleaseService } from 'src/app/demo/service/program.service';
import { Table } from 'primeng/table';
import { LayoutService } from "src/app/layout/service/app.layout.service";

@Component({
    selector: 'app-release-table',
    templateUrl: './release-table.component.html',
})
export class ReleaseTableComponent implements OnInit {
    datarelease: any[];
    loading: boolean = false;
    visible: { [key: string]: boolean } = {};
    filteredPerubahanData: any[] = [];
    dialogHeader: string = '';
    @ViewChild('filter') filter!: ElementRef;
    constructor(public layoutService: LayoutService,private releaseservice: ReleaseService) {}

    async ngOnInit() {
        try {
            this.datarelease = await this.releaseservice.getData().toPromise();
            this.datarelease.forEach((row) => (this.visible[row.id] = false));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    onGlobalFilter(table: Table, event: Event) {
        console.log('Filter value:', (event.target as HTMLInputElement).value);
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    

    parseAndFormatPerubahan(perubahan: string): any[] {
        try {
            const parsedData = JSON.parse(perubahan);
            return Array.isArray(parsedData) ? parsedData : [];
        } catch (error) {
            console.error('Error parsing JSON:', error);
            // Handle the error more gracefully (e.g., display an error message).
            return [];
        }
    }

    load(rowData: any) {
        rowData.loading = true;
        setTimeout(() => {
            rowData.loading = false;
        }, 1000);
    }

    showDialog(rowId: string) {
        console.log('showDialog() called');
        this.visible[rowId] = true;

        const rowData = this.datarelease.find((row) => row.id === rowId);
        if (rowData) {
            const dynamicHeader = rowData
                ? `${rowData.nama_program} - ${rowData.versi_program}`
                : '';

            this.dialogHeader = dynamicHeader;
            this.filteredPerubahanData = rowData
                ? this.parseAndFormatPerubahan(rowData.perubahan)
                : [];
        } else {
            this.filteredPerubahanData = ['Belum ada perubahan'];
        }
    }
}
