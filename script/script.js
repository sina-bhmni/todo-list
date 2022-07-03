let todoText = document.querySelector('.todo');
let myForm = document.querySelector('#myForm');
let number = 0;



myForm.addEventListener('submit', function() {
    if (todoText.value != '') {
        let listItem = document.createElement('li');
        listItem.innerHTML = todoText.value;
        let tasksList = document.querySelector('#tasks ul');
        tasksList.appendChild(listItem);
        number++;
        document.querySelector('#total-count').innerHTML = number;
        todoText.value = '';
    } else {
        alert('you arent enter eny todo task');
    }
});