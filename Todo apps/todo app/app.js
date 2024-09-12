

const todoInput = document.querySelector ('.todo');
const ol = document.querySelector ('ol')    

    const arr = [];
    function addTodo() {
        ol.innerHTML =''
        arr.push(todoInput.value);
        console.log(arr);

        for (let i = 0; i < arr.length; i++){
            ol.innerHTML += `<li>${arr[i]}</li>`
        }
    }

