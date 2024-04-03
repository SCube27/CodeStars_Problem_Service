const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./configs/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

// Goes to the routes from where goes to the requested version
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message : "Problem Service has started"});
});

// Error handling middleware, kept at last so if anything goes wrong this will be finally executed
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});