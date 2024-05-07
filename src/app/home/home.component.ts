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

  FUNDRAISING_CURRENT: number = 614;
  FUNDRAISING_GOAL: number = 2000;
  FUNDRAISING_CURRENT_PERCENT: number = Math.floor(100 * this.FUNDRAISING_CURRENT / this.FUNDRAISING_GOAL);

  BUGHOUSE_ADDRESS: Address = {
    name: 'Bughouse Theater',
    line1: "1910 W. Irving Park Rd",
    line2: undefined,
    city: "Chicago",
    state: "IL",
    zip: "60613",
    image: "assets/images/bughouse_fundraiser_5-5-2024.png",
    link: "https://maps.app.goo.gl/rbR8cCb4U8dHuHLq5",
  };

  CHICAGO_DRAMATISTS_ADDRESS: Address = {
    name: 'Chicago Dramatists',
    line1: "1105 W Chicago Ave",
    line2: undefined,
    city: "Chicago",
    state: "IL",
    zip: "60642",
    image: "assets/images/rhinofest_2024_rhino.png",
    link: "https://www.google.com/maps/place/Chicago+Dramatists/@41.8960466,-87.6556394,15z/data=!4m6!3m5!1s0x880e2dc9d0c6865b:0xe5ff95ab9b80ec42!8m2!3d41.8960466!4d-87.6556394!16s%2Fg%2F11l35pgz_m?entry=ttu",
  };

  SHOWRUNS: Showrun[] = [
  /*
    {
      title: "A Night of Stars! Fundraiser",
      address: this.BUGHOUSE_ADDRESS,
      ticketLink: 'https://bughousetheater.fourthwalltickets.com/shows/a-night-of-stars?date=2024-05-05T19:00:00',
      showtimes: [
          { date: new Date(2024, 4, 5), time: '7pm' },
      ],
      description: "A variety show that is out of this world! Come for one night only to see some of Chicago's best "
        + "music and comedy. 100% of proceeds from this event will go to support the cast.",
    },
    */
    {
      title: "Rhinofest 2024",
      address: this.CHICAGO_DRAMATISTS_ADDRESS,
      ticketLink: '',
      showtimes: [
          { date: new Date(2024, 5, 5), time: '7pm' },
          { date: new Date(2024, 5, 12), time: '7pm' },
          { date: new Date(2024, 5, 19), time: '7pm' },
          { date: new Date(2024, 5, 28), time: '7pm' },
      ],
      description: "Chicago's longest running fringe festival charges back for its 35th year! Produced by Curious " +
        "Theatre Branch and Prop Thtr, the Rhino is a multi-venue showcase of new work from artists exploring all " +
        "genres of performance.",
    }
  ];
}
