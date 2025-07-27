const items = [
  { name: "Aesthetic Books", price: 22, image: "https://tse4.mm.bing.net/th?id=OIP.OSmrioVIekq9ZjYWC02JGQHaEn&pid=Api&P=0&h=180", stock: 10, category: "others" },
  { name: "Beige Pants", price: 45, image: "https://tse3.mm.bing.net/th?id=OIP.UmsQZ1l5AtujpD7CR2tDhgHaKq&pid=Api&P=0&h=180", stock: 12, category: "clothing" },
  { name: "Black Belt", price: 12, image: "https://www.montblanc.com/variants/images/19971654706771914/A/w2500.jpg", stock: 25, category: "accessories" },
  { name: "Black Trousers", price: 30, image: "https://tse4.mm.bing.net/th?id=OIP.03kGNLItA-2t_gKJWMNo4QHaI4&pid=Api&P=0&h=180", stock: 18, category: "clothing" },
  { name: "Blue Jacket", price: 55, image: "https://i.pinimg.com/originals/c7/8a/e8/c78ae83fee94941baeffdb1450d9c6ed.jpg", stock: 5, category: "clothing" },
  { name: "Blue Jeans", price: 35, image: "https://tse1.mm.bing.net/th?id=OIP.-ZeHYH2kSeWSgpcRbcTDZAHaJ1&pid=Api&P=0&h=180", stock: 15, category: "clothing" },
  { name: "Earrings", price: 18, image: "https://sp.yimg.com/ib/th?id=OPAC.m5ZtwsGFbv7YIQ474C474&o=5&pid=21.1&w=160&h=105", stock: 20, category: "accessories" },
  { name: "Green Hoodie", price: 40, image: "https://cdn-img.prettylittlething.com/d/2/4/f/d24fba415a3b5e38284eb1e3800e16635812ce8d_cna8800_3.jpg", stock: 10, category: "clothing" },
  { name: "Green Skirt", price: 27, image: "https://tse1.mm.bing.net/th?id=OIP.kfRsO_GG3wabFdHEAj7WkQHaJz&pid=Api&p=0&h=180", stock: 12, category: "clothing" },
  { name: "Laptop", price: 650, image: "https://tse3.mm.bing.net/th?id=OIP.TmdVZty6FfKab0vUeFwvaAHaEm&pid=Api&p=0&h=180", stock: 1, category: "electronics" },
  { name: "Luggage Bag", price: 95, image: "https://tse4.mm.bing.net/th?id=OIP.XioPKUL4-ushHAmxylOz_AHaHa&pid=Api&P=0&h=180", stock: 3, category: "accessories" },
  { name: "Mascara", price: 18, image: "https://tse4.mm.bing.net/th?id=OIP.WFRrZi-f8BJX0dNv5RDd2QHaHa&pid=Api&P=0&h=180", stock: 30, category: "accessories" },
  { name: "Paints", price: 15, image: "https://artincontext.org/wp-content/uploads/2021/01/Best-Watercolor-Set.jpg", stock: 20, category: "others" },
  { name: "Photo Frame", price: 28, image: "https://tse4.mm.bing.net/th?id=OIP.IvKc4uCO1CSaJbKfQJjtfQHaHa&pid=Api&P=0&h=180", stock: 10, category: "others" },
  { name: "Red Jewel", price: 70, image: "https://tse1.mm.bing.net/th?id=OIP.7nA61rF02w-Umpbq8RbnvwHaEK&pid=Api&P=0&h=180", stock: 5, category: "accessories" },
  { name: "Red Maxi Dress", price: 50, image: "https://i.pinimg.com/originals/17/5f/04/175f0424af915cbe9be7c7248e1663a5.jpg", stock: 10, category: "clothing" },
  { name: "Red Skirt", price: 25, image: "https://www.lifewithmar.com/wp-content/uploads/2022/07/image-1-683x1024.png", stock: 15, category: "clothing" },
  { name: "Rings", price: 25, image: "https://tse2.mm.bing.net/th?id=OIP.c8pue0mcm70ncXnD3Dco1AHaFe&pid=Api&P=0&h=180", stock: 15, category: "accessories" },
  { name: "Smartwatch", price: 120, image: "https://tse3.mm.bing.net/th?id=OIP.45f3iLLTv6F7qaZ55d0QpwHaHa&pid=Api&P=0&h=180", stock: 4, category: "electronics" },
  { name: "Sneakers", price: 60, image: "https://images.journeys.com/images/products/1_738035_ZM_ALT1C.JPG", stock: 8, category: "clothing" },
  { name: "Sports Cap", price: 10, image: "https://www.jockey.in/cdn/shop/files/CP23_BLACK_S122_JKY_1.webp?v=1710743091&width=560", stock: 30, category: "accessories" },
  { name: "Water Bottle", price: 8, image: "https://tse4.mm.bing.net/th?id=OIP.sLySnCRmeLoYlK_Nf910tAHaHa&pid=Api&P=0&h=180", stock: 50, category: "others" },
  { name: "White Shirt", price: 20, image: "https://image.hm.com/assets/hm/ee/5d/ee5d1b013c4c0fe18693ff5b4ca9ecf0154ffb5c.jpg?imwidth=1260", stock: 20, category: "clothing" },
  { name: "Wooden Table", price: 150, image: "https://tse3.mm.bing.net/th?id=OIP.ryxkLB0B32IV3CNKfs1RKgHaFj&pid=Api&P=0&h=180", stock: 2, category: "others" },
  { name: "Yellow T-Shirt", price: 15, image: "http://www.clipartbest.com/cliparts/LTK/zRG/LTKzRG5yc.jpg", stock: 25, category: "clothing" }
];

