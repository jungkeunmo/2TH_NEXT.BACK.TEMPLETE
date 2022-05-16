const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const globalRouter = require("./routers/globalRouter");

const PORT = process.env.PORT;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/global", globalRouter);

app.listen(PORT, () => {
    console.log(`🍏http://localhost:${PORT} , NEXT.JS SERVER START🍏`);
});