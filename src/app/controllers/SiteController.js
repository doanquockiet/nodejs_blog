const Course = require('../models/Course');

class SiteController {
  // [GET] /
  async home(req, res, next) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      res.status(400).json({ error: 'An error occurred', details: err });
    }
  }

  // [GET] /search
  search(req, res) {
    res.send('search');
  }
}

module.exports = new SiteController();
