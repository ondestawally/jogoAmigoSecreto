const amigos = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nome = inputAmigo.value.trim(); // Captura e remove espaços extras

  // Validação da entrada
  if (nome === "") {
    alert("Por favor, insira um nome válido."); // Alerta para entradas inválidas
    return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Limpa o campo de entrada
  inputAmigo.value = "";

  // Atualiza a lista visível
  atualizarLista();
}

function atualizarLista() {
  const listaHTML = document.getElementById('listaAmigos');
  
  // Limpa a lista antes de adicionar novos elementos
  listaHTML.innerHTML = "";

  // Percorre o array de amigos e cria elementos <li>
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo; // Adiciona o nome ao <li>
    listaHTML.appendChild(li); // Insere o <li> na lista
  });
}

function sortearAmigo() {
  const resultadoHTML = document.getElementById('resultado');

  // Validação: verificar se há amigos na lista
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione amigos antes de sortear.");
    return;
  }

  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar o resultado
  resultadoHTML.innerHTML = `🎉 O amigo secreto sorteado é: ${amigoSorteado}! 🎉`;
}
