const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const staffRoute = require('./routes/staffroute')
app.use('/staff', staffRoute)
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});