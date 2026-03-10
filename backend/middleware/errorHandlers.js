import HttpError from "../errors/httpError.js";

export function notFoundHandler(req, res, next) {
    next(new HttpError(404, `Route not found: ${req.method} ${req.originalUrl}`));
}

export function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const response = {
        error: err.message || "Internal server error",
    };

    if (err.details && process.env.NODE_ENV !== "production") {
        response.details = err.details;
    }

    if (statusCode >= 500) {
        console.error(err);
    }

    res.status(statusCode).json(response);
}
