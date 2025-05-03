//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika fashion menu di klik

document.querySelector('#fashion-menu'). onclick = () => {
    navbarNav.classList. toggle ('active');

};

//klik di luar sidebar untuk menghilangkan nav

const fashion = document.querySelector('#fashion-menu');

document.addEventListener('click',function(e){
    if(!fashion.contains(e.target) && !navbarNav.contains(e.targer)) {
        navbarNav.classList.remove('active');
    }
});