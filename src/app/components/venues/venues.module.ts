import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesRoutingModule } from './venues-routing.module';
import { VenuesComponent } from './venues.component';
import { VenueComponent } from '../venue/venue.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [VenuesComponent, VenueComponent],
  imports: [
    CommonModule,
    VenuesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
})
export class VenuesModule {}
