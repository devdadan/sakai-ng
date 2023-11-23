import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Support toko',
                items: [
                    { label: 'Prefix co', icon: 'pi pi-fw pi-id-card', routerLink: ['/support/prefix'] },
                    { label: 'SLA CO', icon: 'pi pi-fw pi-check-square', routerLink: ['/support/cosla'] },
                ]
            },
            {
                label: 'Program toko',
                items: [
                    { label: 'Program Toko', icon: 'pi pi-fw pi-eye', routerLink: ['/program'], badge: 'NEW' }
                    

                ]
            },
            {
                label: 'Blogs',
                items: [
                    { label: 'Input Blogs', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'Lihat Blogs', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
            {
                label: 'Toko Baru',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Checklist toko baru',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'FTP data toko baru',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },
                ]
            },
            {
                label: 'Data Harian',
                items: [
                    {
                        label: 'Absen data harian',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },
                    {
                        label: 'Kolek data harian',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },


                ]
            }
        ];
    }
}
