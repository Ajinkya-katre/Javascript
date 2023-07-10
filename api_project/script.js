const userBtn = document.getElementById('user-btn');

async function loadApi(){
    try{
        const apiUrl = 'https://jsonplaceholder.typicode.com/users' 
        showLoader(true);
        const response = await fetch(apiUrl);
        let  data = await response.json();
        console.log(data);
        showLoader(false);

    }catch (error) {
        console.error("Error occurred:", error);
      }
}

// loadApi(apiUrl);

function showLoader(show){
    const body = document.body;
    const loader = document.createElement('div');
    if(show){
        loader.setAttribute('id','loader');
        body.appendChild(loader);
    }else{
        let loaderDiv = document.getElementById('loader');
        body.removeChild(loaderDiv);
    }
}

userBtn.addEventListener('click',loadApi)