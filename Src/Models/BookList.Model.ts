import { model, Schema } from "mongoose";


const BookListSchema = new Schema({
    Title: { type: String, required: true },
    Author: { type: String, required: true },
    Genre: { type: String, required: true },
    Isbn: { type: String, required: true },
    Copies: { type: Number, required: true },
    Availability: { type: String, enum: ["Yes", "No"], required: true },
    Action: {}
})



export const BookList = model("BookList", BookListSchema)
