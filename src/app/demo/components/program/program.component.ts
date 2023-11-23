import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './program.component.html',
    styles: [`
        :host ::ng-deep .p-menubar-root-list {
            flex-wrap: wrap;
        }
    `]
})
export class ProgramComponent implements OnInit {
    routeItems: MenuItem[] = [];

    ngOnInit() {
        this.routeItems = [
            { label: 'Release', routerLink: 'release' },
            { label: 'Simulasi', routerLink: 'simulasi' },
            { label: 'Ikiosk', routerLink: 'ikiosk' },
        ];
    }
}