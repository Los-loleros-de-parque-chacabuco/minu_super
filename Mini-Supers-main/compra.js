var carritoAlgodon= 0;
var carritoChupetin = 0;
var carritoPaleta = 0;
var carritoRosquillas = 0;
var carritoCereal = 0;
var carritoSquisher= 0;
var carritoWaffles= 0;
var carritoCaramelos= 0;

function compra(){
   let eleccion = window.confirm("Queres comprar los chupetines?")
    if (eleccion === true){
        let cantidad = window.prompt("Cuantos queres?")
        let precio = 30;
        carritoChupetin = parseInt(cantidad) * precio;
        alert("Sumaste " + cantidad + " " + "chupetines a tu carrito" );
    }
    else{
        alert("Gracias vuelvas prontos *saluda*")
    }
}
function algodon(){
    let eleccion = window.confirm("Queres comprar los algodones?")
     if (eleccion === true){
         let cantidad = window.prompt("Cuantos queres?")
         let precio = 50;
         carritoAlgodon= parseInt(cantidad) * precio;
         alert("Sumaste " + cantidad + " " + "algodones a tu carrito" );
     }
     else{
         alert("Gracias vuelvas prontos *saluda*")
     }
 }
 function paletas(){
    let eleccion = window.confirm("Queres comprar las paletas?")
     if (eleccion === true){
         let cantidad = window.prompt("Cuantas queres?")
         let precio = 25;
         carritoPaleta = parseInt(cantidad) * precio;
         alert("Sumaste " + cantidad + " " + "paletas a tu carrito" );
        
     }
     else{
         alert("Gracias vuelvas prontos *saluda*")
     }
 }
 function caramelos(){
    let eleccion = window.confirm("Queres comprar los caramelos?")
     if (eleccion === true){
         let cantidad = window.prompt("Cuantos queres?")
         let precio = 10;
         carritoCaramelos = parseInt(cantidad) * precio;
         alert("Sumaste " + cantidad + " " + "caramelos a tu carrito" );
         
     }
     else{
         alert("Gracias vuelvas prontos *saluda*")
     }
 }
 function rosquillas(){
    let eleccion = window.confirm("Queres comprar las rosquillas?")
     if (eleccion === true){
         let cantidad = window.prompt("Cuantas queres?")
         let precio = 70;
         carritoRosquillas = parseInt(cantidad) * precio;
         alert("Sumaste " + cantidad + " " + "rosquillas a tu carrito" );
        
     }
     else{
         alert("Gracias vuelvas prontos *saluda*")
     }
 }
 function cereal(){
    let eleccion = window.confirm("Queres comprar el cereal?")
     if (eleccion === true){
         let cantidad = window.prompt("Cuantos queres?")
         let precio = 355;
         carritoCereal= parseInt(cantidad) * precio;
         alert("Sumaste " + cantidad + " " + "cereales tu carrito" );
         
     }
     else{
         alert("Gracias vuelvas prontos *saluda*")
     }
 }
 function waffles(){
    let eleccion = window.confirm("Queres comprar los waffles?")
     if (eleccion === true){
         let cantidad = window.prompt("Cuantos queres?")
         let precio = 150;
         carritoWaffles = parseInt(cantidad) * precio;
         alert("Sumaste " + cantidad + " " + "waffles a tu carrito" );
        
     }
     else{
         alert("Gracias vuelvas prontos *saluda*")
     }
 }
 function squisher(){
    let eleccion = window.confirm("Queres comprar la legendaria Squisher?")
     if (eleccion === true){
         let cantidad = window.prompt("Cuantas queres?")
         let precio = 250;
         carritoSquisher = parseInt(cantidad) * precio;
         alert("Sumaste " + cantidad + " " + "squishers a tu carrito" );
        
     }
     else{
         alert("Gracias vuelvas prontos *saluda*")
     }
 }