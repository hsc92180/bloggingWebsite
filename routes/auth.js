const express = require("express");
const routes = express.Router();
const authcontrollers=require("../controller/auth")

routes.post("/signUp",authcontrollers.onSignUpfn);
routes.post("/login", authcontrollers.onLoginfn);
module.exports = routes;