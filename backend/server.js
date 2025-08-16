require("dotenv").config();
const app = require("./src/app");
const connectTODb = require("./src/db/db");

connectTODb();
console.log("PUBLIC_KEY exists?", !!process.env.IMAGEKIT_PUBLIC_KEY);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
