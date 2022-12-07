$('#header').text('Something new').css({
    font:'Verdana',
    color: 'red'});

$('p').css('color','blue');

// var p2 = document.querySelector('p:nth-child(3)');

var p2 = $('.second');

// p2.animate({
//     left: '+=50px'
// },4000)

// p2.click(function(){
//     console.log('click');
// })

var paras = $('p');

paras.click(function(){
    console.log($(this).text());
})

paras.each(function(){
    console.log($(this).text());
})