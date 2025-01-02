import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    fname:{
        type: String,
    },
    lname:{
        type: String,
    },
    position:{
        type: String,
    },
    dept:{
        type: String,
    },
    email:{
        type: String,
    },
    year:{
        type: String,
    },
    idNumber:{
        type:String
    },
    image:{
        type: String,
    }

})

export const User = mongoose.model('User', userSchema);