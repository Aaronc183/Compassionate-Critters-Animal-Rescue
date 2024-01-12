// JavaScript functionality for interactive elements
// You can add more JavaScript functionality as needed

// Adoption data
const adoptionData = [
    { name: 'Fluffy', species: 'Cat', description: 'A playful and friendly cat.', imageUrl: 'fluffy.jpg' },
    { name: 'Buddy', species: 'Dog', description: 'An energetic and loving dog.', imageUrl: 'buddy.jpg' },
    { name: 'Rover', species: 'Dog', description: 'An energetic and loving dog.', imageUrl: 'rover.jpg' },

  ];
  
  // Function to display animal profiles
  function displayAdoptionProfiles() {
    const adoptionSection = document.getElementById('adoption');

    adoptionData.forEach((animal, index) => {
      const profile = document.createElement('div');
      profile.classList.add('animal-profile');
  
      const image = document.createElement('img');
      image.src = animal.imageUrl;
      image.alt = animal.name;
      profile.appendChild(image);
  
      const name = document.createElement('h3');
      name.textContent = animal.name;
      profile.appendChild(name);
  
      const species = document.createElement('p');
      species.textContent = `Species: ${animal.species}`;
      profile.appendChild(species);
  
      const description = document.createElement('p');
      description.textContent = animal.description;
      profile.appendChild(description);
  
      const adoptButton = document.createElement('button');
      adoptButton.textContent = 'Adopt';
      adoptButton.addEventListener('click', () => {
        // Customize the action upon clicking the adopt button
        alert(`You've selected ${animal.name} for adoption!`);
        // You can implement further actions here, such as a form or redirection.

        



        
      });
      profile.appendChild(adoptButton);
  
      adoptionSection.appendChild(profile);
    });

    



  }

  // Function to add new animal profile
function addAnimal(event) {
    event.preventDefault(); // Prevent form submission
  
    const form = document.getElementById('animalForm');
    const name = form.elements['name'].value;
    const species = form.elements['species'].value;
    const description = form.elements['description'].value;
    const imageUrl = form.elements['image'].value;
  
    const adoptionSection = document.getElementById('adoption');
    const profile = document.createElement('div');
    profile.classList.add('animal-profile');
  
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = name;
    profile.appendChild(image);
  
    const animalName = document.createElement('h3');
    animalName.textContent = name;
    profile.appendChild(animalName);
  
    const animalSpecies = document.createElement('p');
    animalSpecies.textContent = `Species: ${species}`;
    profile.appendChild(animalSpecies);
  
    const animalDescription = document.createElement('p');
    animalDescription.textContent = description;
    profile.appendChild(animalDescription);
  
    const adoptButton = document.createElement('button');
    adoptButton.textContent = 'Adopt';
    adoptButton.addEventListener('click', () => {
      // Customize the action upon clicking the adopt button
      alert(`You've selected ${name} for adoption!`);
      // You can implement further actions here, such as a form or redirection.
    });
    profile.appendChild(adoptButton);
  
    adoptionSection.appendChild(profile);
  
    // Reset form fields after adding the animal profile
    form.reset();
  }

  
  
  // Event listener for form submission
  document.getElementById('animalForm').addEventListener('submit', addAnimal);
  
  
  // Run functions on page load
  window.onload = function() {
    displayAdoptionProfiles();
    // Add more initialization functions here if needed
  };



  // Sample event data
const eventData = [
  { title: 'Pet Adoption Fair', date: '11-04-2024', location: 'Local Park' },
  { title: 'Fundraising Gala', date: '16-04-2024', location: 'Community Center' },
  // Add more event objects as needed
];

// Function to display events
function displayEvents() {
  const eventsSection = document.getElementById('events');
  const eventList = document.getElementById('eventList');

  eventData.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');

    const title = document.createElement('h3');
    title.textContent = event.title;
    eventItem.appendChild(title);

    const date = document.createElement('p');
    date.textContent = `Date: ${event.date}`;
    eventItem.appendChild(date);

    const location = document.createElement('p');
    location.textContent = `Location: ${event.location}`;
    eventItem.appendChild(location);

    eventList.appendChild(eventItem);
  });
}

// Function to add a new event
function addEvent(event) {
  event.preventDefault(); // Prevent form submission

  const form = document.getElementById('eventForm');
  const title = form.elements['title'].value;
  const date = form.elements['date'].value;
  const location = form.elements['location'].value;

  eventData.push({ title, date, location }); // Add the new event to the array

  // Clear existing events and display the updated list
  const eventList = document.getElementById('eventList');
  eventList.innerHTML = '';
  displayEvents();

  // Reset form fields after adding the event
  form.reset();
}

// Event listener for event form submission
document.getElementById('eventForm').addEventListener('submit', addEvent);

// Run functions on page load
window.onload = function() {
  displayEvents();
  displayAdoptionProfiles();
  // Add more initialization functions here if needed
};

// Sample news data
const newsData = [
  { title: 'New Adoption Success Story', content: 'We are thrilled to share the story of a rescued animal finding its forever home. Read more...' },
  { title: 'Upcoming Fundraiser Event', content: 'Join us for our annual fundraising event to support the well-being of our critters. Details inside...' },
  // Add more news objects as needed
];

// Function to display news
function displayNews() {
  const newsSection = document.getElementById('news');
  const newsList = document.getElementById('newsList');

  newsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const newsTitle = document.createElement('h3');
    newsTitle.textContent = news.title;
    newsItem.appendChild(newsTitle);

    const newsContent = document.createElement('p');
    newsContent.textContent = news.content;
    newsItem.appendChild(newsContent);

    newsList.appendChild(newsItem);
  });
}

// Function to add a new news item
function addNews(event) {
  event.preventDefault(); // Prevent form submission

  const form = document.getElementById('newsForm');
  const newsTitle = form.elements['newsTitle'].value;
  const newsContent = form.elements['newsContent'].value;

  newsData.push({ title: newsTitle, content: newsContent }); // Add the new news item to the array

  // Clear existing news and display the updated list
  const newsList = document.getElementById('newsList');
  newsList.innerHTML = '';
  displayNews();

  // Reset form fields after adding the news item
  form.reset();
}

// Event listener for news form submission
document.getElementById('newsForm').addEventListener('submit', addNews);

// Run functions on page load
window.onload = function () {
  displayNews();
  displayAdoptionProfiles();
  displayEvents();
  // Add more initialization functions here if needed
};



  
  