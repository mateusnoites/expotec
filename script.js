pesquisa = document.getElementById("pesquisa");
base = "Pesquisar "

pesquisas = [
    '"Notícias"',
    '"Programação"',
    '"Palestrantes"',
    '"Agenda Cultural"',
    '"Contato"'
]

function buscaAleatoria() {
    pesquisa.placeholder = base + pesquisas[Math.floor(Math.random() * pesquisas.length)]
}