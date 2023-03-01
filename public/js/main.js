const ProductButton = document.getElementById("main-product-button")
const NavProductButton = document.getElementById("navigation-product-button")
const ScrollProductSection = document.getElementById("product-section")
const Images = document.querySelectorAll(".product-image")

ProductButton.addEventListener("click", ProductSection)
NavProductButton.addEventListener("click", ProductSection)

function ProductSection () {
    ScrollProductSection.scrollIntoView({behavior: "smooth"})
}

let number = 1;

Images.forEach((image) => {
    image.addEventListener("click", () => {
        number = Number(image.id)
        Carousel(number)
    })
})

setInterval(() => {
    number += 1
    if(number > 3){
        number = 1
    }
    Carousel(number)
}, 4400)

function Carousel (number) {
    for(let i = 0; i < Images.length; i++){
        Images[i].classList.remove("active")
    }
    for(let i = 0; i < Images.length; i++){
        if(Number(Images[i].id) === number){
            Images[i].classList.add("active")
        }
    }
}