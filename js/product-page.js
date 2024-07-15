// import muttonimage1 from "../images/items/mutton/1.jpg";
// import muttonimage2 from "../images/items/mutton/2.jpeg";
// import muttonimage3 from "../images/items/mutton/3.jpg";
// import muttonimage4 from "../images/items/mutton/4.jpg";
// import muttonimage5 from "../images/items/mutton/5.jpeg";
// import muttonimage6 from "../images/items/mutton/6.jpg";
// import muttonimage7 from "../images/items/mutton/7.jpeg";
// import organsimage1 from "../images/items/mutton_organs/1.jpeg";
// import organsimage2 from "../images/items/mutton_organs/2.jpeg";
// import organsimage3 from "../images/items/mutton_organs/3.jpeg";
// import organsimage4 from "../images/items/mutton_organs/4.jpg";
// import fishimage1 from "../images/items/fish/1.jpeg";
// import fishimage2 from "../images/items/fish/2.jpeg";
// import fishimage3 from "../images/items/fish/3.jpg";
// import fishimage4 from "../images/items/fish/4.jpg";
// import fishimage5 from "../images/items/fish/5.jpeg";
// import fishimage6 from "../images/items/fish/6.jpg";
// import fishimage7 from "../images/items/fish/7.jpg";
// import fishimage8 from "../images/items/fish/8.jpeg";
// import fishimage9 from "../images/items/fish/9.jpg";
// import fishimage10 from "../images/items/fish/10.jpeg";
// import fishimage11 from "../images/items/fish/11.jpeg";
// import fishimage12 from "../images/items/fish/12.jpeg";
// import fishimage13 from "../images/items/fish/13.jpeg";
// import fishimage14 from "../images/items/fish/14.jpeg";
// import fishimage15 from "../images/items/fish/15.jpeg";
// import prawnsimage1 from "../images/items/prawns/1.jpeg";
// import prawnsimage2 from "../images/items/prawns/2.jpeg";
// import prawnsimage3 from "../images/items/prawns/3.jpg";
// import prawnsimage4 from "../images/items/prawns/4.jpeg";
// import prawnsimage5 from "../images/items/prawns/5.jpg";

// Mutton Items

const mutton_boneless = {
  imageUrl: new URL("../images/items/mutton/1.jpg", import.meta.url).href,
  name: "Mutton Boneless",
  description: "Perfect for joyous occasion",
  weight: "250 gms",
  pieces: "8-12 pieces",
  serves: "serves 3-4",
  rate: "₹240",
  also_available_in: "500gms,750gms,1kg",
};

const mutton_with_bone = {
  imageUrl: new URL("../images/items/mutton/2.jpeg", import.meta.url).href,
  name: "Mutton with bone",
  description: "Perfect for delicious curry",
  weight: "250 gms",
  pieces: "10-12 pieces",
  serves: "serves 3-4",
  rate: "₹220",
  also_available_in: "500gms,750gms,1kg",
};
const mutton_leg_set = {
  imageUrl: new URL("../images/items/mutton/3.jpg", import.meta.url).href,
  name: "mutton legs set bones",
  description: "delicious for soup recipe",
  weight: "four legs",
  pieces: "12-14 pieces",
  serves: "serves 4-6",
  rate: "₹220",
  also_available_in: "one unit",
};
const mutton_head = {
  imageUrl: new URL("../images/items/mutton/4.jpg", import.meta.url).href,
  name: "Mutton Head Meat/Thala Curry",
  description: "Cutted and Cleaned",
  weight: "500-700 gms",
  pieces: "2-3 pieces",
  serves: "serves 2-3",
  rate: "₹120",
  also_available_in: "One Unit",
};
const vankoli = {
  imageUrl: new URL("../images/items/mutton/5.jpeg", import.meta.url).href,
  name: "Vankoli Curry",
  description: "Fresh vankoli cleaned",
  weight: "1kg",
  pieces: "Varies",
  serves: "serves 6-8",
  rate: "₹1300",
  also_available_in: "1kg Only",
};
const breast_bone_mutton = {
  imageUrl: new URL("../images/items/mutton/6.jpg", import.meta.url).href,
  name: "Breast Bone",
  description: "For Tasty and Delicious Bone Soup",
  weight: "250gms",
  pieces: "Varies",
  serves: "serves 2-4",
  rate: "₹240",
  also_available_in: "500gms",
};
const bone_only_mutton = {
  imageUrl: new URL("../images/items/mutton/7.jpeg", import.meta.url).href,
  name: "Mutton Bone Only",
  description: "For Tasty and Delicious Bone Soup",
  weight: "250gms",
  pieces: "Varies",
  serves: "serves 2-4",
  rate: "₹150",
  also_available_in: "500gms",
};

