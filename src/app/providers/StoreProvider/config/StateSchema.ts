import { CounterSchema } from 'entities/counter'
import { UserSchema } from 'entities/user'
import { AuthSchema } from 'features/authByUsername/model/types/authSchema'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  auth: AuthSchema
}
