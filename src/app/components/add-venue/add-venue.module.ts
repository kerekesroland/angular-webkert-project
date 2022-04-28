import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVenueRoutingModule } from './add-venue-routing.module';
import { AddVenueComponent } from './add-venue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AddVenueComponent],
  imports: [
    CommonModule,
    AddVenueRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class AddVenueModule {}
