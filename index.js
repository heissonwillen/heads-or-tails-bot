require("dotenv/config");

const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

const captions = ["Cara", "Coroa"];

bot.onText(/\/flip/, (msg, match) => {
  const chatId = msg.chat.id;
  const result = Math.floor(Math.random() * 2);
  const photoPath = `img/${result}.png`;

  bot.sendPhoto(chatId, photoPath, {
    caption: captions[result],
  });
});