const cart = {};
const wishlist = [];
const reservedStock = {};
const tableBody = document.querySelector("#purchaseTable tbody");
const totalPriceEl = document.getElementById("totalPrice");
const taxEl = document.getElementById("tax");
const netEl = document.getElementById("net");
const itemContainer = document.getElementById("itemContainer");
const receiptEl = document.getElementById("receipt");
let loyaltyPoints = 4200;
let currentCurrency = localStorage.getItem("preferredCurrency") || "USD";
const exchangeRate = 83.5;
let customerProfile = {
  name: "Kanishk",
  email: "kanishk@gmail.com",
  phone: "+919843407259",
  address: "",
  preferredCurrency: currentCurrency
};
let purchaseHistory = [];
let pointsHistory = [
  { date: "2025-07-20", action: "Earned", points: 2000, reason: "Initial signup bonus" },
  { date: "2025-07-22", action: "Earned", points: 2200, reason: "Purchase completed" }
];

function getCurrencySymbol() {
  return currentCurrency === "USD" ? "$" : "₹";
}

function convertPrice(price) {
  if (currentCurrency === "INR") {
    return (price * exchangeRate).toFixed(2);
  }
  return price.toFixed(2);
}

function toggleCurrency() {
  currentCurrency = currentCurrency === "USD" ? "INR" : "USD";
  document.querySelector(".currency-toggle-btn").textContent = currentCurrency;
  renderItems();
  updateTable();
  if (receiptEl.style.display === "block") {
    generateReceipt();
  }
  if (document.getElementById("billingModal").style.display === "block") {
    updateBillingSummary();
  }
}

