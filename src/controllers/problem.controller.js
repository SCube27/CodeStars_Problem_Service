const { StatusCodes } = require('http-status-codes');
const NotImplementedError = require('../errors/notImplemented.error');
const BadRequestError = require('../errors/badrequest.error');

function pingController(req, res, next) {
    return res.json({message : "Problem Controller is up!"});
}

function addProblem(req, res, next) {
    try {
        throw new NotImplementedError('addProblem');
    }
    catch(error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        throw new NotImplementedError('getProblem');
    }
    catch(error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        throw new NotImplementedError('getProblems');
    }
    catch(error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new NotImplementedError('deleteProblem');
    }
    catch(error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        throw new NotImplementedError('updateProblem');
    }
    catch(error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem, 
    getProblems,
    deleteProblem,
    updateProblem,
    pingController
}