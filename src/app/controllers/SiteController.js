class SiteController {
    //[GET] /

    home(req, res){
        res.render('home')
    }
    //[GET] /search

    search(req, res){
       res.send('search')
    }
}

module.exports = new SiteController