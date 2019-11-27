const mongoose = require('../Database/index');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({

    name:{
        type: String,
        unique: true,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Users.pre('save', async function(next) {

//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;
//     next();

// });


const users = mongoose.model('Users', UsersSchema);

module.exports = users;
