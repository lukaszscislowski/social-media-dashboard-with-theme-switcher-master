'use strict' 

// const toggle = document.querySelector('.toggle__label');
// const body = document.querySelector('.dark');
// toggle.addEventListener('click', () => {
//     console.log('kliknięto klawisz');
// });


const toggle = document.querySelectorAll('label');
const body = document.querySelectorAll('body');
let colorTheme = '#1e202a'
toggle.forEach((elem) =>{
    elem.addEventListener('click', Theme);
});

function Theme(){
    if(body.style.color === colorTheme)
    body.style.color = '#ffff';
    else
    body.style.color = colorTheme;

}