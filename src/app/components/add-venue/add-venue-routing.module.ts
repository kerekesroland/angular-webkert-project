import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVenueComponent } from './add-venue.component';

const routes: Routes = [{ path: '', component: AddVenueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddVenueRoutingModule { }
