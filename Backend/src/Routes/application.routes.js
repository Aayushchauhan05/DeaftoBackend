const express = require("express");
const UserCourseApplicationController = require("../Controller/userCourseApplication.controller");

const router = express.Router();
const applicationController = new UserCourseApplicationController();

// Route to apply for a course
router.post("/applications", applicationController.applyForCourse);

// Route to update the status of an application
router.put("/applications/:id/status", applicationController.updateApplicationStatus);

// Route to get all applications by user ID
router.get("/applications/user/:userId", applicationController.getUserApplications);

// Route to get all applications for a specific course
router.get("/applications/course/:courseId", applicationController.getCourseApplications);

// Route to get a specific application by ID
router.get("/applications/:id", applicationController.getApplicationById);

module.exports = router;
