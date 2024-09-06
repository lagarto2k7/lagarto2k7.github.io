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