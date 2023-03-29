
let count=0;
const counter=document.querySelector(".counter");
const span=document.querySelector("#Span");
const btn=document.querySelectorAll(".btn");

btn.forEach(function(btn){

    btn.addEventListener("click",function(e){

        const styles = e.currentTarget.classList;
        if(styles.contains('Decrease'))
        {
            count--;

        }
       
        else if(styles.contains('Increase'))
        {
            count++;
        }
        else
        {
            count=0;
        }
        span.textContent=count;
    });
});