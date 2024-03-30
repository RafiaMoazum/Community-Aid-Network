import { fileURLToPath } from 'url';
import path from 'path';
import Express from "express";
import cors from "cors";
import { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";
import causeRouter from "./router/causeRoute.js";
import registrationRouter from './router/registerationRoute.js'; 
import pendingApprovalRouter from './router/pendingApprovalRoute.js';
import signInRouter from './router/signinRoute.js';
import userRouter from './router/userRouter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = Express();
const port = 3000;

app.use(Express.json());
app.use(cors());

// Serve static files from the 'backend/uploads' directory
app.use('/uploads', Express.static(path.join(__dirname, '../uploads')));

connectDb();
dbInit().then(() => { console.log("DB Synced😀") });

app.use(pendingApprovalRouter);
app.use(causeRouter);
app.use(registrationRouter); 
app.use(signInRouter)
app.use(userRouter)

console.log('__dirname:', __dirname);
console.log('Joined path:', path.join(__dirname, 'uploads'));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Running successfully on port ${port}😀`);
});
