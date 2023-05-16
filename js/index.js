
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#multiple",{
      strings: ["AI developer","Data scientist", "Fullstack Junior"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 700,
      loop:true
    });
  });
  



  /////////////////////////////
  
  const luz = document.querySelector(".luz");
  const luz2 = document.querySelector("#luz2");
  luz.addEventListener("click",cambiar1);
  luz2.addEventListener("click",cambiar2);
  const menuAbajo = document.querySelector("#menuAbajo");
  
 /***prueba */
 function cambiar2() {
  event.preventDefault();
  document.body.classList.toggle('noche');
  document.body.classList.toggle('dia');
  const sol = document.querySelector('.sol1');
  if (document.body.classList.contains('dia')) {
    sol.innerHTML = '<i class="bi bi-moon-fill"></i>'; // Icono de noche
  } else {
    sol.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'; // Icono de día
  }
}

  
  function cambiar1() {
    document.body.classList.toggle('noche');
    document.body.classList.toggle('dia');
    const sol = document.querySelector('.sol');
    if (document.body.classList.contains('dia')) {
      sol.innerHTML = '<i class="bi bi-moon-fill"></i>'; // Icono de noche
    } else {
      sol.innerHTML = '<i class="bi bi-brightness-high-fill"></i>'; // Icono de día
    }
  }


  /////////mis estudios parte dinamica//////////////////////////////


  var imagen = document.createElement("img");
  var midiv = document.createElement("div");

  // establece el atributo src de la imagen
  imagen.setAttribute("src", "./img/fundaesplai.jpg"); 

  imagen.classList.add("img-fluid");
  imagen.classList.add("miClase");

  // agrega la imagen al div
  var section1 = document.getElementById("section1");
  midiv.appendChild(imagen);
  section1.appendChild(midiv);



/////////////////efevtos cartas//////////////////////

// var cartas = $('.tipo');




// Selecciona todos los contenedores de carta
var contenedores = $('.padretipo');

// Define la sensibilidad del movimiento
var sensibilidad = 20;

// Agrega el efecto de giro a cada carta
contenedores.mousemove(function(event) {
  // Selecciona la carta actual
  var contenedor = $(this);
  var carta = contenedor.find('.tipo');
  // Calcula el ángulo de giro en función del movimiento del mouse
  var posX = event.pageX;
  var posY = event.pageY;
  var centroX = carta.offset().left + (carta.width() / 2);
  var centroY = carta.offset().top + (carta.height() / 2);
  var movX = (posX - centroX) / sensibilidad;
  var movY = (centroY - posY) / sensibilidad;
  var anguloX = movY * -1;
  var anguloY = movX;
  // Aplica el ángulo de giro a la carta
  carta.css('transform', 'rotateX(' + anguloX + 'deg) rotateY(' + anguloY + 'deg)');
  // Agrega perspectiva para crear efecto 3D
  contenedor.css('perspective', '1000px');
});

// Restablece la posición de la carta cuando el mouse sale del contenedor
contenedores.mouseleave(function() {
  var carta = $(this).find('.carta-anacoda');
  carta.css('transform', 'none');
  $(this).css('perspective', 'none');
});



/*****validacion del formulario */  

const nombreInput = document.getElementById("nombre");
const apellidosInput = document.getElementById("apellidos");
const emailInput = document.getElementById("exampleInputEmail1");
const comentarioInput = document.getElementById("floatingTextarea");
const aceptarInput = document.getElementById("exampleCheck1");
const form = document.getElementById("formulario");

const spannombre= document.getElementById("spannombre");
const spanapellidos =document.getElementById("spanapellidos");
const spanemail =document.getElementById("spanemail");
const spancomentario =document.getElementById("spancomentario");
const spancheck = document.getElementById("spancheck");

const validarFormulario = (e) => {
  const nombre = nombreInput.value.trim();
  const apellidos = apellidosInput.value.trim();
  const email = emailInput.value.trim();
  const comentario = comentarioInput.value.trim();
  const aceptar = aceptarInput.checked;

  if (nombre.length < 2 || /\d/.test(nombre)) {
    
    spannombre.innerHTML = "el nombre ha de tener mas de dos letras y no puede tener numeros"
    return;
  }else{
    spannombre.innerHTML = "";
    nombreInput.classList.add("verde");
  }

  if (apellidos.length < 2 || /\d/.test(apellidos)) {
    
    spanapellidos.innerHTML = "los apellidos han de tener mas de dos letras y no puede tener numeros"
    return;
  }else{
    spanapellidos.innerHTML = "";
    apellidosInput.classList.add("verde");
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    spanemail.innerHTML= "Por favor, introduce un correo electrónico válido"
    return;
  }else{
    spanemail.innerHTML = "";
    emailInput.classList.add("verde");
  }

  if (comentario.length < 10) {
    spancomentario.innerHTML = "Por favor, introduce un comentario de al menos 10 caracteres"
    return;
  }else{
    spancomentario.innerHTML = "";
  }

  if (!aceptar) {
    spancheck.innerHTML = "Por favor, acepta los términos y condiciones"
    return;
  }else{
    spancheck.innerHTML = "";
  }

  form.submit();
};

const botonFormulario = document.getElementById("botonformulario");
botonFormulario.addEventListener("click", (e) => {
  e.preventDefault();
  validarFormulario(e);
});
