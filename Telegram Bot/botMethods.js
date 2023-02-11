// //Function to handle event when user presses "/start"

// import bot from "./bot";

// //use it as a callback for the bot.onText
// function handleStart(msg) {
//   const chatId = msg.chat.id;
//   const message = "Welcome to our shop! How can I help you today?"; //sample message
//   bot.sendMessage(chatId, message).then(() => {});
// }

// function botState() {
//   const [isAuto, setIsAuto] = useState(true);

//   const handleAuto = (msg) => {
//     const sellerChatId = msg.chat.id;
//     setIsAuto(true);
//     bot.sendMessage(
//       sellerChatId,
//       "F.R.I.D.A.Y. is handling your customer service now!"
//     );
//   };

//   const handleManual = (msg) => {
//     const sellerChatId = msg.chat.id;
//     setIsAuto(false);
//     bot.sendMessage(sellerChatId, "Manual mode activated!");
//   };

//   const getIsAuto = () => {
//     return isAuto;
//   };

//   return { handleAuto, handleManual, getIsAuto };
// }

// function handleReplyCustomer(msg) {
//   const sellerChatId = msg.chat.id;
//   // Ask the seller for the customer id and the message to the customer
//   bot.sendMessage(sellerChatId, "Please enter the customer id:").then(() => {});
//   bot.once("message", async (sellerMessage) => {
//     const customerId = sellerMessage.text;
//     bot
//       .sendMessage(
//         sellerChatId,
//         "Please enter the message to send to the customer:"
//       )
//       .then(() => {});
//     bot.once("message", async (sellerMessage) => {
//       const messageToCustomer = sellerMessage.text;
//       // Now that you have the customer id and the message to the customer, you can use them to send a message to the customer.
//       bot.sellerMessage(customerId, messageToCustomer);
//     });
//   });
// }

// export { handleReplyCustomer, handleStart, botState };
