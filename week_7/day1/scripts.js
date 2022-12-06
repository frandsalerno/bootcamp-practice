$('#header').text('Something new').css({
    font:'Verdana',
    color: 'red'});

$('p').css('color','blue');

// var p2 = document.querySelector('p:nth-child(3)');

var p2 = $('p:nth-child(3)');

p2.animate({
    left: '+=50px'
},4000)
