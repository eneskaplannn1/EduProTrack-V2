require("dotenv").config({ path: "../config.env" });
const cron = require("node-cron");
const connectDB = require("../utilities/connectDB");
const Homework = require("../models/HomeworkModel");

cron.schedule("0 * * * *", async () => {
  connectDB();
  const currentDate = new Date();

  // expirationDate'i geçmiş olan ödevleri bul ve statüsünü güncelle
  const expiredHomeworks = await Homework.find({
    expirationDate: { $lt: currentDate },
    status: { $eq: "Pending" },
  });
  console.log(expiredHomeworks);

  // Her bir ödevi "Failed" olarak güncelle
  for (const homework of expiredHomeworks) {
    homework.status = "Failed";
    await homework.save();
  }
});
