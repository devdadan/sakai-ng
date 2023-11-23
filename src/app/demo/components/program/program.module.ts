import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgramComponent } from './program.component';
import { ReleaseComponent } from './release.component';
import { SimulasiComponent } from './simulasi.component';
import { IkioskComponent } from './ikiosk.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
	imports: [
		CommonModule,
		TabMenuModule,
		TieredMenuModule,
		MenuModule,
		ButtonModule,
		ContextMenuModule,
		MegaMenuModule,
		PanelMenuModule,
		InputTextModule,
		RouterModule.forChild([
			{
				path: '', component: ProgramComponent, children: [
					{ path: '', redirectTo: 'personal', pathMatch: 'full' },
					{ path: 'release', component: ReleaseComponent },
					{ path: 'simulasi', component: SimulasiComponent },
					{ path: 'ikiosk', component: IkioskComponent }
				]
			}
		])
	],
	declarations: [ProgramComponent],
	exports: [RouterModule]
})
export class ProgramModule { }
