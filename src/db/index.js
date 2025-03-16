import mongoose from "mongoose";
import 'dotenv/config'
import express from "express";
import { DB_NAME } from "../constants.js";


const app = express()


export const DBconnect = async () => {
      try {
         const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
         console.log(`MONGODB CONNECTED! DB HOST: ${connectionInstance.connection.host}`)
         
      } catch (error) {
         console.error("mongoDB connection error")
         process.exit(1)
      }
   }