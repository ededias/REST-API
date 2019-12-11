const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/teste', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;