const input = document.querySelector("#formulario")
const button = document.querySelector("#boton")
const resultado = document.querySelector(".products")
const form = document.querySelector("#form")
const container = document.querySelector(".container")
const URL = "http://localhost:3000/"

async function getProducts() {
    let elements = []
    resultado.innerHTML = ""
    try {
        elements = await Loadelement()
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
            <img src="https://e7.pngegg.com/pngimages/0/241/png-clipart-crying-frog-illustration-pepe-the-frog-internet-meme-humour-frog-leaf-animals.png" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title"><b>PRODUCTO NO ENCONTRADO</b></h5>
            </div>
          </div>`
    }
}

button.addEventListener("click", (e)=>{
    e.preventDefault()
    getProducts()
})
    

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

