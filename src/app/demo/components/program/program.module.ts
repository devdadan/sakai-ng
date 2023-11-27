import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProgramComponent } from './program.component';
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
import { ReleaseTableComponent } from './release-table/release-table.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SimulasiTableComponent } from './simulasi-table/simulasi-table.component';


@NgModule({
	imports: [
		CommonModule,
		TabMenuModule,
		TableModule,
		TieredMenuModule,
		MenuModule,
		ButtonModule,
		ContextMenuModule,
		MegaMenuModule,
		PanelMenuModule,
		InputTextModule,
		DialogModule,
		RouterModule.forChild([
			{
				path: '', component: ProgramComponent, children: [
					{ path: '', redirectTo: 'release', pathMatch: 'full' },
					{ path: 'release', component: ReleaseTableComponent },
					{ path: 'simulasi', component: SimulasiTableComponent },
					{ path: 'ikiosk', component: IkioskComponent }
				]
			}
		])
	],
	declarations: [ProgramComponent, ReleaseTableComponent, SimulasiTableComponent],
	exports: [RouterModule]
})

export class ProgramModule { }
