const currHour = new Date().getHours();
const inOpennHours = currHour > 9 && currHour < 18;

const header = document.querySelector("#header");
header.innerHTML = inOpennHours
  ? "Jesteśmy otwarci do 16:00. Zapraszamy!"
  : "Zapraszamy w godzinach 10:00 - 16:00";

const contactInfo = document.querySelector("#contact-info");
const map = document.querySelector("#map");
if(map !== null) {
  map.style.width = `${contactInfo.offsetWidth}px`;
  map.style.height = `${contactInfo.offsetHeight}px`;
}
