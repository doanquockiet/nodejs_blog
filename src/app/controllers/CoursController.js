const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
  // [GET] /courses/ show
  async show(req, res, next) {
    try {
      const course = await Course.findOne({ slug: req.params.slug });
      res.render('courses/show', { course: mongooseToObject(course) });
    } catch (error) {
      next(error);
    }
  }
    // [GET] /courses/create
  async create(req, res, next) {
    try {
      res.render('courses/create');
    } catch (error) {
      next(error);
    }
  }

  // [POST] /courses/store
  async store(req, res, next) {
    try {
    //  res.json(req.body);
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const courese = new Course(formData);
    courese.save()
      .then(() => res.redirect('/'))
      .catch (error => next(error));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CourseController();
