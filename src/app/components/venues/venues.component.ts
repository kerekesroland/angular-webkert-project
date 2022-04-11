import { Component, OnInit } from '@angular/core';
import { venue } from '../../models/venue';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss'],
})
export class VenuesComponent implements OnInit {
  venues: venue[] = [];
  constructor() {}

  ngOnInit(): void {
    this.venues = [
      {
        id: 1,
        name: ' Luxury villa Imperial with Infinity Pool and Awesome Hilltop Sea Views ',
        price: 10_00_00,
        image: './assets/first-venue.jpg',
        details:
          "Luxury villa Imperial with Infinity Pool and Awesome Hilltop Sea Views Everything you need to know about villa Imperial is summarized in a previous guest's review: 'We had a week at Villa Imperial and our only regret was that we couldn't stay longer - or forever!!!'. This brand new luxury villa sets new sky high standards for villas in Crete. What is not to love? The infinity pool with the heated Jacuzzi, the amazing bay views of the Marathi area with the crystal clear blue waters or the stylish architectural house design? ",
        bathrooms: 3,
        bedrooms: 3,
        squareFeet: 500,
      },
      {
        id: 2,
        name: ' A luxury private villa Marevista on the coast of Crete, fully equipped with all the required amenities. ',
        price: 10_00_00,
        image: './assets/second-venue.jpg',
        details:
          'Villa Marevista is an exclusive private holiday rental, situated on the northwest coast of Crete, one of Greece’s trendiest resort islands. While this idyllic villa is near to a few splendid beaches, restaurants, and supermarkets, the luxurious Villa Marevista is also a great place to retreat to for a secluded, private vacation.',
        bathrooms: 3,
        bedrooms: 5,
        squareFeet: 500,
      },
      {
        id: 3,
        name: ' Anemomylos Villas are Great for Big Groups ',
        price: 10_00_00,
        image: './assets/third-venue.jpg',
        details:
          'Standing amphitheatrically on a small hill overlooking the bay of AgiaPelagia, Anemomilos Villas are quietly seductive, putting you in the holiday mindset at first glance. ',
        bathrooms: 1,
        bedrooms: 1,
        squareFeet: 500,
      },

      {
        id: 4,
        name: '  Sea & Sky are Merging at Infinity Pool Villa Blue Key  ',
        price: 10_00_00,
        image: './assets/fourth-venue.jpg',
        details:
          'Over the years, Agia Pelagia turned from a small fishing village into a famous cosmopolitan resort, as the magnificent natural scenery attracted visitors and investors in a rapid fashion. And you have the chance to be on top of it all.',
        bathrooms: 2,
        bedrooms: 1,
        squareFeet: 500,
      },

      {
        id: 5,
        name: " Pauls's Mansion built at Privileged Spot with Crazy Views  ",
        price: 10_00_00,
        image: './assets/fifth-venue.jpg',
        details:
          'Epic & spectacular in every way vacation villa offering sensational blue sea and mountain vistas from the edge of a secluded hill-top with stylish finish, white interiors and sleek exterior spaces, also capable of hosting memorable wedding events. The concept was to design a pearly spacious luxury villa with exquisite architecture that create the feeling that guests are on board, facing the calm waters of the Souda Bay ',
        bathrooms: 5,
        bedrooms: 5,
        squareFeet: 500,
      },

      {
        id: 6,
        name: '  Luxurious Design Villa Tzina IVV minutes away from the Beach with Private Pool in Elounda  ',
        price: 10_00_00,
        image: './assets/sixth-venue.jpg',
        details:
          "Extravagant eco-chic holiday villa to rent for your best holidays ever, with Ocean Views and private pool, featuring an architectural jewel, overlooking the historical Spinalonga and nearby Elounda, Crete's top resort for luxury-loving celebrities. ",
        bathrooms: 5,
        bedrooms: 5,
        squareFeet: 500,
      },
    ];
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

    return this.filteredArray;
  }
}
