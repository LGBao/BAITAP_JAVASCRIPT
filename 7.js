window.onscroll=function()
{
    var kcc=document.documentElement.scrollTop;
    var menu=document.getElementById("mmenu");
    if(kcc>199)
    {
        menu.classList.add("hieuung");
    }
    else
    {
        menu.classList.remove("hieuung");
    }
    console.log(kcc);
};