import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PrefixComponent } from './prefix.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '',component: PrefixComponent }
    ])],
    exports: [RouterModule]
})
export class PrefixRoutingModule{}