let body = document.querySelector("body");
let elTitle = document.querySelector(".title");
let elInput = document.querySelector("#input");
let elBtn = document.querySelector(".button");
let distancePerson = document.querySelector(".distanse__person");
let distanceBike = document.querySelector(".distanse__bike");
let distanceCar = document.querySelector(".distanse__car");
let distancePlane = document.querySelector(".distanse__plane");
let nightbtn = document.querySelector(".tun");
let card = document.querySelector(".card");
let cardThree = document.querySelector(".card__3");
let cardFour = document.querySelector(".card__4");
let cardFive = document.querySelector('.card__5')

let elEffect = document.querySelector(".effect");

elEffect.addEventListener("click", function () {
  body.classList = "body";
  elEffect.textContent = "Tungi rejm";
  card.classList = "card__2";
  cardThree.classList = "card__2";
  cardFour.classList = "card__2";
  cardFive.classList = 'card__2'
  elEffect.style.color = 'red'
  nightbtn.style.color = 'cyan'
});

nightbtn.addEventListener("click", function () {
  body.classList = "body__2";
  card.classList = "card";
  cardThree.classList = "card";
  cardFour.classList = "card";
  cardFive.classList = 'card'
  elEffect.style.color = 'black'
  nightbtn.style.color = 'black'
});

elBtn.addEventListener("click", function () {
  let result = Number(elInput.value);
  let personSpeed = 4;

  distancePerson.textContent = result / personSpeed + "  soat";

  let biceSpeed = `20`;
  distanceBike.textContent = result / biceSpeed + "  soat";

  let carSpeed = `80`;
  distanceCar.textContent = result / carSpeed + "  soat";

  let planeSpeed = `800`;
  distancePlane.textContent = result / planeSpeed + "  soat";
});
elBtn.addEventListener("click", function () {
  elInput.value = "";
});
