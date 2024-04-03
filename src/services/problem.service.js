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

    async getProblems() {
        const allProblems = await this.problemRepository.getProblems();
        return allProblems;
    }
}

module.exports = ProblemService;