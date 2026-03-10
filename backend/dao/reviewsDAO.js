import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("reviews")
        } catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addReview(restaurantId, user, review, date) {
        const reviewDoc = {
            name: user.name,
            user_id: user.id,
            date: date,
            text: review,
            restaurant_id: new ObjectId(restaurantId),
        };

        return reviews.insertOne(reviewDoc);
    }

    static async updateReview(reviewId, userId, text, date) {
        return reviews.updateOne(
            { user_id: userId, _id: new ObjectId(reviewId) },
            { $set: { text: text, date: date } },
        );
    }

    static async deleteReview(reviewId, userId) {
        return reviews.deleteOne({
            _id: new ObjectId(reviewId),
            user_id: userId,
        });
    }
}
