import "dotenv/config";

import { OpenAI } from "openai";


const client = OpenAI(process.env.OPENAI_API_KEY);



async function init(){
const result =  await client.embeddings.create({
    model:"text-embedding-3-small",
    input:"I love to visit indian cities",
    encoding_format:"float"
})

}

init