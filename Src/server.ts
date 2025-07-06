import { Server } from "http"
import mongoose from "mongoose";
import app from "./app";

const port = 5000;
let server: Server;


async function main() {
    try {
        await mongoose.connect('mongodb+srv://LibraryManagementDb:LibraryManagementDb@cluster0.62b40ek.mongodb.net/LibraryManagementDb?retryWrites=true&w=majority&appName=Cluster0');
        server = app.listen(port, () => {
            console.log(`the app is listening port ${port}`);
        })

    }

    catch {

    }

}

main()