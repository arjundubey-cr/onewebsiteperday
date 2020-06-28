window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const item = document.querySelector(`.item[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running if invalid keypress
  item.classList.add("play");
  audio.currentTime = 0;
  audio.play();

  const items = document.querySelectorAll(".item");
  items.forEach((item) =>
    item.addEventListener("transitionend", function (e) {
      if (e.propertyName !== "transform") return; // skip if anything other than transform
      this.classList.remove("play");
    })
  );
});

//code for click functionality
const items = document.querySelectorAll(".item");
function clickTrigger() {
  let key = this.dataset.key;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const item = this;
  item.classList.add("play");
  audio.currentTime = 0;
  audio.play();
}

function unclickTrigger() {
  this.classList.remove("play");
}
items.forEach((item) => item.addEventListener("mousedown", clickTrigger));
items.forEach((item) => item.addEventListener("mouseup", unclickTrigger));
