import { Component, OnInit } from '@angular/core';
import { venue } from '../../models/venue';
import { FormGroup, FormControl } from '@angular/forms';
import { VenuesService } from '../../shared/services/venues.service';
@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss'],
})
export class VenuesComponent implements OnInit {
  venues: venue[] = [];
  constructor(private venueService: VenuesService) {}

  ngOnInit(): void {
    this.venueService.getAll().subscribe((_venues) => {
      this.venues = _venues;
    });
  }

  filteredArray: venue[] = [];

  filterForm = new FormGroup({
    bedrooms: new FormControl(0),
    bathrooms: new FormControl(0),
    squareFeet: new FormControl(0),
  });

  filterSearch() {
    if (
      this.filterForm.value.bedrooms.length > 0 ||
      this.filterForm.value.bathrooms.length > 0 ||
      this.filterForm.value.squareFeet.length > 0
    ) {
      this.filteredArray = this.venues.filter(
        (venue) =>
          venue.bedrooms >= +this.filterForm.value.bedrooms &&
          venue.bathrooms >= +this.filterForm.value.bathrooms &&
          venue.squareFeet >= +this.filterForm.value.squareFeet
      );
    } else {
      this.filteredArray = this.venues;
    }
    console.log(this.venues);

    return this.filteredArray;
  }
}
