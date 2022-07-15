function _focus() {
  document.getElementById("input").focus();
}
_focus();
document.getElementById("input").value = null;

// adding Lis to the list
document.getElementById("plus").addEventListener("click", function () {
  let temp = document.getElementById("input").value;

  let Li = document.createElement("li");
  Li.setAttribute("data-flag", "off");

  Li.innerHTML ='<div><input type="checkbox" id="checkbox" onchange="selects(this)"><strong id="text">'+temp+'</strong></div><div><i onclick="remove(this)" class="fa-duotone fa-circle-xmark delete"></i><i onclick="edit(this)" id="edit" class="fa-duotone fa-pen-to-square edit"></i></div>'
    
  document.querySelector(".wrapper>ul").appendChild(Li);

  document.getElementById("input").value = null;
  _focus();

  if (temp.length <= 3) {
    document.getElementById("input").classList.add("error");
    Li.remove();
  } else {
    document.getElementById("input").classList.remove("error");
  }
});

// removing Lis
function remove(self) {
  self.parentElement.parentElement.remove();
  _focus();
}

// editing tasks
function edit(self){
  let x = self.parentElement.previousElementSibling.innerText;
  document.getElementById("input").value = x;
  
  self.parentElement.parentElement.remove();
  _focus();
}

// selecting Lis with data-flag = on for removing selected Lis
function selects(self) {
  if (self.parentElement.parentElement.getAttribute("data-flag") == "off") {
    self.parentElement.parentElement.setAttribute("data-flag", "on");
  } else {
    self.parentElement.parentElement.setAttribute("data-flag", "off");
  }
}

// clearing all choosen Lis
function _clear() {
  let li = document.querySelectorAll("#ul input:checked");
  if (document.querySelector("#ul input")) {
    for (i = 0; i <= li.length; i++) {
      li[i].parentElement.parentElement.remove();
    }
  }
}
