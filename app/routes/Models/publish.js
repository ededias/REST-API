const mongoose  = require('../Database/index');

const BlogSpot = new mongoose.Schema({
    title :{
        type: String,
        unique: true,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Cad = mongoose.model('BlogSpot', BlogSpot);
module.exports = Cad;