const nav = document.getElementById("nav")
const section = document.querySelector("section")
const body = document.querySelector("body")
function openNav(){
if(nav.style.display = "none"){
    nav.style.display = "flex"
    nav.style.flexDirection = "column"
    section.style.display = "none"
    body.style.height="100vh"
    body.style.overflow="hidden"
}
}

function closeNav(){
    if(nav.style.display = "flex"){
        nav.style.display = "none"
        section.style.display = "flex"
        body.style.height="auto"
        body.style.overflow="visible"
    }
}