const url = "https://japceibal.github.io/emercado-api/cats_products/101.json";

function showData(array) {
  const productListContainer = document.getElementById("product-list");
  let htmlContentToAppend = '';

  productsArray.forEach(category => {
    htmlContentToAppend += `
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + category.image + `" alt="product image" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <div class="mb-1">
                    <h4>`+ category.name + ' - ' + category.currency + ' ' + category.cost + `</h4> 
                    <p> `+ category.description + `</p> 
                    </div>
                    <small class="text-muted">` + category.soldCount + ` artículos</small> 
                </div>

            </div>
        </div>
    </div>
    `
    productListContainer.innerHTML = htmlContentToAppend;
  })

};

const productsArray = [];

fetch(url)
  .then(response => response.json())
  .then(data => {
    productsArray.push(...data.products);

    showData(productsArray);
  })
  .catch(error => console.error('Error al cargar los productos', error));