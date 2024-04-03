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

async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched the Problem.",
            error: {},
            data: problem
        })
    }
    catch(error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully retrieved all Problems.",
            error: {},
            data: response
        });
    }
    catch(error) {
        next(error);
    }
}

async function deleteProblem(req, res, next) {
    try {
        const response = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully deleted the Problem!",
            error: {},
            data: response
        });
    }
    catch(error) {
        next(error);
    }
}

async function updateProblem(req, res, next) {
    try {
        const updateResponse = await problemService.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Updated the problem Successfully!",
            error: {},
            data: updateResponse
        });
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