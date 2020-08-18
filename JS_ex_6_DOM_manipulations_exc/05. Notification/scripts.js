function notify(message) {
    
    let notification = document.getElementById('notification');
    notification.textContent = message;

    notification.style.display = 'block';
    let timeoutID = setTimeout(()=>notification.style.display = 'none', 2*1000);

}