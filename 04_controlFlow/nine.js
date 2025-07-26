const myNums = [1,2,3]
/*
const myTotal = myNums.reduce((acc,currVal)=>{
    console.log(`Accumulator : ${acc}, CurrentValue : ${currVal}`)
    return acc+currVal
},0)
*/

const myTotal = myNums.reduce((acc,currVal)=>acc+currVal,0)

console.log(myTotal);

const shoppingCart = [
{
    itemName:"js course",
    price:2999
},
{
    itemName:"python course",
    price:3999
},
{
    itemName:"Java course",
    price:4999
}

];

const priceToPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(`Price to pay : ${priceToPay}`)