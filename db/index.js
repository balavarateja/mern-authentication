const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://sanjay245manoj:sanjay245manoj@cluster0.ehic0cv.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('db is connected')
  })
  .catch((ex) => {
    console.log(ex, 'db connection failed')
  })
