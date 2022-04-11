import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueDetailsRoutingModule } from './venue-details-routing.module';
import { VenueDetailsComponent } from './venue-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VenueDetailsComponent],
  imports: [
    CommonModule,
    VenueDetailsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
  ],
})
export class VenueDetailsModule {}
