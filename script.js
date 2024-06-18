let buttons = document.querySelectorAll(".btn");

let string = "";

const resetValue = document.getElementById("reset");

const cut = document.getElementById("del")



buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }

     else {
      string = string + event.target.innerHTML;
      document.querySelector("input").value = string;
    }

  });
});

resetValue.addEventListener("click",()=>{
  string = "";
  document.querySelector("input").value = string;
})


cut.addEventListener("click",()=>{
string = string.slice(0,-4);
document.querySelector("input").value = string;

})

const inputField = document.querySelector("input");

inputField.addEventListener("click", () => {
    inputField.style.outline = "none";
});