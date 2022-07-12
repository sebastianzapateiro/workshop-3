async function get( url ) {
    try {
        const resp = await fetch( url );
        const data = await resp.json();
        return data;

    } catch ( err ) {
        console.log(err);
    }
}

const deletee = async( url ) => {
    try {
        await fetch( url , { method: "DELETE" } );
    } catch ( err ) {
        alert( "Servidor no responde, intente mas tarde" );
        console.log( err );
    };
}



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


export {
    get,
    deletee,
    postElement
}