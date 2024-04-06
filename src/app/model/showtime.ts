import { Address } from './address'

export interface Showtime {
  date: Date,
  time: string,
  place: string,
  address: Address,
  ticketLink: string,
}
