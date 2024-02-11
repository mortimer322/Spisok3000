// const myButton = document.querySelector('#myButton');
// const nameInput = document.querySelector('#nameInput');
// const list = document.querySelector('#list');

//     myButton.disabled=true;
//     //При вводе с клавиатуры проверять поле на пустоту
//     function isEmpty(){

//     if (nameInput.value!=''){
//         myButton.disabled=false;
//     } else{
//         myButton.disabled = true;
//     }
// }
//     nameInput.addEventListener('keyup',isEmpty);
// myButton.addEventListener('click', () => {
//     let newItem = document.createElement('li');
//     // Добавить текстовое содержимое
//     newItem.textContent = nameInput.value;
//     // parent.appendChild(item)-добавить item в конец parent
//     list.appendChild(newItem);
//     //newItem.classList.add('item')-Добавить элементу класс item
//     newItem.classList.add('item');
//     // Добавить кнопку удаления элемента списка
//     const deleteButton = document.createElement('button');
//     newItem.appendChild(deleteButton);
//     deleteButton.textContent='Удалить';
//     // Удаление элемента списка
//     deleteButton.addEventListener('click',()=>{
//         list.removeChild(newItem);

//     })
//     // Отчистка поля ввода
//     nameInput.value='';
//     // Проверка на пустоту и блокировка кнопки, если поле пустое
//     isEmpty();
// })
const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');
const input2 = document.querySelector('#search');
const modal = document.querySelector('.modal');
const absoluteDelete = document.querySelector('#canselTask');
const cansel = document.querySelector('#deleteTask');

/////////////////////////////////////////////////////////////////////////////////////////
function addTask() {
    let newItem = document.createElement('li');
    newItem.classList.add('nodots');
    newItem.textContent = nameInput.value;
    list.appendChild(newItem);
    newItem.classList.add('item');

    const deleteButton = document.createElement('button');
    newItem.appendChild(deleteButton);
    deleteButton.classList.add('btn2');
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', () => {
        modal.style.display = 'flex';
        deleteButton.addEventListener('click', () => {
            modal.style.display = 'flex';
            cansel.addEventListener('click', () => {
                modal.style.dispaly = 'none';
            })
            absoluteDelete.addEventListener('click', () => {
                modal.style.dispaly = 'none';
                list.removeChild(newItem);

            })
        })


    })

    newItem.addEventListener('click', () => {
        newItem.classList.toggle('strike');
    })

    nameInput.value = '';
}
myButton.addEventListener('click', addTask);

nameInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        addTask();
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
function isMatching(full, chunk) {
    let result = full.toLowerCase().indexOf(chunk.toLowerCase()) != -1 ? true : false;
    return result;
}
function search() {
    const items = document.querySelectorAll('.item');
    let value = input2.value;
    for (let item of items) {
        if (isMatching(item.textContent, value) === false) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        };
    }


}
input2.addEventListener('keyup', () => {
    search();
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
