document.querySelector("#items")
.addEventListener("wheel", event =>{
    if(event.deltaY > 0){
        event.target.scrollBy(300, 0)
        event.preventDefault();
    } else{
        event.target.scrollBy(-300, 0)
        event.preventDefault();
    }
})