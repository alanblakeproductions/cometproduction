import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorTier } from './../util/models'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.less'
})
export class AboutComponent {

    donorTiers: DonorTier[] = [];
    typeToMembers: Map<string, string[]> = new Map<string, string[]>();

    constructor() {
      // $200
      this.donorTiers.push({
        title: "Galactic Patrons",
        image: "assets/images/donortiers/galaxy.png",
        titleClass: "uk-text-bolder",
        membersClass: "uk-text-bolder",
        members: [
          "David Sayers",
        ]
      });

      // $100
      this.donorTiers.push({
        title: "Star Benefactors",
        image: "assets/images/donortiers/star.png",
        titleClass: "uk-text-normal",
        membersClass: "uk-text-normal",
        members: [
          "April Totman",
          "Gregory Curtis",
          "Kathryn Dorpinghaus",
          "Nancy Teaff",
        ]
      });

      // $50
      this.donorTiers.push({
        title: "Planetary Advocates",
        image: "assets/images/donortiers/planet.png",
        titleClass: "uk-text-lighter",
        membersClass: "uk-text-lighter",
        members: [
          "Beth Ellen Roberts",
          "Cody Pariset",
          "Julia Wilkens",
        ]
      });

      this.typeToMembers.set("People", [
        "Dr. Federica Spoto",
        "Dr. Matthew Payne",
        "Mary Ruth Clarke",
        "Cristy Salinas Lynch",
        "Kristin L. Schoenback",
        "Emily Anderson",
        "Michael Serio",
        "Dan Arisitdou",
        "Brian Williams",
        "Anyata Hamilton",
      ]);

      this.typeToMembers.set("Groups", [
        "Minor Planet Center",
        "Harvard & Smithsonian Center for Astrophysics",
        "<i>Medical Miracle</i>",
        "<i>Improvised Fairytales</i>",
      ])

      this.typeToMembers.set("Businesses", [
        "Ava Recycling",
        "Massage Envy",
      ])
    }

    returnZero() {
      return 0;
    }
}
