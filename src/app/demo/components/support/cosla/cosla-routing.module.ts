import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoslaComponent } from './cosla.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '',component: CoslaComponent }
    ])],
    exports: [RouterModule]
})
export class CoslaRoutingModule{}
