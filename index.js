const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const clientRouter = require('./routers/clientRouter')
const adminRouter = require('./routers/adminRouter')

const app = express()
app.use(cors())
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