const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
const numOfPictures = 5;
const start = 1;

for (let i = start; i <= numOfPictures; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
}

const handleClickThumbBar = (e) => {
  displayedImage.setAttribute("src", e.target.getAttribute("src"));
};

thumbBar.addEventListener("click", handleClickThumbBar);

/* Wiring up the Darken/Lighten button */
const handleClickBtn = () => {
  let arrOfParams =
    btn.getAttribute("class") === "dark"
      ? ["light", "Lighten", 0.5]
      : ["dark", "Darken", 0];

  let [className, textContent, alphaChanel] = arrOfParams;

  btn.setAttribute("class", `${className}`);
  btn.textContent = `${textContent}`;
  overlay.style.backgroundColor = `rgba(0,0,0,${alphaChanel})`;
};

btn.addEventListener("click", handleClickBtn);
