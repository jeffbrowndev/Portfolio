startEffects();

function startEffects() {

  function debounce(func, wait = 5, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout=null
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout)
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const browsers = document.querySelectorAll(".browser");

  function slideIn(e) {
    browsers.forEach(browser => {
      //top of image
      const slideInAt = (window.pageYOffset + window.innerHeight) - browser.offsetHeight / 2;
      const isHalfShown = slideInAt > browser.getBoundingClientRect().top + window.pageYOffset;

      if (isHalfShown) {
        browser.classList.add("active");
      }
    });
  }

  function treeSlideUp() {
    let isMobile = window.innerWidth <= 500;
    let marginTop = 0;

    if (isMobile)
      marginTop = 300;
    else
      marginTop = 400;

    let amountScrolled = window.pageYOffset + window.innerHeight;
    let pageHeight = document.body.clientHeight + marginTop;
    const trees = document.querySelectorAll(".trees");
    let atBottom = amountScrolled >= pageHeight;

    if (atBottom) {
      trees[0].classList.add("slideUp");
      trees[1].classList.add("slideUp");
    }
  }

  window.addEventListener("scroll", debounce(slideIn));
  window.addEventListener("scroll", treeSlideUp);
}