function renderItems(filteredItems = items) {
  itemContainer.innerHTML = "";
  filteredItems.forEach(item => {
    const div = document.createElement("div");
    div.className = `item ${document.body.classList.contains('dark-theme') ? 'dark-theme' : ''}`;
    div.tabIndex = 0;
    const isInWishlist = wishlist.includes(item.name);
    const price = convertPrice(item.price);
    const symbol = getCurrencySymbol();
    div.innerHTML = `
      <button class="wishlist-btn" onclick="toggleWishlist('${item.name}', event)">${isInWishlist ? '❤️' : '🤍'}</button>
      <img src="${item.image}" alt="${item.name}" />
      <div class="name">${item.name}</div>
      <div class="price">${symbol}${price} (Stock: ${item.stock})</div>
    `;
    div.addEventListener("click", (e) => {
      if (!e.target.classList.contains("wishlist-btn")) {
        addToCart(item.name, item.price, item.stock);
      }
    });
    div.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        addToCart(item.name, item.price, item.stock);
      }
    });
    itemContainer.appendChild(div);
  });
}

function filterItems() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  let filteredItems = items;
  if (category !== "all") {
    filteredItems = filteredItems.filter(item => item.category === category);
  }
  filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(searchTerm));
  renderItems(filteredItems);
}

function toggleWishlist(name, event) {
  event.stopPropagation();
  const index = wishlist.indexOf(name);
  if (index === -1) {
    wishlist.push(name);
    showToast(`${name} added to wishlist!`, "success");
  } else {
    wishlist.splice(index, 1);
    showToast(`${name} removed from wishlist!`, "success");
  }
  renderItems();
  updateWishlistModal();
}

function updateWishlistModal() {
  const wishlistContent = document.getElementById("wishlistContent");
  if (wishlist.length === 0) {
    wishlistContent.innerHTML = "<p>Your wishlist is empty.</p>";
  } else {
    let content = "<ul>";
    wishlist.forEach(itemName => {
      const item = items.find(i => i.name === itemName);
      const price = convertPrice(item.price);
      const symbol = getCurrencySymbol();
      content += `<li>${item.name} - ${symbol}${price}</li>`;
    });
    content += "</ul>";
    wishlistContent.innerHTML = content;
  }
}

function openWishlistModal() {
  updateWishlistModal();
  const modalContent = document.getElementById("wishlistModal").querySelector(".modal-content");
  modalContent.classList.toggle("dark-theme", document.body.classList.contains("dark-theme"));
  document.getElementById("wishlistModal").style.display = "block";
  modalContent.querySelector(".close").focus();
}

function closeWishlistModal() {
  document.getElementById("wishlistModal").style.display = "none";
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const modals = document.querySelectorAll(".modal-content");
  modals.forEach(modal => modal.classList.toggle("dark-theme"));
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("dark-theme");
  const receipt = document.querySelector(".receipt");
  receipt.classList.toggle("dark-theme");
  const items = document.querySelectorAll(".item");
  items.forEach(item => item.classList.toggle("dark-theme"));
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    const modals = document.querySelectorAll(".modal-content");
    modals.forEach(modal => modal.classList.add("dark-theme"));
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("dark-theme");
    const receipt = document.querySelector(".receipt");
    receipt.classList.add("dark-theme");
    const items = document.querySelectorAll(".item");
    items.forEach(item => item.classList.add("dark-theme"));
  }
  document.getElementById("preferredCurrency").value = currentCurrency;
});

function openCartModal() {
  const cartContent = document.getElementById("cartContent");
  if (Object.keys(cart).length === 0) {
    cartContent.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    let content = "<ul>";
    const symbol = getCurrencySymbol();
    for (let item in cart) {
      const price = convertPrice((cart[item].price * cart[item].qty));
      content += `<li>${item} x${cart[item].qty} - ${symbol}${price}</li>`;
    }
    content += "</ul>";
    cartContent.innerHTML = content;
  }
  const modalContent = document.getElementById("cartModal").querySelector(".modal-content");
  modalContent.classList.toggle("dark-theme", document.body.classList.contains("dark-theme"));
  document.getElementById("cartModal").style.display = "block";
  modalContent.querySelector(".close-button").focus();
}

function closeCartModal() {
  document.getElementById("cartModal").style.display = "none";
}

