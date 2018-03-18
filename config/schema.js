'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim:true
    },
    username: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    sports: {
        type: Array,
        required: true,
        trim:true
    },
    nationality: {
        type:String,
        required:true,
        trim:true
    },
    gender: {
        type:String,
        trim:true
    },
    dob: {
        type:String,
        required:true,
        trim:true
    }
});

schema.statics.check_username = (username,callback) =>{
    Player.findOne({username:username}, (err,User) => {
        if(err){
            console.log(err);
        }
        return callback(User);
    })
}

const Player = mongoose.model('Player',schema);
module.exports = Player;
