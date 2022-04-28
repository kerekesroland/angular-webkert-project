import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { VenuesService } from 'src/app/shared/services/venues.service';
import { venue } from '../../models/venue';
@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.scss'],
})
export class AddVenueComponent implements OnInit {
  constructor(
    private location: Location,
    private venuesService: VenuesService
  ) {}

  ngOnInit(): void {}

  venue_form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    image: new FormControl(''),
    details: new FormControl(''),
    bathrooms: new FormControl(0),
    bedrooms: new FormControl(0),
    squareFeet: new FormControl(0),
    maxGuests: new FormControl(0),
  });

  getRandomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  onSubmit(): void {
    const venue: venue = {
      id: this.getRandomID(),
      name: this.venue_form.get('name')?.value,
      price: this.venue_form.get('price')?.value,
      image: this.venue_form.get('image')?.value,
      details: this.venue_form.get('details')?.value,
      bathrooms: this.venue_form.get('bathrooms')?.value,
      bedrooms: this.venue_form.get('bedrooms')?.value,
      squareFeet: this.venue_form.get('squareFeet')?.value,
      maxGuests: this.venue_form.get('maxGuests')?.value,
    };
    this.venuesService.create(venue).then((_) => {
      console.log('Venue added successfully.');
      this.goBack();
    });
  }

  goBack() {
    this.location.back();
  }
}
