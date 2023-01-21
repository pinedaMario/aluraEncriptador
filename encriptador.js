var toggle = true;

function noneTest(nombre) {
  if (toggle) {
    document.getElementById("initialOutput").style.setProperty("display", "none");
    document.getElementById("resultOutput").style.setProperty("display", "block");
  } else {
    document.getElementById("initialOutput").style.setProperty("display", "table-cell");
    document.getElementById("resultOutput").style.setProperty("display", "none");
  }
  toggle = !(toggle);
  //alert("boton presionado: " + nombre);
}