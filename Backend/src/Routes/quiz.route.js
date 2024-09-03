const express = require("express");
const QuizController = require("../Controller/quiz.controller");

const router = express.Router();
const quizController = new QuizController();

// Route to create a new quiz
router.post("/quiz", quizController.createQuiz);

// Route to update an existing quiz by ID
router.put("/quiz/:id", quizController.updateQuiz);

// Route to get all quizzes
router.get("/quiz", quizController.getAllQuizzes);

// Route to get a quiz by ID
router.get("/quiz/:id", quizController.getQuizById);

// Route to delete a quiz by ID
router.delete("/quiz/:id", quizController.deleteQuiz);

module.exports = router;
