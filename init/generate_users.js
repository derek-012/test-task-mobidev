const { ObjectId } = new require("mongodb");
const NAMES = require("./names_list.js");
const getRandomInt = require("./random.js");


const _ALL_NAMES = 300;


function follow(user, follower) {
	if (user.followers.indexOf(follower._id) == -1) {
		user.followers.push(follower._id);
		follower.following.push(user._id);
		return true;
	} else {
		return false;
	}
}

function generateUsers(user_count, connection_count) {
	let users = [];

	// Создание пустых записей
	for (let i = 0; i < user_count; i++) {
		let name = [NAMES.first[getRandomInt(0, 300)], NAMES.last[getRandomInt(0, 300)]].join(' ');
		users.push({_id: ObjectId(), name: name, followers: [], following: []});
	}

	// Генерация связей (подписок) между пользователями
	for (let i = 0; i < connection_count; i++) {
		let follower = getRandomInt(0, users.length - 1);
		let following = getRandomInt(0, users.length - 1);

		if (follower == following) {
			i--;
			continue;
		}

		if (!follow(users[follower], users[following])) {
			i--;
		}
	}

	return users;
}

module.exports = generateUsers;