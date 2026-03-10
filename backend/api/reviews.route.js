import express from "express";
import ReviewsCtrl from "./reviews.controller.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.route("/:id")
    .put(asyncHandler(ReviewsCtrl.apiUpdateReview))
    .delete(asyncHandler(ReviewsCtrl.apiDeleteReview));

export default router;
