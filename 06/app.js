
const shop =['Apple','Banana','Orange']  
const input = document .querySelector('#input')
const h2 = document .querySelector('h2')
function getfruites (){
    console.log (input.value) 
    console.log(shop.includes('Apple'))
if (shop.includes(input.value)){
    console.log('fruit avaiblale hai')
    h2.innerHTML = `${input.value} is avaibale`
}else{
    console.log('fruit available nhi hai')}
    h2.innerHTML = `${input.value} is not avaibale`

input.value = ''
}

