function go(){

var dosis =document.getElementById("dosis").value; 
var peso =document.getElementById("peso").value; 
var cantidad =document.getElementById("cantidad").value; 
var porcentaje =document.getElementById("porcentaje").value; 



var resultado=dosis*peso*cantidad;
var resultado2=resultado/porcentaje;


document.getElementById("resultado").value=(resultado2);
document.getElementById("resultado1").value=(resultado2/1000);
}