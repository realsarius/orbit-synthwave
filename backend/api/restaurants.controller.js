import RestaurantsDAO from "../dao/restaurantsDAO.js"
import HttpError from "../errors/httpError.js";
import { parsePagination, parseRestaurantFilters, validateObjectId } from "../validation/requestValidators.js";

export default class RestaurantsController {
    static async apiGetRestaurants(req, res, next) {
        const { page, restaurantsPerPage } = parsePagination(req.query);
        const filters = parseRestaurantFilters(req.query);

        const { restaurantsList, totalNumRestaurants } = await RestaurantsDAO.getRestaurants({
            filters,
            page,
            restaurantsPerPage,
        });

        const response = {
            restaurants: restaurantsList,
            page,
            filters,
            entries_per_page: restaurantsPerPage,
            total_results: totalNumRestaurants,
        };

        res.status(200).json(response);
    }

    static async apiGetRestaurantById(req, res, next) {
        const id = validateObjectId(req.params.id, "restaurant id");
        const restaurant = await RestaurantsDAO.getRestaurantByID(id);

        if (!restaurant) {
            throw new HttpError(404, "Restaurant not found");
        }

        res.status(200).json(restaurant);
    }

    static async apiGetRestaurantCuisines(req, res, next) {
        const cuisines = await RestaurantsDAO.getCuisines();
        res.status(200).json(cuisines);
    }
}
