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
  totalPrice: number = 0;
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
    if (state) {
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
    } else {
      this.venue = {};
    }
  }

  ngOnInit(): void {
    this.venue = this.venueObj;

    if (this.venue.checkInDate && this.venue.checkOutDate) {
      const checkInDate = this.venue.checkInDate
        .toLocaleString()
        .substring(0, 8);
      const checkOutDate = this.venue.checkOutDate
        .toLocaleString()
        .substring(0, 8);
      const a: Date = new Date(checkInDate);
      const b: Date = new Date(checkOutDate);
      const diffInMs: number = +a - +b;
      const diffInDays = Math.abs(diffInMs / (1000 * 60 * 60 * 24));
      const totalPrice: number =
        diffInDays * this.venue.price + this.venue.numberOfGuests * 500;

      this.totalPrice = totalPrice;
    }
  }
}
