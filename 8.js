window.onscroll=function(){
    var kcc=document.documentElement.scrollTop;
    var header=document.getElementById("header");
    var logo=document.getElementById("logo");
    if(kcc>30)
    {
        header.style.padding="20px 20px";
        logo.style.fontSize="20px"
    }
    else
    {
        header.style.padding="50px 20px";
        logo.style.fontSize="40px"
    }
};