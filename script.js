const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');
// const togglebtn = document.getElementById('theme-toggle');
// const sunIcon = document.getElementById('sun-icon');
// const moonIcon = document.getElementById('moon-icon');




function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white','dark:bg-[#11001F]','bg-opacity-50','background-blur-lg','shadow-sm');
    }
    else{
        navBar.classList.remove('bg-white','bg-opacity-50','background-blur-lg','shadow-lg');
    }
})



//check saved mode in local storage
// if (localStorage.getItem('theme')==='dark'){
//     document.documentElement.classList.add('dark');
//     sunIcon.classList.remove('hidden');
//     moonIcon.classList.add('hidden');
// }

// togglebtn.addEventListener('click',()=>{
//     if(document.documentElement.classList.contains('dark')){
//         document.documentElement.classList.remove('dark');
//         localStorage.setItem('theme','light');
//         sunIcon.classList.add('hidden');
//         moonIcon.classList.remove('hidden');
//     } else{
//         document.documentElement.classList.add('dark');
//         localStorage.setItem('theme','dark');
//         sunIcon.classList.remove('hidden');
//         moonIcon.classList.add('hidden');
//     }
// })
