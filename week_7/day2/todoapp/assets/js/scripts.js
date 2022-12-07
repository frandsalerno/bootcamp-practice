// Allow user to add a todo
var input = $('#todoinput');

var list = $('#todoList');
var todoItem = '';
var todoLocalList = [];

var counter = $('#counter');



if (JSON.parse(localStorage.getItem('tasks_list')) != null) {
    todoLocalList = JSON.parse(localStorage.getItem('tasks_list'));
    $(todoLocalList).each(function(index,value){
        todoItem = value;
        appendTask();
    })
    counter.text(todoLocalList.length);
}

function appendTask(){
    list.append(`
    <li>
    <p>${todoItem}</p>
    <button id="completed">Mark as complete</button>
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
    if (todoLocalList.length > 1){
        todoLocalList.splice(($(this).parent().index()),1);
    }else{
        todoLocalList.pop();
        localStorage.clear();
    }
    $(this).parent().addClass('hide');
    // console.log($(this).parent().index());
    localStorage.setItem('tasks_list', JSON.stringify(todoLocalList));
    counter.text(todoLocalList.length);

})

// //Completed tasks
// var completedTasks
// var completedCounter = $('#completedCounter');
