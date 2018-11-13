import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';

import {RentalListItemComponent} from './rental-list-item/rental-list-item.component';
import {RentalListComponent} from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';

import { RentalSevice } from './shared/rental.sevice';

@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent
    ],
    imports: [CommonModule],
    providers: [RentalSevice]
})
export class RentalModule {}