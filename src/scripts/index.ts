function renderHeader(): void {
  const currHour = new Date().getHours();
  const inOpenHours = currHour > 9 && currHour < 18;

  const header = document.querySelector("#header");
  if(header === null) return;
  header.innerHTML = inOpenHours
    ? "Jesteśmy otwarci do 16:00. Zapraszamy!"
    : "Zapraszamy w godzinach 10:00 - 16:00";
}

function renderMap(): void {
  const contactInfo = document.querySelector<HTMLElement>("#contact-info");
  const map = document.querySelector<HTMLElement>("#map");

  if (map === null || contactInfo === null) return;
  map.style.width = `${contactInfo.offsetWidth}px`;
  map.style.height = `${contactInfo.offsetHeight}px`;
}

renderHeader();
renderMap();
