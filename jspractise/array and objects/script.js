const firstname = document.querySelector('#firstname').value;
const email = document.querySelector('#email').value;
const phone = document.querySelector('#phone').value;

function submitData(){
    createTable(firstname,email,phone);
}

function createTable(firstname,email,phone){
    const contentInside = document.getElementById('contentInside');
    const table = `<table border="2"><tr><th>Name</th><th>Email</th><th>Phone</th></tr><tr id="contentInsideBody"></tr></table>`
    const tableBody = `<td>${firstname}<td><td>${email}<td><td>${phone}<td>`
    const tableInsideBody  = document.querySelector('#contentInsideBody');
    tableInsideBody.appendChild(tableBody);
    contentInside.innerHTML = table;
}

