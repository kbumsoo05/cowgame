let fence = document.getElementById("fence");
let create = document.getElementById("create");
let selectName = document.getElementById("selectName");
let naming = document.querySelector("#naming");
let cowPrice = document.getElementById("price").textContent;

let cowCount = 0;
cowPrice = 0;

let cow1 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow2 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow3 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow4 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow5 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow6 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow7 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow8 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow9 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }
let cow10 = { name: "", price: 0, str: 1, luck: 1, milk: 1, agg: 1, weight: 0 }

create.onclick = function() {

  if (cowCount === 0) {
    cowSet(cow1);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 1) {
    cowSet(cow2);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 2) {
    cowSet(cow3);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 3) {
    cowSet(cow4);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 4) {
    cowSet(cow5);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 5) {
    cowSet(cow6);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 6) {
    cowSet(cow7);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 7) {
    cowSet(cow8);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 8) {
    cowSet(cow9);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 9) {
    cowSet(cow10);
    cowCount += 1;
    naming.value = "";
  } else if (cowCount === 10) {
    alert("no more space");
  }
}

function cowSet(cowNumber) {
  if (naming.value === "") { return; };
  cowNumber.name = naming.value;
  cowNumber.price = cowPrice;
  cowNumber.str = Math.floor(Math.random() * 10) + 1;
  cowNumber.luck = Math.floor(Math.random() * 10) + 1;
  cowNumber.milk = Math.floor(Math.random() * 10) + 1;
  cowNumber.weight = Math.floor(Math.random() * 10) + 35;

  let newSpan = document.createElement("span");
  newSpan.textContent = cowNumber.name;
  newSpan.setAttribute("class", "cow");
  fence.appendChild(newSpan);
}
