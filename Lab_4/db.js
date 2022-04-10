//Connect to mongodb

var mongoose = require('mongoose');

module.exports = mongoose.connect(
    "mongodb+srv://student:<password>@cluster0.rf6ku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    },
    err => {
        if (!err) {
            console.log("Connection succeeded")
        } else {
            console.log("Error in connection: " + err)
        }
    }
)