// All mutton items are in one array

const mutton_array = [
  mutton_boneless,
  mutton_with_bone,
  mutton_leg_set,
  mutton_head,
  vankoli,
  breast_bone_mutton,
  bone_only_mutton,
];
// Mutton organs
const intestine = {
  imageUrl: new URL("../images/items/mutton_organs/1.jpeg", import.meta.url)
    .href,
  name: "Whole Mutton Intestine",
  description: "Cleaned and Cutted into pieces",
  weight: "500-700 gms",
  pieces: "One unit",
  serves: "serves 5-7",
  rate: "₹300-₹500",
  also_available_in: "one,two fully cleaned",
};
const brain = {
  imageUrl: new URL("../images/items/mutton_organs/2.jpeg", import.meta.url)
    .href,
  name: "Mutton Brain",
  description: "Cleaned mutton brain",
  weight: "300-500 gms",
  pieces: "one unit",
  serves: "serves 1-3",
  rate: "₹100",
  also_available_in: "On Pre-orders only",
};
const spleen = {
  imageUrl: new URL("../images/items/mutton_organs/3.jpeg", import.meta.url)
    .href,
  name: "Mutton Spleen/Manneeral",
  description: "Cleaned and Cutted into pieces",
  weight: "60-100 gms",
  pieces: "Varies",
  serves: "serves 2-4",
  rate: "₹100-₹150",
  also_available_in: "On Pre-orders only",
};
const lungs_liver = {
  imageUrl: new URL("../images/items/mutton_organs/4.jpg", import.meta.url)
    .href,
  name: "Mutton Lungs,Liver/Aattu Eeral",
  description: "Cleaned and Cutted into pieces",
  weight: "500-750 gms",
  pieces: "Varies",
  serves: "serves 4-7",
  rate: "₹800-₹900",
  also_available_in: "On Pre-orders only",
};
const mutton_organs = [intestine, brain, spleen, lungs_liver];

//Fish Items

