export interface UserType {
  user: any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
}

export interface StoreType {
  auth: UserType,
}