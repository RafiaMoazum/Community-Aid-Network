import Express from "express"
import { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";


const app = Express();
const port =3000;
app.use(Express.json())

connectDb;
dbInit().then( () => {console.log("DB Synced😀")})

app.get("/", (req,res) =>{
    res.send("Hello World")
})
app.listen(port, () =>{
    console.log(`Running successfully on port ${port}😀`)
})