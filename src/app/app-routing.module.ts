import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'venues/:id',
    loadChildren: () =>
      import('./components/venue-details/venue-details.module').then(
        (m) => m.VenueDetailsModule
      ),
  },
  {
    path: 'venues',
    loadChildren: () =>
      import('./components/venues/venues.module').then((m) => m.VenuesModule),
  },

  {
    path: 'checkout',
    loadChildren: () =>
      import('./components/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'add_venue',
    loadChildren: () =>
      import('./components/add-venue/add-venue.module').then(
        (m) => m.AddVenueModule
      ),
    canActivate: [AuthGuard],
  },

  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
