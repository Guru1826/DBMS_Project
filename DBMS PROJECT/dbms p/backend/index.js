import {app} from "./app.js";
import { connectDB } from "./data/database.js";

// app.get('/',(req,res)=>{
//     console.log(req.method)
//     res.send(`method is ${req.method}`)
// })

connectDB()

app.listen(4000,()=>{
    console.log("Server is listening on port 4000");
})