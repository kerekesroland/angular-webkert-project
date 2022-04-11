import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },

  { path: '', redirectTo: 'main', pathMatch: 'full' },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
