let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){
    res.json( { "message": 'Hello world lets program an app!' } ) // This is our displayed message
})

module.exports = router 