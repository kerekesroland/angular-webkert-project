import { Component, OnInit, Input } from '@angular/core';
import { venue } from './../../models/venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss'],
})
export class VenueComponent implements OnInit {
  @Input() venue!: venue;
  constructor() {}

  ngOnInit(): void {}
}
