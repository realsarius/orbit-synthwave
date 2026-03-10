import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";
import reviews from "./api/reviews.route.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandlers.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", restaurants);
app.use("/api/v1/reviews", reviews);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
