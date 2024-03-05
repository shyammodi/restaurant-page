// sample about page made by chatgpt
function loadAbout() {
    let pagecontent = document.querySelector("#content");
  
    // Introduction
    const introduction = document.createElement("p");
    introduction.textContent = "Welcome to FluffyStacks Pancake House, where we're passionate about crafting delicious pancakes and providing exceptional customer experiences.";
  
    // Our Story
    const ourStory = document.createElement("p");
    ourStory.textContent = "Founded with a love for pancakes, FluffyStacks Pancake House has been serving up delightful stacks since [year]. From our humble beginnings to becoming a beloved pancake destination, we're committed to spreading joy through our fluffy creations.";
  
    // Our Mission
    const mission = document.createElement("p");
    mission.textContent = "At FluffyStacks Pancake House, our mission is simple: to deliver delicious pancakes and memorable experiences to every customer who walks through our doors.";
  
    // Our Team
    const team = document.createElement("p");
    team.textContent = "Meet the dedicated team behind FluffyStacks Pancake House, each passionate about creating the perfect pancake and providing warm hospitality to our guests.";
  
    // Quality Assurance
    const quality = document.createElement("p");
    quality.textContent = "We take pride in using only the finest ingredients to ensure every pancake is fresh, flavorful, and utterly delicious.";
  
    // Community Engagement
    const community = document.createElement("p");
    community.textContent = "As part of our commitment to our community, we're actively involved in local initiatives and partnerships.";
  
    // Environmental Responsibility
    const environment = document.createElement("p");
    environment.textContent = "We're dedicated to reducing our environmental footprint through eco-friendly practices and sustainable initiatives.";
  
    // Contact Information
    const contact = document.createElement("p");
    contact.textContent = "For inquiries, reservations, or feedback, please contact us at [email/phone].";
  
    // Append elements to container
    pagecontent.appendChild(introduction);
    pagecontent.appendChild(ourStory);
    pagecontent.appendChild(mission);
    pagecontent.appendChild(team);
    pagecontent.appendChild(quality);
    pagecontent.appendChild(community);
    pagecontent.appendChild(environment);
    pagecontent.appendChild(contact);
  }
  
  export default loadAbout;