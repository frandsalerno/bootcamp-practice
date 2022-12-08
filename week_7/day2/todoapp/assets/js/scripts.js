// Allow user to add a todo
var input = $('#todoinput');

var list = $('#todoList');
var todoItem = '';
var todoLocalList = [];

var removedItems = [];

var counter = $('#counter');

var completedList = $('#completedList');
var completedCounter = $('#completedCounter');


//Update the current list with localStorage
if (JSON.parse(localStorage.getItem('tasks_list')) != null) {
    todoLocalList = JSON.parse(localStorage.getItem('tasks_list'));
    $(todoLocalList).each(function(index,value){
        todoItem = value;
        appendTask();
    })
    counter.text(todoLocalList.length);
}

//Update the completed list with localStorage
if (JSON.parse(localStorage.getItem('tasks_completed')) != null) {
    removedItems = JSON.parse(localStorage.getItem('tasks_completed'));
    $(removedItems).each(function(index,value){
        completedItem = value;
        removedList();
    })
    completedCounter.text(removedItems.length);
}

//////////////////////

function appendTask(){
    list.append(`
    <li>
    <p>${todoItem}</p>
    <button id="completed">Mark as complete</button>
    </li>
    `);
}

function removedList(){
    completedList.append(`
    <li>
    <p>${completedItem}</p>
    </li>
    `);
}


// Show a list of all todos
input.keypress(function(event) {
    if(event.which == 13){
        todoItem = input.val();
        appendTask()
        //ADD ITEM TO LOCAL STORAGE
        todoLocalList.push(todoItem);
        // console.log(todoLocalList);
        localStorage.setItem('tasks_list', JSON.stringify(todoLocalList))
        input.val('');
    }
    counter.text(todoLocalList.length);
});

// Allow user to complete todo and remove it from the list

list.on('click', '#completed', function(){

    removedItems.push($(this).siblings().text());  
    localStorage.setItem('tasks_completed', JSON.stringify(removedItems)); 
    completedItem = $(this).siblings().text();
    removedList();

    if (todoLocalList.length > 1){
        todoLocalList.splice(($(this).parent().index()),1);
    }else{
        todoLocalList.pop();
        localStorage.removeItem('tasks_list');
    }
    $(this).parent().addClass('hide');
    localStorage.setItem('tasks_list', JSON.stringify(todoLocalList));
    counter.text(todoLocalList.length);
    completedCounter.text(removedItems.length);
})

// //Completed tasks


