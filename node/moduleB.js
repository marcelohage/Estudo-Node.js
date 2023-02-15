//  Fora mais comum de exportar:

module.exports = { // Atribui um objeto a module.exports
    bomDia: 'Bom Dia!',
    boaNoite (){
        return 'Boa Noite!'
    }
}

//!     Qualquer coisa que escreva aqui fica visível apenas aqui
//! até que seja exportado. Ex:

let exemplo2 = 10
console.log(exemplo2)