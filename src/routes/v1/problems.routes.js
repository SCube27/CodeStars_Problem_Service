const express = require('express');
const { problemController } = require('../../controllers/index');

const problemRouter = express.Router();

// Testing check
problemRouter.get('/ping', problemController.pingController);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.post('/', problemController.addProblem);

problemRouter.delete('/:id', problemController.deleteProblem);

problemRouter.put('/:id', problemController.updateProblem);

module.exports = problemRouter;