const apiUrl = 'https://jsonplaceholder.typicode.com/users' 

async function loadApi(api){
    try{
        showLoader(true);
        const response = await fetch(api);
        let  data = await response.json();
        console.log(data);
        showLoader(false);

    }catch (error) {
        console.error("Error occurred:", error);
      }
}

loadApi(apiUrl);

function showLoader(show){
    const body = document.body;
    const loader = document.createElement('div');
    if(show){
        loader.setAttribute('id','loader');
        body.appendChild(loader);
    }else{
        body.remove(loader);
    }
}