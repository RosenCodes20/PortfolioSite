document.addEventListener('DOMContentLoaded', () => {
    let navLinks = document.querySelectorAll('ul > li > a');
    let sections = document.querySelectorAll('section[class]');
    
    window.addEventListener('scroll', handleScrollingInWindow);
    
    let currentSection = 'home';
    function handleScrollingInWindow() {
        for (let section of sections) {
            if (window.scrollY >= (section.offsetTop - section.clientHeight / 2)) {
                currentSection = section.id;
            }
        }
        
        for (let nav of navLinks) {
            if (nav.href.includes(currentSection)) {
                document.querySelector('a.active').classList.remove('active');
                nav.classList.add('active');
            }
        }
    }
})