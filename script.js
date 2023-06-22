document.addEventListener('DOMContentLoaded', function() {
    
    const ul = document.getElementById('todo-list');
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');

    //listening to submit and adding the item to the list
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim(); //removes white spaces

        if (todoText !== '') { //checking if todoText is not an empty string
            const li = document.createElement('li'); //creating a new li
            li.innerText = todoText; //used innerText

            const deleteButton = document.createElement('button'); //with every new li, creating a delete/done button
            deleteButton.textContent = "Done";
            deleteButton.classList.add('delete-button');

            li.appendChild(deleteButton); //appending the delete button after the list element
            ul.appendChild(li); //appending the list item to the ul

            input.value = '';
        }
    });

    ul.addEventListener('click', function(event) {
        if(event.target.classList.contains('delete-button')) {  //listening for the delete button and removing the corresponding item
            event.target.parentNode.closest('li').remove();
        }
    });
});