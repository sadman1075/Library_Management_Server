import express, { Application } from "express"
import cors from "cors"
import { BookListRoutes } from "./Controller/BookListController"
import { BorrowBookRoutes } from "./Controller/BorrowBookController"
const app: Application = express()


app.use(express.json())
app.use(cors())

app.use("/books", BookListRoutes)
app.use("/borrows", BorrowBookRoutes)

app.get("/", async (req, res) => {
    res.send("go go go")
})
export default app;