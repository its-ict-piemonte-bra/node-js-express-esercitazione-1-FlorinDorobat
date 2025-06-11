import { Request, Response } from "express";
import path from "path";


/**
 * Sends back a response from the server saying "***"
 * @param request The request object
 * @param response the response object
 */
export function sayCiaone(request: Request, response: Response){
    response.send("Ciao");
}


/**
 * Sends back a status response from the server
 * @param request The request object
 * @param response the response object
 */
export function status(request: Request, response: Response){
        const statusResponse = {
        status: "ok",
    }

    response.json(statusResponse);
}


