const currHour = new Date().getHours();
const inOpennHours = currHour > 9 && currHour < 18;

const header = document.querySelector("#header");
header.innerHTML = inOpennHours
  ? "Jesteśmy otwarci do 17:00. Zapraszamy!"
  : "Zapraszamy w godzinach 10:00 - 17:00";
