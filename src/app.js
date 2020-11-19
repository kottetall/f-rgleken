document.body.addEventListener("click", (trigger)=>{
    //Tillfällig lösning med if:en
    if(!document.querySelector("#anpassad").checked){
        let advanced = document.querySelector("#advanced").checked
        document.body.style.background = randomColor(advanced)
    } else {
        let chosenRandomColor = semiRandomColor()
        
        document.body.style.background = chosenRandomColor
        document.querySelector(".currentColorName").textContent = chosenRandomColor
    }

})


// FUNKTIONER

function randomNumber(advanced){
    if(!advanced){
        return Math.round(Math.random()) * 255
    }

    return randomInt(256)
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

function semiRandomColor(){
    const carpetColors = [
        "yellow", "green", "white", "orange", "red", "black", "purple", "blue"
    ]

    const parts = ["feet", "hands"]

    let random = randomInt(carpetColors.length)

    console.log(carpetColors[random])
    return carpetColors[random]

}

function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}