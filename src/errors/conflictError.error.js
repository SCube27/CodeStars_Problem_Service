const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ConflictError extends BaseError {
    constructor(details) {
        super(`ConflictError`, StatusCodes.CONFLICT, `Conflicts present in request please check and try again`, details);
    }
}

module.exports = ConflictError;