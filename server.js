const db = require('./models');

const express = require('express');
const app = express();

port = 3001;

app.route('/',(req, res) =>{
    res.send('Hello World')
})


db.sequelize.sync().then(()=>{
    app.listen(port, ()=> console.log(`Server is running on ${port}`));

})

