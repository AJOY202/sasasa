let darkModeBtn = document.querySelector('section .alex button')
let body = document.querySelector('body')
let heading = document.querySelector('section .alex h2')
darkModeBtn.addEventListener('click',function(){
    body.classList.toggle('darkmode')
    if(body.classList.contains('darkmode')){
        heading.innerText = 'DARK MODE'
    } else{
         heading.innerText = 'LIGHT MODE'
    }
})

let cursor = document.querySelector('.cursor');
let cursorSm = document.querySelector('.cursorsm');

window.addEventListener('mousemove',function(event){
let top = event.pageY
let left = event.pageX

cursor.style .top = `${top}px`;
cursor.style .left = `${left}px`;

cursorSm.style .top = `${top}px`;
cursorSm.style .left = `${left}px`;


})