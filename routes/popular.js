const {ObjectId} = require('mongodb');
const users = require("../db/").db(process.env.DB_NAME).collection("users");

module.exports = async (ctx) => {
	let result = await users.aggregate([
			{
				$project: {name: 1, followers: {$size: "$followers"}}
			}
		]).sort({followers: -1}).limit(3);
	let data = [];
	for await (let user of result) {
		data.push(user);
	}
	ctx.body = data;
}