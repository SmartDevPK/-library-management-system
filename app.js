const express = require ('express');
const bodyParser = require ('body-parser');
const app = express()
const PORT = 3000

// middleware
app.set('view engine',  'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.listen(PORT, () => {
    console.log(`App is runing on port ${PORT}`)
})