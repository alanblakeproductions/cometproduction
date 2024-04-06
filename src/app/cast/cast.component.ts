import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Address, Person, Showtime } from './../util/models'

@Component({
  selector: 'app-cast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.less'
})
export class CastComponent {

  typeToMembers: Map<string, Person[]> = new Map<string, Person[]>();

    constructor() {
      this.typeToMembers.set("Creators", [
          {firstName: "Alan", lastName: "Blake", roles: ["Writer"], image: ""},
          {firstName: "Alek", lastName: "Sayers", roles: ["Director", "Co-Producer"], image: ""},
          {firstName: "Emmy", lastName: "Mastellar", roles: ["Co-Producer"], image: ""},
      ])

      this.typeToMembers.set("Cast", [
          {firstName: "Mary Cait", lastName: "Walthall", roles: ["Anne Hargrave"], image: ""},
          {firstName: "", lastName: "", roles: ["Javier Vargas"], image: ""},
          {firstName: "", lastName: "", roles: ["Ramzi Dawoud"], image: ""},
          {firstName: "Zoë", lastName: "Deprez", roles: ["Celine Meunier"], image: ""},
          {firstName: "", lastName: "", roles: ["Michael Matz"], image: ""},
          {firstName: "", lastName: "", roles: ["Marcus Finley"], image: ""},
          {firstName: "", lastName: "", roles: ["Lena Hargrave"], image: ""},
      ])

      this.typeToMembers.set("Crew", [
          {firstName: "Brittany", lastName: "Staudacher", roles: ["Costume Design"], image: ""},
          {firstName: "Sean", lastName: "McGinley", roles: ["Sound Design"], image: ""},
          {firstName: "Cotton", lastName: "Hensley", roles: ["Photography"], image: ""},
      ])
    }

    getCast(): Person[] | undefined {
      return this.typeToMembers.get("Cast")
    }

    getCrew(): Person[] | undefined {
      return this.typeToMembers.get("Crew")
    }

    returnZero() {
      return 0;
    }
}
