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
    }
  }