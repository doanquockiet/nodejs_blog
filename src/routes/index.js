const newRouter = require('./new');
const siteController = require('./site');
const coursesController = require('./courses');

function route(app) {
  app.use('/news', newRouter);
  app.use('/courses', coursesController);
  app.use('/', siteController);
}

module.exports = route;
