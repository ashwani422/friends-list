import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

import friendsRoutes from './routes/friendsRoutes.js'

const app = express()

// if (process.env.NODE_ENV == 'development' ) {
  app.use(morgan('dev'))
// }


// ----------------------------------------------------------

// parse application/json
app.use(express.json())

app.use('/friends', friendsRoutes)

// ----------------------------------------------------------


// Connecting to mongoDB
try {
  // await mongoose.connect('mongodb+srv://user_me:@mongodbAtlas@18821@merncluster.n9288.mongodb.net/friendsDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  await mongoose.connect('mongodb://localhost:27017/friendsDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  // Server listening at
  const port = process.env.PORT || 8000
  app.listen(port, () => console.log("App is connected to the database and listenning at http://localhost:" + port))
} catch(e) {
  console.log(e)
}


