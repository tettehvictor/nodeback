const fs = require("fs")
const { callbackify } = require("util")
const content = fs.readFileSync('./files/idris.txt', "utf-8")
console.log(content)

const victor = fs.readFileSync('./files/dex.txt', "utf-8")
console.log(victor)

const tetteh = fs.readFileSync('./files/one.txt', 'utf-8')
console.log(tetteh)

const store = 'salut'
fs.writeFileSync('./files/christina.txt', store)

const aufweidarsein = 'german'
fs.writeFileSync('./files/essen.txt', aufweidarsein)

const david = 'fou'
fs.writeFileSync('./files/tu.txt', david)


fs.readFile('./files/new.txt', 'utf-8', (error, data) => {
    if (error){
        console.log(error)
    }else{
        console.log(data)
    }
})
fs.readFile('./files/two.txt', 'utf-8', (error, data) => {
    if (error){
        console.log(error)
    }else{
        console.log(data)
    }
})

fs.readFile('./files/again.txt', 'utf-8', (error, data) => {
    if (error){
        console.log(error)
    }else{
        console.log(data)
    }
})
