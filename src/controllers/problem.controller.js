const { NotImplementedError } = require('../errors/index');
const { ProblemService } = require('../services/index');
const { ProblemRepository } = require('../repositories/index');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingController(req, res, next) {
    return res.json({message : "Problem Controller is up!"});
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a new Problem.",
            error: {},
            data: newProblem,
        });
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