// alert("hello world");
import fishimage1 from "../images/items/fish/1.jpeg";
import fishimage8 from "../images/items/fish/8.jpeg";
import muttonimage1 from "../images/items/mutton/1.jpg";

const seela = {
  imageUrl: fishimage1,
  name: "Seela/King/Vanajaram Fish",
  description: "Royal taste of the Ocean",
  weight: "250 gms",
  pieces: "4-5 pieces",
  serves: "serves 2-3",
  rate: "₹400",
  also_available_in: "500gms,1kg",
};
const kelakka_cut = {
  imageUrl: fishimage8,
  name: "kilangan/kelakka Fish",
  description: "cut and cleaned",
  weight: "250 gms",
  pieces: "8-10 pieces",
  serves: "serves 2-4",
  rate: "₹200",
  also_available_in: "500gms,750gms,1kg",
};
const mutton_boneless = {
  imageUrl: muttonimage1,
  name: "Mutton Boneless",
  description: "Perfect for joyous occasion",
  weight: "250 gms",
  pieces: "8-12 pieces",
  serves: "serves 3-4",
  rate: "₹240",
  also_available_in: "500gms,750gms,1kg",
};
const most_popular = [seela, kelakka_cut, mutton_boneless];
function createMostpopularHTML(item) {
  console.log("Creating product HTML for", item);
  return `<div class="product-card">
          <div class="product-image"><img src="${item.imageUrl}"
              loading="lazy" 
              alt="${item.name}" class="image"></div>
          <div class="card-content">
            <h3 class="product-name">${item.name}</h3>
            <p class="product-hint">${item.description}</p>
            <p class="paragraph-8"><span class="grams">${item.weight}</span><span class="grams">/</span><span
                class="product-hint">${item.pieces}</span><span class="grams">/</span><span class="product-hint">${item.serves}</span></p>
            <p class="product-price">${item.rate}</p>
            <p class="product-hint">Also Available in <span class="text-span">${item.also_available_in}</span></p>
            <a href="tel:+917598678692" class="order-now grams w-button">Order Now</a>
          </div>
        </div>`;
}
// Function to display items in the product container
function displayPopularitems(items) {
  const container = document.getElementById("mostPopular");
  container.innerHTML = items.map(createMostpopularHTML).join("");
}
displayPopularitems(most_popular);
