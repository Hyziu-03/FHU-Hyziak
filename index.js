try {
    const header = document.getElementsByClassName('header')[0];
    const hours = new Date().getHours();
    header.innerHTML = hours >= 10 && hours < 18 
    ? 'Jesteśmy otwarci do 17:00!' 
    : 'Zapraszamy w godzinach 10:00 - 17:00.';
} catch (error) {
    console.log(error);
}

const chevron = document.getElementById("chevron");
chevron.style.display = "none";

window.addEventListener("resize", () => {
    try {
        if (window.innerWidth < 360) chevron.classList.add("chevron");
        else chevron.classList.remove("chevron");
    } catch (error) {
        console.log(error);
    }
});
