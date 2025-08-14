require("dotenv").config();
const app = require("./src/app");
const connectTODb = require("./src/db/db");


connectTODb();

app.listen(3000, () => {
  console.log("Server is run on port 3000");
});
