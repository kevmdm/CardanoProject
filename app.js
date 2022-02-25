const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use("/public",express.static("public"));

const mainRoutes = require('./routes/main');
const router = require('./routes/main');

app.use(mainRoutes);
app.listen(3000);

module.exports = router;