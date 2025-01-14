import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrefixComponent } from './prefix.component';
import { PrefixRoutingModule } from './prefix-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
@NgModule({
    imports: [
        CommonModule,
		PrefixRoutingModule,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		MultiSelectModule,
		DropdownModule,
		ProgressBarModule,
		ToastModule,
		DialogModule,
		TooltipModule,
		InputTextareaModule,
		ToolbarModule,
		AutoCompleteModule,
	

    ],
	providers: [MessageService],
    declarations: [PrefixComponent]
})
export class PrefixModule { }
