// DOM manipulation

//Navigation

const menuList = ["About Us", "Book Online", "Weight Loss Programs", "Real Patient Stories", "Locations", "Blog", "Shop", "Subscriptions",  ]

for (let i = 0; i < menuList.length; i++) {
   const navbarDesktop = document.getElementById("navbar-desktop")
   const item = document.createElement("a")
   item.innerText = menuList[i]
   item.classList.add("menu-item")
    item.setAttribute("href","")
    navbarDesktop.appendChild(item)
}

for (let i = 0; i < menuList.length; i++) {
   const navbarMobile = document.getElementById("navbar-mobile")
    const item = document.createElement("a")
    item.innerText = menuList[i]
    item.classList.add("menu-item")
     item.setAttribute("href","")
    navbarMobile.appendChild(item)
 }

 //FAQ

function openFaq (e) {
   console.log(e.target.id)

}

const faqs = [
   {
      name: "Why is it free?",
      state: false,
      id: "faq-subcontainer-0",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   }, 
   {
      name:  `Do I need this if I’ve had my yearly medical check?  What is the difference?`,
      state: false,
      id: "faq-subcontainer-1",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   }, 
   {
      name:  "Can I bring another person to the appointment?", 
      state: false,
      id: "faq-subcontainer-2",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   }, 
   {
      name:    "How long does it take?", 
      state: false,
      id: "faq-subcontainer-3",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   }, 
   {
      name:   "What if I have to cancel or if I’m not sure I’ll be able to make it?", 
      state: false,
      id: "faq-subcontainer-4",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   }, 
   {
      name:    "Do I need to bring anything with me?",  
      state: false,
      id: "faq-subcontainer-4",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   }, 
   {
      name:   "What if I don’t have insurance?",  
      state: false,
      id: "faq-subcontainer-5",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   }, 
   {
      name:   "Do the weight loss programs you offer work?",  
      state: false,
      id: "faq-subcontainer-6",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   },
   {
      name:   "What’s the catch?",   
      state: false,
      id: "faq-subcontainer-7",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   },
   {
      name:   "Will I have to exhaust myself in the gym to make it work?",   
      state: false,
      id: "faq-subcontainer-8",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   },
   {
      name:   "Where are you located?", 
      state: false,
      id: "faq-subcontainer-9",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit, lacinia ullamcorper phasellus cursus metus torquent fringilla, curabitur tristique varius blandit sociosqu molestie proin. Enim bibendum vivamus proin sed curabitur, torquent turpis et curae vulputate facilisis, malesuada semper velit fringilla. Duis tempor hac eget eros et egestas, potenti est curabitur mus nibh tristique inceptos, a primis nostra aliquet torquent.Cras augue consequat dapibus viverra vulputate et lacinia ornare fusce facilisi nullam, mauris ad nisi semper turpis tortor eleifend erat pharetra condimentum. Integer nisl convallis mollis potenti duis molestie posuere ad, ut phasellus praesent vitae a porta accumsan penatibus vulputate, facilisi nascetur curae id malesuada hendrerit justo. Sodales dignissim rhoncus nam risus blandit suscipit, imperdiet habitant purus nullam consequat, venenatis ullamcorper nostra interdum natoque."
   },
   
]

for (let i = 0; i < faqs.length; i++) {
  
   
   const faqContainer = document.getElementById("faq-container")

    const faq = document.createElement("div")
    faq.classList.add("faq-subcontainer")
    faq.setAttribute("id", `faq-subcontainer-${i}`)
  
    faq.addEventListener("click", openFaq)

const img = document.createElement('img')
   // img.src = "assets/img/arrow.svg"
    img.alt = "Drop down"
    img.classList.add("arrow")

    const title = document.createElement("div")
    title.innerText = faqs[i].name
    title.classList.add("faq-title")

    const text = document.createElement('p')
    text.innerText = faqs[i].text
    text.classList.add('faq-text')


    const container = document.createElement("div")
    container.classList.add("faq-inner")
  
    container.appendChild(title)
    container.appendChild(img)
    faq.appendChild(container)
    faq.appendChild(text)
    
   // faq.appendChild(title)
//faq.appendChild(img)
   faqContainer.appendChild(faq)
}


const dropdown = document.getElementsByClassName('faq-subcontainer');

for (i=0; i<dropdown.length; i++) {
  dropdown[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


