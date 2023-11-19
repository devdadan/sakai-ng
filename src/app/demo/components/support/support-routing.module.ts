import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'prefix', data: { breadcrumb: 'Button' }, loadChildren: () => import('./prefix/prefix.module').then(m => m.PrefixModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class SupportRoutingModule { }
