document.querySelector('html').setAttribute('data-bs-theme', 'dark');
let dark_mode = true;
function toogle_dark_mode() {
    if(dark_mode) {
        document.querySelector('html').removeAttribute('data-bs-theme');
        document.getElementById('menu_name').classList.add("animate__flash");
        setTimeout(() => {
            document.getElementById("menu_name").classList.remove("animate__flash")
            dark_mode = false;
            }, 1000);

    }else{
        document.querySelector('html').setAttribute('data-bs-theme', 'dark');
        document.getElementById('menu_name').classList.add("animate__flash");
        setTimeout(() => {
            document.getElementById("menu_name").classList.remove("animate__flash")
            dark_mode = true;
        }, 1000);
    }
}

let darkMode = document.getElementById('dark_mode');
darkMode.addEventListener('click', toogle_dark_mode);
darkMode.style.cursor = 'pointer';

