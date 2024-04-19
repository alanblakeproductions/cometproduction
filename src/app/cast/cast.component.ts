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
          {firstName: "Jen Matthews", lastName: "", roles: ["Ruth Moran"], image: ""},
          {firstName: "", lastName: "", roles: ["Ramzi Dawoud"], image: ""},
          {firstName: "Zoë", lastName: "Deprez", roles: ["Celine Meunier"], image: ""},
          {firstName: "Charlie Thompson", lastName: "", roles: ["Michael Matz"], image: ""},
          {firstName: "Mo Reiley", lastName: "", roles: ["Marcus Finley"], image: ""},
          {firstName: "Kendal Romero", lastName: "", roles: ["Lena Hargrave"], image: ""},
      ])

      this.typeToMembers.set("Crew", [
          {firstName: "Sean", lastName: "McGinley", roles: ["Sound Design"], image: ""},
          {firstName: "Cotton", lastName: "Hensley", roles: ["Photography"], image: ""},
          {firstName: "Charlie", lastName: "Thompson", roles: ["Graphic Design"], image: ""},
      ])
    }

    returnZero() {
      return 0;
    }
}
