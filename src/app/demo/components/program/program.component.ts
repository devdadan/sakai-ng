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
    activeItem: MenuItem | undefined;
    ngOnInit() {
        this.routeItems = [
            { label: 'Release', routerLink: 'release',icon: 'pi pi-fw pi-verified' },
            { label: 'Simulasi', routerLink: 'simulasi',icon: 'pi pi-fw pi-list' },
            { label: 'Ikiosk', routerLink: 'ikiosk',icon: 'pi pi-fw pi-desktop' },
        ];
        this.activeItem = this.routeItems[0];
    }

    onActiveItemChange(event: MenuItem) {
        this.activeItem = event;
    }
}