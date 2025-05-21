 const cart = [];

    function addToCart(name, price) {
      cart.push({ name, price });
      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById('cartItems');
      const totalDisplay = document.getElementById('cartTotal');
      cartList.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}DZ`;
        cartList.appendChild(li);
        total += item.price;
      });
      totalDisplay.textContent = `Total : ${total}DZ`;
    }

   


function checkout() {
  document.getElementById("formulaireLivraison").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function envoyerCommande(event) {
  event.preventDefault();
  alert("Merci ! Votre commande a bien été envoyée. Nous vous livrerons bientôt.");
  document.getElementById("formulaireLivraison").style.display = "none";
  cart.length = 0;
  updateCart();
}