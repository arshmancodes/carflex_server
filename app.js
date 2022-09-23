const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const adRoutes = require('./routes/carAdRoutes');


app.get('/' , (req, res) => {
    res.send("This is a testing page");
});

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/ads', adRoutes);

app.listen(3000, () => {
    console.log("The application is running on 3000 port.");
});