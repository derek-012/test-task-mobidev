require("dotenv").config();

const users = require("../db/").db(process.env.DB_NAME).collection("users");
const generateUsers = require("./generate_users");

const _USERS_COUNT = 100;
const _CONNECTIONS_COUNT = 300;

async function initDB() {
	const countUsers = await users.find({}).count();
	if (countUsers >= _USERS_COUNT) {
		console.log('Sufficient number of users');
		return;
	}

	console.log('Initialization Database...');

	await users.deleteMany({});

	await users.insertMany(generateUsers(_USERS_COUNT, _CONNECTIONS_COUNT), (err, result) => {
		if (err) {
			console.log(err);
			process.exit(-1);
		}

		console.log('Database initialized.');
	})
}

module.exports = initDB;