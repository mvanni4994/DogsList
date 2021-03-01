require("dotenv").config()
const express = require('express');
const exphbs = require('express-handlebars');
const htmlRouter = require('./routes/html-routes.js');
const ownerRouter = require('./routes/owner-api-routes.js');
const apiRouter = require('./routes/post-api-routes.js');
const s3Router = require('./routes/s3-api-routes.js')
const fileUpload = require('express-fileupload')
    // Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8080;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp'
}))

// Static directory
app.use(express.static('public'));
app.use(express.static('views/assets')); 

// Invoke routes
htmlRouter(app);
ownerRouter(app);
apiRouter(app);
s3Router(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

});