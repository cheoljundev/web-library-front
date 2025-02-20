export type User = {
  id: number
  username: string
  roles: Role[]
}

export type Role = {
  name : string,
  description : string
}