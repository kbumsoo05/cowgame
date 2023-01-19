const fence = document.getElementById("fence");
const create = document.getElementById("create");
const naming = document.getElementById("naming");
const selectName = document.getElementById("selectName");
let cowCount = 0;

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
  if (cowCount < 11) {
    cowCount += 1;
  }
};