const seela = {
  imageUrl: new URL("../images/items/fish/1.jpeg", import.meta.url).href,
  name: "Seela/King/Vanajaram Fish",
  description: "Royal taste of the Ocean",
  weight: "250 gms",
  pieces: "4-5 pieces",
  serves: "serves 2-3",
  rate: "₹400",
  also_available_in: "500gms,1kg",
};
const seela_head_and_tail = {
  imageUrl: new URL("../images/items/fish/2.jpeg", import.meta.url).href,
  name: "Seela/King/Vanajaram",
  description: "Head and Tail only",
  weight: "1 kg",
  pieces: "8-10 pieces",
  serves: "serves 4-6",
  rate: "₹500",
  also_available_in: "1kg only",
};
const ooli = {
  imageUrl: new URL("../images/items/fish/3.jpg", import.meta.url).href,
  name: "Ooli/Barracudas Fish",
  description: "Fresh barracudas slices only",
  weight: "250 gms",
  pieces: "4-5 pieces",
  serves: "serves 2-3",
  rate: "₹225",
  also_available_in: "500gms,750gms,1kg",
};
const ooli_head_and_tail = {
  imageUrl: new URL("../images/items/fish/4.jpg", import.meta.url).href,
  name: "Ooli/Barracudas Fish",
  description: "Head and Tail only",
  weight: "1kg",
  pieces: "8-10 pieces",
  serves: "serves 4-6",
  rate: "₹300",
  also_available_in: "1kg only",
};
const kannadi_paarai = {
  imageUrl: new URL("../images/items/fish/5.jpeg", import.meta.url).href,
  name: "Kannadi paarai/Diamond Trevally Fish",
  description: "Malabaar King Fish",
  weight: "250 gms",
  pieces: "4-5 pieces",
  serves: "serves 2-3",
  rate: "₹200",
  also_available_in: "500gms,750gms,1kg",
};
const kannadi_paarai_head_tail = {
  imageUrl: new URL("../images/items/fish/6.jpg", import.meta.url).href,
  name: "Kannadi paarai/Diamond Trevally Fish",
  description: "Head and Tail Only",
  weight: "1kg",
  pieces: "4-5 pieces",
  serves: "serves 4-6",
  rate: "₹400",
  also_available_in: "1kg Only",
};
const kelakka_whole = {
  imageUrl: new URL("../images/items/fish/7.jpg", import.meta.url).href,
  name: "kilangan/kelakka/Lady Fish",
  description: "Without cut/Whole",
  weight: "250 gms",
  pieces: "8-10 pieces",
  serves: "serves 2-4",
  rate: "₹150",
  also_available_in: "500gms,750gms,1kg",
};
const kelakka_cut = {
  imageUrl: new URL("../images/items/fish/8.jpeg", import.meta.url).href,
  name: "kilangan/kelakka/Lady Fish",
  description: "cut and cleaned",
  weight: "250 gms",
  pieces: "8-10 pieces",
  serves: "serves 2-4",
  rate: "₹200",
  also_available_in: "500gms,750gms,1kg",
};
const nethili_whole = {
  imageUrl: new URL("../images/items/fish/9.jpg", import.meta.url).href,
  name: "Nethili/Anchovy Fish",
  description: "Without cut/Whole",
  weight: "250 gms",
  pieces: "15-20 pieces",
  serves: "serves 4-6",
  rate: "₹125",
  also_available_in: "500gms,750gms,1kg",
};
const nethili_cutted = {
  imageUrl: new URL("../images/items/fish/10.jpeg", import.meta.url).href,
  name: "Nethili/Anchovy Fish",
  description: "cutted and cleaned",
  weight: "250 gms",
  pieces: "15-20 pieces",
  serves: "serves 4-6",
  rate: "₹150",
  also_available_in: "500gms,750gms,1kg",
};
const saalai_whole = {
  imageUrl: new URL("../images/items/fish/11.jpeg", import.meta.url).href,
  name: "Saalai/Sardine Fish",
  description: "Without cut/Whole fish",
  weight: "250 gms",
  pieces: "15-20",
  serves: "serves 4-6",
  rate: "₹60",
  also_available_in: "500gms,750gms,1kg",
};
const saalai_cutted = {
  imageUrl: new URL("../images/items/fish/12.jpeg", import.meta.url).href,
  name: "Saalai/Sardine Fish",
  description: "Cutted and Cleaned",
  weight: "250 gms",
  pieces: "15-20 pieces",
  serves: "serves 4-6",
  rate: "₹90",
  also_available_in: "500gms,750gms,1kg",
};
const pomfret = {
  imageUrl: new URL("../images/items/fish/13.jpeg", import.meta.url).href,
  name: "Pomfret/Butter Fish",
  description: "Cutted and Cleaned",
  weight: "250 gms",
  pieces: "2-3 pieces",
  serves: "serves 2-3",
  rate: "₹325",
  also_available_in: "500gms,750gms,1kg",
};
const velameen = {
  imageUrl: new URL("../images/items/fish/14.jpeg", import.meta.url).href,
  name: "Velameen/White Snapper Fish",
  description: "Cutted and Cleaned",
  weight: "500 gms",
  pieces: "4-6 pieces",
  serves: "serves 3-4",
  rate: "₹200",
  also_available_in: "1kg",
};
const parrot_fish = {
  imageUrl: new URL("../images/items/fish/15.jpeg", import.meta.url).href,
  name: "Parrot Fish/Kilimeen",
  description: "Cutted and Cleaned",
  weight: "250 gms",
  pieces: "varies",
  serves: "serves 2-3",
  rate: "₹200",
  also_available_in: "250gms, 500gms, 1kg",
};
// const seela_senai = {
//   imageUrl: "images/items/fish/16.jpg",
//   name: "Seela Fish Senai",
//   description: "fresh seela senai",
//   weight: "one set",
//   pieces: "varies",
//   serves: "serves 2-3",
//   rate: "₹150",
//   also_available_in: "Pre-Orders Only",
// };

// fish items objects are in one array

const fish_array = [
  seela,
  seela_head_and_tail,
  ooli,
  ooli_head_and_tail,
  kelakka_whole,
  kelakka_cut,
  kannadi_paarai,
  kannadi_paarai_head_tail,
  velameen,
  nethili_cutted,
  nethili_whole,
  saalai_cutted,
  saalai_whole,
  pomfret,
  parrot_fish,
  // seela_senai,
];
console.log(fish_array.length);

