const theInput = document.querySelector(".textArea");
const allButtons = document.querySelectorAll(".key")
console.log(allButtons)
allButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = 'red'
    theInput.value = e.target.value;
    input += btn.value; 
    btn.disabled = true; 

    btn.classList.add("clicked"); 
  });
});

