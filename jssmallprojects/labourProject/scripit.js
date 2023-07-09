const selectedValue = document.getElementById('selectedValue');
const displayContent = document.getElementById('display');

displayContent.style.display = "none"

function checkValue(){
    console.log(selectedValue.value);
    if(selectedValue.value === 'Labour'){
        let elem = `<div>
        <label>Worker Count</label><br>
        <input type="text" id="count" required>
        </div>`
        
        displayContent.style.display = "block"
        displayContent.innerHTML=elem;

            let countOfLabour = document.getElementById('count');
                if(countOfLabour != '' && countOfLabour != null ){
                    let elemInsideCount = `<br><div>
                    <label>Male</label>
                    <input type="number" id="maleCount" required>
                    <br>
                    <label>Female</label>
                    <input type="number" id="femaleCount" required>
                    <br>
                    <input type="submit" value="submit" onclick="totalPrice()">
                    <br>
                    <br>
                    <div id="content"></div>
                </div>`
                displayContent.innerHTML += elemInsideCount;
                
                
                
            }
    }

}

function totalPrice(){
                const maleCount = document.getElementById('maleCount');
                const femaleCount = document.getElementById('femaleCount');
                const content = document.getElementById('content');
                
                if(maleCount.value != '' && femaleCount !=''){
                    let countOfLabour = parseInt(document.getElementById('count').value);
                    malePrice = 1000;
                    femalePrice = 500;
                    let mCount = maleCount.value
                    let fCount = femaleCount.value

                    let finalMtotal = malePrice * mCount
                    let finalFtotal = femalePrice * fCount

                    let finalCountOfBoth = parseInt(mCount) + parseInt(fCount)
                    console.log(finalCountOfBoth,countOfLabour);

                    let getAllData = [];
                    getAllData.push({
                        'male':mCount,
                        'female':fCount,
                        'totalLabourcount':finalCountOfBoth,
                        'finalMaletotal':finalMtotal,
                        'finalFemaletotal':finalFtotal,
                        'totalPrice':finalMtotal + finalFtotal
                    })
                    console.log(getAllData);
                    localStorage.setItem("getAllData",JSON.stringify(getAllData));
                    if(finalCountOfBoth  === countOfLabour){
                        content.innerHTML = `Male price is ${finalMtotal}, Female price is ${finalFtotal}`
                    }else{
                        alert("PLease match your number of worker with you entered male and female");
                    }


                }
}