import http from "../http-common";

class RestaurantDataService {
    getAll(page = 0) {
        return http.get(`/restaurants?page=${page}`);
    }

    get(id) {
        return http.get(`/restaurants/${id}`);
    }

    find(query, by = "name", page = 0) {
        return http.get(`/restaurants?${by}=${query}&page=${page}`);
    }

    createReview(restaurantId, data) {
        const { user_id: userId, ...payload } = data;
        return http.post(`/restaurants/${restaurantId}/reviews`, payload, {
            headers: { "x-user-id": userId },
        });
    }

    updateReview(reviewId, data) {
        const { user_id: userId, ...payload } = data;
        return http.put(`/reviews/${reviewId}`, payload, {
            headers: { "x-user-id": userId },
        });
    }

    deleteReview(id, userId) {
        return http.delete(`/reviews/${id}`, {
            headers: { "x-user-id": userId },
        });
    }

    getCuisines() {
        return http.get(`/restaurants/cuisines`);
    }

}

export default new RestaurantDataService();
