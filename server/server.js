const express = require("express");
const sequelize = require("./config/connection");
require("./models/index")
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/build')));

sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`app is listening on ${PORT}.....`)
    })
})