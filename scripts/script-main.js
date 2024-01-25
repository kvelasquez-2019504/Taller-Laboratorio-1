function obtenerHora(){
    let reloj = document.getElementById("reloj");
    var fechaHora= new Date();
    let hora = fechaHora.getHours();
    let minuto = fechaHora.getMinutes();
    let segundos = fechaHora.getSeconds();
    let horaActual = hora +":"+minuto+":"+segundos;
    reloj.value = horaActual;
    setTimeout("obtenerHora()",1000);
}