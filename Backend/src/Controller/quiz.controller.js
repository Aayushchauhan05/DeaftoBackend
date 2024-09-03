const { notFound, success, serverError } = require("../constant/status.constant.js");
const QuizService = require("../Services/quiz.service");

module.exports = class QuizController {
    constructor() {
        this.quizservices = new QuizService();
    }

    // Create a new quiz
    createQuiz = async (req, res) => {
        try {
            console.log("Controller->quiz.controller->createQuiz");
            const data = await this.quizservices.createQuiz(req.body);
            return res.status(success).send(data);
        } catch (error) {
            console.log(error, "error in creating quiz");
            return res.status(serverError).send({ message: "Internal server error" });
        }
    }

    // Update an existing quiz
    updateQuiz = async (req, res) => {
        try {
            console.log("Controller->quiz.controller->updateQuiz");
            const data = await this.quizservices.updateQuiz(req.params.id, req.body);
            return res.status(success).send(data);
        } catch (error) {
            console.log(error, "error in updating quiz");
            if (error.message === "Quiz Not Found") {
                return res.status(notFound).send({ message: "Quiz not found" });
            } else {
                return res.status(serverError).send({ message: "Internal server error" });
            }
        }
    }

    // Get all quizzes
    getAllQuizzes = async (req, res) => {
        try {
            console.log("Controller->quiz.controller->getAllQuizzes");
            const data = await this.quizservices.getAllQuizzes();
            return res.status(success).send(data);
        } catch (error) {
            console.log(error, "error in getting all quizzes");
            return res.status(serverError).send({ message: "Internal server error" });
        }
    }

    // Get a quiz by ID
    getQuizById = async (req, res) => {
        try {
            console.log("Controller->quiz.controller->getQuizById");
            const data = await this.quizservices.getQuizById(req.params.id);
            if (!data) {
                return res.status(notFound).send({ message: "Quiz not found" });
            }
            return res.status(success).send(data);
        } catch (error) {
            console.log(error, "error in getting quiz by id");
            return res.status(serverError).send({ message: "Internal server error" });
        }
    }

    // Delete a quiz by ID
    deleteQuiz = async (req, res) => {
        try {
            console.log("Controller->quiz.controller->deleteQuiz");
            const data = await this.quizservices.deleteQuiz(req.params.id);
            if (!data) {
                return res.status(notFound).send({ message: "Quiz not found" });
            }
            return res.status(success).send({ message: "Quiz deleted successfully" });
        } catch (error) {
            console.log(error, "error in deleting quiz");
            return res.status(serverError).send({ message: "Internal server error" });
        }
    }
};
