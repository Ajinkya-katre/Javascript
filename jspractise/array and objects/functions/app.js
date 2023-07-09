const taskElement = document.getElementById('taskElement');

function first(){
    alert("HElllo js");
}

function second(name){
    alert(name)
}

// first(); 

// second("Ajinkya");


taskElement.addEventListener('click',first);

function third(firstname,middlename,lastname){
    return firstname + middlename + lastname
}

alert(third("Ajinkya ","Dattatray ","Katre"));
