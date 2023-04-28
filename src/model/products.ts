import { Schema, model } from "mongoose";

const ProductsSchema = new Schema({
    product_name: {
        required: true,
        type: String
    },
    product_description: {
        required: false,
        type: String
    },
    images: {
        required: true,
        type: Array
    },
    display_image: {
        required: true,
        type: String
    },
    built_by: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        default: 0.0,
        type: Number
    },
    Price: {
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
