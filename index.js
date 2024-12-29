const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const clientRouter = require('./routers/client')
const adminRouter = require('./routers/admin')

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000
const MONGOURL = process.env.MONGOURL


app.listen(PORT,()=>{
    console.log('server is running');
})

mongoose.connect(MONGOURL).then(()=>{
    console.log('Database connected');
}).catch((e)=>{
    console.log('database not connected: ',e);
})

app.use('/client',clientRouter)
app.use('/admin',adminRouter);