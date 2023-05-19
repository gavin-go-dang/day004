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