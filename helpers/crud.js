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

export {
    get,
    deletee
}