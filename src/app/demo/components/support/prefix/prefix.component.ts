import { Component,OnInit,OnDestroy,ViewChild,ElementRef } from "@angular/core";
import { MenuItem  } from "primeng/api";
import { PrefixService } from "src/app/demo/service/support.service";
import { Subscription } from "rxjs";
import { LayoutService } from "src/app/layout/service/app.layout.service";
import { Table } from 'primeng/table';
// import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "src/app/demo/service/auth.services";

@Component({
    templateUrl: './prefix.component.html',
})
export class PrefixComponent implements OnInit{
    dataprefix : any[];
    loading: boolean = true;
    activityValues: number[] = [0, 100];
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

    // isAdmin(): boolean {
    //     const token = this.authService.getAuthToken();
    
    //     if (token) {
    //         const decodedToken = this.jwtHelper.decodeToken(token);
    //         const userLevel = decodedToken ? decodedToken.level : null;
    
    //         return userLevel && (userLevel.toLowerCase() === 'admin' || userLevel.toLowerCase() === 'Super admin');
    //     }
    
    //     return false;
    // }
    

}