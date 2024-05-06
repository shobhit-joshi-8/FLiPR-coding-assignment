import mongoose from "mongoose";
import env from "dotenv";
env.config();

const url = process.env.DB_URL
mongoose.set('strictQuery', true);

mongoose.connect(url).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {    
    console.log(err);
});



// import { Db, MongoClient } from "mongodb";

// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://nomankhan456:shobhit123@dbms.r9sr3bm.mongodb.net/?retryWrites=true&w=majority&appName=DBMS";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     movies.create

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);

//     console.log(movie,'jjjjjjjjjjjjjjj');
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



// mongodb+srv://nomankhan456:<password>@dbms.r9sr3bm.mongodb.net/?retryWrites=true&w=majority&appName=DBMS
