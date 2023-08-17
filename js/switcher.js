let changeThemeButtons = document.querySelectorAll('.theme__change');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () { 
        let theme = this.dataset.theme; 
        applyTheme(theme); 
        localStorage.setItem('theme', this.dataset.theme)
    });
});

function applyTheme(themeName) {
    
    let themeUrl = `css/theme-${themeName}.css`;
    console.log(themeUrl)
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
      changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; 
}
let activeTheme = localStorage.getItem('theme');

if (activeTheme === null) {
    applyTheme('light')
}
applyTheme(activeTheme)