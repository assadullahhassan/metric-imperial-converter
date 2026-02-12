/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let body = document.getElementById('body')
let inputVal = document.getElementById("input-val")
let btn = document.getElementById("btn")

const title = ["Length (Meter/Feet)",
         "Volume (Liters/Gallons)",
          "Mass (Kilograms/Pounds)"]

let val = ""
let hStr =""
let subT = []

inputVal.addEventListener('keyup', function(event) {
  btn.click()
});

btn.addEventListener("click", function() {
    
    if(inputVal.value.length !== 0){
        subT = []
        let firstR = `${inputVal.value} meters = ${(Number(inputVal.value) * 3.281).toFixed(3)} feet 
        | ${inputVal.value} feet = ${(Number(inputVal.value) * 0.304).toFixed(3)} meters`
       
        let secR = `${inputVal.value} liters = ${(Number(inputVal.value) * 0.264).toFixed(3)} gallons | ${inputVal.value} gallons = ${(Number(inputVal.value) * 3.785).toFixed(3)} liters`
        
        let thirdR = `${inputVal.value} kilos = ${Number((inputVal.value) * 2.204).toFixed(3)} pounds | ${inputVal.value} pounds = ${(Number(inputVal.value) * 0.453).toFixed(3)} kilos`  

        subT.push(firstR, secR, thirdR)
        setValue(subT)
    }
})

function setValue(subT) {
    if (subT) {
        hStr = ""
        for(let i =0; i < title.length; i++) {
         hStr += 
         `<div class="card">
                    <h3>${title[i]}</h3>
                    <p>${subT[i]}</p>
         </div>
         ` 
        }
        body.innerHTML = hStr
    } else {
        for(let i =0; i < title.length; i++) {
         hStr += 
         `<div class="card">
                    <h3>${title[i]}</h3>
                    <p>-</p>
         </div>
         ` 
        }
     body.innerHTML = hStr
    } 
}

setValue(val)