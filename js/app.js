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





var canvas = document.getElementById('monCanvas');
var ctx = canvas.getContext('2d');

// Définissons les points de notre ligne avec quelques virages
var points = [
    {x: 400, y: 0},    // Départ en haut du canvas
    {x: 300, y: 150},  // Virage vers la gauche
    {x: 500, y: 300},  // Virage vers la droite
    {x: 400, y: 450},  // Virage vers la gauche
    {x: 400, y: 600}   // Arrivée en bas du canvas
];

// Fonction pour dessiner la ligne segment par segment
function dessinerLigne(points) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
}

anime({
    targets: points,
    x: function(el, i, l) {
        return (i === l - 1) ? el.x : points[i + 1].x; // Anime chaque point vers le suivant en x
    },
    y: function(el, i, l) {
        return (i === l - 1) ? el.y : points[i + 1].y; // Anime chaque point vers le suivant en y
    },
    easing: 'linear',
    duration: 2000,
    update: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas
        dessinerLigne(points); // Dessine la ligne mise à jour
    },
    loop: false
});