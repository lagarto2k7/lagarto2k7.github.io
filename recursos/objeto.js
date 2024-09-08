// Obtener el elemento que queremos posicionar
const miObjeto = document.getElementById('miObjeto');

// Función para reposicionar el objeto
function posicionarObjeto() {
  // Obtener el ancho y alto de la ventana
 
  const ventanaAlto = window.innerHeight;

  // Calcular la nueva posición (ajusta los valores según tus necesidades)

  const nuevaPosicionY = ventanaAlto / 2 + 50; // Ajusta el valor 50 para controlar la distancia vertical

  // Aplicar los estilos CSS
  
  miObjeto.style.top = nuevaPosicionY + 'px';
  miObjeto.style.position = 'fixed'; // Asegurarse de que el objeto se mantenga fijo
}

// Llamar a la función al cargar la página y cada vez que se redimensione la ventana
posicionarObjeto();
window.addEventListener('resize', posicionarObjeto);

// Obtener una referencia al elemento que queremos ocultar
const elementoAOcultar = document.getElementById('miObjetos');

// Obtener una referencia al elemento con el ID que marca el punto de ocultación
const puntoDeOcultacion = document.getElementById('titulo-banners');

// Función para verificar si el elemento ha sido alcanzado por el scroll
function verificarScroll() {
  const posicionDelElemento = puntoDeOcultacion.offsetTop;
  const posicionActualDelScroll = window.pageYOffset;

  if (posicionActualDelScroll >= posicionDelElemento) {
    elementoAOcultar.style.display = 'none';
  } else {
    elementoAOcultar.style.display = 'block';
  }
}

// Escuchar el evento de scroll y ejecutar la función de verificación
window.addEventListener('scroll', verificarScroll);