import { Countries, Currencies } from 'shared/const/common'

export interface IProfile {
  first: string
  lastname: string
  age: number
  currency: Currencies
  country: Countries
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  isLoading: boolean
  readonly: boolean
  error: string
  data: IProfile
}
