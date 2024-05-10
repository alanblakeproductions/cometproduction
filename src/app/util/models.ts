export interface Address {
  name: string,
  line1: string,
  line2: string | undefined,
  city: string,
  state: string,
  zip: string,
  image: string,
  link: string,
}

export interface Person {
  firstName: string,
  lastName: string,
  roles: string[],
  image: string
}

export interface Showrun {
  title: string,
  address: Address,
  ticketLink: string,
  showtimes: Showtime[],
  description: string,
}

export interface Showtime {
  date: Date,
  time: string,
}

export interface AuctionItem {
  id: string,
  title: string,
  description: string,
  descriptionMore: string | undefined,
  startingBid: number,
  currentBid: number | undefined,
  bidIncrement: number,
  images: string[]
}
