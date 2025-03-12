document.addEventListener('DOMContentLoaded', function () {
  const navbarElements = document.getElementsByClassName('navbar');
  if (navbarElements.length > 0) {
    // Use an absolute path from the root of the site
    fetch('navbar.html')  // This fetches navbar.html from the root folder of your website
      .then(response => response.text())
      .then(data => {
        // Insert the navbar content into each element with the 'navbar' class
        Array.from(navbarElements).forEach(navbar => {
          navbar.innerHTML = data;
        });
      })
      .catch(error => {
        console.error('Error loading navbar:', error);
      });
  } else {
    console.error('Navbar element with class "navbar" not found');
  }
});
