import mongoose from 'mongoose'

export const connectMongo = async () => {

  try {
    // await mongoose.connect('mongodb+srv://user_me:@mongodbAtlas@18821@merncluster.n9288.mongodb.net/friendsDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    await mongoose.connect('mongodb://localhost:27017/friendsDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    console.log("Connected to the database: \"friendsDB\"." )
  } catch(e) {
    console.log(e)
  }

}

export const closeMongo = async () => {
  try {
    await mongoose.connection.close()
    console.log("mongoDB connection closed.")
  } catch (e) {
    console.log(e)
  }
}

