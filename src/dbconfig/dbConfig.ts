import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.db_url!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Mongo connected');
        })

        connection.on('error', (err) => {
            console.log('Error in mongo' + err);
            process.exit();
        })
    } catch (error)
    {
        console.log(error);
    }
}