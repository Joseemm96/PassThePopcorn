// Validando formulario de contacto

function validar (){
	var  nombre, email, expresion, texto;
	nombre = document.getElementById("nombre").value;
	email = document.getElementById("email").value;
	texto = document.getElementById("textarea").value;

	expresion = /\w+@\w+\.+[a-z]/;


	if(nombre === ""){
		alert("El campo nombre está vacío");
		return false;
	}
	else if(email === ""){
		alert("El campo correo está vacío");
		return false;
	}
	else if(texto === ""){
		alert("El campo de texto está vacío")
		return false;
		}
	else if(nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if(correo.length>100){
		alert("El correo es muy largo");
		return false;
	}
	else if(!expresion.text(correo)){
		alert("El correo tiene un formato válido")
		return false;
	}
}

	