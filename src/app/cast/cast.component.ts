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
          {firstName: "Alan", lastName: "Blake", roles: ["Writer"], image: "assets/images/alan_blake.jpg"},
          {firstName: "Alek", lastName: "Sayers", roles: ["Director", "Co-Producer"], image: "assets/images/alek_sayers.jpg"},
          {firstName: "Emmy", lastName: "Masteller", roles: ["Co-Producer"], image: "assets/images/emmy_masteller.jpg"},
      ])

      this.typeToMembers.set("Cast", [
          {firstName: "Mary Cait", lastName: "Walthall", roles: ["Anne Hargrave"], image: "assets/images/mary_cait_walthall.jpg"},
          {firstName: "Jennifer", lastName: "Mathews", roles: ["Ruth Moran"], image: "assets/images/jennifer_mathews.jpg"},
          {firstName: "Alkan", lastName: "Sezginis", roles: ["Ramzi Dawoud"], image: "assets/images/alkan_sezginis.jpg"},
          {firstName: "Zoe", lastName: "Deprez", roles: ["Celine Meunier"], image: "assets/images/zoe_deprez.jpg"},
          {firstName: "Charlie", lastName: "Thomson", roles: ["Michael Matz"], image: "assets/images/charlie_thomson.jpg"},
          {firstName: "Mo", lastName: "Reilly", roles: ["Marcus Finley"], image: "assets/images/mo_reilly.jpg"},
          {firstName: "Kendal", lastName: "Romero", roles: ["Lena Hargrave"], image: "assets/images/kendal_romero.jpg"},
      ])

      this.typeToMembers.set("Crew", [
          {firstName: "Sean", lastName: "McGinley", roles: ["Sound Design"], image: "assets/images/sean_mcginley.jpg"},
          {firstName: "Emmy", lastName: "Masteller", roles: ["Photography"], image: "assets/images/emmy_masteller.jpg"},
          {firstName: "Charlie", lastName: "Thomson", roles: ["Graphic Design"], image: "assets/images/charlie_thomson.jpg"},
          {firstName: "Alan", lastName: "Blake", roles: ["Set Construction"], image: "assets/images/alan_blake.jpg"},
      ])
    }

    returnZero() {
      return 0;
    }
}
