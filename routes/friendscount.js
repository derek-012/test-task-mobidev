const {ObjectId} = require('mongodb');
const users = require("../db/").db(process.env.DB_NAME).collection("users");

function countFriends(user) {
	if (user.following.length == 0 || user.followers.length == 0) {
		return 0;
	}

	let friends = 0;
	let followers = user.followers;
	let following = user.following;

	for (let id of following) {
		if (followers.indexOf(id) != -1) {
			friends++;
		}
	}

	return friends;
}

module.exports = async (ctx) => {
	let userId = ctx.params.id;
	let result = await users.findOne({_id: ObjectId(userId)});
	ctx.body = {
		friends: countFriends(result)
	};
}