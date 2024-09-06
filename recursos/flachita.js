$(document).ready(function() {
    // Selecciona el div donde quieres hacer el scroll y el elemento que quieres fijar
    var divScroll = $('#div-donde-hacer-scroll');
    var elementoFijo = $('#elemento-a-fijar');
  
    // Al hacer scroll dentro del div...
    divScroll.scroll(function() {
      // Calcula la posición del elemento fijo dentro del div
      var posicionElemento = elementoFijo.offset().top - divScroll.offset().top;
  
      // Si la posición del elemento es menor a la altura del div visible...
      if (posicionElemento < divScroll.height()) {
        // Fija el elemento
        elementoFijo.css({
          position: 'fixed',
          top: 0
        });
      } else {
        // Si no, vuelve a su posición original
        elementoFijo.css({
          position: 'static',
          top: 'auto'
        });
      }
    });
  });