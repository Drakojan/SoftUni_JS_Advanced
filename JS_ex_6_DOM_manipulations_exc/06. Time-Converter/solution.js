function attachEventsListeners() {

    let timeConverter = document.getElementsByTagName('main')[0];
    let daysInputBox = document.getElementById('days');
    let hoursInputBox = document.getElementById('hours');
    let minutesInputBox = document.getElementById('minutes');
    let secondsInputBox = document.getElementById('seconds');

    timeConverter.addEventListener('click', (e) => {

        console.log(daysInputBox.value);
        switch (e.target.id) {
            case 'daysBtn':
                let days = daysInputBox.value;
                hoursInputBox.value = days * 24;
                minutesInputBox.value = days * 1440;
                secondsInputBox.value = days * 86400;
                break;

            case 'hoursBtn':
                let hours = hoursInputBox.value;
                daysInputBox.value = hours / 24;
                minutesInputBox.value = daysInputBox.value * 1440;
                secondsInputBox.value = daysInputBox.value * 86400;
                break;

            case 'minutesBtn':
                let minutes = minutesInputBox.value;
                daysInputBox.value = minutes / 1440;
                hoursInputBox.value = daysInputBox.value * 24;
                secondsInputBox.value = daysInputBox.value * 86400;
                break;

            case 'secondsBtn':
                let seconds = secondsInputBox.value;
                daysInputBox.value = seconds / 86400;
                hoursInputBox.value = daysInputBox.value * 24;
                minutesInputBox.value = daysInputBox.value * 1440;
                break;
        }
    })
}