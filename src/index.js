const express = require('express');
require('./db/mongoose');
const taskRouter = require('./routers/task');
const userRouter = require('./routers/user');

const app = express();
const PORT = process.env.PORT;

// app.use((req, res, next) => {
//   res.status(503).send({ error: 'We are under maintenance. Service temporarily unavailable.'})
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
