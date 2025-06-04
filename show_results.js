   console.log("Results page loaded");
   // Retrieve mode and score from localStorage
   const mode = localStorage.getItem("mode");
   const score = localStorage.getItem("score");

   // Elements to update
   const resultText = document.getElementById("result-text");
   const resultImage = document.getElementById("result-image");
   const diagramFill = document.querySelector(".diagram-fill");
   const diagramOuter = document.querySelector(".diagram-outer"); // Assuming this is the container for the diagram

   // Update text and image based on mode
   if (mode === "warmup") {
     resultText.innerText = `${score}% WARMED-UP`;
     resultImage.src = "img/Arm_pink.png";
   } else if (mode === "tea") {
     resultText.innerText = `${score}% A TEA-SPILLER`;
     resultImage.src = "img/Tea_pink.png";
   } else if (mode === "hot") {
     resultText.innerText = `${score}% HOT`;
     resultImage.src = "img/chilli_pink.png";
   }

   // Check if score is 0
   if (score === "0") {
     diagramOuter.style.display = "none"; // Hide the diagram container
   } else {
     // Animate the diagram filling
     setTimeout(() => {
       diagramFill.style.height = `${score}%`; // Set the height to the score percentage
     }, 100); // Add a slight delay for the animation to be noticeable
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

   // Event Listeners for buttons
   document.getElementById("have").addEventListener("click", () => handleAnswer("have"));
   document.getElementById("havent").addEventListener("click", () => handleAnswer("havent"));
 