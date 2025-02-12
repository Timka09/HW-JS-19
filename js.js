//Task 1 - Task 2
// variant - 1
// const openBtn = document.querySelector("[data-action=open-modal]");
// const closeBtn = document.querySelector("[data-action=close-modal]");
// const backdrop = document.querySelector(".backdrop");
// openBtn.addEventListener("click", (event) => {
//   backdrop.style.opacity = 1;
//   backdrop.style.visibility = "visible";
//   backdrop.style.pointerEvents = "visible";
// });
// closeBtn.addEventListener("click", (event) => {
//   backdrop.style.opacity = 0;
//   backdrop.style.visibility = "hidden";
//   backdrop.style.pointerEvents = "none";
// });
// variant - 2
const openBtn = document.querySelector(".open-button")
const closeBtn = document.querySelector(".close-button");
const backdrop = document.querySelector(".backdrop");
const getBody = document.querySelector("body")
openBtn.addEventListener("click", (event) => {
    getBody.classList.add("show-modal");
});
closeBtn.addEventListener("click", (event) => {
getBody.classList.remove("show-modal");
})
backdrop.addEventListener("click", (event) => {
 if (event.target === backdrop) {
   getBody.classList.remove("show-modal");
 }
});
// Task 3
const haveInput1 = document.querySelector("#red");
const haveInput2 = document.querySelector("#blue");
const haveInput3 = document.querySelector("#green");


haveInput1.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "red";
});

haveInput2.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "blue";
});

haveInput3.addEventListener("click", (event) => {
  getBody.style.backgroundColor = "green";
});