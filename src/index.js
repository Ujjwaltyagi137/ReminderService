const express = require('express');
const {PORT} = require('./config/serverconfig.js')
const bodyParser = require('body-parser');

const ReminderService = async ()=>{
    const app = express();
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json())
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
}
ReminderService();