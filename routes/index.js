const router = require("@koa/router");
const getUser = require("./get_user.js");
const friendsCount = require("./friendscount.js");
const popular = require("./popular.js");

let _ = router();
_.get("/users/popular", popular);
_.get("/users/:id", getUser);
_.get("/users/:id/friendscount", friendsCount);

module.exports = _;