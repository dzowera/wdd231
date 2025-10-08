const hamButton = document.querySelector('#ham-menu button');

const hiddenNav = document.querySelector('#hidden-nav');

hamButton.addEventListener('click', () => {
      // Toggle the menu display
      if (hiddenNav.style.display === 'block') {
        hiddenNav.style.display = 'none';
        hamButton.textContent = '☰'; // switch back to hamburger
      } else {
        hiddenNav.style.display = 'block';
        hamButton.textContent = '✖'; // change to X
      }
});