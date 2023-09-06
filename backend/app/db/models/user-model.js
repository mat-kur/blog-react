const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Nazwa użytkownika jest wymagana!"],
        minLength: [3, "Minimalna liczba znaków nazwy użytkownika to 3"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Podaj hasło!"],
        minLength: [6, "Minimalna liczba znaków hasła to 6"],
    },

    email: {
        type: String,
        required: [true, "Podaj adres email"],
        lowercase: true,
        trim: true,
        unique: true,
    },
    likes: {
        type: Number,
        default: 0,

    },
    date: {
        type: String,
    },

    isAdmin: {
        type: Number,
        default: 0
    },
    banned: {
        type: Number,
        default: 0
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    commentNumber: {
        type: Number,
        default: 0,
        ref: 'Comment'
    },
    avatar: {
        type: String,
        default: 'default-avatar.jpg'
    }
    ,
    warning: {
        type: Number,
        default: 0,
    }

});

// userSchema.plugin(mongoosePaginate)

userSchema.post('save', function (error,doc, next){
    if(error.code === 11000){
        error.errors = {
            email: {message: "Taki email jest już zajęty"},
            username: {message: "Taka nazwa użytkownika jest już zajęta"}
        }
    }
    next(error)
})

userSchema.pre('save', function (next){
    const user = this
    if (!user.isModified('password')) {
        return next()
    } else {
        const salt =  bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
        next()
    }
})

userSchema.methods = {
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password)
    }
}

const User = mongoose.model('User', userSchema )

module.exports = User