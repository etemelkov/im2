console.log('hi scpript.js');
const container = document.querySelector('#neverhavei-i-ever');

let api_url = 'https://api.truthordarebot.xyz/api/nhie';

async function fetchData (url) {
try {
const response = await fetch(url);
return await response.json();
} catch (e) {
console.error(e);
return [];
}
}
//click auf button
// api_url += "?rating=xy";

 // auch für jeden button drin
// Modus aus URL holen (z. B. "warmup", "tea", "hot")
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get("mode") || "warmup"; // fallback falls nichts drinsteht

// API je nach Modus bestimmen
const apiUrls = {
  warmup: "https://api.truthordarebot.xyz/api/nhie?rating=pg",
  tea: "https://api.truthordarebot.xyz/api/nhie?rating=pg13",
  hot: "https://api.truthordarebot.xyz/api/nhie?rating=r"
};

const apiUrl = apiUrls[mode];

// Funktion zum Abrufen und Anzeigen einer neuen Frage
async function loadQuestion() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    document.getElementById("question").innerText = data.question;
  } catch (error) {
    document.getElementById("question").innerText = "Fehler beim Laden der Frage 😢";
    console.error(error);
  }
}

// Variables to track mode and scores
let answeredCount = 0;
let haveCount = 0;

// Function to handle answers
function handleAnswer(answer) {
  answeredCount++;
  if (answer === "have") {
    haveCount++;
  }

  // If 10 questions are answered, calculate the score and redirect
  if (answeredCount === 10) {
    const score = Math.round((haveCount / answeredCount) * 100); // Calculate percentage
    localStorage.setItem("score", score); // Store score in localStorage
    localStorage.setItem("mode", mode); // Store mode in localStorage
    window.location.href = "show_results.html"; // Redirect to results page
  } else {
    loadQuestion(); // Load the next question
  }
}

// Beim Laden erste Frage anzeigen
loadQuestion();

// Event Listeners for buttons
document.getElementById("have").addEventListener("click", () => handleAnswer("have"));
document.getElementById("havent").addEventListener("click", () => handleAnswer("havent"));









