function createNode(item) {
  return document.createTextNode(item);
}
function doesExist(number) {
  const items = [...document.getElementsByClassName("product-id")];
  const item = items.find(function (item) {
    return item.innerText === number;
  });
  return Boolean(item);
}
function inputFieldInitiation() {
  document.getElementById("pid").style.borderColor = "black";
  document.getElementById("pname").style.borderColor = "black";
  document.getElementById("price").style.borderColor = "black";
  document.getElementById("error1").textContent = "";
  document.getElementById("error2").textContent = "";
  document.getElementById("error3").textContent = "";
}
function errorMsg(idName, error, text) {
  document.getElementById(idName).style.borderColor = "red";
  error.textContent = text;
  error.style.color = "red";
  error.style.fontSize = "10px";
  return;
}
function isEmpty(id, name, price) {
  if (id === "") {
    errorMsg("pid", error1, "Product ID can't be empty!!!");
    return true;
  }
  if (name === "") {
    errorMsg("pname", error2, "Product name can't be empty!!!");
    return true;
  }
  if (price === "") {
    errorMsg("price", error3, "Price can't be empty!!!");
    return true;
  }
  return false;
}
function make_td(node) {
  const td = document.createElement("td");
  td.appendChild(node);
  return td;
}
function onDeleteRow(e) {
  // if (!e.target.classList.contains("deleteBtn")) {
  //   return;
  // }
  if (confirm("Are you sure you want to delete the product?")) {
    const btn = e.target;
    btn.closest("tr").remove();
  }
}

function addProduct() {
  const id = document.getElementById("pid").value;
  const idNode = createNode(id);
  const error1 = document.getElementById("error1");
  if (doesExist(id)) {
    errorMsg("pid", error1, "Duplicate!!!");
    return;
  } else inputFieldInitiation();

  // extract name from input field and create a text node for name
  const name = document.getElementById("pname").value;
  name.trim();
  const nameNode = document.createTextNode(name);
  const error2 = document.getElementById("error2");
  if (name.length > 60) {
    errorMsg(
      "pname",
      error2,
      "product name can't be longer than 60 characters!!!"
    );
    return;
  }
  inputFieldInitiation();

  // extract price from input field and create a text node for price
  const price = document.getElementById("price").value;
  const priceNode = document.createTextNode(price);
  const error3 = document.getElementById("error3");
  if (price < 0 || price > 100000) {
    errorMsg(
      "price",
      error3,
      "Product price can't be greater than 100000 and it must be positive!!!"
    );
    return;
  }
  inputFieldInitiation();

  if (isEmpty(id, name, price)) {
    return;
  }
  inputFieldInitiation();

  const btEdit = document.createElement("button");
  const textEdit = createNode("Edit");
  btEdit.appendChild(textEdit);

  const btDelete = document.createElement("button");
  btDelete.className = "deleteBtn";
  const textDelete = createNode("Delete");
  btDelete.appendChild(textDelete);

  const tdId = make_td(idNode);
  tdId.className = "product-id";
  const tdName = make_td(nameNode);
  const tdPrice = make_td(priceNode);
  const tdEdit = make_td(btEdit);
  const tdDelete = make_td(btDelete);

  const tr = document.createElement("tr");
  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdEdit);
  tr.appendChild(tdDelete);

  const table = document.getElementById("table");
  table.appendChild(tr);

  const tableEl = document.querySelector("table");
  tableEl.addEventListener("click", onDeleteRow);
}
