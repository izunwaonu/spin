// script.js
let isSpinning = false;

function spin() {
    if (isSpinning) return; // Prevent multiple spins at the same time
    isSpinning = true;

    const spinner = document.getElementById("spinner");
    const resultText = document.getElementById("resultText");
    const resultImage = document.getElementById("resultImage");
    const result = document.getElementById("result");
    const spinSound = document.getElementById("spinSound");
    const popSound = document.getElementById("popSound");

    // Hide the result display initially
    result.style.display = "none";

    // Play the spin sound
    spinSound.play();

    // Random angle for the spin
    const randomAngle = Math.floor(Math.random() * 360) + 3600; // Ensures at least 10 full spins
    spinner.style.transform = `rotate(${randomAngle}deg)`;

    // Delay before showing the result
    setTimeout(() => {
        const selectedIndex = Math.floor(((randomAngle % 360) / 45)); // 8 segments, 45 degrees each
        const segments = [
            { name: "Kitchen", image: "kitchen.png" },
            { name: "Living Room", image: "living-room.png" },
            { name: "Bathroom", image: "bathroom.png" },
            { name: "Bedroom", image: "bedroom.png" },
            { name: "Mom", image: "mom.png" },
            { name: "Dad", image: "dad.png" },
            { name: "Grandma", image: "grandma.png" },
            { name: "Grandpa", image: "grandpa.png" }
        ];

        // Show result with full image and name
        resultText.textContent = `It's a ${segments[selectedIndex].name}!`;
        resultImage.src = segments[selectedIndex].image;
        result.style.display = "block";

        // Play pop sound
        popSound.play();

        // Allow spin again
        isSpinning = false;
    }, 3000); // Same as the CSS transition time
}
