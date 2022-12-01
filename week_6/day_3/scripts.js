var btn = document.getElementById('btn');
var isDark = false;

btn.addEventListener('click', function(){
    if (isDark){
        // document.body.style.background = "#FFF";
        // document.body.style.color = "#000";
        document.body.classList.remove('dark')
        btn.innerText = "Dark Theme";
    }else{
        // document.body.style.background = "#777";
        // document.body.style.color = "#FFF";
        document.body.classList.add('dark')
        btn.innerText = "Light Theme";
    }
    isDark = !isDark;
});

