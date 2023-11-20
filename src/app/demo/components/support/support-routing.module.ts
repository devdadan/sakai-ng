import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'prefix', data: { breadcrumb: 'Button' }, loadChildren: () => import('./prefix/prefix.module').then(m => m.PrefixModule) },
        { path: 'cosla', data: { breadcrumb: 'Button' }, loadChildren: () => import('./cosla/cosla.module').then(m => m.CoslaModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class SupportRoutingModule { }
