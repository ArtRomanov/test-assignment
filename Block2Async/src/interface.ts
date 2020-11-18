type geo = {
  lat: string,
  lng: string
}
type address = {
  city: string
  geo: geo
  street: string
  suite: string
  zipcode: string
}
type company = {
  bs: string
  catchPhrase: string
  name: string
}

export interface TodosResponseType {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}
export interface UsersResponseType {
    address: address,
    company: company,
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}
  