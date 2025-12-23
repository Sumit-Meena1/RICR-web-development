async function getProducts() {
    try{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const productList = document.getElementById("pdcol");

        data.forEach(element => {
            const d = document.createElement("div");
            d.classList.add( "p-3");
            d.innerHTML= `
             <div class="chight border border-dark rounded shadow p-3 w-100 d-flex">
            <div class="w-25  rounded-2"><img src=${element.image} alt=${element.title} class="w-100 h-100 object-fit-contain rounded-2"></div>
            <div class="w-75  p-2">
                <div class="fw-bold fs-4">${element.title}</div>
                <div class="fw-semibold">${element.rating.rate}/5 (${element.rating.count})</div>
                <div class="fw-bold fs-5">${element.price*100}</div>
                <div class="mb-2">${element.description}</div>
                <div class="d-flex justify-content-center gap-3">
                    <button class="btn btn-outline-primary">Add tO Cart</button>
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
          </div>
            
            
            `;
            productList.appendChild(d);
        });
    }catch(error){
        console.log(error.msg);
        
    }
    
}
getProducts();