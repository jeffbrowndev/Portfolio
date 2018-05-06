dynaDots()

function dynaDots() {

  const portfolio = document.querySelector("#work");
  const dots = document.querySelector("#dots");
  let distTop = (portfolio.offsetTop - 25);
  let distScrolled = window.pageYOffset;
  let inWhite = distScrolled >= distTop && distScrolled <= (distTop + portfolio.clientHeight);

  if (inWhite)
    dots.classList.add("overWhite");
  else
    dots.classList.remove("overWhite");
}

window.addEventListener("scroll", dynaDots);
