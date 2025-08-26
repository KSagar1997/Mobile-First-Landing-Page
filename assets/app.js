// click to acrtion btn
document.querySelector(".cta-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#features").scrollIntoView({
    behavior: "smooth",
  });
});
