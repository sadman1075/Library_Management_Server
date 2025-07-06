import { model, Schema } from "mongoose"

const BorrowBookSchema = new Schema({
    Title: { type: String, required: true },
    Author: { type: String, required: true },
    Isbn: { type: String, required: true },
    Quantity: { type: Number, required: true },
    Date: { type: Date, required: true }

})
export const BorrowBookList = model("BorrowBookList", BorrowBookSchema)