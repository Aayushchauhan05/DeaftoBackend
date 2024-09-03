const CourseDao = require("../Dao/course.dao");

module.exports = class CourseService {
  constructor() {
    this.courseDao = new CourseDao();
  }

  // Service to create a new course
  async createCourse(data) {
    console.log("Creating a new course...");
    return await this.courseDao.createCourse(data);
  }

  // Service to update a course
  async updateCourse(courseId, update) {
    console.log("Updating the course...");
    return await this.courseDao.updateCourse(courseId, update);
  }

  // Service to get all courses
  async getAllCourses() {
    console.log("Fetching all courses...");
    return await this.courseDao.getAllCourses();
  }

  // Service to get a course by ID
  async getCourseById(courseId) {
    console.log("Fetching the course by ID...");
    return await this.courseDao.getCourseById(courseId);
  }

  // Service to delete a course
  async deleteCourse(courseId) {
    console.log("Deleting the course...");
    return await this.courseDao.deleteCourse(courseId);
  }
};
