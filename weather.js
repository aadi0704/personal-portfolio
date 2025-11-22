// Replace with your actual OpenWeatherMap API key:
const apiKey = "4730af4f419bcedd73494feefdd92512";

// Test weather data for Hyderabad, India
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    console.log("✅ Fetch Successful!");
    console.log("Weather data:", data);
  })
  .catch(error => {
    console.error("❌ Fetch failed:", error);
  });
