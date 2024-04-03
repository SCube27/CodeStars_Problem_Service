const sanitizeMarkdown = require("../utils/markdownSanitizer")

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository
    }

    async createProblem(problemData) {
        problemData.description = sanitizeMarkdown(problemData.description); // Sanitizing the md first

        const problem = await this.problemRepository.createProblem(problemData); 
        return problem;
    }

    async getProblem(problemID) {
        const problem = await this.problemRepository.getProblem(problemID);
        return problem;
    }

    async getProblems() {
        const allProblems = await this.problemRepository.getProblems();
        return allProblems;
    }

    async deleteProblem(problemID) {
        const deletedProblem = await this.problemRepository.deleteProblem(problemID);
        return deletedProblem;
    }

    async updateProblem(problemID, updateData) {
        updateData.description = sanitizeMarkdown(updateData.description);

        const updatedProblem = await this.problemRepository.updateProblem(problemID, updateData);
        return updatedProblem;
    }
}

module.exports = ProblemService;