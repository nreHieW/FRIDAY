const token = process.env.TOKEN;

const axios = require("axios");
const Bot = require("node-telegram-bot-api");
let bot;
const Convo = require("./MongoDBModel/ConvoModel"); //importing Convos

if (process.env.NODE_ENV === "production") {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
  bot = new Bot(token, { polling: true });
}

let isAuto = false;

console.log("Bot server started in the " + process.env.NODE_ENV + " mode");

//handle /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = "Welcome to our shop! How can I help you today?"; //sample message
  bot.sendMessage(chatId, message).then(() => {});
});

//handle /auto or shld we say botMode
bot.onText(/\/auto/, (msg) => {
  const sellerChatId = msg.chat.id;
  isAuto = true;
  bot.sendMessage(
    sellerChatId,
    "F.R.I.D.A.Y. is handling your customer service now!"
  );
});

//handle /manual or shld we say humanMode
bot.onText(/\/manual/, (msg) => {
  const sellerChatId = msg.chat.id;
  isAuto = false;
  bot.sendMessage(sellerChatId, "Manual mode activated!");
});

bot.onText(/\/replyCustomer/, (msg) => {
  const sellerChatId = msg.chat.id;
  // Ask the seller for the customer id and the message to the customer
  bot.sendMessage(sellerChatId, "Please enter the customer id:").then(() => {});
  bot.once("message", async (sellerMessage) => {
    const customerId = sellerMessage.text;
    bot
      .sendMessage(
        sellerChatId,
        "Please enter the message to send to the customer:"
      )
      .then(() => {});
    bot.once("message", async (sellerMessage) => {
      try {
        const messageToCustomer = sellerMessage.text;
        // Now that you have the customer id and the message to the customer, you can use them to send a message to the customer.
        bot.sendMessage(customerId, messageToCustomer);
      } catch (e) {
        console.log(e.message);
        bot
          .sendMessage(msg.chat.id, "Sorry. We are unable to process your reply.")
          .then(() => {});
      }
      
    });
  });
});

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
    bot.sendMessage(293830606, text + " " + msg.chat.id).then(() => {});
    
    if (isAuto) {
      const res = await axios.get("http://13.231.243.162/predict", {
        params: { question: text },
      });
      // console.log(res.data);
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
      bot.sendMessage(msg.chat.id, answer).then(() => {});
    }
    
  } catch (e) {
    console.log(e.message);
    bot
      .sendMessage(msg.chat.id, "Sorry. We are unable to process your query.")
      .then(() => {});
  }
});