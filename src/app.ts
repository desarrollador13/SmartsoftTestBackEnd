import express = require('express');
import morgan from 'morgan';

const app: express.Application = express();

async function loadServer() {
	app.use(morgan('dev'))
    await require('./loaders').default({ expressApp: app });
} 

loadServer();
app.listen(3001, function () {
    console.log('Example app listening on port 3001 and!');
});