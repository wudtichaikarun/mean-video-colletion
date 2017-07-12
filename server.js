const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./config/mongoose');
const fs = require('fs');
const bodyParsr = require('body-parser');

import auth from './middleware/auth'
//const passport = require('passport');

//for call folder app
function setupRoutes(app){
    const APP_DIR = `${__dirname}/app`
    const features = fs.readdirSync(APP_DIR).filter(
        file => fs.statSync(`${APP_DIR}/${file}`).isDirectory()
    )

    features.forEach(feature => {
        const router = express.Router()
        const routes = require(`${APP_DIR}/${feature}/routes.js`)

        routes.setup(router)
        app.use(`/api/${feature}`, router)
    })
}

export function setup () {
    const db = mongoose();
    const port = 3000;
    const app = express()

   

    app.use(express.static(path.join(__dirname, 'public')))
    app.use(auth)
    app.use(bodyParsr.urlencoded({extended: true}))
    app.use(bodyParsr.json())

    //Passport Middleware
    // app.use(passport.initialize());
    // app.use(passport.session());
    // require('./app/users/passport')(passport);

    setupRoutes(app)
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'))
    })

    app.listen(port, function(){
        console.log("server running on localhost:" + port);
    })
}