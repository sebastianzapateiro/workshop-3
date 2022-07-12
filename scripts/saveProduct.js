import { postElement } from "../helpers/crud.js";


let elemento = document.querySelector(".formulario");

elemento.addEventListener("submit", e=>{
    e.preventDefault();

        let name = document.getElementById("title").value;
        let taste = document.getElementById("decription").value;
        let price = document.getElementById("precio").value;
        let image = document.getElementById("url").value;

    const u = {
        name,
        taste,
        price,
        image
    };

    console.log(u)
    
    postElement("http://localhost:3000",u,"juices");

})

