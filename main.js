/* Кнопка смены темы*/ 
let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.Tema');

const enableDarkStyle = () => {
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode', 'dark');
}
const disableDarkStyle = () => {
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', null);
}

styleToggle.addEventListener('click', () => {
    styleMode = localStorage.getItem('styleMode');
    if(styleMode !== 'dark'){
        enableDarkStyle();
    } else {
        disableDarkStyle();
    }
});

if(styleMode === 'dark'){
    enableDarkStyle();
}

/* анимации при скролле*/ 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains("_anim-no-hide")){
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}

/* Кнопка регулировки Аа*/
let styleMod = localStorage.getItem('styleMod');
const styleToggle2 = document.querySelector('.Tema2');

const enableAStyle = () => {
    document.body.classList.add('Astyle');
    localStorage.setItem('styleMod', 'A');
}
const disableAStyle = () => {
    document.body.classList.remove('Astyle');
    localStorage.setItem('styleMod', null);
}

styleToggle2.addEventListener('click', () => {
    styleMod = localStorage.getItem('styleMod');
    if(styleMod !== 'A'){
        enableAStyle();
    } else {
        disableAStyle();
    }
});

if(styleMod === 'A'){
    enableAStyle();
}

/* Кнопка включения отключения изображений*/ 
let styleMod2 = localStorage.getItem('styleMod2');
const styleToggle3 = document.querySelector('.Tema3'); 

const enableImgStyle = () => {
    document.body.classList.add('Imgstyle');
    localStorage.setItem('styleMod2', 'img');
}
const disableImgStyle = () => {
    document.body.classList.remove('Imgstyle');
    localStorage.setItem('styleMod2', null);
}

styleToggle3.addEventListener('click', () => {
    styleMod2 = localStorage.getItem('styleMod2');
    if(styleMod2 !== 'img'){
        enableImgStyle();
    } else {
        disableImgStyle();
    }
});

if(styleMod2 === 'img'){
    enableImgStyle();
}
