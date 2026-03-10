import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";
import ReviewsCtrl from "./reviews.controller.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.route("/")
    .get(asyncHandler(RestaurantsCtrl.apiGetRestaurants));

router.route("/cuisines")
    .get(asyncHandler(RestaurantsCtrl.apiGetRestaurantCuisines));

router.route("/:id")
    .get(asyncHandler(RestaurantsCtrl.apiGetRestaurantById));

router.route("/:id/reviews")
    .post(asyncHandler(ReviewsCtrl.apiPostReview));

export default router;
