export function renderHeader() {
  const currHour = new Date().getHours();
  const inOpenHours = currHour > 9 && currHour < 18;

  const header = document.querySelector("#header");
  if(header === null) return;
  header.innerHTML = inOpenHours
    ? "Jesteśmy otwarci do 16:00. Zapraszamy!"
    : "Zapraszamy w godzinach 10:00 - 16:00";
}

export function renderMap() {
  const contactInfo = document.querySelector("#contact-info");
  const map = document.querySelector("#map");

  if (map === null || contactInfo === null) return;

  // jsdom does not calculate layout, so fall back to inline style dimensions in tests.
  const width = contactInfo.offsetWidth || parseInt(contactInfo.style.width, 10) || 0;
  const height = contactInfo.offsetHeight || parseInt(contactInfo.style.height, 10) || 0;

  map.style.width = `${width}px`;
  map.style.height = `${height}px`;
}

renderHeader();
renderMap();
