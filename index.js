require("dotenv/config");
require("dotenv/lib/env-options");
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

const flipCoin = () => {
  return Math.floor(Math.random() * 2);
};

bot.onText(/\/flip/, (msg, match) => {
  const chatId = msg.chat.id;
  console.log("Received");
  const result = flipCoin();
  bot.sendPhoto(chatId, `img/${result}.png`, { caption: ["Cara", "Coroa"][result] });
});
