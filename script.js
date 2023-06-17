// script.js

// Sample product data (replace with your actual product data)
const products = [
    {
      name: "Product 1",
      image: "newArrival6.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Product 2",
      image: "newArrival3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Product 3",
      image: "newArrival4.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Product 4",
      image: "newArrival.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];
  
  // Function to generate product cards
  function generateProductCards() {
    const productRow = document.getElementById("productRow");
    let html = "";
  
    products.forEach((product) => {
      html += `
        <div class="col-lg-3 col-md-6">
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="#" class="btn viewDetails">View Details</a>
          </div>
        </div>
      `;
    });
  
    productRow.innerHTML = html;
  }
  

  
  // Generate product cards on page load
  generateProductCards();
  
  const signupButton = document.getElementById("signupButton");
const signupModal = document.getElementById("signupModal");
const blurBackground = document.getElementById("blurBackground");
const close = document.getElementsByClassName("close")[0];

signupButton.addEventListener("click", function () {
  signupModal.style.display = "block";
  blurBackground.style.display = "block";
});

close.addEventListener("click", function () {
  signupModal.style.display = "none";
  blurBackground.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === blurBackground) {
    signupModal.style.display = "none";
    blurBackground.style.display = "none";
  }
});






