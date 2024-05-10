import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuctionItem } from './../util/models';
import { LambdaService } from './../service/lambda.service';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    LambdaService,
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.less'
})
export class SupportComponent {

    AUCTION_EXPIRATION = '2024-07-01 12:00:00';

    auctionItems: AuctionItem[] = [];
    selectedItem: AuctionItem = {
      id: "",
      title: "",
      description: "",
      descriptionMore: undefined,
      startingBid: 0,
      currentBid: undefined,
      bidIncrement: 5,
      images: [],
    };

    model = {
      email: "",
      itemTitle: "",
      bid: 0,
    };

    state: string = "primary";
    message: string | undefined;
    result: any | undefined = {};

    constructor(private lambdaService: LambdaService) {
        this.auctionItems.push({
            id: "bouldering",
            title: "Bouldering Session for 2",
            description: "<p>Brian Williams of Movement Climbing, Yoga, & Fitness in Lincoln Park will guide you through a bouldering session for 2! For up to 2 hours, Brian will teach technique to beginners and experts alike!</p>",
            descriptionMore: "<p>I'm Brian! I've been climbing on and off since I was young but \"for real\" for about 8 years. I've been teaching technique, lessons, skills, etc in climbing gyms for 7.5 of those 8 years too! I love getting people hooked on something new and having a fun climbing session. Can't wait to share it with you!</p>",
            startingBid: 80,
            currentBid: 80,
            bidIncrement: 5,
            images: [
                "assets/images/auction/brian_williams.png"
            ]
        });

        this.auctionItems.push({
            id: "airpods",
            title: "AirPods with Charging Case (2nd Gen)",
            description: "<p>The famed AirPods we know and love! Bluetooth enabled and seamlessly pair with other Apple Devices to enable Siri and other integrated features.</p>" +
                         "<p>Learn more on <a href=\"https://www.apple.com/airpods-2nd-generation/\" target=\"_blank\">Apple's store page</a>.</p>",
            descriptionMore: "Here",
            startingBid: 75,
            currentBid: undefined,
            bidIncrement: 5,
            images: [
                "assets/images/auction/airpods.png"
            ]
        });

        this.auctionItems.push({
            id: "cake",
            title: "3-layer 6\" Painted Custom Vegan Cake",
            description: "<p>Cast member Kendal Romero is the owner of Offbeat Buttercream, the creator of custom Vegan cakes and European treats. She'll work with you to create a custom 3-layer 6\" painted cake for your birthday, get-together, or any other occasion!</p>" +
                         "<p>For more information on what's possible, see her Instagram: <a href=\"https://www.instagram.com/offbeatbuttercream\" target=\"_blank\">@offbeatbuttercream</a>.</p>",
            descriptionMore: undefined,
            startingBid: 80,
            currentBid: undefined,
            bidIncrement: 10,
            images: [
                "assets/images/auction/cake1.png",
                "assets/images/auction/cake2.png",
                "assets/images/auction/cake3.png",
                "assets/images/auction/cake4.png",
            ]
        });

        this.auctionItems.push({
            id: "script_doctor",
            title: "Script Doctoring with Writer Alan Blake",
            description: "<p>Do you have a stage or film script and want feedback? Or are you batting around an idea for one, but need help developing an outline? Comet's writer, Alan Blake, will review your script or idea and help take it to the next level!</p>",
            descriptionMore: "<p>Hi! I'm Alan. In addition to Comet, I've written TV, stage, and film scripts across a wide number of genres:</p>" +
                         "I-80: An Interstate Crime Story, a dark comedy limited series<br/>" +
                         "Diner, an action comedy feature<br/>" +
                         "Love Me (K)not, a rom-com web series<br/>" +
                         "The Shearing, a horror musical",
            startingBid: 30,
            currentBid: undefined,
            bidIncrement: 5,
            images: [
                "assets/images/auction/script_doctor.png"
            ]
        });

        this.auctionItems.push({
            id: "portraits",
            title: "Portrait Session with Producer Emmy Masteller",
            description: "<p>Comet's producer, Emmy Masteller, will do a 90-minute session of your choice located in the Chicago Area. Perfect for a couples portrait session, professional headshots, or whatever else you can dream of that she agrees to!</p>",
            descriptionMore: undefined,
            startingBid: 50,
            currentBid: 55,
            bidIncrement: 5,
            images: [
                "assets/images/auction/portrait1.png",
                "assets/images/auction/portrait2.png",
                "assets/images/auction/portrait3.png",
                "assets/images/auction/portrait4.png",
                "assets/images/auction/portrait5.png",
            ]
        });

        this.auctionItems.push({
            id: "desk",
            title: "2' x 4' desk",
            description: "<p>A 2' x 4' modern desk made of pine, plywood, and birch veneer.</p>" +
                               "<p>These desks were created specifically for Comet and will be used throughout the production. After our last show date on June 28th, they will be available for pickup!</p>",
            descriptionMore: "<p>Measurements</p>" +
                               "Depth: 2'<br/>" +
                               "Width: 4'<br/>" +
                               "Height: 29<br/>" +
                               "<p>Materials</p>" +
                               "The top is constructed of plywood and a birch veneer, with an amber shellac finish. The legs are select pine.",
            startingBid: 35,
            currentBid: undefined,
            bidIncrement: 5,
            images: [
                "assets/images/auction/desk.png",
            ]
        });

        this.select(this.auctionItems[0]);

    }

    returnZero() {
      return 0;
    }

    select(item: AuctionItem) {
      this.selectedItem = item;
      let bid = 0;
      if (item.currentBid === undefined) {
        bid = item.startingBid;
      }
      else {
        bid = item.currentBid + item.bidIncrement;
      }
      this.model.bid = bid;
      this.model.itemTitle = item.title;
      this.message = "";
      this.state = "";
    }

    onSubmit() {
      this.message = "";
      this.state = "";

      this.lambdaService
        .contact(this.model)
        .subscribe((data: any) => {
          this.message = "Thank you for your bid, " + this.model.email + "!";
          this.state = "success";
          this.result = data;
        },
        error => {
          console.log("Error while submitting bid");
          console.log(error);
          this.message = "Sorry! This bid could not be sent.";
          this.state = "error";
        }
      );
    }
}
