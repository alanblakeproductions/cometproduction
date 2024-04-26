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
      this.typeToMembers.set("Executive Team", [
          {firstName: "Alan", lastName: "Blake", roles: ["Writer"], image: ""},
          {firstName: "Alek", lastName: "Sayers", roles: ["Director", "Co-Producer"], image: ""},
          {firstName: "Emmy", lastName: "Mastellar", roles: ["Co-Producer"], image: ""},
      ])

      this.typeToMembers.set("Cast", [
          {firstName: "Mary Cait", lastName: "Walthall", roles: ["Anne Hargrave"], image: ""},
          {firstName: "Jen", lastName: "Matthews", roles: ["Ruth Moran"], image: ""},
          {firstName: "Alkan", lastName: "Sezginis", roles: ["Ramzi Dawoud"], image: ""},
          {firstName: "Zoë", lastName: "Deprez", roles: ["Celine Meunier"], image: ""},
          {firstName: "Charlie", lastName: "Thomson", roles: ["Michael Matz"], image: ""},
          {firstName: "Mo", lastName: "Reiley", roles: ["Marcus Finley"], image: ""},
          {firstName: "Kendal", lastName: "Romero", roles: ["Lena Hargrave"], image: ""},
      ])

      this.typeToMembers.set("Crew", [
          {firstName: "Sean", lastName: "McGinley", roles: ["Sound Design"], image: ""},
          {firstName: "Emmy", lastName: "Mastellar", roles: ["Photography"], image: ""},
          {firstName: "Charlie", lastName: "Thomson", roles: ["Graphic Design"], image: ""},
          {firstName: "Alan", lastName: "Blake", roles: ["Set Construction"], image: ""},
      ])
    }

    returnZero() {
      return 0;
    }
}
