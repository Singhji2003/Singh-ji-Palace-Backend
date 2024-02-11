const express = require('express')
const connectToMongooDB = require('./db')
const feedback = require('./routes/feedback')
const webClient = require('./routes/webClient')
const cors = require('cors')
const app = express()
app.use(express.json())
const port = process.env.PORT;
connectToMongooDB();
app.use(cors())
app.use('/feedback', feedback)
app.use('/web-client', webClient)

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})