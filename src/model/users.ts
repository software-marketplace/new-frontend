import { Schema, model } from "mongoose";

const UsersSchema = new Schema({
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    mobile: {
        required: true,
        type: String
    },
})

const Users = model('Users', UsersSchema)

export {
    Users
}
