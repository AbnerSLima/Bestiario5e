document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://api.open5e.com/monsters/";
});

function buscar() {
    alert("Botão de busca clicado!")
}

var sections = document.getElementsByClassName("section")[0]; //estava faltando o item da lista [0]

var filtersOn = 1

sections.style.display = "none";

function filtros() {
    filtersOn = (filtersOn + 1) % 2;
    
    if (filtersOn === 1) {
        sections.style.display = "none";
    } else {
        sections.style.display = "block";
    }
}

