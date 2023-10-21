const hamburger = document.getElementById("hamburger")
const headerMobile = document.getElementById("header-mobile")
const close = document.getElementById("close")

function openMenu () {
  
  headerMobile.classList.remove("menu-off")
  headerMobile.classList.add("menu-on")
}

function closeMenu () {
  headerMobile.classList.remove("menu-on")
  headerMobile.classList.add("menu-off")

}

hamburger.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)



