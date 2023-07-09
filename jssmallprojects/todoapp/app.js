const button = document.querySelector('#addTask');
const getTextValue = document.querySelector('#getTextValue');
const addContent = document.getElementById('addContent')

let content = [];

// button.addEventListener('click',getInputValue())

function getInputValue(){
    
    let addDatatoList = '';

    content.push(getTextValue.value);
    for(let i = 0 ; i < content.length;i++){
        addDatatoList += '<li>'+ content[i] +'</li>'
    }
    addContent.innerHTML = addDatatoList;
}