import { Request, Response } from "express";

export function echo(request: Request, response: Response){
    const message = request.query["msg"];
    if(!message){
        const errorMessage = {
            error: "msg parameter is required"
        }
        response.status(400);
        response.json(errorMessage);
    }
    else{
        response.json( { messaggio: message } );

    }
}


export function length(request: Request, response: Response){
    const word = request.params.parola;

    if(!word){
        const errorMessage = {
            error: "word parameter is required"
        }
        response.status(400);
        response.json(errorMessage);
    }
    else{
        response.json( { word : word ,  length: word.length } );

    }
}


export function palindrome(request: Request, response: Response){
    const parola = request.params.parola;
    let palindrome = true;
    
    for(let i=0;i<parola.length;i++){
        if(parola[i] != parola[parola.length-i-1]){
            palindrome = false;
        }

    }

    response.json(palindrome)

}

export function odd(request: Request, response: Response){
    let num = parseInt(request.params.n) || null;
    if(num != null){
        response.json(! (num %2 == 0) );
    }else{
        response.status(400).json( "Invalid params" );
    }
}


export function doubled(request: Request, response: Response){
    let num = parseInt(request.params.n) || null;
    if(num != null){
        response.json( num*2 );
    }else{
        response.status(400).json( "Invalid params" );
    }
}




export function test(request: Request, response: Response){
    response.json( request.params.test );

}


export function test2(request: Request, response: Response){
    response.json( request.query.test );

}