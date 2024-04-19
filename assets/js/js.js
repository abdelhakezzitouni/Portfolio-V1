
//////////////Show Menu

const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const nav = document.querySelector('.nav_body');
const navLink = document.querySelectorAll('.nav_link');

openMenu.addEventListener('click',()=>{
    nav.classList.add('show_menu');
})

closeMenu.addEventListener('click',()=>{
    nav.classList.remove('show_menu');
})

const linkAction = () =>{
    nav.classList.remove('show_menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))


////Action Links 
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    
    const scrollDown = window.scrollY

sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop -200,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_list a[href*=' + sectionId + '] span')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}

window.addEventListener('scroll', scrollActive)


///Shadow

window.addEventListener('scroll',function(){
    let header =document.querySelector('.header');
    header.classList.toggle('shadow', window.scrollY > 10);
})


/// Dark Mode

const btnTheme = document.getElementById('btn-theme');

btnTheme.onclick = ()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        btnTheme.src ='./assets/icons/sun-fill.svg'
    }else{
        btnTheme.src="./assets/icons/moon-fill.svg"
    }
}


///Btn Scroll Top

let btnScrollTop = document.getElementById('btn_scroll_top');
btnScrollTop.onclick = ()=>{
    scroll({
        top:0
    })
}


// reval scroll


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    
//     reset: true
});

sr.reveal('.home_cover, .about_data, .btn_contact',{origin: 'top'});
sr.reveal('.home_part_one, .about_cover, .contact_title' ,{origin: 'top',delay: 300, interval:400});
sr.reveal('.projects_title',{origin: 'top'}); 
sr.reveal('.card',{origin: 'top',interval:400});