function openBillingModal() {
  if (Object.keys(cart).length === 0) {
    showToast("Cart is empty! Add items to proceed to payment.", "error");
    return;
  }
  updateBillingSummary();
  const modalContent = document.getElementById("billingModal").querySelector(".modal-content");
  modalContent.classList.toggle("dark-theme", document.body.classList.contains("dark-theme"));
  document.getElementById("billingModal").style.display = "block";
  modalContent.querySelector(".close").focus();
  document.getElementById("loyaltyPointsInput").addEventListener("input", updateBillingSummary);
}

function closeBillingModal() {
  document.getElementById("billingModal").style.display = "none";
  document.getElementById("loyaltyPointsInput").removeEventListener("input", updateBillingSummary);
}

function startNewOrder() {
  Object.keys(cart).forEach(item => {
    const qty = cart[item].qty;
    const foundItem = items.find(i => i.name === item);
    if (foundItem) {
      foundItem.stock += qty;
    }
    if (reservedStock[item]) {
      clearTimeout(reservedStock[item].timer);
      delete reservedStock[item];
    }
    delete cart[item];
  });
  receiptEl.style.display = "none";
  receiptEl.innerHTML = "";
  document.getElementById("searchInput").value = "";
  document.getElementById("categoryFilter").value = "all";
  updateTable();
  refreshItems();
  showToast("New order started!", "success");
}

function openTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active");
  });
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById(tabName).classList.add("active");
  document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add("active");
  if (tabName === "history") {
    updatePurchaseHistory();
  } else if (tabName === "points") {
    updatePointsHistory();
  }
}

function saveProfile() {
  const name = document.getElementById("customerName").value.trim();
  const email = document.getElementById("customerEmail").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  if (!name) {
    showToast("Name cannot be empty!", "error");
    return;
  }
  if (!emailRegex.test(email)) {
    showToast("Invalid email format!", "error");
    return;
  }
  if (!phoneRegex.test(phone)) {
    showToast("Invalid phone number format!", "error");
    return;
  }

  customerProfile.name = name;
  customerProfile.email = email;
  customerProfile.phone = phone;
  showToast("Profile updated successfully!", "success");
}

function saveAddress() {
  const address = document.getElementById("customerAddress").value.trim();
  if (!address) {
    showToast("Address cannot be empty!", "error");
    return;
  }
  customerProfile.address = address;
  showToast("Address saved successfully!", "success");
}

function savePreferences() {
  const preferredCurrency = document.getElementById("preferredCurrency").value;
  customerProfile.preferredCurrency = preferredCurrency;
  currentCurrency = preferredCurrency;
  localStorage.setItem("preferredCurrency", preferredCurrency);
  document.querySelector(".currency-toggle-btn").textContent = currentCurrency;
  renderItems();
  updateTable();
  if (receiptEl.style.display === "block") {
    generateReceipt();
  }
  if (document.getElementById("billingModal").style.display === "block") {
    updateBillingSummary();
  }
  showToast("Preferences saved successfully!", "success");
}

function updatePurchaseHistory() {
  const historyList = document.getElementById("purchaseHistory");
  if (purchaseHistory.length === 0) {
    historyList.innerHTML = "<li>No purchase history available.</li>";
  } else {
    let content = "";
    purchaseHistory.forEach(order => {
      content += `<li>${order.date}: ${order.items} - ${getCurrencySymbol()}${convertPrice(order.total)}</li>`;
    });
    historyList.innerHTML = content;
  }
}

function updatePointsHistory() {
  const pointsList = document.getElementById("pointsHistory");
  document.getElementById("currentPoints").textContent = loyaltyPoints;
  if (pointsHistory.length === 0) {
    pointsList.innerHTML = "<li>No points history available.</li>";
  } else {
    let content = "";
    pointsHistory.forEach(entry => {
      content += `<li>${entry.date}: ${entry.action} ${entry.points} points (${entry.reason})</li>`;
    });
    pointsList.innerHTML = content;
  }
}

