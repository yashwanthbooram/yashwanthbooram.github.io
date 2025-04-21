document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.createElement('button');
  toggleSwitch.innerText = 'Toggle Mode';
  toggleSwitch.classList.add('toggle-btn');
  
  document.body.appendChild(toggleSwitch);

  // Check the saved theme preference in localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.navbar').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
  }

  // Toggle theme when the button is clicked
  toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    // Save the theme preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
  });
});
