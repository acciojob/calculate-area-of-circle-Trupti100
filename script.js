// Prompt the user to enter the radius
const radiusInput = prompt("Enter the radius of the circle:");

// Parse the user's input as a floating-point number
const radius = parseFloat(radiusInput);

// Check if the input is a positive number
if (!isNaN(radius) && radius > 0) {
  // Calculate the area of the circle
  const area = Math.PI * Math.pow(radius, 2);

  // Round off the result to two decimal places
  const roundedArea = area.toFixed(2);

  // Display the result to the user
  alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
} else {
  alert("Invalid input. Please enter a positive number for the radius.");
}

