function boton4() {
    window.alert('enviar4');
}

var btnEnviar1 = document.getElementById('btnEnviar1');
btnEnviar1.style.color = "yellow";

btnEnviar1.addEventListener('click', function () {
    window.alert('enviar1');
    cambiarColor("red");
    cambiarEstado(true);
});

var emailHelp = document.getElementById('emailHelp');
function cambiarColor(color) {
    emailHelp.style.color = color;
}

function cambiarEstado(estado) {
    var exampleCheck1 = document.getElementById("exampleCheck1").checked = estado;
}

var btnEnviar5 = document.getElementById('btnEnviar5');
btnEnviar5.addEventListener('click', callback);

function callback() {
    cambiarColor("green");
    cambiarEstado(false);
}