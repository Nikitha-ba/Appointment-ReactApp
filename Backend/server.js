const express = require('express')
const app = express()
app.use(express.json())

const staffRoute = require('./routes/staffroute')
app.use('/staff', staffRoute)
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});