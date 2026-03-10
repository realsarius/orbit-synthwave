import app from "./server.js";
import dotenv from "dotenv";
import mongodb from "mongodb";
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 8000;
const mongoUri = process.env.RESTREVIEWS_DB_URI;

if (!mongoUri) {
    console.error("Missing RESTREVIEWS_DB_URI. Add it to backend/.env or your shell environment.");
    process.exit(1);
}

// mongoose.connect(process.env.RESTREVIEWS_DB_URI,
//     {
//         useNewUrlParse: true,
//     }, () => {
//         console.log("Mongoose is connected");
//     });

MongoClient.connect(
    mongoUri,
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
