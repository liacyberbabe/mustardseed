const products = [
  {name:"Heavyweight Box Tee", category:"heavyweight", meta:"260 GSM · 100% Cotton", price:"Wholesale", image:"PRODUCT IMAGE 01"},
  {name:"Premium Everyday Tee", category:"tees", meta:"220 GSM · 100% Cotton", price:"Wholesale", image:"PRODUCT IMAGE 02"},
  {name:"Classic Fleece Hoodie", category:"fleece", meta:"450 GSM · Cotton Blend", price:"Wholesale", image:"PRODUCT IMAGE 03"},
  {name:"Heavyweight Crew", category:"heavyweight", meta:"420 GSM · Cotton Blend", price:"Wholesale", image:"PRODUCT IMAGE 04"},
  {name:"Essential Long Sleeve", category:"tees", meta:"240 GSM · 100% Cotton", price:"Wholesale", image:"PRODUCT IMAGE 05"},
  {name:"Relaxed Sweatpant", category:"bottoms", meta:"430 GSM · Cotton Blend", price:"Wholesale", image:"PRODUCT IMAGE 06"}
];

function productCard(p){
  return `<article class="product-card" data-category="${p.category}">
    <a href="contact.html">
      <div class="product-image"><span>${p.image}</span></div>
      <div class="product-info"><div><div class="product-name">${p.name}</div><div class="product-meta">${p.meta}</div></div><div class="product-price">${p.price}</div></div>
    </a>
  </article>`;
}

const grid = document.querySelector("#product-grid");
if(grid){
  const count = document.querySelector("#product-count");
  const render = (filter="all") => {
    const list = products.filter(p => filter==="all" || p.category===filter);
    grid.innerHTML = list.map(productCard).join("");
    if(count) count.textContent = `${list.length} products`;
  };
  render();
  document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  }));
}

const featured = document.querySelector("#featured-products");
if(featured) featured.innerHTML = products.slice(0,3).map(productCard).join("");

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if(menu && nav) menu.addEventListener("click",()=>{
  nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", nav.classList.contains("open"));
});
