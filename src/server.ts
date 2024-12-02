import server, { Server } from "http"
import app from "./app"
import env from "./config/env"


const main_fn=()=>{
    try{
        const server:Server=app.listen(env.port,()=>{
            console.log(`server is runnig at http://localhost:${env.port}`)
        })
    } catch(err){
        console.log(err)
    }
}


main_fn()