const express = require("express");
const sequelize = require("./config/connection");
require("./models/index")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

sequelize.sync({force: true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`app is listening on ${PORT}.....`)
    })
})