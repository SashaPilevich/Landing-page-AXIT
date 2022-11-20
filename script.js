"use strict";
const root = document.querySelector("#root");
const tabs = document.querySelector(".tab");
const tabLink = document.querySelector(".tablinks");
const tabContent = document.querySelector(".tabContent");
const changeClass = (element) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }
  element.classList.add("active");
};

tabs.addEventListener("click", (event) => {
  const currentTab = event.target.dataset.btn;
  changeClass(event.target);
  for (let i = 0; i < tabContent.children.length; i++) {
    tabContent.children[i].classList.remove("active");
    if (tabContent.children[i].dataset.content === currentTab) {
      tabContent.children[i].classList.add("active");
    }
  }
});

const backTop = document.querySelector(".backTop");
const jumpUp = () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(jumpUp, 10);
  }
};

backTop.addEventListener("click", () => {
  jumpUp();
});

window.onscroll = () => {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
};

const slide = document.querySelector(".customers__wrapper");
const dots = document.querySelector(".dots__item");
const changeClassCustom = (element) => {
  for (let i = 0; i < dots.children.length; i++) {
    dots.children[i].classList.remove("active");
  }
  element.classList.add("active");
};

dots.addEventListener("click", (event) => {
  const currentTab = event.target.dataset.btn;
  changeClassCustom(event.target);
  for (let i = 0; i < slide.children.length; i++) {
    slide.children[i].classList.remove("active");
    if (slide.children[i].dataset.content === currentTab) {
      slide.children[i].classList.add("active");
    }
  }
});
