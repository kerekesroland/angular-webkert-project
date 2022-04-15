import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  venueObj = {};
  venue: any;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      venueId: number;
      venueImage: string;
      venueName: string;
      venuePrice: number;
      venueBathrooms: number;
      venueBedrooms: number;
      venueSquareFeet: number;
      venueMaxGuests: number;
      checkInDate: any;
      checkOutDate: any;
      numberOfGuests: any;
    };
    this.venueObj = {
      id: state.venueId,
      image: state.venueImage,
      name: state.venueName,
      price: state.venuePrice,
      bathrooms: state.venueBathrooms,
      bedrooms: state.venueBedrooms,
      squareFeet: state.venueSquareFeet,
      maxGuests: state.venueMaxGuests,
      checkInDate: state.checkInDate,
      checkOutDate: state.checkOutDate,
      numberOfGuests: state.numberOfGuests,
    };
  }

  ngOnInit(): void {
    this.venue = this.venueObj;
    console.log(this.venue);
  }
}
