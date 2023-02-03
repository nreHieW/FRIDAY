const token = process.env.TOKEN;

const axios = require("axios");
const e = require("express");
const Bot = require("node-telegram-bot-api");
let bot;
const { handleReplyCustomer, handleStart, botState } = require("botMethods");
const Convo = require("./MongoDBModel/ConvoModel"); //importing Convos

if (process.env.NODE_ENV === "production") {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
  bot = new Bot(token, { polling: true });
}

console.log("Bot server started in the " + process.env.NODE_ENV + " mode");

//handle /start
bot.onText(/\/start/, handleStart);

//handle /auto or shld we say botMode
bot.onText(/\/auto/, handleAuto);

//handle /manual or shld we say humanMode
bot.onText(/\/manual/, handleManual);

bot.onText(/\/replyCustomer/, handleReplyCustomer);
//still working on this part
//I would guess we would prompt the seller with a Q and A
//1. Chat Id with Customer (not breach of IS1108 cos its a chat id only not userid)
//2. Message to customer

bot.on("message", async (msg) => {
  console.log(msg);
  try {
    const text = msg.text;
    //1. Building a way to automatically forward messages to the seller whenever someone messages the bot
    //To test the concatenation of text + msg.chat.id
    bot.sendMessage("INPUT SELLER ID", text + " " + msg.chat.id).then(() => {});

    const res = await axios.get("http://13.115.58.243/predict", {
      params: { question: text },
    });
    console.log(res.data);
    const answer = res.data.answer;

    //a convo instance - do we still get the AI to run even when they are in manual mode? Yes for now
    const convo = new Convo({ question: text, answer: answer });
    console.log(convo);
    convo.save(function (err, convo) {
      if (err) {
        return console.log(err);
      } else {
        console.log(convo.name + "saved to Convos collection");
      }
    });
    //checking state to see if we are in manual or auto mode
    if (botState().getIsAuto()) {
      bot.sendMessage(msg.chat.id, answer).then(() => {});
    }
  } catch (e) {
    console.log(e.message);
    bot
      .sendMessage(msg.chat.id, "Sorry. We are unable to process your query.")
      .then(() => {});
  }
});

module.exports = bot;
