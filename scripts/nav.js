window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
    {
        document.getElementById ("nav").style.backgroundColor = "gray";
    }
    
    else {
        document.getElementById ("nav").style.backgroundColor = "lightgray";
    }
}