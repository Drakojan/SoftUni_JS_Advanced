function toggle() {

    let toggleButton = document.getElementsByClassName('button')[0];
    let info = document.getElementById('extra');

    if (toggleButton.textContent==='More') {
        toggleButton.textContent='Less'
    }
    else toggleButton.textContent='More';
    
    
    if (info.style.display === 'none') {
        info.style.display = 'block'
    }
    else info.style.display = 'none';

}