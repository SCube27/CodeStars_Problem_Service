const logger = require('../configs/logger.config');
const { NotFoundError } = require('../errors');
const { Problem } = require('../models/index');

class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title : problemData.title,
                description : problemData.description,
                testCases : (problemData.testCases) ? problemData.testCases : [],
                codeStubs : problemData.codeStubs,
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(problemID) {
        try {
            const problem = await Problem.findById(problemID);
            if(!problem) {
                logger.error(`Problem Repository: Problem with id ${problemID} is not found in the DB`);
                throw new NotFoundError('Problem', problemID);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblems() {
        try {
            const problems = await Problem.find({});
            return problems; 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(problemID) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(problemID);
            if(!deletedProblem) {
                logger.error(`Problem Repository: Problem with id ${problemID} is not found in the DB`);
                throw new NotFoundError('Problem', problemID);
            }
            return deletedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(problemID, updateData) {
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(problemID, {
                title: updateData.title,
                description: updateData.description,
                testCases: updateData.testCases
            });
            if(!updatedProblem) {
                logger.error(`Problem Repository: Problem with id ${problemID} is not found in the DB`);
                throw new NotFoundError('Problem', problemID);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository; 