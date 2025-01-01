// Récupérer tous les produits avec la classe "product-item"
const produits = document.getElementsByClassName("product-item");

// Récupérer l'élément du total de la commande
const totalCommande = document.getElementById("tyu");

// Fonction pour mettre à jour le total de la commande
function updateTotalCommande() {
    let total = 0;
    for (let i = 0; i < produits.length; i++) {
        const quantity = produits[i].querySelector(".product-quantity"); // Récupérer la quantité
        const price = produits[i].querySelector(".totalUnit .price"); // Récupérer le prix unitaire
        
        const unitPrice = parseInt(price.innerText) || 0;
        const productQuantity = parseInt(quantity.innerText) || 0;
        
        // Calculer le total pour chaque produit
        total += unitPrice * productQuantity;
    }
    
    // Mettre à jour le total affiché dans l'élément
    totalCommande.innerText = total.toLocaleString() + " XOF";
}

// Fonction pour gérer les événements des boutons (+, -, Supprimer)
function setupEventListeners() {
    const produits = document.getElementsByClassName("product-item");

    // Parcourir les produits et ajouter des événements
    for (let i = 0; i < produits.length; i++) {
        const btnMinus = produits[i].querySelector('.btn-minus');
        const btnPlus = produits[i].querySelector('.btn-plus');
        const btnDelete = produits[i].querySelector('.btn-delete');
        const quantitySpan = produits[i].querySelector('.product-quantity');

        // Diminuer la quantité
        btnMinus.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.innerText, 10);
            if (quantity > 0) {
                quantity--;
                quantitySpan.innerText = quantity;
                updateTotalCommande(); // Mise à jour du total après modification
            }
        });

        // Augmenter la quantité
        btnPlus.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.innerText, 10);
            quantity++;
            quantitySpan.innerText = quantity;
            updateTotalCommande(); // Mise à jour du total après modification
        });

        // Supprimer le produit
        btnDelete.addEventListener('click', () => {
            produits[i].remove(); // Supprimer l'élément du DOM
            updateTotalCommande(); // Mise à jour du total après suppression
        });
    }
}

// Initialisation des écouteurs d'événements
setupEventListeners();

// Mise à jour initiale du total
updateTotalCommande();

