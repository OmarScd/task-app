const express = require('express');
require('./db/mongoose');
const taskRouter = require('./routers/task');
const userRouter = require('./routers/user');

const app = express();

// app.use((req, res, next) => {
//   res.status(503).send({ error: 'We are under maintenance. Service temporarily unavailable.'})
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
