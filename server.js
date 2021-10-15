const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://daniel:admin-daniel@cluster0.zg1ef.mongodb.net/practice-mern')

app.use("/", require("./routes/noteRoute"))

app.listen(3001, function() {
    console.log('express listen on port 3001')
})