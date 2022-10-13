const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cors = require('cors');

const todosRouter = require('./routes/routes')
const app = express();

dotenv.config({ path: './config/.env' });
const port = process.env.PORT;
const mongo = process.env.MONGO_URL;
app.use(cors());
// Passing the data in the json form
app.use(express.json())

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB Connection is Successfully"))
  .catch((err) => console.log(err));

app.use('/task',todosRouter)
app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server is runing on port Number ${port}`)
})