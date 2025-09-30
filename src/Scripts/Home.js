import "../Style/Home/Home-main.scss";

const header = document.getElementById('header');

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if(scrollPos > 100) 
        {
            header.classList.add('header-script');
        }else 
        {
            header.classList.remove('header-script');
        }
})

document.querySelectorAll('li').forEach(
    li => {
        li.addEventListener('click', () => {
            const link = li.querySelector("a");
            if(link) {
                window.location = link.href;
            }
        })
    }
)

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if(preloader) {
        preloader.classList.add('done')
        setTimeout(() => preloader.parentElement.removeChild(preloader), 1000)
    }
})