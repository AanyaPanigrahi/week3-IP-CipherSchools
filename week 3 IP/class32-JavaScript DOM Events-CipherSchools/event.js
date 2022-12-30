const button = document,querySelector('button');
const container = document.querySelectorAll('.container');

button.addEventListener('click',()=>{
    button.classList.add("active");
    console.log('Button is clicked')
});
container.addEventListener('mouseenter'),()=>({
    container.classList.add('purple'),
});
container.addEventListener('mouseleave'),()=>({
    container.classList.remove('purple'),
});