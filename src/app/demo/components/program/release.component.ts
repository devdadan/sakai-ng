import { Component, OnInit, ViewChild } from "@angular/core";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { Table } from 'primeng/table';

@Component({
  templateUrl: './releas.component.html',
})
export class ReleaseComponent implements OnInit {
  @ViewChild('dt1') table: Table | undefined;

  constructor(public layoutService: LayoutService) { }

  onGlobalFilter(event: Event) {
    if (this.table) {
      this.table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
  }

  async ngOnInit() {
    // Inisialisasi logika di sini
  }
}
