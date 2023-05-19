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

