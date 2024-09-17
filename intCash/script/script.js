document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  } else {
    nav.style.boxShadow = "none";
  }
});


document.addEventListener("DOMContentLoaded", ()=> {
    const option = document.querySelectorAll('.option');

    option.forEach((option)=> {
        option.addEventListener("click", ()=> {
            option.forEach((opt) => opt.classList.remove("selected"));
            this.classList.add("selected");

            if (this.id === "option-exchange") {

            } else if 
            (this.id === "") {

            }
        })
    })
});

