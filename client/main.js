const input = document.querySelector("#formulario")
const buttonBuscar = document.querySelector("#boton")
const resultado = document.querySelector(".products")
const form = document.querySelector("#form")
const container = document.querySelector(".container")
const categoryButtons = document.querySelectorAll("#btncategory") 
const arrCategoryBtns = Array.from(categoryButtons)
const removeElementButtons =  document.querySelectorAll(".btn-outline-danger")
const comprarButtons = document.querySelectorAll(".btn-primary")
const tarjetaShopping = document.getElementsByClassName("tarjeta")
const URL = "http://localhost:3000/"

console.log(tarjetaShopping);


async function getProducts(text) {
    let elements = []
    text = input.value.toLowerCase()
    resultado.innerHTML = ""
    try {
        elements = await Loadelement(text)
    } catch (err) {
        console.log(err);
    }
    for (let element of elements) {
        const elementName = element.name.toLowerCase()
        if (text === "") {
            return
        } if(elementName.indexOf(text) !== -1) {
            resultado.innerHTML += 
            `<div class="card" style="width: 18rem">
            <img src=" ${ (element.url_image == null) || (element.url_image == '')  ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg" : element.url_image}" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-wrap">${element.name}</h5>
              <p class="card-text">
                <br> Precio: ${element.price} $ <br/>
                <br>Sale!: ${element.discount}% OFF <br/>
              </p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>`
        }
    }
    if (resultado.innerHTML === "") {
        resultado.innerHTML +=
        `<div class="card" style="width: 18rem">
            <img src="https://media.istockphoto.com/vectors/curiosity-magnifying-glass-doodle-cartoon-with-question-marks-vector-id1029271926?s=2048x2048" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-wrap" ><b>No hay publicaciones que coincidan con tu búsqueda</b></h5>
            </div>
          </div>`
    }
}
async function Loadelement(prod) {
        //hacer esto en el backend
    const res =await fetch(`${URL}products/${text}`,{
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
    for (let element of elements) {
            //hacer esto en el backend

        resultado.innerHTML +=
        `<div class="card" style="width: 18rem">
        <img src=" ${ (element.url_image == null) || (element.url_image == '')  ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg" : element.url_image}" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
        <h5 class="card-title text-wrap">${element.name}</h5>
        <p class="card-text">
            <br> Precio: ${element.price} $ <br/>
            <br>Sale!: ${element.discount}% OFF <br/>
        </p>
        <a href="#" class="btn btn-primary">Comprar</a>
        </div>
        </div>`
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


for (let button of arrCategoryBtns) {
    const num = arrCategoryBtns.indexOf(button) + 1
    button.addEventListener("click", (e)=>{
        e.preventDefault()
        getProductsByCat(num)
    })
    
}

function buscarElement() {
    buttonBuscar.addEventListener("click", (e)=>{
        e.preventDefault()
        console.log("hola");
    })
}


function removeElement(event) {
    const buttonClicked =  event.target
    buttonClicked.parent
}


for (const button of removeElementButtons) {
    button.addEventListener("click", ()=>{
        button.closest("tarjeta").remove()
    }) 
}


