import express, { Request, Response } from "express";

//importiamo il router "example", definito nel
//file "./routes/example.routes.ts"
import { exampleRouter } from "./routes/example.routes";

const app = express();
const port = 3000;



//aggiungiamo il router "example" al nostro server express
app.use(exampleRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
