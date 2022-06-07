

/*
let fomulario = document.querySelector('#formulario');
let boton = document.querySelector('#boton');

let Filtrar = () => {
    console.log(fomulario.value);
}
*/

// Select Elements
/* const productsEl = document.querySelector(".products");
// remove product

renderProducts = () => {
    data.forEach((product) => {
    productsEl.innerHTML += `
        <div class="card" style="width: 18rem">
        <img src=" ${ (product.url_image == null) || (product.url_image == '')  ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg" : product.url_image}" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">
            <br> Precio: ${product.price} $ <br/>
            <br>Sale!: ${product.discount}% OFF <br/> 
          </p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
        `;
  });
};
renderProducts(); */

const link = "http://localhost:3000/products"

const htmlResponse = document.querySelector('.products');

//fetch data
fetch(link)
.then(response => response.json())
.then(data => {
    console.log(data);
    htmlResponse.innerHTML = '';
    data.forEach((product) => {
        htmlResponse.innerHTML += `
        <div class="card" style="width: 18rem">
        <img src=" ${ (product.url_image == null) || (product.url_image == '')  ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg" : product.url_image}" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">
            <br> Precio: ${product.price} $ <br/>
            <br>Sale!: ${product.discount}% OFF <br/>
            </p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
        </div>
        `;
    });
}
).catch(error => console.log(error));


// boton.addEventListener('click', Filtrar);
function getProducts() {
    fetch(link)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        htmlResponse.innerHTML = '';
        data.forEach((product) => {
            htmlResponse.innerHTML += `
            <div class="card" style="width: 18rem">
            <img src=" ${ (product.url_image == null) || (product.url_image == '')  ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg" : product.url_image}" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">
                <br> Precio: ${product.price} $ <br/>
                <br>Sale!: ${product.discount}% OFF <br/>
              </p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>

            `;
        });
    }
    ).catch(error => console.log(error));
}
