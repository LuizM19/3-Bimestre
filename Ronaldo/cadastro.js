const participantes = [];
document.getElementById('registroform').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const categoria = document.getElementById('categoria').value;
    if (nome && cpf && categoria) {
        participantes.push({ nome, cpf, categoria});
        document.getElementById('nome').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('categoria').value = '';
        alert('Participantes registrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos')
    }
});
document.getElementById('montarlista').addEventListener('click', function () {
    const lista = document.getElementById('montarlista');
    lista.innerHTML = '';
    participantes.forEach(participantes => {
        const li = document.createElement('li');
        li.textContent = `Nome:${participantes.nome}, cpf:${participantes.cpf}, categoria:${participantes.categoria}`;
        lista.appendChild(li);
    })
})