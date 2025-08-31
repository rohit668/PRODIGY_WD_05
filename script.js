async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  try {
    // Free API without key
    const response = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await response.json();

    const area = data.nearest_area[0].areaName[0].value;
    const country = data.nearest_area[0].country[0].value;
    const tempC = data.current_condition[0].temp_C;
    const weather = data.current_condition[0].weatherDesc[0].value;

    resultDiv.innerHTML = `
      <h2>${area}, ${country}</h2>
      <p>🌡 Temperature: ${tempC}°C</p>
      <p>🌤 Condition: ${weather}</p>
    `;
  } catch (error) {
    console.error("Error fetching data:", error);
    resultDiv.innerHTML = "❌ Could not fetch weather data.";
  }
}
