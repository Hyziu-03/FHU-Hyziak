try {
    const header = document.getElementsByClassName('header')[0];
    const hours = new Date().getHours();
    header.innerHTML = hours >= 10 && hours < 18 ? 'Jesteśmy otwarci do 17:00!' : 'Zapraszamy w godzinach 10:00 - 17:00.';
    const captcha = document.getElementById('captcha');
    captcha.dataset.size = window.innerWidth <= 500 ? 'compact' : '';
} catch (error) {
    console.log(error);
}
