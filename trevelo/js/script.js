let menus = document.querySelector(".navbar");
let btn_close = document.querySelector(".btn_close");
let menus_btn = document.querySelector(".menu_btn");

menus_btn.addEventListener("click", function () {
  menus.classList.add("display");
});

btn_close.addEventListener("click", function () {
  menus.classList.remove("display");
});