function updateBillingSummary() {
  const billingSummary = document.getElementById("billingSummary");
  const pointsInput = document.getElementById("loyaltyPointsInput");
  const discountInfo = document.getElementById("discountInfo");
  let pointsToUse = parseInt(pointsInput.value) || 0;
  
  if (pointsToUse > loyaltyPoints) {
    pointsToUse = loyaltyPoints;
    pointsInput.value = loyaltyPoints;
  }
  if (pointsToUse < 0) {
    pointsToUse = 0;
    pointsInput.value = 0;
  }

  const total = calculateTotal();
  const discount = Math.min(pointsToUse / 100, total * 0.2);
  const discountedTotal = total - discount;
  const tax = discountedTotal * 0.10;
  const net = discountedTotal + tax;

  const symbol = getCurrencySymbol();
  let content = `<strong>Order Summary:</strong><br>`;
  for (let item in cart) {
    const price = convertPrice(cart[item].price * cart[item].qty);
    content += `${item} x${cart[item].qty} - ${symbol}${price}<br>`;
  }
  content += `<br>`;
  content += `Subtotal: ${symbol}${convertPrice(total)}<br>`;
  if (discount > 0) {
    content += `Discount: ${symbol}${convertPrice(discount)} (${pointsToUse} points)<br>`;
  }
  content += `Tax (10%): ${symbol}${convertPrice(tax)}<br>`;
  content += `Total: ${symbol}${convertPrice(net)}<br>`;

  billingSummary.innerHTML = content;
  discountInfo.textContent = pointsToUse > 0 
    ? `Using ${pointsToUse} points for ${symbol}${convertPrice(discount)} discount`
    : "Enter points to see discount";
}

function reserveStock(itemName, qty) {
  if (!reservedStock[itemName]) {
    reservedStock[itemName] = { qty: 0, timer: null };
  }
  reservedStock[itemName].qty += qty;
  if (reservedStock[itemName].timer) {
    clearTimeout(reservedStock[itemName].timer);
  }
  reservedStock[itemName].timer = setTimeout(() => {
    const item = items.find(i => i.name === itemName);
    if (item) {
      item.stock += reservedStock[itemName].qty;
      delete reservedStock[itemName];
      refreshItems();
      showToast(`${itemName} reservation expired!`, "warning");
    }
  }, 10 * 60 * 1000);
}

function addToCart(name, price, stock) {
  if (stock <= 0) {
    showToast(`${name} is out of stock!`, "error");
    return;
  }
  if (cart[name]) {
    cart[name].qty += 1;
  } else {
    cart[name] = { qty: 1, price };
  }
  updateInventory(name, 1);
  reserveStock(name, 1);
  updateTable();
  showToast(`${name} added to cart!`, "success");

  const item = items.find(i => i.name === name);
  if (item.stock <= 5) {
    showToast(`Low stock alert: Only ${item.stock} ${name} left!`, "warning");
  }
}

function updateCartQuantity(name, newQty) {
  newQty = parseInt(newQty);
  const item = items.find(i => i.name === name);
  const currentQty = cart[name] ? cart[name].qty : 0;

  if (isNaN(newQty) || newQty < 0) {
    showToast("Quantity must be a positive number!", "error");
    updateTable();
    return;
  }

  if (newQty > item.stock + currentQty) {
    showToast(`Cannot exceed available stock (${item.stock + currentQty}) for ${name}!`, "error");
    updateTable();
    return;
  }

  const qtyChange = currentQty - newQty;
  item.stock += qtyChange;
  if (newQty === 0) {
    delete cart[name];
    if (reservedStock[name]) {
      clearTimeout(reservedStock[name].timer);
      delete reservedStock[name];
    }
    showToast(`${name} removed from cart!`, "success");
  } else {
    cart[name].qty = newQty;
    reserveStock(name, newQty - currentQty);
    showToast(`${name} quantity updated to ${newQty}!`, "success");
  }

  refreshItems();
  updateTable();
  if (item.stock <= 5 && item.stock > 0) {
    showToast(`Low stock alert: Only ${item.stock} ${name} left!`, "warning");
  }
}

