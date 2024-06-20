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
    resources: string[] = [];

    constructor() {
      // $200
      this.donorTiers.push({
        title: "Galactic Patrons",
        image: "assets/images/donortiers/galaxy.png",
        titleClass: "uk-text-bolder",
        membersClass: "uk-text-bolder",
        members: [
          "Ati Khatri",
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

      this.resources = [
        '<a href="https://freesound.org/people/Akc1231/sounds/340803/">Walking on Broken Glass</a> by <a href="https://freesound.org/people/Akc1231/">Akc1231</a> | License: <a href="http://creativecommons.org/licenses/by/3.0/">Attribution 3.0</a>',
        '<a href="https://freesound.org/people/200221-WeanBekker/sounds/543707/">Walking on glass in open hall .wav</a> by <a href="https://freesound.org/people/200221-WeanBekker/">200221-WeanBekker</a> | License: <a href="http://creativecommons.org/publicdomain/zero/1.0/">Creative Commons 0</a>',
      ]
    }

    returnZero() {
      return 0;
    }
}
