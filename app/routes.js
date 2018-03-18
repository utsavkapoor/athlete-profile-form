module.exports = (app) => {
    app.route('/')
        .get(function(req, res) {
    		  res.sendFile(process.cwd() + '/public/index.html');
        })

    app.route('/list')
    .get((req,res) => {
        console.log("In All List");
    })

    app.route('/new')
    .post((req,res) => {
        console.log(req.body);
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
