const btnEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const displayAge = document.getElementById('displayAge');

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue == ''){
        alert("Plaese Enter your birthday");
    }else{
        const age = getAge(birthdayValue);
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    const currentAge = currentDate.getFullYear() - birthdayDate.getFullYear(); 

    displayAge.innerHTML = currentAge;
    console.log(finalAns);
}

btnEl.addEventListener("click",calculateAge)