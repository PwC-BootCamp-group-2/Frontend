export interface UserType {
  user: any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
}

export interface BookingType {
  bookings: any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
}

export interface SpaceType {
  spaces: any,
  space: any,
  location: string,
  type: string,
  price: string,
  merchantSpaces: any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
}

export interface StoreType {
  auth: UserType,
  booking: BookingType,
  space: SpaceType,
}