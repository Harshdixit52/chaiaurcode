const buttons =document.querySelectorAll('.buttons');
const body = document.querySelector('body');

buttons.forEach(function (button){
//console.log(button);

button.addEventListener('click', function(e){
    console.log(e);
    console.log(e);
    console.log(e.target);
    if(e.target.id === "saddlebrown"){
        body.style.backgroundColor =e.target.id  ;
    }
    if(e.target.id === "red"){
        body.style.backgroundColor = e.target.id ;
    }
    
    if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id ;
    }
    
    if(e.target.id === "gray"){
        body.style.backgroundColor = e.target.id ;
    }
    if(e.target.id === "white"){
        body.style.backgroundColor = e.target.id ;
    }
    if(e.target.id === "brown"){
        body.style.backgroundColor = e.target.id ;
    }
    if(e.target.id === "orange"){
        body.style.backgroundColor = e.target.id ;
    }
    if(e.target.id === "aqua"){
        body.style.backgroundColor = e.target.id ;
    }
})

});