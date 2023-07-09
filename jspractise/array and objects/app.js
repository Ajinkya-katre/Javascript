 const prices = [10.99, 11,8, 7.89,13.20];
 const tax = 0.19;

 const adjustedPrice = [];

//  for(const price of prices){
//     adjustedPrice.push(price*(1+tax));
//  }

//  prices.forEach((price,ind,prices)=>{
//     const adjustPrice = { index:ind,adjustinfPrice:price*(1+tax)}
//     adjustedPrice.push(adjustPrice);
//  })

const adjustedprice = prices.map((price,ind,prices)=>{
        const priceObj = { index:ind,adjustinfPrice:price*(1+tax)}
        return priceObj;
    })
//  console.log(prices, adjustedprice);

 const number = [1,2,3];

 function transformToObjects(number){
    number.map((num,ind)=>{
        const priceObj = {val:num}
        return priceObj;
    })
    return number;
}

//  console.log(transformToObjects(number));


 //sort and reverse 

 const sortedPrice = prices.sort((a,b) =>{
    if(a>b){
        return 1;
    }
    else if(a === b ){
        return 0;
    }
    else{
        return -1;
    }
 })

//  console.log(sortedPrice);
    // console.log(sortedPrice.reverse());

// filter

// const filterArray = prices.filter( (price)=>{
//     return price > 10;
// })

const filterArray = prices.filter( price=> price > 10 )


console.log(filterArray);