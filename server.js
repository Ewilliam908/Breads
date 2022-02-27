const express = require('express')

//Configuration
require('dotenv').config()
const PORT =process.env.PORT
console.log(PORT)

// Dependencies
const express = ('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//Listen
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})