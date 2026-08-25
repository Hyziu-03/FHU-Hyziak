// Import the functions to test
import { renderHeader, renderMap } from "../src/scripts/index.js";

describe("renderHeader", () => {
  beforeEach(() => {
    // Reset the DOM before each test
    document.body.innerHTML = `
      <div id="header"></div>
    `;
  });

  test("renders open message during business hours (9:00-18:00)", () => {
    // Mock Date to return a time within open hours (e.g., 12:00)
    jest.spyOn(global.Date.prototype, "getHours").mockReturnValue(12);

    renderHeader();

    const header = document.querySelector("#header");
    expect(header?.innerHTML).toBe("Jesteśmy otwarci do 16:00. Zapraszamy!");
  });

  test("renders closed message outside business hours (before 9:00)", () => {
    // Mock Date to return a time before open hours (e.g., 8:00)
    jest.spyOn(global.Date.prototype, "getHours").mockReturnValue(8);

    renderHeader();

    const header = document.querySelector("#header");
    expect(header?.innerHTML).toBe("Zapraszamy w godzinach 10:00 - 16:00");
  });

  test("renders closed message outside business hours (after 18:00)", () => {
    // Mock Date to return a time after open hours (e.g., 19:00)
    jest.spyOn(global.Date.prototype, "getHours").mockReturnValue(19);

    renderHeader();

    const header = document.querySelector("#header");
    expect(header?.innerHTML).toBe("Zapraszamy w godzinach 10:00 - 16:00");
  });

  test("does nothing if #header does not exist", () => {
    // Remove the header from the DOM
    document.body.innerHTML = "";

    // Mock console.error to check for errors (optional)
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    renderHeader();

    // Ensure no errors were logged
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});

describe("renderMap", () => {
  beforeEach(() => {
    // Reset the DOM before each test
    document.body.innerHTML = `
      <div id="contact-info" style="width: 300px; height: 200px;"></div>
      <div id="map"></div>
    `;
  });

  test("sets map width and height to match contact-info dimensions", () => {
    renderMap();

    const map = document.querySelector("#map");
    expect(map?.style.width).toBe("300px");
    expect(map?.style.height).toBe("200px");
  });

  test("does nothing if #map does not exist", () => {
    // Remove the map from the DOM
    document.body.innerHTML = `
      <div id="contact-info"></div>
    `;

    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    renderMap();

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test("does nothing if #contact-info does not exist", () => {
    // Remove the contact-info from the DOM
    document.body.innerHTML = `
      <div id="map"></div>
    `;

    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    renderMap();

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test("does nothing if neither #map nor #contact-info exists", () => {
    // Clear the DOM
    document.body.innerHTML = "";

    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    renderMap();

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test("updates map dimensions if contact-info dimensions change", () => {
    // Initial render
    renderMap();
    let map = document.querySelector("#map");
    expect(map?.style.width).toBe("300px");
    expect(map?.style.height).toBe("200px");

    // Update contact-info dimensions
    const contactInfo = document.querySelector("#contact-info");
    contactInfo.style.width = "500px";
    contactInfo.style.height = "400px";

    // Re-render
    renderMap();
    map = document.querySelector("#map");
    expect(map?.style.width).toBe("500px");
    expect(map?.style.height).toBe("400px");
  });
});
