import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address, Showrun, Showtime } from './../util/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

  CHICAGO_DRAMATISTS_ADDRESS: Address = {
    name: 'Chicago Dramatists',
    line1: "1105 W Chicago Ave",
    line2: undefined,
    city: "Chicago",
    state: "IL",
    zip: "60642",
    link: "https://www.google.com/maps/place/Chicago+Dramatists/@41.8960466,-87.6556394,15z/data=!4m6!3m5!1s0x880e2dc9d0c6865b:0xe5ff95ab9b80ec42!8m2!3d41.8960466!4d-87.6556394!16s%2Fg%2F11l35pgz_m?entry=ttu",
  };

  SHOWRUNS: Showrun[] = [
    {
      address: this.CHICAGO_DRAMATISTS_ADDRESS,
      ticketLink: '',
      showtimes: [
          { date: new Date(2024, 5, 5), time: '7pm' },
          { date: new Date(2024, 5, 12), time: '7pm' },
          { date: new Date(2024, 5, 19), time: '7pm' },
          { date: new Date(2024, 5, 28), time: '7pm' },
      ],
    }
  ];
}
