'use strict';

const Player = require('../config/schema.js');

module.exports = (app) => {
    app.route('/')
        .get(function(req, res) {
    		  res.sendFile(process.cwd() + '/public/index.html');
        })

    app.route('/list')
    .get((req,res) => {
        Player.find({}, (err,records) => {
            let data = {};

            records.forEach((record) => {
                data[record.username] = record;
            })
            res.send(data);
        });
    })

    app.route('/new')
    .post((req,res) => {
        console.log(req.body);
        let object = req.body;
        if(object.name && object.username && object.sports && object.nationality && object.dob){

            Player.check_username(object.username,(user) => {
                if(!user){
                    let db_entry = {
                        name:object.name,
                        username: object.username,
                        sports: object.sports,
                        nationality:object.nationality,
                        dob:new Date(object.dob).toISOString()
                    };
                    if(object.gender){
                        db_entry.gender=object.gender[0];
                    }
                    Player.create(db_entry, (err,record) => {
                        if(err){
                            console.log("Server Error:"+err);
                            res.status(500);
                            res.type('txt').send("Internal Server Error");
                        }
                        console.log("Added");
                        res.send({
                            username:record.username,
                            value:false
                        });
                    });
                } else{
                    console.log("I am here");
                    res.send({
                        username:object.username,
                        value:false
                    });
                }
            })

        }
    })

    app.route('/new/:username')
    .put((req,res) => {
        console.log(req.body);
    })

    // Respond not found to all the wrong routes
    app.use(function(req, res, next){
      res.status(404);
      res.type('txt').send('Not found');
    });

    // Error Middleware
    app.use(function(err, req, res, next) {
      if(err) {
        res.status(err.status || 500)
          .type('txt')
          .send(err.message || 'SERVER ERROR');
      }
    })
}
