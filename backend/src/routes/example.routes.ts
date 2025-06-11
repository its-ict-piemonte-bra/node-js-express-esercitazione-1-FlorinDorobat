import { Router } from "express";

import { sayCiaone, status } from "../controllers/example.controller";

import { echo, length, palindrome, odd, doubled, test, test2 } from "../controllers/esercizio1";

const exampleRouter = Router();


exampleRouter.get("/", sayCiaone);
exampleRouter.get("/status", status);

exampleRouter.get("/echo", echo);
exampleRouter.get("/words/:parola/length", length);
exampleRouter.get("/words/:parola/palindrome", palindrome);
exampleRouter.get("/numbers/:n/odd", odd);
exampleRouter.get("/numbers/:n/doubled", doubled);

exampleRouter.get("/testing/:test", test);
exampleRouter.get("/testing", test2);



//aggiungere alla seguente rest api le seguenti funzionalita
//esercizi-mvc 
//get ***/echo?msg=.. {"msg": "messaggio"}
//get ***/words/:parola/length {"word" :"<parola>", "length": n}
//get ***/words/:parola/palindrome
//get ***/numbers/:n/odd
//get ***/numbers/:n/doubled

export { exampleRouter };