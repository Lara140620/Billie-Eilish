/*Formulario con Fechas*/ 
function validarFormulario(event){
    event.preventDefault();
    var mensaje = document.getElementById("mensaje").value;
    var contraseña = document.getElementById("contraseña").value;
    var checkbox = document.getElementById("condiciones").checked;
    

    if (mensaje === "" || mensaje.lenght  > 30 ){
        alert("Completar el espacio");
        return false;
    }

    if (contraseña === "" || contraseña.lenght <= 5){
        alert("La contraseña tiene que tener más de 5 caracteres");
        return false;
    }

    if(!checkbox){
        alert("Debe aceptar los términos y condiciones");
        return false;
    }

    /* Fecha*/
    var fechaSeleccionada = document.getElementById("ejemplo").value;

    if (!fechaSeleccionada) {
        alert("Por favor, seleccione una fecha.");
        return false;
    }

    var fechaElegida = new Date(fechaSeleccionada + "T00:00:00");
    var fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    if (fechaElegida.getTime() === fechaActual.getTime()) {
        alert("La fecha seleccionada es hoy. No es posible.");
        return false;
    } else if (fechaElegida < fechaActual) {

        alert("La fecha seleccionada es anterior a la fecha actual. No es posible.");
        return false;
    } else {
        
        window.location.href = "Home.html";
        return true;
    }
  
    
}

/*Checkbox*/

function mostrarInputNumero(){
    var checkbox = document.getElementById("condiciones");
    var inputNumero = document.getElementById("inputNumero");

    if (checkbox.checked){
        inputNumero.style.display = "block";
    } else {
        inputNumero.style.display = "none";
    }
}


/*Cartel, Círculo y Pop Up*/ 

window.onload = function() {
    
    setTimeout(function() {
      document.getElementById('LCirculocarga').style.display = 'none';
      document.getElementById('LCartel').style.display = 'block';
    }, 4000);

    
    setTimeout(function() {
      document.getElementById('LPopUp').style.display = 'block';
      document.getElementById('LfondoPop').style.display = 'block';
    }, 10000); 
  }

 
  function closePopup() {
    document.getElementById('LPopUp').style.display = 'none';
    document.getElementById('LfondoPop').style.display = 'none';
  }


    document.addEventListener("DOMContentLoaded", function() {
    const Botondebillie = document.getElementById("Botondebillie");

    Botondebillie.addEventListener("click", function() {
      document.getElementById("Lcartelfinal").style.display = "none";
      document.getElementById("LContenidodeP").style.display = "block";
    });
  });

/*Coockies*/

let coockiesAccepted = false;

window.addEventListener('scroll', function (){

    const halfway = document.body.scrollHeight / 2;

    if (!coockiesAccepted && window.scrollY > halfway){

     document.getElementById('LFCoockie').style.display = 'block';
     document.body.style.overflow = 'hidden'; 

    }
})
    document.getElementById('LAceptarCoock').addEventListener('click', function(){

    coockiesAccepted = true;

    document.getElementById('LFCoockie').style.display = 'none';
    document.body.style.overflow = 'auto';
      
});


