
// function create_td_element(text) {
//     const tdText = document.createElement('td');

// }
function addProduct() {
    // alert("product added!!!");

    // extract id from input field and create a text node for id
    const id = document.getElementById("pid").value;
    const idNode = document.createTextNode(id);

    // extract name from input field and create a text node for name
    const name = document.getElementById("pname").value;
    const nameNode = document.createTextNode(name);

    // extract price from input field and create a text node for price
    const price = document.getElementById("price").value;
    const priceNode = document.createTextNode(price);

    const btEdit = document.createElement('button');
    const textEdit = document.createTextNode("Edit");       
    btEdit.appendChild(textEdit);
    
    const btDelete = document.createElement('button');
    const textDelete = document.createTextNode("Delete");       
    btDelete.appendChild(textDelete);
     
    const tdId = document.createElement('td');
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
}