function removeFromCart(name) {
  if (cart[name]) {
    const qty = cart[name].qty;
    const item = items.find(i => i.name === name);
    item.stock += qty;
    if (reservedStock[name]) {
      clearTimeout(reservedStock[name].timer);
      delete reservedStock[name];
    }
    delete cart[name];
    refreshItems();
    updateTable();
    showToast(`${name} removed from cart!`, "success");
  }
}

function updateInventory(name, qty) {
  const item = items.find(i => i.name === name);
  if (item) {
    item.stock -= qty;
  }
  refreshItems();
}

function refreshItems() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  let filteredItems = items;
  if (category !== "all") {
    filteredItems = filteredItems.filter(item => item.category === category);
  }
  filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(searchTerm));
  renderItems(filteredItems);
}

function redeemReward() {
  if (loyaltyPoints < 1000) {
    showToast("Not enough points to redeem! Minimum 1000 points required.", "error");
    return;
  }
  const pointsToRedeem = Math.min(loyaltyPoints, 5000);
  loyaltyPoints -= pointsToRedeem;
  pointsHistory.push({
    date: new Date().toLocaleDateString(),
    action: "Spent",
    points: pointsToRedeem,
    reason: "Reward redemption"
  });
  document.querySelector(".stats div:nth-child(2)").innerHTML = `<strong>REWARD</strong><br>${loyaltyPoints}`;
  updateTable();
  showToast(`${pointsToRedeem} points redeemed!`, "success");
}

function calculateTotal() {
  let total = 0;
  for (let item in cart) {
    total += cart[item].price * cart[item].qty;
  }
  return total;
}

function updateTable() {
  tableBody.innerHTML = "";
  const total = calculateTotal();
  const tax = total * 0.10;
  const net = total + tax;

  const convertedTotal = convertPrice(total);
  const convertedTax = convertPrice(tax);
  const convertedNet = convertPrice(net);
  const symbol = getCurrencySymbol();

  for (let item in cart) {
    const row = document.createElement("tr");
    const qty = cart[item].qty;
    const price = convertPrice(cart[item].price * qty);
    const itemStock = items.find(i => i.name === item).stock;
    row.innerHTML = `
      <td>${item}</td>
      <td><input type="number" class="qty-input" value="${qty}" min="0" max="${itemStock + qty}" onchange="updateCartQuantity('${item}', this.value)"></td>
      <td>${symbol}${price}</td>
      <td><button class="remove-btn" onclick="removeFromCart('${item}')">Remove</button></td>
    `;
    tableBody.appendChild(row);
  }

  totalPriceEl.textContent = `Total: ${symbol}${convertedTotal}`;
  taxEl.textContent = `Tax (10%): ${symbol}${convertedTax}`;
  netEl.textContent = `Net: ${symbol}${convertedNet}`;
}

function emailReceipt() {
  showToast("Receipt sent to your email!", "success");
}

function confirmPayment() {
  if (Object.keys(cart).length === 0) {
    showToast("Cart is empty! Add items to proceed to payment.", "error");
    return;
  }

  const paymentMethod = document.getElementById("paymentMethod").value;
  const pointsInput = document.getElementById("loyaltyPointsInput");
  let pointsToUse = parseInt(pointsInput.value) || 0;

  if (pointsToUse > loyaltyPoints) {
    showToast("Not enough loyalty points!", "error");
    return;
  }

  generateReceipt(paymentMethod, pointsToUse);
  closeBillingModal();
}

