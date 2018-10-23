window.onload = function () {
  //alert("carregou");
  showProducts();
};

function getProducts() {
  return data["items"];
}

function adicionarProduto () {
 let enviarProduto = document.getElementById("botao-enviar");

  enviarProduto.addEventListener('click', function(event){
      event.preventDefault();

    let novaVenda =  {
      "product": {
          "id": " ",
          "name": document.getElementById("novo-produto").value,
          "images": [document.getElementById("nova-imagem").value],
          "price": {
              "value": document.getElementById("novo-preco").value,
              "installments": "",
              "installmentValue": ""
          }
      }
    };

    // novaVenda["product"]["name"] = document.getElementById("novo-produto").value;
    // novaVenda["product"]["images"].push(document.getElementById("nova-imagem").value);
    // novaVenda["product"]["price"]["value"] = document.getElementById("novo-preco").value;


    data["items"].push(novaVenda);
    console.log(data)
    showProducts();
  });
}

showProducts();
adicionarProduto();

function showProducts(){

  // for (produto of getProducts()){
  //   let productDiv = document.getElementById("products");
  //   productDiv.innerHTML += "<div class='product'>" 
  //   + "<img src=" + produto["product"]["images"][0] + " class='product-img' />"
  //   + "<div class='text-name'>" 
  //   + "<h3 class='product-name'>$" + produto["product"]["name"] + "</h3>"
  //   + "</div>" + "<div class='text-price'>"
  //   + "<p class='product-price'>" 
  //   + Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
  //   + "</p>" + "</div>" + "</div>"
  // }

//`template string`

  let productDiv = document.getElementById("products");
  productDiv.innerHTML = `
    ${getProducts().map((produto) => `
      <div class="product">
        <img src="${produto["product"]["images"][0]}" class="product-img" />
        <div class="text-name">
          <h3 class="product-name">${produto["product"]["name"]}</h3>
        </div>
        <div class="text-price">
          <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      `).join("")}
  `
  }

