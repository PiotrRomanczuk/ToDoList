require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const expressWinston = require('express-winston');
const loggerConfig = require('./config/winstonLogger');

const auth = require('./middleware/auth');

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const notesRouter = require('./routes/notesRoutes');
const authRouter = require('./routes/authRoutes');

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors(corsOptions));
app.use(expressWinston.logger(loggerConfig));

app.use('/notes/', notesRouter);
app.use('/user/', authRouter);

app.post('/welcome', auth, (req, res) => {
	res.status(200).send('Welcome 🙌 ');
});

app.get('/', (req, res) => {
	console.log('Hello in server!');
	res.send('Hello from the server');
});

const startServer = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Successfully connected to MongoDB');

		app.listen(PORT, () => {
			console.log(`listening on port ${PORT}`);
		});
	} catch (err) {
		console.log(`Error: ${err}`);
	}
};

startServer();

module.exports = { app, startServer };
