function calcularAlquiler() {

    let precio = parseFloat(document.getElementById("cboCancha").value);
    let horas = parseInt(document.getElementById("txtHoras").value);


    let adicional = 0;
    if (document.getElementById("rbNoche").checked) {
        adicional = 20;
    } else {
        adicional = 0;
    }


    let costoHora = precio + adicional;
    let subtotal = costoHora * horas;
    let descuento = 0;


    if (horas >= 4) {
        descuento = subtotal * 0.15;
    } else if (horas >= 2) {
        descuento = subtotal * 0.10;
    } else {
        descuento = 0;
    }

    let total = subtotal - descuento;


    document.getElementById("txtSubtotal").value = subtotal;
    document.getElementById("txtDescuento").value = descuento;
    document.getElementById("txtTotal").value = total;
}

function limpiarCancha() {

    document.getElementById("cboCancha").value = "60";
    document.getElementById("txtHoras").value = "1";
    document.getElementById("rbDia").checked = true;
    document.getElementById("txtSubtotal").value = "";
    document.getElementById("txtDescuento").value = "";
    document.getElementById("txtTotal").value = "";
}