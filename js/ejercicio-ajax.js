function procesarPeticion() {
    const url = document.getElementsByClassName("url")[0].value;
    if(url !== "") {
        const peticion = new XMLHttpRequest();
        peticion.open("GET", url);
        peticion.send();

        console.log(peticion.getResponseHeader("Content-Type"));
    }
}