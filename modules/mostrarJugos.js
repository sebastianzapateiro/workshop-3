export function mostrar (data,template,card){
    card.innerHTML = '';
    
    data.forEach(data => {
        const {id,name,taste,price,image} = data;
        
        card.innerHTML += `
        <div id="${id}" class=" gap-2 flex flex-col justifi-center mx-10">
            <img class="w-24 h-48 self-center" src="${image}" alt="juices">
            <div class="mx-5 flex flex-col">
                <h2 class=" text-[#333232]">${name}</h2>
                <p class="text-xs">${taste}</p>
            </div>
            <div class="mx-5 flex gap-4 justify-between">
                <label class="flex font-semibold">$ <h2 id="h2${id}">${price}</h2></label>
                <button class="underline decoration-2 text-[#FF7E20] font-bold">Add to cart</button>
            </div>
            <button class="btnBorrar h-10 bg-[#FF7E20] w-24 place-self-center rounded-lg">
                    <h1 id="${id}" class=" btnBorrar font-semibold text-lg">BORRAR</h1>
            </button>
        </div>
        `;

        if(card.id == "imgcambiar"){
    
            const clone = document.importNode(template, true);
            card.appendChild(clone);
        }
    });
}