let url = new URL(window.location.href)
url.searchParams.set('metaDataTagTracker', 'true');
console.log(url.href);

function main(){
    console.log("SuccessFull")
    alert("SuccessFull");
}

if(url.href.includes('metaDataTagTracker=true')){
    main()
}

