const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//  Axios é client http. Faz requisições para obter informações de algo que está remoto

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})
// Requisição da url(em cima), para obter o conteúdo do código.