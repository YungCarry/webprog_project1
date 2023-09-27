
function darkMode(){
    var root = document.querySelector(':root');
    var rootStyle = getComputedStyle(root);
    var mainColor = rootStyle.getPropertyValue('--main-color');
    root.style.setProperty('--main-color', '#446A37')
}


