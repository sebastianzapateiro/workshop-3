import { get,deletee } from "../helpers/crud.js";
import { mostrar } from "../modules/mostrarJugos.js";

let template = document.querySelector("template").content;
let card = document.querySelector("#card");
let borrar = document.querySelectorAll(".btnBorrar");

const url = "http://localhost:3000/juices";

document.addEventListener("DOMContentLoaded", async()=> {
    const data = await get(url);
    mostrar(data,template,card);
});


document.addEventListener("click",({target})=>{
    
    if (target.classList.contains("btnBorrar")) {
        const id = target.id;
        console.log(id);
        deletee(`${url}/${id}`);
    }
});

