let allSlider = document.querySelectorAll(".slider__image");
let allSliderArr = Array.from(allSlider);
let arrowPrevious = document.querySelector(".arrow__previous");
let arrowNext = document.querySelector(".arrow__next");

arrowNext.addEventListener("click", () => {
  let activeSlider = document.querySelector(".slider__active");
  let currentIndex = allSliderArr.indexOf(activeSlider);
  let next = currentIndex + 1;

  if (next <= allSliderArr.length - 1) {
    let slider = document.querySelector(".slider");
    let removeActive = slider.children[currentIndex];
    let addActive = slider.children[next];

    removeActive.classList.remove("slider__active");
    removeStyle();
    removeActive.style.transition = "1s linear";
    removeActive.style.transform = "translateX(-100%)";

    addActive.classList.add("slider__active");
    addActive.style.transition = "1s linear";
  } else {
    let slider = document.querySelector(".slider");
    let removeActive = slider.children[currentIndex];
    let addActive = slider.children[0];

    removeActive.classList.remove("slider__active");
    removeStyle();
    removeActive.style.transition = "1s linear";
    removeActive.style.transform = "translateX(-100%)";

    addActive.classList.add("slider__active");
    addActive.style.transition = "1s linear";
  }
  function removeStyle() {
    allSliderArr.map((el) => {
      el.removeAttribute("style");
    });
  }
});

arrowPrevious.addEventListener("click", () => {
  let activeSlider = document.querySelector(".slider__active");
  let currentIndex = allSliderArr.indexOf(activeSlider);
  let next = currentIndex - 1;

  if (next >= 0) {
    let slider = document.querySelector(".slider");
    let removeActive = slider.children[currentIndex];
    let addActive = slider.children[next];
    addActive.style.transform = "translateX(-100%)";

    setTimeout(() => {
      removeStyle();
      removeActive.style.transform = "translateX(100%)";
      removeActive.style.transition = "1s linear";

      addActive.style.transform = "translateX(0%)";
      addActive.style.transition = "1s linear";

      removeAllActive(currentIndex, next);
    }, 1);
  } else {
    next = allSliderArr.length - 1;
    let slider = document.querySelector(".slider");
    let removeActive = slider.children[currentIndex];
    let addActive = slider.children[next];
    addActive.style.transform = "translateX(-100%)";

    setTimeout(() => {
      removeStyle();
      removeActive.style.transform = "translateX(100%)";
      removeActive.style.transition = "1s linear";

      addActive.style.transform = "translateX(0%)";
      addActive.style.transition = "1s linear";

      removeAllActive(currentIndex, next);
    }, 1);
  }

  function removeStyle() {
    allSliderArr.map((el) => {
      el.removeAttribute("style");
    });
  }

  function removeAllActive(a, b) {
    let slider = document.querySelector(".slider");
    let removeActive = slider.children[a];
    let addActive = slider.children[b];
    removeActive.classList.remove("slider__active");
    addActive.classList.add("slider__active");
  }
});
