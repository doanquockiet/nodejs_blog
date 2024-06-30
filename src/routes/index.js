const newRouter = require('./new')
const siteController = require('./site')

function route (app) {
        app.use('/news', newRouter)

        app.use('/', siteController)
 
}

module.exports = route