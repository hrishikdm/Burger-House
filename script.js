const toggleButton = document.querySelector(".toggle-btn");
const navbarLinks = document.querySelector(".navbar-links");
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  // navbar.style.background = "#0000009f"
});

const indication1 = document.querySelector("#indi-1");
const indication2 = document.querySelector("#indi-2");
const indication3 = document.querySelector("#indi-3");

var news1 = document.querySelector(".news-1");
var news2 = document.querySelector(".news-2");
var news3 = document.querySelector(".news-3");

indication1.addEventListener("click", function () {
  //   news1.style.opacity = "1";
  news1.style.display = "flex";
  news2.style.display = "none";
  news3.style.display = "none";
  indication1.classList.add("i-active");
  indication2.classList.remove("i-active");
  indication3.classList.remove("i-active");
});
indication2.addEventListener("click", function () {
  news1.style.display = "none";
  news2.style.display = "flex";
  news3.style.display = "none";
  indication1.classList.remove("i-active");
  indication2.classList.add("i-active");
  indication3.classList.remove("i-active");
});
indication3.addEventListener("click", function () {
  news1.style.display = "none";
  news2.style.display = "none";
  news3.style.display = "flex";
  indication1.classList.remove("i-active");
  indication2.classList.remove("i-active");
  indication3.classList.add("i-active");
});
