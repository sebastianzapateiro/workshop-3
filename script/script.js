



const postElement = async (url,value,categorie) => {

    Swal.fire({
        title: "¿Seguro deseas agregar este elemento?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: 'Sí, ¡Quiero agregarlo!'
    }).then( async (result) => {
        if (result.isConfirmed) {
            try {
                await fetch( `${url}/${categorie}`, {
                    method: 'POST',
                    body: JSON.stringify(value),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                } );
            } catch ( err ) {
                console.log( err );
            };
        }
    })
};



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
    
    postElement("http://localhost:4000",u,"juices");

})



