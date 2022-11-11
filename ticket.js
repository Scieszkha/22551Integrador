
let valor = 200;
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let categoria       = document.getElementById("categoriaSelect");
let mail            = document.getElementById("mail");
let cantidad = document.getElementById("cantidadTickets");

function total() {
        let ValorTickets = (cantidad.value) * valor;

        if (categoria.value == 0) {
        ValorTickets = ValorTickets ;
        }
        if (categoria.value == 1) {
        ValorTickets = ValorTickets - (descuentoEstudiante / 100 * ValorTickets);
        }
        if (categoria.value == 2) {
        ValorTickets = ValorTickets - (descuentoTrainee / 100 * ValorTickets);
        }
        if (categoria.value == 3) {
        ValorTickets = ValorTickets - (descuentoJunior / 100 * ValorTickets);
        }
        montoTotal.innerHTML = ValorTickets;
}

Resumen.addEventListener('click', total);

function reset_total() {
        quitarClaseError();
        montoTotal.innerHTML = "";
}
    Borrar.addEventListener('click', reset_total);