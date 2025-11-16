bot.start((ctx) => ctx.reply("Привет! Открывай маркет:", {
  reply_markup: {
    inline_keyboard: [
      [{ text: "StarProdMarket", web_app: { url: "https://mikolimka20-hash.github.io/StarProdMarket.github.io/frontend.html" } }]
    ]
  }
}));
