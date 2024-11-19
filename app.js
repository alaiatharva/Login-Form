const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.log');
const regLink = document.querySelector('.reg');
const btnPop = document.querySelector('.btn');
const icon = document.querySelector('.icon-close');

regLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
}); 

btnPop.addEventListener('click', ()=> {
    wrapper.classList.add('active-btnPop');
});

icon.addEventListener('click', ()=> {
    wrapper.classList.remove('active-btnPop');
});
