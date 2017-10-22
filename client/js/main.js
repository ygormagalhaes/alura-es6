var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

var form = document.querySelector(".form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    var linha = document.createElement("tr");

    campos.forEach(function(campo) {
        var celula = document.createElement("td");
        celula.textContent = campo.value;
        linha.appendChild(celula);
    });

    var celulaVolume = document.createElement("td");
    var volume = campos[1].value * campos[2].value;
    celulaVolume.textContent = volume;

    linha.appendChild(celulaVolume);

    var tabela = document.querySelector(".table tbody");
    tabela.appendChild(linha);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});