function handleCep(){

    const cep = "https://viacep.com.br/ws/04930270/json/"
    let data

    // O Fetch faz requisições http
    // O Then uma função que vai atrás da promessa/ resolução
    fetch(cep, data)
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => {
            console.log("Retorno da api", data)
            console.log("Bairro:", data.bairro)
            console.log("Rua:", data.logradouro)
            console.log("UF:", data.uf)
        })
        .catch((error) => console.error('Erro aoa buscar o cep', error))
}

handleCep()

