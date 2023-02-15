const moduleA = require('../../modulea')
console.log(moduleA.hello)

const saudacao = require('saudacao')
console.log(saudacao.hello)

const c = require('./pastaC')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)