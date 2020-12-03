// Write your JS here.
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    popUpRandomMole();
  }, 0);

  let moleHeads = document.querySelectorAll(".wgs__mole-head");

  for (let moleHead of moleHeads) {
    moleHead.addEventListener("click", () => {
      moleHead.classList.add("wgs__mole-head--hidden");
      moleHead.classList.add("wgs__mole-head--whacked");
    });
  }
});

function popUpRandomMole() {
  const moleHeads = document.querySelectorAll(
    ".wgs__mole-head:not(.wgs__mole-head--whacked)"
  );
  if (moleHeads.length === 0) {
    let el = document.createElement("h1");
    let div = document.getElementsByClassName("for-h1");
    el.innerHTML = "You won!";
    div.appendChild(el);
    return;
  }

  let randomNum = getRandomIntInclusive(0, moleHeads.length - 1);
  moleHeads[randomNum].classList.remove("wgs__mole-head--hidden");

  setTimeout(() => {
    hideMole(moleHeads[randomNum]);
  }, 2000);
}

function hideMole(mole) {
  mole.classList.add("wgs__mole-head--hidden");

  setTimeout(() => {
    popUpRandomMole();
  }, 1000);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
// window.addEventListener("DOMContentLoaded", () => {
//   setInterval(() => {
//     const moleHeads = document.querySelectorAll(".wgs__mole-head");
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle("wgs__mole-head--hidden");
//     }
//   }, 1000);
// });
