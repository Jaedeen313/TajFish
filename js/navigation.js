// navigation.js

function navigateToCategory(category) {
  console.log(category);
  window.location.href = `product.html?category=${category}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".year").innerHTML = new Date().getFullYear();
});
