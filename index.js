import "dotenv/config";

import TelegramBot from "node-telegram-bot-api";
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/flip/, (msg) => {
  const chatId = msg.chat.id;
  const result = Math.floor(Math.random() * 2);
  const photoPath = `img/coin/${result}.png`;

  bot.sendPhoto(chatId, photoPath, {
    caption: ["Cara", "Coroa"][result],
  });
});

bot.onText(/\/dice/, (msg) => {
  const chatId = msg.chat.id;
  const result = Math.floor(Math.random() * 6) + 1;
  const photoPath = `img/dice/${result}.png`;

  bot.sendPhoto(chatId, photoPath, {
    caption: String(result),
  });
});
