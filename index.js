class Darkmode {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.selector.classList.add("darkMode-active");
    this.selector.style.transition = "2s ease color ";
    this.selector.style.transition = "2s ease background ";
  }
  toggleDark() {
    if (this.selector.classList.contains("darkMode-active")) {
      this.selector.style.backgroundColor = "black";
      this.selector.style.color = "white";

      this.selector.classList.remove("darkMode-active");
    } else {
      this.selector.style.backgroundColor = "white";
      this.selector.style.color = "black";
      this.selector.classList.add("darkMode-active");
    }
  }
}

module.exports.Darkmode = Darkmode;
