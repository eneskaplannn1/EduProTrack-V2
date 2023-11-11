require("dotenv").config({ path: "./config.env" });

const app = require("./app");
const connectToDatabase = require("./utilities/connectDB");

connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log(`app running at port ${process.env.PORT}`);
});
