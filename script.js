const merchant = document.querySelector(".pay__merchant-box");
const overlay = document.querySelector(".overlay");
const checkoutBtn = document.querySelector(".btn--finish");

merchant.addEventListener("click", (e) => {
  e.preventDefault();

  const target = e.target.classList.contains("pay__merchant");

  if (!target) return;

  merchant.querySelectorAll("img").forEach((img) => {
    img.classList.remove("selected");
    e.target.classList.add("selected");
  });
});

checkoutBtn.addEventListener("click", (e) => {
  e.preventDefault();

  overlay.style.display = "block";
});

overlay.addEventListener("click", (e) => {
  const target = document.querySelector(".overlay");

  if (!target) return;

  overlay.style.display = "none";
});
