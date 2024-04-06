import { Component } from '@angular/core';
import { Address } from './model/address'
import { Person } from './model/person'
import { Showtime } from './model/showtime'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  typeToMembers: Map<string, Person[]> = new Map<string, Person[]>();
  showtimes: Showtime[] = [];

  chicagoDramatistsTheater: Address = {
    line1: '1105 W Chicago Ave.',
    line2: undefined,
    city: 'Chicago',
    state: 'IL',
    zip: '60642',
    link: 'https://maps.app.goo.gl/iv8wFHyJa2kcHLHV9',
  };

  constructor() {
    this.typeToMembers.set("Creators", [
        {firstName: "Alan", lastName: "Blake", roles: ["Writer"], image: ""},
        {firstName: "Alek", lastName: "Sayers", roles: ["Director", "Co-Producer"], image: ""},
        {firstName: "Emmy", lastName: "Mastellar", roles: ["Co-Producer"], image: ""},
    ])

    this.typeToMembers.set("Cast", [
        {firstName: "Mary Cait", lastName: "Walthall", roles: ["Anne Hargrave"], image: ""},
        {firstName: "Zoë", lastName: "Deprez", roles: ["Celine Meunier"], image: ""},
        {firstName: "Zoe", lastName: "Deprez", roles: ["Javier Vargas"], image: ""},
        {firstName: "Zoe", lastName: "Deprez", roles: ["Marcus Finley"], image: ""},
        {firstName: "Zoe", lastName: "Deprez", roles: ["Lena Hargrave"], image: ""},
        {firstName: "Zoe", lastName: "Deprez", roles: ["Ramzi Dawoud"], image: ""},
    ])

    this.typeToMembers.set("Crew", [
        {firstName: "Brittany", lastName: "Staudacher", roles: ["Costume Design"], image: ""},
        {firstName: "Sean", lastName: "McGinley", roles: ["Sound Design"], image: ""},
        {firstName: "Cotton", lastName: "Hensley", roles: ["Photography"], image: ""},
    ])

    this.showtimes.push({
      date: new Date(),
      time: '7pm',
      place: 'Chicago Dramatists',
      address: this.chicagoDramatistsTheater,
      ticketLink: '',
    })
  }

  getCast(): Person[] | undefined {
    return this.typeToMembers.get("Cast")
  }

  getCrew(): Person[] | undefined {
    return this.typeToMembers.get("Crew")
  }
}
