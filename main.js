const fence = document.getElementById("fence");
let create = document.getElementById("create");
let naming = document.getElementById("naming");
let john = document.getElementById("john");
let selectName = document.getElementById("selectName");


create.onclick = function() {
  if (!naming.value) {return;}
  let name = naming.value
  let newCow = document.createElement("button");
  newCow.textContent = name;
  newCow.setAttribute("id", name);
  newCow.setAttribute("class", "cow");
  

  
  fence.appendChild(newCow);
  naming.value = "";
  newCow.onclick = function() {
    alert("asdf");
  }
}

document.querySelector(".cow").onclick = function() {
  alert("asdf");
}
