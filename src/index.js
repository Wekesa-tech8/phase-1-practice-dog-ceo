document.addEventListener('DOMContentLoaded', () => {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById('dog-image-container');
    const breedList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      });
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = data.message;
        for (const breed in breeds) {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);

          li.addEventListener('click', () => {
            li.style.color = 'blue'; 
          });
        }
      });
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const allBreeds = breedList.getElementsByTagName('li');
  
      for (let i = 0; i < allBreeds.length; i++) {
        const breed = allBreeds[i];
        if (selectedLetter === 'all' || breed.textContent.startsWith(selectedLetter)) {
          breed.style.display = '';
        } else {
          breed.style.display = 'none';
        }
      }
    });
  });
