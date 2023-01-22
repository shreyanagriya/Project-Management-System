
function doesExist(number) {
    const items = [...document.getElementsByClassName('product-id')];
    const item = items.find(function(item) {
        return (item.innerText === number);
    });
    return Boolean(item);
}

// function errorMessage(text) {
//     const error = document.getElementById("error");
//     error.textContent = text;
//     error.style.color = "red";
//     error.style.fontSize = "10px";
// }

function addProduct() {
    // alert("product added!!!");

    // extract id from input field and create a text node for id
    const id = document.getElementById("pid").value;
    const idNode = document.createTextNode(id);
    const error1 = document.getElementById("error1");
    if (doesExist(id)) {
        document.getElementById("pid").style.borderColor = "red";
        error1.textContent = "duplicate!!!";
        error1.style.color = "red";
        error1.style.fontSize = "10px";
        return;
    }
    else {
        document.getElementById("pid").style.borderColor = "black";
        error1.textContent = "";
    }

    // extract name from input field and create a text node for name
    const name = document.getElementById("pname").value;
    name.trim();
    const nameNode = document.createTextNode(name);
    const error2 = document.getElementById("error2");
    if(name.length > 60) {
        document.getElementById("pname").style.borderColor = "red";
        error2.textContent = "product name can't be longer than 60 characters!!!";
        error2.style.color = "red";
        error2.style.fontSize = "10px";
        return;
    }  
    else {
        document.getElementById("pname").style.borderColor = "black";
        error2.textContent = "";
    }
    

    // extract price from input field and create a text node for price
    const price = document.getElementById("price").value;
    const priceNode = document.createTextNode(price);
    const error3 = document.getElementById("error3");
    if(price < 0 || price > 100000) {
        document.getElementById("price").style.borderColor = "red";
        error3.textContent = "Product price can't be greater than 100000 and it must be positive!!!";
        error3.style.color = "red";
        error3.style.fontSize = "10px";
        return;
    }
    else {
        document.getElementById("price").style.borderColor = "black";
        error3.textContent = "";
    }
    
    if (id === "" || name === "" || price === "") {
        // error3 = document.getElementById("error3");
        error3.textContent = "field can't be empty!!!";
        error3.style.color = "red";
        error3.style.fontSize = "10px";
        return;
    }
    else {
        document.getElementById("price").style.borderColor = "black";
        error3.textContent = "";
    }

    const btEdit = document.createElement('button');
    const textEdit = document.createTextNode("Edit");       
    btEdit.appendChild(textEdit);
    
    const btDelete = document.createElement('button');
    btDelete.className = "deleteBtn";
    const textDelete = document.createTextNode("Delete");       
    btDelete.appendChild(textDelete);
    

    const tdId = document.createElement('td');
    tdId.className = 'product-id';
    tdId.appendChild(idNode);
    const tdName = document.createElement('td');
    tdName.appendChild(nameNode);
    const tdPrice = document.createElement('td');
    tdPrice.appendChild(priceNode);
    const tdEdit = document.createElement('td');
    tdEdit.appendChild(btEdit);
    const tdDelete = document.createElement('td');
    tdDelete.appendChild(btDelete);

    const tr = document.createElement('tr');
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdEdit);
    tr.appendChild(tdDelete);

    const table = document.getElementById('table');
    table.appendChild(tr);

    function onDeleteRow(e) {
        if(!e.target.classList.contains('deleteBtn')) {
            return;
        }
        const btn = e.target;
        btn.closest("tr").remove();
    }

    const tableEl = document.querySelector("table");
    tableEl.addEventListener('click', onDeleteRow);
    
}