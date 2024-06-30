const handlebars = require('express-handlebars')
const express = require('express');
const morgan = require('morgan')
const app = express()
const port = 3000
const path = require('path');
const route = require('./routes')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
/// HTTP logger
// app.use(morgan('combined'))
/// template handlerbar
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.set('views',path.join(__dirname, 'resource/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})