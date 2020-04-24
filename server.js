let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

let app = express()
app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))// our static files 
app.use('/api', routes)// uses to connect to our app

let server = app.listen(process.env.PORT || 3000, function(){// creates our server and sets processig port to be 3000
    console.log("Express server running on port", server.address().port)// if it is running this will be shown
})