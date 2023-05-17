import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb+srv://iris_rec:iris_rec@cluster0.aqnwcgv.mongodb.net/?retryWrites=true", {
      dbName: "backend_db",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};