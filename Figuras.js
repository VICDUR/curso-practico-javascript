
// codigo del cuadrado
console.group("Cuadrado")

function perimetroCuadrado (lado){
    return lado * 4;
}
function areaCuadrado (lado){ 
    return lado * lado;
}
console.groupEnd()



// codigo del triangulo

console.group("Triángulo")

function perimetroTriangulo (lado1, lado2, base){
     return lado1 + lado2 + base
    }

function areaTriangulo (base, altura){ 
    return   (base * altura) / 2;
}

console.groupEnd()




//código del circulo

console.group("Circulos");


function diametroCirculo (radio) {  
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo (radio) { 
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}    


function  AreaCirculo (radio){
    return  (radio * radio) * PI;
}

console.groupEnd();




//aqui interactuamos con el Html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area= areaCuadrado(value);
    alert(area)
}




