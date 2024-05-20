import { hashSync } from "bcryptjs"

export const userBody = { name: 'teste', email: 'teste@email.com', password: '123456' }

const passwordHash = hashSync(userBody.password)

export const newUser = { id: 1, name: 'teste', email: 'newUser@email.com', password: passwordHash }