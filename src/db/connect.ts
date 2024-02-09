import mongoose from 'mongoose';
let url = process.env.MONGO_URI;

mongoose
    .connect(url)
    .then(() => {
        console.log("Connected!!");
    })
    .catch((e) => {
        console.log(e);
    });

