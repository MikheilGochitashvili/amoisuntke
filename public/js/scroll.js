const ProductButton = document.getElementById("main-product-button")
const NavProductButton = document.getElementById("navigation-product-button")
const ScrollProductSection = document.getElementById("product-section")
const ServiceButton = document.getElementById("navigation-service-button")
const NewsButton = document.getElementById("navigation-news-button")
const BrandHistorySection = document.getElementById("brand-history-section")
const ContactButton = document.getElementById("navigation-button-contact")
const Footer = document.getElementById("footer")

ProductButton.addEventListener("click", ProductSection)
NavProductButton.addEventListener("click", ProductSection)
ServiceButton.addEventListener("click", BrandSection)
NewsButton.addEventListener("click", BrandSection)
ContactButton.addEventListener("click", FooterSection)

function FooterSection () {
    Footer.scrollIntoView({behavior: "smooth"})
}

function BrandSection () {
    BrandHistorySection.scrollIntoView({behavior: "smooth"})
}

function ProductSection () {
    ScrollProductSection.scrollIntoView({behavior: "smooth"})
}