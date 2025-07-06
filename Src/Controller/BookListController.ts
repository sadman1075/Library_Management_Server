import express from "express"
import { BookList } from "../Models/BookList.Model";

export const BookListRoutes = express.Router()


BookListRoutes.get("/", async (req, res) => {
    const Books = await BookList.find()
    res.send(Books)
});
BookListRoutes.get("/:id", async (req, res) => {
    const id = req.params.id;
    const Book = await BookList.findById(id)
    res.send(Book)
})


BookListRoutes.post("/add-books", async (req, res) => {
    const body = req.body;
    const addBooks = await BookList.create(body)
    res.send(addBooks)
});
BookListRoutes.delete("/delete-books/:id", async (req, res) => {
    const id = req.params.id;
    const deleteBooks = await BookList.findByIdAndDelete(id)
    res.send(deleteBooks)
});

BookListRoutes.put("/edit-books/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(body);
    const EditBooks = await BookList.findByIdAndUpdate(id, body)
    res.send(EditBooks)


})
BookListRoutes.put("/borrow-books/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const body = req.body;
    console.log(body);
    const borrowBooks = await BookList.findByIdAndUpdate(id, body)

    res.status(201).json({
        success: true,
        message: "Note updated Successfully",
        books: borrowBooks
    })


})




