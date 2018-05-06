runNav();

function runNav() {
  const dots = document.querySelector("#dots");
  const menu = document.querySelector("nav");

  dots.addEventListener("click", function(){
    dots.classList.toggle("rotate");
    menu.classList.toggle("isOpen");
  });

  document.addEventListener("click", function(e){
    if (!e.target.classList.contains("menu-item")) {
      dots.classList.remove("rotate");
      menu.classList.remove("isOpen");
    }
  });
}
