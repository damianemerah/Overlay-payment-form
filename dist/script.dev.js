"use strict";

var merchant = document.querySelector(".pay__merchant-box");
var overlay = document.querySelector(".overlay");
var checkoutBtn = document.querySelector(".btn--finish");
merchant.addEventListener("click", function (e) {
  e.preventDefault();
  var target = e.target.classList.contains("pay__merchant");
  if (!target) return;
  merchant.querySelectorAll("img").forEach(function (img) {
    img.classList.remove("selected");
    e.target.classList.add("selected");
  });
});
checkoutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.style.display = "block";
});
overlay.addEventListener("click", function (e) {
  var target = document.querySelector(".overlay");
  if (!target) return;
  overlay.style.display = "none";
});