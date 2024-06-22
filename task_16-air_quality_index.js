// Write code below 💖

const airQuality = ["Good", "Moderate", "Unhealthy for Sensitive Groups", "Unhealthy", "Very Unhealthy", "Hazardous"];
const airQualityIndex = 42;
const aqiText = "Air Quality Index: ";

if (airQualityIndex >= 0 && airQualityIndex <= 50) {
    console.log(`${aqiText} ${airQuality[0]}`);
} else if (airQualityIndex >= 51 && airQualityIndex <= 100) {
    console.log(`${aqiText} ${airQuality[1]}`);
} else if (airQualityIndex >= 101 && airQualityIndex <= 150) {
    console.log(`${aqiText} ${airQuality[2]}`);
} else if (airQualityIndex >= 151 && airQualityIndex <= 200) {
    console.log(`${aqiText} ${airQuality[3]}`);
} else if (airQualityIndex >= 201 && airQualityIndex <= 300) {
    console.log(`${aqiText} ${airQuality[4]}`);
} else {
    console.log(`${aqiText} ${airQuality[5]}`);
}