var items = $('ul li');

// var li6 = items.eq(5);

// var parent = li6.parent();

// var item2 = li6.siblings('.item2')

// console.log(item2.text());

// var ggparent = li6.parents('.gparent');

// console.log(ggparent);


colors = ['orange', 'purple', 'green', 'blue'];
var ul = $('ul');

$.each(colors, function(index, color){
    console.log(color);
    var li = $('<li>');
    li.text(color);
    // ul.append(li);
    ul.prepend(`
    <li>
            <span>${color}</span>
            <button class="index-${index}">Print Color</button>
    </li>
    `);
});

// items.each(function(){
//     var li = $(this);
//     console.log(li);
// })

// colors.forEach(function(item, index){
//     console.log(item, index);
// });

ul.on('click', '.index-2', function(){
    console.log('clicked');
})

// ul.addEventListener('click', function(event){
//     var el = event.target;

//     if (el.tagName === 'BUTTON'){
//         console.log(el.innerText);
//     }
// })