function clickEvente(click) {
    var origen = click.attributes[0].nodeValue;
    var contenido = document.getElementsByClassName("contenidojs");
    if(origen == "ejercicio1") {
        if(contenido[0].style.display === "" || contenido[0].style.display === "none") {
            document.getElementsByTagName("h3")[0].style["border-color"] = "#3E2723";
            contenido[0].style.display = "block";
        } else if(contenido[0].style.display === "block") {
            document.getElementsByTagName("h3")[0].style["border-color"] = "#ECEFF1";
            contenido[0].style.display = "none";
        }
        if(contenido[1].style.display === "block") {
            document.getElementsByTagName("h3")[1].style["border-color"] = "#ECEFF1";
            contenido[1].style.display = "none";
        }
        if(contenido[2].style.display === "block") {
            document.getElementsByTagName("h3")[2].style["border-color"] = "#ECEFF1";
            contenido[2].style.display = "none";
        }
    } else if(origen == "ejercicio2") {
        if(contenido[1].style.display === "" || contenido[1].style.display === "none") {
            document.getElementsByTagName("h3")[1].style["border-color"] = "#3E2723";
            contenido[1].style.display = "block";
        } else if(contenido[1].style.display === "block") {
            document.getElementsByTagName("h3")[1].style["border-color"] = "#ECEFF1";
            contenido[1].style.display = "none";
        }
        if(contenido[0].style.display === "block") {
            document.getElementsByTagName("h3")[0].style["border-color"] = "#ECEFF1";
            contenido[0].style.display = "none";
        }
        if(contenido[2].style.display === "block") {
            document.getElementsByTagName("h3")[2].style["border-color"] = "#ECEFF1";
            contenido[2].style.display = "none";
        }
    } else if(origen == "ejercicio3") {
        if(contenido[2].style.display === "" || contenido[2].style.display === "none") {
            document.getElementsByTagName("h3")[2].style["border-color"] = "#3E2723";
            contenido[2].style.display = "block";
        } else if(contenido[2].style.display === "block") {
            document.getElementsByTagName("h3")[2].style["border-color"] = "#ECEFF1";
            contenido[2].style.display = "none";
        }
        if(contenido[0].style.display === "block") {
            document.getElementsByTagName("h3")[0].style["border-color"] = "#ECEFF1";
            contenido[0].style.display = "none";
        }
        if(contenido[1].style.display === "block") {
            document.getElementsByTagName("h3")[1].style["border-color"] = "#ECEFF1";
            contenido[1].style.display = "none";
        }
    }
}

/* Función que procesa la palabra ingresada en el ejercicio 1 y verifica si es palíndromo. */
function verificar() {
    /* Recupera el contenido ingresado en la entrada de texto */
    var ingreso = document.getElementsByClassName("ingreso")[0].value;
    /* Obtiene el elemento correspondiente a la etiqueta p, el cual tiene como nombre de clase "recultado" */
    var resultado = document.getElementsByClassName("resultado")[0];
    /* Verifica si el contenido ingresado o string se encuentra o no vacia */
    if(ingreso.length !== 0) {
        /* Crea una variable de tipo string con valor inicial un string vacio */
        var invertida = "";
        /* Convierte el string en minuscula y luego suprime o elimina todos los espacios que hay en el string */
        ingreso = ingreso.toLowerCase().split(" ").join("");
        /* Reemplaza todas las vocales con tilde por sus equivalentes sin tildes*/
        ingreso = ingreso.replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u");
        /* Recorre de forma invertida el string */
        for(var i = ingreso.length - 1; i >= 0; i--) {
            /* Concatena cada caracter y lo asigna a la variable invertida */
            invertida += ingreso[i];
        }
        /* Verifica si el estring en la variable "ingreso" es igual al de la variable "invertida" */
        if(ingreso === invertida) {
            /* Le indica al usuario si la palabra es paliíndromo */
            resultado.innerHTML = "La palabra si es palíndromo!"
        } else {
            /* Le indica al usuario si la palabra no es paliíndromo */
            resultado.innerHTML = "La palabra no es palíndromo!"
        }
    } else {
        /* Si el estring en la variable "ingreso" está vacia, muestra un mensaje de alerta */
        resultado.innerHTML = "Alerta! Debe ingresar una palabra."
    }
}

/* Esta función evalua dos números ingresados y muestra cuál es el mayor de los dos o si son iguales */
function numeroMayor() {
    /* Obtiene el valor que hay en el primer campo de texto */
    var primerValor = document.getElementsByClassName("primerNumero")[0].value
    /* Obtiene el valor que hay en el segundo campo de texto */
    var segundovalor = document.getElementsByClassName("segundoNumero")[0].value
    /* Obtiene el elemento con el nombre "numeroMayor, aquí se mortrará el resultado" */
    var resultado = document.getElementsByName("numeroMayor")[0];
    /* Verifica que ambos campos de texto no se encuentren vacios */
    if(primerValor !== "" && segundovalor !== "") {
        /* Convierte el primer valor ingresado a tipo entero */
        var primerNumero = parseInt(primerValor);
        /* Convierte el segundo valor ingresado a tipo entero */
        var segundoNumero = parseInt(segundovalor);
        /* Evalua si el primer número es mayor al segundo y muestra el resultado*/
        if(primerNumero > segundoNumero) {
            resultado.innerHTML = "El número mayor es: " + primerNumero;
        /* Evalua si el segundo número es mayor al primero y muestra el resultado*/
        } else if(segundoNumero > primerNumero) {
            resultado.innerHTML = "El número mayor es: " + segundoNumero;
        } else {
            /* Indica si ambos números son iguales */
            resultado.innerHTML = "Ambos números son iguales";
        }
    }  else if(primerValor !== "" && segundovalor === "") {
        /* le indica al usuario que falta el segundo número */
        resultado.innerHTML = "Alerta! Falta ingresar el segundo número";
    } else if(primerValor === "" && segundovalor !== "") {
        /* le indica al usuario que falta el primer número */
        resultado.innerHTML = "Alerta! Falta ingresar el primer número";
    } else {
        /* le indica al usuario que faltan ambos números */
        resultado.innerHTML = "Alerta! Debe ingresar ambos números";
    }
}

/* */
function escribirVocales() {
    var frase = document.getElementsByClassName("ingresoFrase")[0].value;
    var resultado = document.getElementsByName("resultadoFrase")[0];
    if(frase !== "") {
        /* Crea una variable de tipo string con un valor inicial de cadena vacia */
        var vocales = ""
        /* Convierte el string en minuscula */
        frase = frase.toLowerCase()
        /* Reemplaza todas las vocales con tilde por sus equivalentes sin tildes*/
        frase = frase.replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u");
        /* Recorre la palabra o frase y verifica si alguna de las vocales existe, luego las concatena*/
        for(var i = 0; i < frase.length; i++) {
            if(frase[i] === "a"){
                vocales += frase[i] + " ";
            } else if(frase[i] === "e"){
                vocales += frase[i] + " ";
            } else if(frase[i] === "i"){
                vocales += frase[i] + " ";
            } else if(frase[i] === "o"){
                vocales += frase[i] + " ";
            } else if(frase[i] === "u"){
                vocales += frase[i] + " ";
            }
        }
        /* Muestra el resultado */
        resultado.innerHTML = vocales;
    } else {
        /* muestra un mensaje de alerta al intentar procesar el contenido del input text estando vacio */
        resultado.innerHTML = "Alerta! Debe ingresar una palabra o frase."
    }
}