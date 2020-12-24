const dotenv = require("dotenv");
const express = require("express");
const api = require("./routes/api");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(cors());
app.use("/api", express.json(), api);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
