const form = document.getElementById("form_atividade");
const listas = [];
const notas = [];


let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNomePessoa = document.getElementById("nome_pessoa");
    const inputNumeroPessoa = document.getElementById("numero_pessoa");

    if(listas.includes(inputNomePessoa.value)) {
        alert(`A pessoa: ${inputNomePessoa.value} ja foi inserida`);
    } else {
        listas.push(inputNomePessoa.value);
        notas.push(parseFloat(inputNumeroPessoa.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputNumeroPessoa.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomePessoa.value = '';
    inputNumeroPessoa.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}