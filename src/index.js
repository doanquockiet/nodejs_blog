const handlebars = require('express-handlebars')
const express = require('express');
const morgan = require('morgan')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

/// HTTP logger
// app.use(morgan('combined'))
/// template handlerbar
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.set('views',path.join(__dirname, 'resource/views'));


app.get('/', (req, res) => {
 res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
 })
 
 app.get('/search', (req, res) => {
  console.log(req.query.q)
  res.render('search')
 })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})