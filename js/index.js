const allMenu = document.getElementById("all-menu");
const menuDrop = document.getElementById("all-menu_wrap");
const menuStop = document.querySelectorAll(".sub-menu");
allMenu.addEventListener("click", () => {
  allMenu.classList.toggle("btnActive");
  if (allMenu.classList.value == "btnActive") {
    menuDrop.style.height = "400px";
    menuDrop.style.transition = "0.3s ";
    for (let i = 0; i < menuStop.length; i++) {
      menuStop[i].classList.add("menu-stop");
    }
  } else {
    menuDrop.style.height = "0px";
    for (let i = 0; i < menuStop.length; i++) {
      menuStop[i].classList.remove("menu-stop");
    }
  }
});

const popUp = document.getElementById("popup-btn");
const popUpClose = document.getElementById("close-btn");

popUpClose.addEventListener("click", () => {
  popUp.style.display = "none";
});

const slides = document.getElementById("best-product");

const tabMenu = document.querySelectorAll(".tab");
const tabList = document.querySelectorAll(".items");
let pressed = false;
let startX;
let x;
let n = 0;

for (let i = 0; i < tabMenu.length; i++) {
  tabMenu[i].index = i;

  tabMenu[i].addEventListener("click", (e) => {
    e.preventDefault();
    n = e.currentTarget.index;
    for (let j = 0; j < tabMenu.length; j++) {
      if (j == n) {
        tabMenu[j].classList.add("tabOn");
        tabList[j].classList.remove("tabHide");
      } else {
        tabMenu[j].classList.remove("tabOn");
        tabList[j].classList.add("tabHide");
        tabList[j].style.left = "0px";
      }
    }
  });
}
slides.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.pageX - tabList[n].offsetLeft;
});

slides.addEventListener("mouseup", () => {
  pressed = false;
});
slides.addEventListener("mouseleave", () => {
  pressed = false;
});

slides.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.pageX;
  tabList[n].style.left = `${x - startX}px`;
  slideBoundary();
});

function slideBoundary() {
  let outer = slides.getBoundingClientRect();
  let inner = tabList[n].getBoundingClientRect();
  if (parseInt(tabList[n].style.left) > 0) {
    tabList[n].style.left = "0px";
  }
  if (inner.right < outer.right) {
    tabList[n].style.left = `-${inner.width - outer.width}px`;
    if (tabMenu[2]) {
      tabList[2].style.left = `0px`;
    }
  }
}

const siteMenu = document.getElementById("family-site");
const siteMenuList = document.getElementById("site-menu_list");

siteMenu.addEventListener("click", () => {
  siteMenu.classList.toggle("siteActive");
  siteMenuList.classList.toggle("siteActive");
  if (siteMenu.classList.value == "siteActive") {
    siteMenuList.style.height = "290px";
    siteMenuList.style.transition = "0.6s";
  } else {
    siteMenuList.style.height = "0px";
  }
});

const videoStart = document.getElementById("video");

document.addEventListener("scroll", () => {
  if (window.scrollY > 2500 && window.scrollY < 3200) {
    videoStart.play();
  } else {
    videoStart.pause();
  }
});
