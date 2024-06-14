const express = require("express");
const routes = require("./routes/auth");
const { default: mongoose } = require("mongoose");
const routers = require("./routes/post");
const validMiddleware = require("./MiddleWare/validatemiddle");
const app = express();
app.use(express.json());

app.use("/api/v1/app", routes);
app.use("/api/v1/app/posts",validMiddleware, routers);
mongoose.connect("mongodb://localhost:27017/Blogapp").then(() => { console.log("database connected") }).catch((err) => { console.log(err) });

app.listen(7890, () => console.log("server is up and runnimg on port 7890"));