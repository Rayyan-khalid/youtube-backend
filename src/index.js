// require('dotenv').configDotenv({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env    '
})

// connectdb calls from the db/index.js
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!!", err);
    
})

/*
import express from "express"
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error);
        throw err        
    }
})()
*/