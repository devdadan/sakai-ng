import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReleaseComponent } from './release.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '',component: ReleaseComponent }
    ])],
    exports: [RouterModule]
})
export class ReleaseRoutingModule{}