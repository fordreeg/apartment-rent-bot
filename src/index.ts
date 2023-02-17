import { getUserName } from "./helpers";
import { DEFAULT_LANGUAGE } from './constants'
import { CHAT_COMMANDS } from './data'

const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')
dotenv.config()

const token = process.env.TELEGRAM_BOT_TOKEN || ''
const webAppUrl = process.env.WEP_APP_URL || '/'

const bot = new TelegramBot(token, {polling: true})

bot.on('message', async (msg) => {
  const {chat, from, text} = msg
  const chatId = chat.id
  const userName = getUserName(from)

  if (text === CHAT_COMMANDS.start) {
    // Example inline btn
    // await bot.sendMessage(chatId, 'Кнопка', {
    //   reply_markup: {
    //     keyboard: [
    //       [{text: 'Фильтр'}]
    //     ]
    //   }
    // })
    await bot.sendMessage(chatId, 'Кнопка', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Фільтр', web_app: {url: webAppUrl}}]
        ]
      }
    })
  }

  bot.sendMessage(chatId, `Привіт, ${userName}!`)
})
