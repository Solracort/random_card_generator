

const nombrecarta = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
window.onload = function() {
  //write your code here
  let indicepalo = Math.floor(Math.random() * 4);
  let indicecarta = Math.floor(Math.random() * 13);
  let numcarta = document.querySelector(".numero");
  numcarta.innerHTML = nombrecarta[indicecarta];
  let paloHTML = document.querySelector(".palo");
  switch (indicepalo) {
    case 0:
      paloHTML.innerHTML = "<img src='/src/assets/img/hearts.png'/>";
      break;
    case 1:
      paloHTML.innerHTML = "<img src='/src/assets/img/spades.png'/>";
      break;
    case 2:
      paloHTML.innerHTML = "<img src='/src/assets/img/clubs.png'/>";
      break;
    case 3:
      paloHTML.innerHTML = "<img src='/src/assets/img/hearts.png'/>";
      break;
    default:
      console.log("default");
  }
};
