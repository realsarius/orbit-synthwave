import mongodb from "mongodb";
import HttpError from "../errors/httpError.js";

const { ObjectId } = mongodb;

function assert(condition, message, details = null) {
    if (!condition) {
        throw new HttpError(400, message, details);
    }
}

export function validateObjectId(value, fieldName) {
    assert(typeof value === "string" && value.trim().length > 0, `${fieldName} is required`);
    assert(ObjectId.isValid(value), `${fieldName} must be a valid ObjectId`);
    return value;
}

export function validateRequiredString(value, fieldName, maxLength = 2000) {
    assert(typeof value === "string", `${fieldName} must be a string`);
    const normalized = value.trim();
    assert(normalized.length > 0, `${fieldName} cannot be empty`);
    assert(normalized.length <= maxLength, `${fieldName} must be at most ${maxLength} characters`);
    return normalized;
}

export function validateOptionalString(value, fieldName, maxLength = 2000) {
    if (typeof value === "undefined") {
        return undefined;
    }
    return validateRequiredString(value, fieldName, maxLength);
}

export function parsePagination(query) {
    const pageRaw = typeof query.page === "undefined" ? "0" : String(query.page);
    const perPageRaw = typeof query.restaurantsPerPage === "undefined" ? "20" : String(query.restaurantsPerPage);

    const page = Number.parseInt(pageRaw, 10);
    const restaurantsPerPage = Number.parseInt(perPageRaw, 10);

    assert(Number.isInteger(page) && page >= 0, "page must be a non-negative integer");
    assert(
        Number.isInteger(restaurantsPerPage) && restaurantsPerPage > 0 && restaurantsPerPage <= 100,
        "restaurantsPerPage must be between 1 and 100",
    );

    return { page, restaurantsPerPage };
}

export function parseRestaurantFilters(query) {
    const filters = {};

    if (typeof query.cuisine !== "undefined") {
        filters.cuisine = validateRequiredString(query.cuisine, "cuisine", 100);
    } else if (typeof query.zipcode !== "undefined") {
        filters.zipcode = validateRequiredString(query.zipcode, "zipcode", 20);
    } else if (typeof query.name !== "undefined") {
        filters.name = validateRequiredString(query.name, "name", 200);
    }

    return filters;
}

export function getUserIdFromRequest(req) {
    const userId = req.get("x-user-id");
    return validateRequiredString(userId, "user_id", 255);
}
