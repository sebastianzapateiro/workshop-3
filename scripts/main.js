import { get } from "../helpers/crud.js";
import { mostrar } from "../modules/mostrarJugos.js";

let template = document.querySelector("template").content;
let card = document.querySelector("#card");


const url = "http://localhost:3000/juices";

document.addEventListener("DOMContentLoaded", async()=> {
    const data = await get(url);
    mostrar(data,template,card);
});