function generateReceipt(paymentMethod, pointsUsed) {
  const symbol = getCurrencySymbol();
  const total = calculateTotal();
  const discount = Math.min(pointsUsed / 100, total * 0.2);
  const discountedTotal = total - discount;
  const tax = discountedTotal * 0.10;
  const net = discountedTotal + tax;

  const itemsList = Object.keys(cart).map(item => `${item} x${cart[item].qty}`).join(", ");
  purchaseHistory.push({
    date: new Date().toLocaleDateString(),
    items: itemsList,
    total: net
  });

  if (pointsUsed > 0) {
    pointsHistory.push({
      date: new Date().toLocaleDateString(),
      action: "Spent",
      points: pointsUsed,
      reason: "Purchase discount"
    });
  }
  loyaltyPoints -= pointsUsed;
  const earnedPoints = Math.floor(net * 10);
  loyaltyPoints += earnedPoints;
  pointsHistory.push({
    date: new Date().toLocaleDateString(),
    action: "Earned",
    points: earnedPoints,
    reason: "Purchase completed"
  });

  document.querySelector(".stats div:nth-child(2)").innerHTML = `<strong>REWARD</strong><br>${loyaltyPoints}`;

  let paymentMethodText;
  switch(paymentMethod) {
    case 'cod':
      paymentMethodText = 'Cash on Delivery';
      break;
    case 'upi':
      paymentMethodText = 'UPI';
      break;
    case 'card':
      paymentMethodText = 'Credit/Debit Card';
      break;
  }

  let receiptContent = `
    <strong>Receipt</strong><br>
    Date: ${new Date().toLocaleString()}<br>
    Customer: ${customerProfile.name}<br>
    Payment Method: ${paymentMethodText}<br>
    <br><strong>Items:</strong><br>
  `;
  for (let item in cart) {
    const price = convertPrice(cart[item].price * cart[item].qty);
    receiptContent += `${item} x${cart[item].qty} - ${symbol}${price}<br>`;
  }
  receiptContent += `<br>`;
  receiptContent += `Subtotal: ${symbol}${convertPrice(total)}<br>`;
  if (discount > 0) {
    receiptContent += `Discount: ${symbol}${convertPrice(discount)} (${pointsUsed} points)<br>`;
  }
  receiptContent += `Tax (10%): ${symbol}${convertPrice(tax)}<br>`;
  receiptContent += `Total: ${symbol}${convertPrice(net)}<br>`;
  receiptContent += `
    <br>Thank you for shopping with us!
    <div class="receipt-actions">
      <button onclick="emailReceipt()">Email Receipt</button>
    </div>
  `;
  receiptEl.innerHTML = receiptContent;
  receiptEl.style.display = "block";
  showToast("Payment successful! Receipt generated.", "success");

  Object.keys(cart).forEach(item => {
    if (reservedStock[item]) {
      clearTimeout(reservedStock[item].timer);
      delete reservedStock[item];
    }
    delete cart[item];
  });
  updateTable();
}

function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.background = type === "error" ? "#ff4444" : type === "warning" ? "#ffbb33" : "#28a745";
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

function handleModalKey(event) {
  if (event.key === "Escape") {
    closeModal();
    closeWishlistModal();
    closeCartModal();
    closeBillingModal();
  }
}

function openModal() {
  const modalContent = document.getElementById("customerModal").querySelector(".modal-content");
  modalContent.classList.toggle("dark-theme", document.body.classList.contains("dark-theme"));
  document.getElementById("customerModal").style.display = "block";
  document.getElementById("customerName").value = customerProfile.name;
  document.getElementById("customerEmail").value = customerProfile.email;
  document.getElementById("customerPhone").value = customerProfile.phone;
  document.getElementById("customerAddress").value = customerProfile.address;
  document.getElementById("preferredCurrency").value = customerProfile.preferredCurrency;
  updatePurchaseHistory();
  updatePointsHistory();
  modalContent.querySelector(".close").focus();
}

function closeModal() {
  document.getElementById("customerModal").style.display = "none";
}

renderItems();