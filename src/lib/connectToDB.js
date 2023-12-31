const mongoose = require('mongoose');

// import mongoose from "mongoose"

const connection = {};

export const ConnectToDB = async () => {

 try{
    if(connection.isConnected){
        console.log("using existing connection");
        return;
    }
    const db = await  mongoose.connect(process.env.MONGO)
    connection.isConnected = db.connections[0].readyState;
 }catch(error){
    console.log(error)
    throw new Error(error);
 }
}