import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { venue } from 'src/app/models/venue';
import { VenuesService } from 'src/app/shared/services/venues.service';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.component.html',
  styleUrls: ['./venue-details.component.scss'],
})
export class VenueDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private venueService: VenuesService
  ) {}

  checkInDate: any;
  checkOutDate: any;
  numberOfGuests: any;

  venues: venue[] = [];
  venue: any;

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
