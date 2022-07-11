//подключение зависимостей
const express = require('express');
// настройка приложения
const app = express();
app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
//routing - маршрутизация
const r_intro = require('./routes/r_intro.js');
const r_feeds = require('./routes/r_feeds.js');
const r_new_feed = require('./routes/r_new_feed.js');

app.use(['/intro','/'], r_intro);
app.use('/feeds', r_feeds);
app.use('/new_feed', r_new_feed);
// запуск приложения
app.listen(3000, "localhost", () => console.log(`--> to stop: Ctrl+C`));
