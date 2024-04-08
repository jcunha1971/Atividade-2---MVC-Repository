const express = require("express");
const connectDB = require('./database');
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use('/api', userRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
