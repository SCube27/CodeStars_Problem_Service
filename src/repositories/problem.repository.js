const { NotFoundError } = require('../errors');
const { Problem } = require('../models/index');

class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title : problemData.title,
                description : problemData.description,
                testCases : (problemData.testCases) ? problemData.testCases : [],
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
}

module.exports = ProblemRepository; 