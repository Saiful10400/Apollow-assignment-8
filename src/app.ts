// atfirst make a app wich is everything. and this will be run with the server module.
import express, { Application } from "express"
import cors from "cors"
import rootRouter from "./routes"


const app:Application=express()

// runn the root router.
app.use("/api",rootRouter)

app.use(cors())
app.use(express.json())





export default app