// Prawns and crabs

const farm_prawns = {
  imageUrl: new URL("../images/items/prawns/1.jpeg", import.meta.url).href,
  name: "Fresh farm prawns",
  description: "Cleaned and fresh prawns",
  weight: "250gms",
  pieces: "Varies",
  serves: "serves 3-4",
  rate: "₹200",
  also_available_in: "500gms, 750gms,1kg",
};
const sea_prawns = {
  imageUrl: new URL("../images/items/prawns/2.jpeg", import.meta.url).href,
  name: "Sea Prawns",
  description: "Cleaned and fresh sea prawns",
  weight: "250 gms",
  pieces: "Varies",
  serves: "serves 3-4",
  rate: "₹300",
  also_available_in: "500gms, 750gms,1kg",
};
const frozen_prawns_1 = {
  imageUrl: new URL("../images/items/prawns/3.jpg", import.meta.url).href,
  name: "Frozen big prawns",
  description: "Cleaned and Cutted into pieces",
  weight: "500gms",
  pieces: "40-60 pieces",
  serves: "serves 4-6",
  rate: "₹250",
  also_available_in: "500gms Only",
};
const frozen_prawns_2 = {
  imageUrl: new URL("../images/items/prawns/4.jpeg", import.meta.url).href,
  name: "Frozen Small prawns",
  description: "Cleaned and Cutted into pieces",
  weight: "500gms",
  pieces: "60-80 pieces",
  serves: "serves 4-6",
  rate: "₹250",
  also_available_in: "500gms Only",
};
const sea_crab = {
  imageUrl: new URL("../images/items/prawns/5.jpg", import.meta.url).href,
  name: "Fresh Sea Crab",
  description: "fresh crabs from sea",
  weight: "1kg",
  pieces: "6-7 pieces",
  serves: "serves 6-8",
  rate: "₹480",
  also_available_in: "1kg Only",
};
const prawns_array = [
  farm_prawns,
  sea_prawns,
  frozen_prawns_1,
  frozen_prawns_2,
  sea_crab,
];

function createProductHTML(item) {
  console.log("Creating product HTML for", item); // Debugging line
  console.log("Image URL:", item.imageUrl);

  return `<div id="w-node-_1085d080-58d0-fd9b-934b-cf5b2af90a01-900b0daa" class="product-card">
  <div class="product-image"><img src="${item.imageUrl}"
      loading="lazy" alt="Image of ${item.name}" class="image"></div>
  <div class="card-content">
    <h3 class="product-name">${item.name}</h3>
    <p class="product-hint">${item.description}</p>
    <p><span class="grams">${item.weight}</span><span class="grams">/</span><span class="product-hint">${item.pieces}</span><span class="grams">/</span><span class="product-hint">${item.serves}</span></p>
    <p class="product-price">${item.rate}</p>
    <p class="product-hint">Also Available in <span class="text-span">${item.also_available_in}</span></p>
    <a href="//api.whatsapp.com/send?phone=+917598678692&text=Your%20message%20here" target="_blank"
      class="order-now grams w-button">Order Now</a>
  </div>
</div>`;
}

// Function to display items in the product container
function displayItems(items) {
  const container = document.getElementById("product-container");
  container.innerHTML = items.map(createProductHTML).join("");
}

// Function to get URL parameter
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(name);
}

// Check for category URL parameter and display the corresponding items
document.addEventListener("DOMContentLoaded", () => {
  const category = getURLParameter("category");
  console.log("Category:", category); // Debugging line
  if (category === "Meat/Mutton") {
    displayItems(mutton_array);
  } else if (category === "Mutton Organs") {
    displayItems(mutton_organs);
  } else if (category === "Fish Steaks") {
    displayItems(fish_array);
  } else if (category === "Prawns") {
    displayItems(prawns_array);
  } else {
    // Default to displaying meat/mutton if no category is specified
    displayItems(mutton_array);
  }
});

// Add event listeners to category buttons
document.getElementById("mutton-category").addEventListener("click", () => {
  displayItems(mutton_array);
});
document
  .getElementById("mutton-organs-category")
  .addEventListener("click", () => {
    displayItems(mutton_organs);
  });
document.getElementById("fish-category").addEventListener("click", () => {
  displayItems(fish_array);
});
document.getElementById("prawns-category").addEventListener("click", () => {
  displayItems(prawns_array);
});
