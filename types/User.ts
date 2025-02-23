export type User = {
  id: number
  username: string
  roles: Role[]
  remainingRents : number
}

export type Role = {
  name : string,
  description : string,
}