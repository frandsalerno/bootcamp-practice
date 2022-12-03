// var btn = document.getElementById('btn');
// var isDark = false;

// btn.addEventListener('click', function(){
//     if (isDark){
//         // document.body.style.background = "#FFF";
//         // document.body.style.color = "#000";
//         document.body.classList.remove('dark')
//         btn.innerText = "Dark Theme";
//     }else{
//         // document.body.style.background = "#777";
//         // document.body.style.color = "#FFF";
//         document.body.classList.add('dark')
//         btn.innerText = "Light Theme";
//     }
//     isDark = !isDark;
// });

// var link = document.querySelector('#link');
// var homeLink = document.getElementById('home-link');

// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log(event);
// })

// homeLink.addEventListener('click', function(event){
//     if(window.location.pathname.includes('index')){
//         event.preventDefault();
//     }
// })


var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    console.log('btn clicked');
    btn.stopPropagation;
})

document.body.addEventListener('click', function(){
    console.log('clickd as well');
})


