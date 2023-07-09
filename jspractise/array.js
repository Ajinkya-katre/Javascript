const items = [

	{name:'Bike',price:600},
	{name:'Tv',price:50},
	{name:'Album',price:20},
	{name:'Book',price:10},
	{name:'Phone',price:100},
	{name:'Computer',price:90},
	{name:'Keyboard',price:24},
	{name:'Laptop',price:300},

];

//filter

const filteredItem = items.filter((item) => {
	return item.price <= 50
})

// Map
const itemsNewAray = items.map((item) => {
	return item.price
})

// Find

const foundItem = items.find((item) => {
	return item.name === 'Book'
})

// forEach

items.forEach((item)=>{
	// console.log(item)
})

const total = items.reduce((cal,item) => {
	return cal + item;
},0);

console.log(total)
console.log(items);
console.log(filteredItem);
console.log(itemsNewAray);
console.log(foundItem);
// console.log(findItems)