//  Formas de exportar algo de dentro de um módulo Node para ser
//usado em outro arquivo.

this.hello = 'Hello World!'
exports.welcome = 'Welcome to Node!'
module.exports.bye = 'See You Soon!'
//Três atributos de formas diferentes para o mesmo objeto

//!     Qualquer coisa que escreva aqui fica visível apenas aqui
//! até que seja exportado. Ex:

let exemplo = 0
console.log(exemplo)