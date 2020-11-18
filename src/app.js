document.body.addEventListener("click", (trigger)=>{
    let advanced = document.querySelector("#advanced").checked
    document.body.style.background = randomColor(advanced)
})


// FUNKTIONER

function randomNumber(advanced){
    if(!advanced){
        return Math.round(Math.random()) * 255
    }

    return Math.floor(Math.random() * Math.floor(256))
}

function randomColor(advanced){
    let red = randomNumber(advanced)
    let green = randomNumber(advanced)
    let blue = randomNumber(advanced)

    let pickedColorRgb = `rgb(${red},${green},${blue})`
    colorName(pickedColorRgb)
    return pickedColorRgb
}

async function colorName(colorRgb){
    // hämtas genom; https://www.thecolorapi.com
    // tillägget /id?rgb=rgb(255,0,0)

    const adress = `https://www.thecolorapi.com/id?rgb=${colorRgb}`
    
    let data = await fetch(adress)
    let svar = await data.json()
    
    document.querySelector(".currentColorName").textContent = svar.name.value
    
    return svar.name.value
}