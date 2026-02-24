'use strict'

function adicionarProduto(){
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')
    const valor = document.getElementById('valor')
    const quantidade = document.getElementById('quantidade')

    if(produto.value == || valor.value == '' || quantidade.value == ''){
        const span = document.createElement('span')
        span.textContent = produto.value
        span.className = 'flex flex-con'
        lista.appendChild(span)
    }

    document.getElementById('produto').value = ''
    document.getElementById('valor').value = ''
    document.getElementById('quantidade').value = ''

}