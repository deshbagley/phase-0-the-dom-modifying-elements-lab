// Write your code here!
const e = document.querySelector("body")
console.log(e)
console.log("This has main in it")
let main = e.querySelector("main")
 main.remove()
console.log("main is gone")

let newHeader = document.createElement("h1")
newHeader.id = "victory"
e.append(newHeader)
newHeader.innerText = "SCF Coding Academy is the champion"
//console.log(newHeader.innerText = "SCF Coding Academy is the champion")
console.log(newHeader.textContent)


