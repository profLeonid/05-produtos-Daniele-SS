'use strict'

function adicionarProduto(){

    //Pega os inputs do formulário
    const produto       = document.getElementById('produto')
    const valor         = document.getElementById('valor')
    const quantidade    = document.getElementById('quantidade')

    //Seleciona o corpo da tabela onde as linhas serão adicionadas
    const tbody = document.querySelector("tbody")

    //Verifica se nenhum campo está vazio
    if (produto.value != '' && valor.value != '' && quantidade.value != '') {

        //Cria uma nova linha da tabela
        const tr = document.createElement('tr')

        //Cria três células da tabela
        const tdNome        = document.createElement('td')
        const tdValor       = document.createElement('td')
        const tdQuantidade  = document.createElement('td')

        //Coloca os valores digitados dentro das células
        tdNome.textContent          = produto.value
        tdValor.textContent         = valor.value
        tdQuantidade.textContent    = quantidade.value

        //Adiciona classes de estilo (Tailwind)
        tdNome.className        = "px-4 py-2 border"
        tdValor.className       = "px-4 py-2 border"
        tdQuantidade.className  = "px-4 py-2 border"

        //Adiciona as células dentro da linha
        tr.appendChild(tdNome)
        tr.appendChild(tdValor)
        tr.appendChild(tdQuantidade)

        //Adiciona a linha completa dentro do corpo da tabela
        tbody.appendChild(tr)
    }

    //Limpa os campos do formulário após adicionar o produto
    produto.value       = ""
    valor.value         = ""
    quantidade.value    = ""
}