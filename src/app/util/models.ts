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
  address: Address,
  ticketLink: string,
  showtimes: Showtime[],
}

export interface Showtime {
  date: Date,
  time: string,
}
