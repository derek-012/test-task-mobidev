require('dotenv').config();

const Koa = require("koa");
const router = require("koa-router");
const app = new Koa();

require("./init/")();

// let _ = router();
// _.get("/", (ctx) => {
// 	ctx.body = "FUCK YOU!!!";
// });

// app.use(_.routes());

// const {MongoClient} = require("mongodb");
// let client = new MongoClient(process.env.DB_CONNECTION);
// client.connect((err, db) => {
// 	console.log('fervfvsfd');
// })

const routes = require('./routes');
app.use(routes.routes());

app.listen(process.env.PORT, () => {
	console.log("Server is working.");
});