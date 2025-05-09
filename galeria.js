// Función para mostrar la imagen ampliada
function mostrarImagen(src) {
  const modal = document.getElementById('modal');
  const imagenAmpliada = document.getElementById('imagen-ampliada');
  imagenAmpliada.src = src;
  modal.style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
