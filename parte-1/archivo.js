console.log(`Hola desde el archivo externo Javascript`); //Punto 1

function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

Libro.prototype.mostrarDatosEnConsola = function () {
  console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`);
};

Libro.prototype.mostrarDatosEnAlert = function () {
  alert(`${this.titulo}, de ${this.autor.toUpperCase()}`);
};

Libro.prototype.getTitulo = function () {
  return this.titulo;
};

Libro.prototype.mostrarDatos = function (tipo = 'console') {
  const mensaje = `${this.titulo}, de ${this.autor.toUpperCase()}`;

  if (tipo === 'alert') {
      alert(mensaje);
  } else {
      console.log(mensaje);
  }
};

let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown');
unLibro.mostrarDatosEnConsola();
unLibro.mostrarDatosEnAlert();

let nuevoLibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
nuevoLibro.mostrarDatos('alert');
nuevoLibro.mostrarDatos('console');
nuevoLibro.mostrarDatos();

