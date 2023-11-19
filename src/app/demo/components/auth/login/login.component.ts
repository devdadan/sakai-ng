import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/demo/service/auth.services';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];
    username: string = '';
    password: string = '';
    constructor(private authService: AuthService, private router: Router,public layoutService: LayoutService,private messageService: MessageService) {}

    login() {
        this.authService.login(this.username, this.password).subscribe(
          (response) => {
            console.log('Login successful:', response);
            this.router.navigate(['/']);
          },
          (error) => {
            this.messageService.add({
                severity: 'error',
                summary: 'Authentication failed',
                detail: 'Invalid username or password'
            });
            console.error('Login failed:', error);
          }
        );
      }
}
