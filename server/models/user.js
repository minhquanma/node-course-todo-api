const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: value => validator.isEmail(value),
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,

    },
    name: {
        type: String,
        required: true,
        default: 'Undefined',
        trim: true,
        minlength: 1
    },
    tokens : [{
        access: {
            type: String,
            requỉred: true
        },
        token: {
            type: String,
            required: true
        }
    }]    
});

UserSchema.methods.toJSON = function () {
    return _.pick(this.toObject(), ['_id', 'email', 'name']);
}
UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    // user.tokens.push()
    user.tokens = user.tokens.concat({access, token});

    return user.save().then(() => {
        return token;
    });
};
// User model
var User = mongoose.model('Users', UserSchema);

module.exports = {User}