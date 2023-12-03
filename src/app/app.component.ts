import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig,private authService: AuthService,private router: Router) { }

    ngOnInit() {
        const authToken = this.authService.getAuthToken();
        this.primengConfig.ripple = true;
        if (authToken) {
            this.authService.getIsAuthenticated();
          } else {
            this.router.navigate(['/auth/login']);
        }
    }
}
