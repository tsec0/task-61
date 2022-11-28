import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let hot = Array.from(document.querySelectorAll('.hot'));
      for(let element of hot){
        element.textContent = String.fromCodePoint(0x1F525) + element.textContent;
      }
});
