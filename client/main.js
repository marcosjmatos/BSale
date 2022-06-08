const input = document.querySelector("#formulario")
const search = document.querySelector("#boton")
const resultado = document.querySelector(".products")
const form = document.querySelector("#form")
const container = document.querySelector(".container")
const categoryButtons = document.querySelectorAll("#btncategory") 
const arrCategoryBtns = Array.from(categoryButtons)
const URL = "http://localhost:3000/"

async function getProducts(func) {
    let elements = []
    resultado.innerHTML = ""
    try {
        elements = await func
    } catch (err) {
        console.log(err);
    }
    const texto = input.value.toLowerCase()
    for (let element of elements) {
        const elementName = element.name.toLowerCase()
        if (texto === "") {
            return
        } if(elementName.indexOf(texto) !== -1) {
            resultado.innerHTML += 
            `<div class="card" style="width: 18rem">
            <img src=" ${ (element.url_image == null) || (element.url_image == '')  ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg" : element.url_image}" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
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
              <h5 class="card-title"><b>No hay publicaciones que coincidan con tu búsqueda</b></h5>
            </div>
          </div>`
    }
}
async function Loadelement() {
    const res =await fetch(`${URL}products`,{
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
        resultado.innerHTML +=
        `<div class="card" style="width: 18rem">
        <img src=" ${ (element.url_image == null) || (element.url_image == '')  ? "https://i.pinimg.com/564x/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.jpg" : element.url_image}" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">
            <br> Precio: ${element.price} $ <br/>
            <br>Sale!: ${element.discount}% OFF <br/>
        </p>
        <a href="#" class="btn btn-primary">Comprar</a>
        </div>
        </div>`
    }
    console.log("hola");
}


  


async function loadedCategory(cat) {
    const res =await fetch(`${URL}category/product/${cat}`,{
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': "http://127.0.0.1:5500/",
        }
    })
    const data = res.json()
    console.log("chao");
    return data

}

search.addEventListener("click", (e)=>{
    e.preventDefault()
    getProducts(Loadelement())
})

for (let button of arrCategoryBtns) {
    const num = arrCategoryBtns.indexOf(button) + 1
    button.addEventListener("click", (e)=>{
        e.preventDefault()
        getProductsByCat(num)
    })

}