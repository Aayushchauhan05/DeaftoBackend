const QuizDao = require("../Dao/quiz.dao");

module.exports = class QuizService {
    constructor() {
        this.quizdao = new QuizDao();
    }

    async createQuiz(data) {
        console.log("create quiz service");
        return await this.quizdao.createQuiz(data);
    }

    async updateQuiz(quizId, updateData) {
        console.log("update quiz service");
        
        // Check if the quiz exists
        const existingQuiz = await this.quizdao.getQuizById(quizId);
        if (!existingQuiz) {
            throw new Error("Quiz Not Found");
        }

        // If it exists, update the quiz
        return await this.quizdao.updateQuiz(quizId, updateData);
    }

    async getAllQuizzes() {
        console.log("get all quizzes service");
        return await this.quizdao.getAllQuiz();
    }

    async getQuizById(quizId) {
        console.log("get quiz by id service");
        return await this.quizdao.getQuizById(quizId);
    }

    async deleteQuiz(quizId) {
        console.log("delete quiz service");
        
        // Check if the quiz exists
        const existingQuiz = await this.quizdao.getQuizById(quizId);
        if (!existingQuiz) {
            throw new Error("Quiz Not Found");
        }
        
        return await this.quizdao.deleteQuiz(quizId);
    }
};
