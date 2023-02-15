//  Esta classe acessa os modulos (A e B).
//  Exemplo usado em mais de um arquivo.
//  Para importar algo usando o commons J(sistema de módulos do Node) vai usar a palavra "require"

const moduleA = require('./moduleA') //*
const moduleB = require('./moduleB') //*
// *Importando usando o caminho relativo
 
console.log(moduleA.hello)
console.log(moduleA.welcome)
console.log(moduleA.bye)
console.log(moduleA)

console.log(moduleB.bomDia)
console.log(moduleB.boaNoite())
console.log(moduleB)