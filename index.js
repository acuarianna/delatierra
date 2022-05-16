


function validacionForm() {


  let x = document.getElementById("telefono").value;

  if (isNaN(x)) {
    // text = "Solo se aceptan números" ;//
    telefono.setCustomValidity("¡Se esperaba un número!");
  }
  else {
    telefono.setCustomValidity("");
  }


  let n = document.getElementById("nombre").value;

  if (isNaN(n)) {

    nombre.setCustomValidity("");
  }
  else {
    nombre.setCustomValidity("¡Se esperan letras!");
  }


}

