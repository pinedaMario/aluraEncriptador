const gottenText = document.querySelector(".inputBox");
const outpuMessage = document.querySelector(".resultText");
const matrizCypher = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

var toggle = false;

function copyResult(){
  navigator.clipboard.writeText(outpuMessage.innerText);
  alert("Texto copiado al portapapeles");
}

function enableOutputPlace(){
  document.getElementById("initialOutput").style.setProperty("display", "none");
  document.getElementById("resultOutput").style.setProperty("display", "block");
  toggle = true;
}

function disableOutputPlace(){
  document.getElementById("initialOutput").style.setProperty("display", "table-cell");
  document.getElementById("resultOutput").style.setProperty("display", "none");
  outpuMessage.innerText = "";
  toggle = false;
}

function evalOutputPlace(){
  if (gottenText.value.length > 0) {
    if(!toggle){
      enableOutputPlace();
    }
  } else {
    if(toggle){
      disableOutputPlace();
    }
  }
}

function validateChars(toValidate){
  return /^[\x0A\x20\x61-\x7A]*$/.test(toValidate);
}

function procesarEncriptado(aEncriptar){
  aEncriptar = aEncriptar.toLowerCase();
  for (let i = 0; i < matrizCypher.length; i++) {
    if(aEncriptar.includes(matrizCypher[i][0])){
      aEncriptar = aEncriptar.replaceAll(matrizCypher[i][0], matrizCypher[i][1]);
    }
  }
  return aEncriptar;
}

function encriptar(){
  let aEncriptar = gottenText.value.toLowerCase();
  if (validateChars(aEncriptar)){
    evalOutputPlace();
    outpuMessage.innerText = procesarEncriptado(aEncriptar);;
  } else {
    alert("Solo se permiten letras minúsculas y no se permiten caracteres especiales");
  }
}

function procesarDesencriptado(aDesencriptar){
  for (var i = 0; i < matrizCypher.length; i++) {
    if(aDesencriptar.includes(matrizCypher[i][1])){
      aDesencriptar = aDesencriptar.replaceAll(matrizCypher[i][1], matrizCypher[i][0]);
    }
  }
  return aDesencriptar;
}

function desencriptar(){
  let aDesencriptar = gottenText.value.toLowerCase();
  if (validateChars(aDesencriptar)){
    evalOutputPlace();
    outpuMessage.innerText = procesarDesencriptado(aDesencriptar);
  } else {
    alert("Solo se permiten letras minúsculas y no se permiten caracteres especiales");
  }
}