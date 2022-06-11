const removeElementButtons =  document.querySelectorAll(".btn-outline-danger")

for (const button of removeElementButtons) {
    button.addEventListener("click", ()=>{
        button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()

    }) 
}
