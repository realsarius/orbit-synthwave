import app from "./server.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import mongodb from "mongodb";
import RestaurantsDAO from "../backend/dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;

// mongoose.connect(process.env.RESTREVIEWS_DB_URI,
//     {
//         useNewUrlParse: true,
//     }, () => {
//         console.log("Mongoose is connected");
//     });

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
    }).catch(err => {
    console.error(err.stack);
    process.exit(1);
}).then(async client => {
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
})

// app.listen(port, () => {
//     console.log("Server is running on Port: " + port);
// });