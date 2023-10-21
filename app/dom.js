const menuList = ["About Us", "Book Online", "Weight Loss Programs", "Real Patient Stories", "Locations", "Blog", "Shop", "Subscriptions",  ]

for (let i = 0; i < menuList.length; i++) {
   const navbarDesktop = document.getElementById("navbar-desktop")
  // const navbarMobile = document.getElementById("navbar-mobile")
   const item = document.createElement("a")
   item.innerText = menuList[i]
   item.classList.add("menu-item")
    item.setAttribute("href","")
    navbarDesktop.appendChild(item)
 //   navbarMobile.appendChild(item)
}

for (let i = 0; i < menuList.length; i++) {

   const navbarMobile = document.getElementById("navbar-mobile")
    const item = document.createElement("a")
    item.innerText = menuList[i]
    item.classList.add("menu-item")
     item.setAttribute("href","")

    navbarMobile.appendChild(item)
 }