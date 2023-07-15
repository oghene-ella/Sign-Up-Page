// On page load, check if there's a stored first name and display it in the greeting element
window.addEventListener('DOMContentLoaded', () => {
    const firstName = localStorage.getItem('userName');
    if (firstName) {
      const greetingElement = document.getElementById('greeting');
      greetingElement.textContent = `Hi ${firstName}`;
    }
  });
  console.log(window.location.href)