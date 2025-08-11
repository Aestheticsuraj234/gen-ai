import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from 'js-tiktoken/ranks/o200k_base';


const enc = new Tiktoken(o200k_base);
const userQuery = "Hello world suraj from this side"
const tokens = enc.encode(userQuery);
console.log(tokens);


const inputToken = [
  13225, 2375,
   1512, 1255,
    591,  495,
   4307
];

const decoded = enc.decode(inputToken);
console.log(decoded);