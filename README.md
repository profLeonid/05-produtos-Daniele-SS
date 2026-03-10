# 📝 Sistema de Inventário Simples

Uma aplicação web moderna e funcional para o gerenciamento de listas de produtos, focada em uma interface limpa e experiência de usuário fluida.

---

## 🚀 Sobre o Projeto

Este projeto permite que o usuário registre itens em uma tabela de inventário de forma dinâmica. A interface utiliza o conceito de **Glassmorphism** (efeito de vidro) com um tema **Dark Mode**, proporcionando um visual tecnológico e elegante.

### ✨ Funcionalidades
* **Registro Dinâmico:** Adicione Nome, Valor (R$) e Quantidade sem recarregar a página.
* **Limpeza Automática:** Os campos de entrada são resetados após cada inserção de sucesso.
* **Estilização Moderna:** Uso de Tailwind CSS 4 para um design responsivo e atraente.
* **Feedback Visual:** Efeitos de hover nas linhas da tabela para melhor legibilidade.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* **HTML5:** Estrutura semântica da página.
* **Tailwind CSS (v4):** Estilização baseada em classes utilitárias via CDN.
* **JavaScript (ES6+):** Lógica de manipulação do DOM e criação dinâmica de elementos.

---

## 📂 Estrutura do Código

O projeto é composto por dois arquivos principais:

1.  **`index.html`**: Contém a estrutura da interface, os campos de input e a tabela de exibição.
2.  **`app.js`**: Contém a função `adicionarProduto()`, responsável por validar os dados, criar novas linhas (`<tr>`) e células (`<td>`), e injetá-las na tabela.

---
*Desenvolvido para fins de estudo em manipulação de DOM e CSS moderno.*
