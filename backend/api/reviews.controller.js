import ReviewsDAO from "../dao/reviewsDAO.js"
import HttpError from "../errors/httpError.js";
import {
    getUserIdFromRequest,
    validateObjectId,
    validateRequiredString,
} from "../validation/requestValidators.js";

export default class ReviewsController {
    static async apiPostReview(req, res, next) {
        const restaurantId = validateObjectId(req.params.id, "restaurant id");
        const reviewText = validateRequiredString(req.body.text, "text", 2000);
        const userId = getUserIdFromRequest(req);
        const userName = validateRequiredString(req.body.name, "name", 120);

        const reviewResponse = await ReviewsDAO.addReview(
            restaurantId,
            { id: userId, name: userName },
            reviewText,
            new Date(),
        );

        if (!reviewResponse.acknowledged) {
            throw new HttpError(500, "Failed to create review");
        }

        res.status(201).json({ status: "success", review_id: reviewResponse.insertedId });
    }

    static async apiUpdateReview(req, res, next) {
        const reviewId = validateObjectId(req.params.id, "review id");
        const userId = getUserIdFromRequest(req);
        const text = validateRequiredString(req.body.text, "text", 2000);

        const reviewResponse = await ReviewsDAO.updateReview(
            reviewId,
            userId,
            text,
            new Date(),
        );

        if (reviewResponse.matchedCount === 0) {
            throw new HttpError(404, "Review not found or user is not the owner");
        }

        res.status(200).json({ status: "success" });
    }

    static async apiDeleteReview(req, res, next) {
        const reviewId = validateObjectId(req.params.id, "review id");
        const userId = getUserIdFromRequest(req);

        const reviewResponse = await ReviewsDAO.deleteReview(
            reviewId,
            userId,
        );

        if (reviewResponse.deletedCount === 0) {
            throw new HttpError(404, "Review not found or user is not the owner");
        }

        res.status(204).send();
    }
}
