import {Schema, model} from "mongoose";

const ProductsSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    images: {
        required: true,
        type: Array
    },
    builtBy: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        default: 0.0,
        type: Number
    },
    tags: {
        required: true,
        default: [],
        type: Array
    },
    repository: {
        required: true,
        type: String
    }
})

const Products = model('Products', ProductsSchema)

export {
    Products 
}
