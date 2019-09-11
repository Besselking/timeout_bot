var http = require('http')
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var chatMap = new Map()

function notify(chatId) {
	return () => bot.sendMessage(chatId, 'Whoo timeout over.')
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (chatMap.has(chatId)) {
    var timeout = chatMap.get(chatId)
    clearTimeout(timeout)
  }
  chatMap.set(chatId, setTimeout(notify(chatId), 30000))
  // send a message to the chat acknowledging receipt of their message
});

http.createServer(function(req, resp) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("This is a telegram bot not a website")
}).listen(process.env.PORT)
