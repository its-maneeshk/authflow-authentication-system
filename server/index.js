const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoutes');
const postRoute = require('./routes/postRoutes');
const commentRoute = require("./routes/commentRoutes");
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // update to your frontend domain in production
}));

app.use(express.json());

connectDB();

app.use('/user',userRoute);
app.use('/user',postRoute);
app.use('/user',commentRoute);

const PORT = process.env.PORT || 8081;


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});