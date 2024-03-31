const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFoundError extends BaseError {
    constructor(request, details) {
        super(`NotFoundError`, StatusCodes.NOT_FOUND, `Not found the source for request ${request}`, details);
    }
}

module.exports = NotFoundError;