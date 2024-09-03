const express = require("express");
const CourseController = require("../Controller/course.controller");

const router = express.Router();
const courseController = new CourseController();

// Route to create a new course
router.post("/courses", courseController.createCourse);

// Route to update an existing course by ID
router.put("/courses/:id", courseController.updateCourse);

// Route to get all courses
router.get("/courses", courseController.getAllCourses);

// Route to get a course by ID
router.get("/courses/:id", courseController.getCourseById);

// Route to delete a course by ID
router.delete("/courses/:id", courseController.deleteCourse);

module.exports = router;
