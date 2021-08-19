import express from 'express'
import morgan from 'morgan'

import { connectMongo, closeMongo } from './config/mongoCon.js'
import friendsRoutes from './routes/friendsRoutes.js'

const app = express()

// if (process.env.NODE_ENV == 'development' ) {
  app.use(morgan('dev'))
// }

// Connecting to mongoDB
connectMongo()



// ----------------------------------------------------------

// parse application/json
app.use(express.json())

app.use('/friends', friendsRoutes)

// ----------------------------------------------------------




const port = process.env.PORT || 8000
app.listen(port, () => console.log("App is listenning at http://localhost:" + port))
