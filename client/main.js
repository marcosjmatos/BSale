// const text = input.value
const resultado = document.querySelector(".products")
const container = document.querySelector(".container")
const removeElementButtons =  document.querySelectorAll(".btn-outline-danger")
const comprarButtons = document.querySelectorAll(".btn-primary")
// const tarjetaShopping = document.getElementsByClassName("tarjeta")
const divisa = "$"
let text
const URL = "http://localhost:3000/"



async function getProducts(text) {
    let elements = []
    text = input.value.toLowerCase()
    resultado.innerHTML = ""
    try {
        elements = await Loadelement(text)
    } catch (err) {
        console.log(err);
    }
    renderizarProductos(elements)
    if (resultado.innerHTML === "") {
        renderizarNoEncontrado()
    }
}
async function Loadelement(prod) {
        //hacer esto en el backend
    const res =await fetch(`${URL}products/${prod}`,{
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': "http://127.0.0.1:5500/",
        }
    })
    const data = res.json()
    return data
}

async function getProductsByCat(cat) {
    let elements = []
    resultado.innerHTML = ""
    try {
        elements = await loadedCategory(cat)
    } catch (err) {
        console.log(err);
    }
    renderizarProductos(elements)
    if (resultado.innerHTML === "") {
        renderizarNoEncontrado()
    }
}
async function loadedCategory(cat) {
        //hacer esto en el backend

    const res =await fetch(`${URL}category/products/${cat}`,{
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': "http://127.0.0.1:5500/",
        }
    })
    const data = res.json()
    return data
}
function removeElement(event) {
    const buttonClicked =  event.target
    buttonClicked.parent
}


// Botones de Categorias
const categoryButtons = document.querySelectorAll("#btncategory") 
const arrCategoryBtns = Array.from(categoryButtons)
for (let button of arrCategoryBtns) {

    const num = arrCategoryBtns.indexOf(button) + 1
    button.addEventListener("click", (e)=>{
        e.preventDefault()
        getProductsByCat(num)
    })
    
}

// MALO
for (const button of removeElementButtons) {
    button.addEventListener("click", ()=>{
        button.closest("card rounded-3 mb-4 tarjeta").remove()
    }) 
}


// Buscador
const input = document.querySelector("#formulario")
const buttonBuscar = document.querySelector("#boton")
if (buttonBuscar) {
    buttonBuscar.addEventListener("click",(e)=>{
        e.preventDefault()
        getProducts()
    })
}

//Genera las Tarjetas de los productos
function renderizarProductos(productos) {
    productos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-2');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add("card-title", "text-wrap");
        miNodoTitle.textContent = info.name;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', `${(info.url_image == null) || (info.url_image == '')  ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg" : info.url_image}`);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.price}${divisa}`;
        // Descuento
        const miNodoDescuento = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.discount}% OFF!`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Comprar';
        miNodoBoton.setAttribute('marcador', info.id);
        // miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoDescuento);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        resultado.appendChild(miNodo);
    });
}
function renderizarNoEncontrado() {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-2');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add("card-title", "text-wrap");
        miNodoTitle.textContent = "Producto no encontrado";
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', "https://media.istockphoto.com/vectors/curiosity-magnifying-glass-doodle-cartoon-with-question-marks-vector-id1029271926?s=2048x2048");
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodo.appendChild(miNodoCardBody);
        resultado.appendChild(miNodo);
}
