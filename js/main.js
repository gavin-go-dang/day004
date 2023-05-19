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
    document.getElementById("nav_bar").style.backgroundColor  =  "white";
    document.getElementById("footer").style.backgroundColor  =  "white";
    document.getElementsByClassName("footer-text").style.color  =  "blue";
}


function darkMode()
{
    document.getElementById("nav_bar").style.backgroundColor  =  "#3e4551";
    document.getElementById("footer").style.backgroundColor  =  '#3e4551';
    document.getElementsByClassName("footer-text").style.color  =  "blue";
}