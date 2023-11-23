import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReleaseComponent } from './release.component';
import { ReleaseRoutingModule } from './release-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule  ({
    imports: [
        CommonModule,
        ReleaseRoutingModule,
        FormsModule,
        TableModule,
        ButtonModule,
        InputTextModule,
    ],
    declarations : [ReleaseComponent]
})
export class ReleaseModule { }