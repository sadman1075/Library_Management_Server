import express from "express"
import { BorrowBookList } from "../Models/BorrowBookModal";

export const BorrowBookRoutes = express.Router()

BorrowBookRoutes.get("/", async (req, res) => {
    const BorrowBooks = await BorrowBookList.find()
    res.send(BorrowBooks)
});
BorrowBookRoutes.post("/add-borrow-books", async (req, res) => {
    const body = req.body;
    console.log(body);
    const addBorrowBooks = await BorrowBookList.create(body)
    res.send(addBorrowBooks)
});