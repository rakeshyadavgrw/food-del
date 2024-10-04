import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"


//app config
const app= express()
const port = 4000

  //middleware
app.use(express.json())
app.use(cors())
 
// DB connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))

app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",()=>{res.send("api working")}) 
app.listen(port,()=>{
  console.log(`server running at port ${port}`)
})