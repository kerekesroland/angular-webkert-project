import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { venue } from 'src/app/models/venue';
import { VenuesService } from 'src/app/shared/services/venues.service';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.scss'],
})
export class VenueDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private venueService: VenuesService,
    private location: Location,
    private auth: AuthService
  ) {}

  checkInDate: any;
  checkOutDate: any;
  numberOfGuests: any;

  venues: venue[] = [];
  venue: any;

  loggedInUser?: firebase.default.User | null;
  isAdminUser?: firebase.default.User | null;
  getVenue() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id') as string;
      this.venueService.getAll().subscribe((_venues) => {
        this.venue = _venues.find((v) => v.id === id);
      });
    });
  }

  ngOnInit(): void {
    this.getVenue();
    this.auth.isUserLoggedIn().subscribe(
      (user) => {
        this.loggedInUser = user;
        localStorage.setItem('user', JSON.stringify(this.loggedInUser));
        if (this.loggedInUser?.email === 'admin@admin.com') {
          this.isAdminUser = this.loggedInUser;
          localStorage.setItem('admin', JSON.stringify(this.isAdminUser));
        }
      },
      (err) => {
        console.error(err);
        localStorage.setItem('user', JSON.stringify('null'));
      }
    );
  }

  deleteVenue(): void {
    let id: any;
    this.activatedRoute.paramMap.subscribe((params) => {
      id = params.get('id') as string;
    });
    this.venueService.delete(id);
    this.location.back();
  }

  sendData() {
    if (this.checkInDate && this.checkOutDate && this.numberOfGuests > 0) {
      const navigationExtras: NavigationExtras = {
        state: {
          venueId: this.venue.id,
          venueImage: this.venue.image,
          venueName: this.venue.name,
          venueDetails: this.venue.details,
          venuePrice: this.venue.price,
          venueBathrooms: this.venue.bathrooms,
          venueBedrooms: this.venue.bedrooms,
          venueSquareFeet: this.venue.squareFeet,
          venueMaxGuests: this.venue.maxGuests,
          checkInDate: this.checkInDate,
          checkOutDate: this.checkOutDate,
          numberOfGuests: this.numberOfGuests,
        },
      };
      this.router.navigate(['checkout'], navigationExtras);
    }
  }
}
