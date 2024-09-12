// const input = document.querySelector ("#exampleFormControlInput1");
// const div = document.querySelector('#data')

// const arr = [];
// function addtodo(){
//     div.innerHTML = ``
//     arr.push(input.value);
//     console.log(arr);

//     for (let i = 0; i< arr.length; i++){
//         div.innerHTML += `
//         <div class="container border p-4 rounded mt-4 d-flex justify-content-between align-items-center">
//                 <div>
//                     <h1>${arr[i]} </h1>
//                 </div>
//                 <div>
//                     <button onclick="deleteTodo()" type="button" class="btn btn-danger">Delete</button>
//                     <button onclick="editedTodo()" type="button" class="btn btn-success">Edite</button>
//                 </div>
//             </div>`
//     }
// }


// function deleteTodo(index){
//     console.log('todo deleted' , index)
//     arr.splice(index, 1);
// }
// function editedTodo(index){
//     console.log('todo edited' , index)
// }










const input = document.querySelector ("#exampleFormControlInput1");
const div = document.querySelector('#data')



function renderTodo() {
    div.innerHTML = ``
    for (let i = 0; i< arr.length; i++) {
        div.innerHTML += `
        <div class="container border p-4 rounded mt-4 d-flex justify-content-between align-items-center">
                <div>
                    <h1>${arr[i]} </h1>
                </div>
                <div>
                    <button onclick="deleteTodo()" type="button" class="btn btn-danger">Delete</button>
                    <button onclick="editedTodo()" type="button" class="btn btn-success">Edite</button>
                </div>
            </div>`
    }
}

const arr = [];
function addtodo(){
    arr.push(input.value);
    renderTodo()
    input.value = ''
}

    function deleteTodo(index) {
        arr.splice(index , 1);
        renderTodo()
    }
    function editedTodo(index) {
        const updatedVal = prompt('enter updated value');
        arr.splice(index , 1 , updatedVal);
        renderTodo()
    }


