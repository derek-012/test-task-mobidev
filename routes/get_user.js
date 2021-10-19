const {ObjectId} = require('mongodb');
const users = require("../db/").db(process.env.DB_NAME).collection("users");

module.exports = async (ctx) => {
	let userId = ctx.params.id;
	let result = await users.findOne({_id: ObjectId(userId)});
	ctx.body = result;
}