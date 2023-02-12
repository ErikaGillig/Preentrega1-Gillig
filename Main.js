function login (){
    let user = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ingrese su contraseña:");
    
    if (user == "sospeshoto" && password == "1234") {
        window.location ="Case.html";

    } else {
      alert("Nombre de usuario o contraseña incorrectos.");
    }
}
