const url = "https://jsonplaceholder.typicode.com/posts";

async function getData(){
     let response = await fetch(url);
     let res = await response.json()
     document.getElementById('data').innerHTML = res.map( (user) => 
        `
            <tr>
            <td>${user.userId}</td>
            <td>${user.id}</td>
            <td>${user.title}</td>
            <td>${user.body}</td>
            </tr>
        `
     ).join('')
     
     console.log(res);
}

getData();

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            if(data[i].id === 3) {
                console.log("great", data[i])
                break 
            }
            ;
          }
    } 
    
    )