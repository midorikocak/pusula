function checkBox(element)
{
    let source = element.src.split("/")[element.src.split("/").length-1];
    if (source == "square-small.png")
    {
        element.src = "/source/textures/checkbox.png";
    }
    else
    {
        element.src = "/source/textures/square-small.png";
    }
}