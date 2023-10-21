 const times = ["DAYS", "HOURS", "MINUTES", "SECONDS"]

 

 function createContainer (times, numbers) {

   //  const counter = document.getElementById("counter")
     const counterContainer = document.getElementById("counter-container")
    //  const counterContainer = document.createElement("div")
    //  counterContainer.classList.add("counter-container")
    //  counterContainer.setAttribute("id", "counter-container")
    //  counter.appendChild(counterContainer)
    for (let i = 0; i < times.length; i++) {

const counterSubcontainer = document.createElement("div")
counterSubcontainer.classList.add("counter-subcontainer")

    
    const counterTime = document.createElement("div")
    counterTime.classList.add("counter-time")
    counterTime.innerText = times[i]
    counterTime.addEventListener("click", ()=>console.log('hole'))
    
    const counterNumber = document.createElement("div")
    counterNumber.classList.add("counter-number")
    counterNumber.innerText = 0
    counterNumber.setAttribute("id", `time${i}`)
    counterSubcontainer.appendChild(counterTime)
    counterSubcontainer.appendChild(counterNumber)
    
    counterContainer.appendChild(counterSubcontainer)
}

console.log('ahora', counterContainer)
    counter.appendChild(counterContainer)
}


createContainer(times)


function countDown (){



    const now = new Date().getTime()
    const event = new Date('Nov 24, 2023 00:00:00').getTime()

 let substraction = event - now

  const days = Math.floor(substraction/ (1000*60*60*24))
 const hours = Math.trunc(Math.floor((substraction% (1000*60*60*24))) / (1000*60*60))
 const minutes = Math.trunc(Math.floor((substraction% (1000*60*60))) / (1000*60))
 const auxSeconds = Math.trunc(Math.floor((substraction% (1000*60))) / (1000))
  const seconds = ('0' + auxSeconds).slice(-2)
  const aux = [ days, hours, minutes, seconds]

if (substraction <0) {
    clearInterval(interval)
}

//console.log(aux)


const counterDays = document.getElementById("time0")
counterDays.innerText = aux[0]
const counterMonths = document.getElementById("time1")
counterMonths.innerText = aux[1]
const counterMinutes = document.getElementById("time2")
counterMinutes.innerText = aux[2]
const counterSeconds = document.getElementById("time3")
counterSeconds.innerText = aux[3]


 //   createContainer(times, aux)
    

}
const interval = setInterval(countDown, 1000);




console.log('funciona dom')
