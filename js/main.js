// Check box search is null
function check_box_search()
{
    if (document.getElementById('search').value==""
           || document.getElementById('search').value==undefined)
    {
        alert ("Please Enter a File Name");
        return (false);
    }
    alert ("Is finding "+ document.getElementById('search').value);
    return (true);
}



// write user name on UI
function write_name(){
    document.getElementById("user-name").innerHTML = 5+6;
}

//click light_mode
function lighMode() {
    document.getElementById("nav_bar").style.backgroundColor  =  "#ADD8E6";
    document.getElementById("footer").style.backgroundColor  =  "#ADD8E6";
    document.getElementById("body").style.backgroundColor  =  "white";

    var elements = document.querySelectorAll(".footer-text");

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "red";
    }

    var elements = document.querySelectorAll(".header-text");

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "red";
    }
}


function darkMode()
{
    document.getElementById("nav_bar").style.backgroundColor  =  "#3e4551";
    document.getElementById("footer").style.backgroundColor  =  '#3e4551';
    document.getElementById("body").style.backgroundColor  =  "gray";

    var elements = document.querySelectorAll(".footer-text");

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "blue";
    }

    var elements = document.querySelectorAll(".header-text");

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "blue";
    }
}

