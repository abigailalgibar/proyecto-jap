function ObtenerInfo(ID) {
    const url = `https://japceibal.github.io/emercado-api/products/${ID}.json`;
    fetch(url)
      .then(response => response.json())
      .then(resultado => {
       const Titulo = document.getElementById("Titulo");
        Titulo.innerHTML = resultado.name;
        
       const Precio = document.getElementById("Precio");
       Precio.innerHTML = "Precio " + resultado.cost;

       const Descripcion = document.getElementById("Descripcion");
       Descripcion.innerHTML = "Descripcion " + resultado.description;

       const Categoria = document.getElementById("Categorias");
       Categoria.innerHTML = "Categorías " + resultado.category;

       const CantidadVendidos = document.getElementById("CantVendidos");
       CantidadVendidos.innerHTML = "Cantidad de Vendidos " + resultado.soldCount;
      })
      .catch(error => console.error('Ocurrió un error:', error)); 
  }
  
  
  // window.onload = function() {
  //   ObtenerInfo(localStorage.getItem("IdProducto"));
  // };


// Comentarios 

  function ObtenerComentarios(ID) {
    const url = `https://japceibal.github.io/emercado-api/products_comments/${ID}.json`;

    fetch(url)
      .then(response => response.json())
      .then(comentarios => {

        const mostrarComentarios = document.getElementById("comentarios");
        // ComentariosContainer.innerHTML = ""; // Limpia el contenido anterior
        
        comentarios.forEach(comentario => {

          const li = document.createElement("li");
          li.classList.add("lista"); // Clase para darle estilos a la lista

          // Mostrar Estrellas   
          let estrellasHTML = '';

          for (let i = 1; i <= 5; i++) {
            if (i <= comentario.score) {
              estrellasHTML += '<span class="fa fa-star checked"></span>';
            } else {
              estrellasHTML += '<span class="fa fa-star"></span>';
            }
          }    
          
          li.innerHTML = `
            <strong>${comentario.user}</strong> - ${comentario.dateTime} - ${estrellasHTML} <br>
            ${comentario.description}
           
       
          `;
          mostrarComentarios.appendChild(li);
        });
      })
      .catch(error => console.error('Ocurrió un error:', error));
  }
  
  window.onload = function() {
    const productId = localStorage.getItem("IdProducto");
    ObtenerInfo(productId);
    ObtenerComentarios(productId);
  };
  