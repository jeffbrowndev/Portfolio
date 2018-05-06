parallax();

function parallax() {

  window.addEventListener("scroll", function(e) {

    const layers = document.getElementsByClassName("layer");
    let top = this.pageYOffset;
    let speed;
    let layer;
    let yPos;

    for (var i = 0; i < layers.length; i++) {
      layer = layers[i]; //current layer being transformed
      speed = layer.getAttribute("data-speed"); //gets scroll speed for this layer
      yPos = -(top * speed / 100); //multiply current window position by speed
      layer.setAttribute("style", "transform: translate3d(0px, " + yPos + "px, 0px)"); //simulate scroll
    }
  });
}
