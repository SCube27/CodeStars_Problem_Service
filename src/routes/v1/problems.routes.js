const express = require('express');
const { ProblemController } = require('../../controllers/index');

const ProblemRouter = express.Router();

// Testing check
ProblemRouter.get('/ping', ProblemController.pingController);

ProblemRouter.get('/:id', ProblemController.getProblem);

ProblemRouter.get('/', ProblemController.getProblems);

ProblemRouter.post('/', ProblemController.addProblem);

ProblemRouter.delete('/:id', ProblemController.deleteProblem);

ProblemRouter.put('/:id', ProblemController.updateProblem);

module.exports = ProblemRouter