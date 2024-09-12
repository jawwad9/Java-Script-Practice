



const div = document.querySelector('div')
axios('https://fakestoreapi.com/products')


.then((res) => {
  console.log(res.data);
  res.data.map((item) =>{
            div.innerHTML += `
            <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body align-items-end">
    <h3 class="card-title">Title: ${item.title}</h3>
    <h1>Price: ${item.price}</h1>
    <a href="#" class="btn btn-primary">Add to Card</a>
  </div>
</div>
    `
        })

}).catch((err)=>{
  console.log('err')
})







// const bankBalance = 10000
// const shaadi = new Promise((resolve, reject) => {
//     if(bankBalance > 50000){
//         console.log('shaadi mubarak')
//         resolve()
//     }else{
//         console.log('mahit kar')
//         reject()
//     }
// })

// shaadi
// .then(()=>{
//   console.log('mubarak ho')
// }).catch(()=> {
//   console.log('rejected')
// })




// const div = document.querySelector('div')


// axios.get('https://dummyjson.com/users')
//  .then(res => {
//     console.log(res.data);
//     res.data.map((item) =>{
//         div.innerHTML += `
//         <h1></h1>
//         `
//     })
//   })
//  .catch((err) => {
//     console.log(err);
//   });







