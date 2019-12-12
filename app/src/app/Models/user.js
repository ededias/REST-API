const mongoose = require('../../Database/index');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({

    name:{
        type: String,
        unique: false,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        unique: false,
        required: false,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UsersSchema.pre('save', async function(next) {

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();

});


const users = mongoose.model('Users', UsersSchema);

module.exports = users;
