let formulario = document.getElementById('formulario-ticket')
let total = document.getElementById('total');
let subtotal = 0;
let precio = 200;
let descuento = 0;
let selectcantidadid = document.getElementById('cantidad');
let selectcategoriaid = document.getElementById('categoria');

function calcularprecio(){
    let selectcantidad = formulario.elements['cantidad'];
    let cantidad = selectcantidad.value;
    let selectcategoria = formulario.elements['categoria'];
    let categoria = selectcategoria.value;
    subtotal = precio*cantidad;
    calculardescuento(categoria);
    subtotal = subtotal*descuento;
}

function calculardescuento(categoria){

    switch(categoria){
        case('Estudiante'): descuento = 0.2 
        break;
        case('Trainee'): descuento = 0.5;
        break;
        case('Junior'): descuento = 0.85;
    }
}

function imprimirtotal(){
    clearHTML();
    calcularprecio();
    total.textContent = subtotal;
    console.log(subtotal);

}

function clearHTML(){
    total.innerHTML = '';
}

selectcantidadid.addEventListener('change', function(){imprimirtotal()});
selectcategoriaid.addEventListener('change', function(){imprimirtotal()});
window.addEventListener('load', function(){imprimirtotal()});