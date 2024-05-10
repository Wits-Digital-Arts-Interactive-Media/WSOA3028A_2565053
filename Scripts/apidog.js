// Function to fetch and display a random dog image
async function fetchAndDisplayRandomDogImage() {
  try {
    const imageUrl = await fetchRandomDogImage(); // Call the fetchRandomDogImage function
    const dogImageElement = document.getElementById('dogImage');
    dogImageElement.src = imageUrl; // Set the src attribute of the img element to the fetched image URL
  } catch (error) {
    console.error('Error fetching and displaying random dog image:', error);
  }
}

// Definition of the fetchRandomDogImage function
async function fetchRandomDogImage() {
  try {
    const response = await fetch('https://random.dog/woof.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error fetching random dog image:', error);
    throw error; // Re-throw the error to be caught by the calling function
  }
}