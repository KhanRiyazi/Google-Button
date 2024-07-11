document.getElementById('appsButton').addEventListener('click', function(event) {
    event.stopPropagation();
    var menu = document.getElementById('appsMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function() {
    var menu = document.getElementById('appsMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
});
