const {MongoClient} = require("mongodb");
const client = new MongoClient(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

client.connect(err => {
	if (err) {
		console.log(err);
		process.exit(-1);
	}

	console.log('Connected to MongoDB Server');
});

module.exports = client;