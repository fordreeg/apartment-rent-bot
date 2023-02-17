import { User } from "node-telegram-bot-api";

export const getUserName = (user?: User) => {
  if (!user) return 'anonymous'

  const firstName = user.first_name
  const lastName = user.last_name || ''

  return `${firstName} ${lastName}`
}
